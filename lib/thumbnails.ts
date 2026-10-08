import type { ContentItem, Highlight, WorkTab } from "@/lib/content";

const FETCH_TIMEOUT_MS = 8000;

function youtubeId(url: URL): string | null {
  if (url.hostname === "youtu.be") return url.pathname.slice(1) || null;
  if (!url.hostname.endsWith("youtube.com")) return null;
  if (url.pathname === "/watch") return url.searchParams.get("v");
  const match = url.pathname.match(/^\/(?:live|embed|shorts)\/([\w-]+)/);
  return match ? match[1] : null;
}

function knownThumbnail(href: string): string | null {
  const url = new URL(href);
  const videoId = youtubeId(url);
  // hqdefault exists for every public video; maxresdefault is missing on many older uploads.
  if (videoId) return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const pr = url.hostname === "github.com" && url.pathname.match(/^\/([^/]+)\/([^/]+)\/pull\/(\d+)/);
  if (pr) return `https://opengraph.githubassets.com/1/${pr[1]}/${pr[2]}/pull/${pr[3]}`;
  return null;
}

function metaContent(html: string, key: string): string | null {
  const patterns = [
    new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]*content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name)=["']${key}["']`, "i"),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1].replace(/&amp;/g, "&");
  }
  return null;
}

// Site-wide stand-ins that some pages publish instead of a real preview image.
const GENERIC_IMAGES = [/s0\.wp\.com\/i\/blank\.jpg/, /static\.licdn\.com\/scds\/common\//];

async function pageImage(href: string): Promise<string | null> {
  try {
    const response = await fetch(href, {
      redirect: "follow",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { "user-agent": "Mozilla/5.0 (compatible; portfolio-link-preview)" },
    });
    if (!response.ok) return null;
    const html = await response.text();
    const image = metaContent(html, "og:image") ?? metaContent(html, "twitter:image");
    if (!image) return null;
    const absolute = new URL(image, response.url).toString();
    return GENERIC_IMAGES.some((pattern) => pattern.test(absolute)) ? null : absolute;
  } catch {
    return null;
  }
}

const cache = new Map<string, Promise<string | null>>();

export function thumbnailFor(href: string): Promise<string | null> {
  let pending = cache.get(href);
  if (!pending) {
    const known = knownThumbnail(href);
    pending = known ? Promise.resolve(known) : pageImage(href);
    cache.set(href, pending);
  }
  return pending;
}

async function withImage<T extends { href: string; image?: string }>(item: T): Promise<T> {
  if (item.image) return item;
  const image = await thumbnailFor(item.href);
  return image ? { ...item, image } : item;
}

export async function withThumbnails(tabs: WorkTab[]): Promise<WorkTab[]> {
  return Promise.all(
    tabs.map(async (tab) => ({
      ...tab,
      groups: await Promise.all(
        tab.groups.map(async (group) => ({
          ...group,
          items: await Promise.all(group.items.map((item: ContentItem) => withImage(item))),
        })),
      ),
    })),
  );
}

export function highlightsWithThumbnails(items: Highlight[]): Promise<Highlight[]> {
  return Promise.all(items.map((item) => withImage(item)));
}
