import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/llms";

export const dynamic = "force-static";

// This is a public portfolio, so search engines and AI crawlers are all welcome.
// The "*" rule allows everyone; the explicit rules document the intent for AI agents.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",
  "YouBot",
  "DuckAssistBot",
  "cohere-ai",
  "meta-externalagent",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${SITE_URL}sitemap.xml`,
  };
}
