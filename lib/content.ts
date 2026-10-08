export type Accent = "terra" | "marigold" | "moss" | "plum";

export type ContentItem = {
  title: string;
  href: string;
  image?: string;
  meta?: string;
  year?: string;
  description?: string;
};

export type ContentGroup = {
  label: string;
  items: ContentItem[];
};

export const contact = {
  email: "rizel.bobbsemple137@gmail.com",
  phoneDisplay: "857-261-1633",
  phoneHref: "tel:+18572611633",
  siteLabel: "blackgirlbytes.dev",
  siteHref: "https://www.blackgirlbytes.dev",
  githubLabel: "github.com/blackgirlbytes",
  githubHref: "https://github.com/blackgirlbytes",
};

export const navLinks = [
  { href: "#work", label: "Work" },
];

export const heroStats = [
  "15 published articles",
  "GitHub Universe keynote speaker",
  "O'Reilly course instructor",
  "153+ BlackRel community members",
  "26 talks, podcasts & streams",
];

const GOOSE_BLOG = "Block · goose blog";

// Display order is intentional, so posts are not grouped by publication.
const writingInOrder: (ContentItem & { source: string })[] = [
  { source: "LinkedIn", title: "Welcome to Glass Town", href: "https://lnkd.in/p/g84cj5RW" },
  {
    source: "LinkedIn",
    title: "Jev Might Save Your Relationship",
    href: "https://www.linkedin.com/pulse/jev-might-save-your-relationship-rizel-scarlett-cbx2c",
  },
  {
    source: "Entire blog",
    title: "The Entire CLI: How It Works And Where It's Headed",
    href: "https://entire.io/blog/the-entire-cli-how-it-works-and-where-its-headed",
  },
  {
    source: GOOSE_BLOG,
    title: "5 Tips for Building MCP Apps That Work",
    href: "https://goose-docs.ai/blog/2026/01/30/5-tips-building-mcp-apps/",
    year: "2026",
  },
  {
    source: GOOSE_BLOG,
    title: "Gas Town Explained: How to Use Goosetown for Parallel Agentic Engineering",
    href: "https://goose-docs.ai/blog/2026/02/19/gastown-explained-goosetown/",
    year: "2026",
  },
  {
    source: GOOSE_BLOG,
    title: "How I Used RPI to Build an OpenClaw Alternative",
    href: "https://goose-docs.ai/blog/2026/02/06/rpi-openclaw-alternative/",
    year: "2026",
  },
  {
    source: GOOSE_BLOG,
    title: "How We Use goose to Maintain goose",
    href: "https://goose-docs.ai/blog/2025/12/28/goose-maintains-goose/",
    year: "2025",
  },
  {
    source: GOOSE_BLOG,
    title: "8 Things You Didn't Know About Code Mode",
    href: "https://goose-docs.ai/blog/2026/02/06/8-things-you-didnt-know-about-code-mode/",
    year: "2026",
  },
  {
    source: "dev.to",
    title: "A beginner's guide to prompt engineering with GitHub Copilot",
    href: "https://dev.to/github/a-beginners-guide-to-prompt-engineering-with-github-copilot-3ibp",
  },
  {
    source: "GitHub Blog",
    title: "8 things you didn't know you could do with GitHub Copilot",
    href: "https://github.blog/2022-09-14-8-things-you-didnt-know-you-could-do-with-github-copilot/",
    year: "2022",
  },
  {
    source: "GitHub Blog",
    title: "How to use GitHub Copilot: Prompts, tips, and use cases",
    href: "https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/",
    year: "2023",
  },
  {
    source: "dev.to",
    title: "How to send a tweet with Copilot",
    href: "https://dev.to/github/how-to-send-a-tweet-with-github-copilot-4ih7",
  },
  {
    source: "dev.to",
    title: "How do I resolve merge conflicts?",
    href: "https://dev.to/github/how-do-i-resolve-merge-conflicts-5438",
  },
  {
    source: "GitHub Blog",
    title: "A beginner's guide to CI/CD with GitHub Actions",
    href: "https://github.blog/2022-06-03-a-beginners-guide-to-ci-cd-and-automation-on-github/",
    year: "2022",
  },
  {
    source: "dev.to",
    title: "My Predictions for MCP and AI-Assisted Coding",
    href: "https://dev.to/blackgirlbytes/my-predictions-for-mcp-and-ai-assisted-coding-in-2026-16bm",
    year: "2026",
  },
];

export const writing: ContentGroup[] = writingInOrder.map(({ source, ...item }) => ({ label: source, items: [item] }));

export const speaking: ContentGroup[] = [
  {
    label: "Conference talks & courses",
    items: [
      {
        title: "How to Vibe Code Responsibly with a Little Help from MCPs",
        href: "https://www.youtube.com/watch?v=PvdptUZ3XeU",
        meta: "Conference talk",
      },
      {
        title: "Rizel's Segment of the GitHub Universe Keynote 2022",
        href: "https://youtu.be/rJdlmpJ51ik",
        meta: "GitHub Universe keynote",
        year: "2022",
      },
      {
        title: "Level Up with Copilot",
        href: "https://youtu.be/inr1fFxvFAw",
        meta: "Conference talk",
      },
      {
        title: "O'Reilly Course on GitHub Copilot",
        href: "https://www.oreilly.com/live-events/level-up-with-github-copilot/0636920090759/0636920090758/",
        meta: "O'Reilly live course",
      },
      {
        title: "The Time Traveler's Playbook for Coding with AI",
        href: "https://www.youtube.com/watch?v=JpBdvIVlSNM",
        meta: "Conference talk",
      },
    ],
  },
  {
    label: "Videos",
    items: [
      {
        title: "What Ralph Wiggum Loop Really Is",
        href: "https://www.youtube.com/watch?v=IS_naHhVeOo",
        meta: "Video",
      },
      {
        title: "Why Your MCP Client Needs a Sandbox",
        href: "https://www.youtube.com/watch?v=pGce9T4E5Yw",
        meta: "Video",
      },
      {
        title: "How to Enable Entire in Your Repo",
        href: "https://www.youtube.com/watch?v=oCtREIM95Rk",
        meta: "Video",
      },
    ],
  },
];

export const openSource: ContentItem[] = [
  {
    title: "Fix MCP elicitation deadlock and improve UX",
    href: "https://github.com/block/goose/pull/6650",
    meta: "block/goose · PR #6650",
    description:
      "Debugged and resolved a deadlock in MCP elicitation handling, improving reliability for agent–user interactions.",
  },
  {
    title: "Add MessageContent::Image support for Google provider",
    href: "https://github.com/block/goose/pull/6986",
    meta: "block/goose · PR #6986",
    description:
      "Extended the Google provider to handle image content in user messages, enabling multimodal workflows.",
  },
  {
    title: "Enable MCP UI to send prompt messages on element click",
    href: "https://github.com/block/goose/pull/6207",
    meta: "block/goose · PR #6207",
    description:
      "Added interactive prompt triggering from MCP UI elements, improving the developer experience of MCP apps.",
  },
  {
    title: "Fix tool filtering in Ollama streaming for chat mode",
    href: "https://github.com/block/goose/pull/6118",
    meta: "block/goose · PR #6118",
    description:
      "Resolved a tool-filtering bug when Ollama chat mode is enabled, ensuring correct tool availability.",
  },
  {
    title: "Add task completion notification for desktop app",
    href: "https://github.com/block/goose/pull/6340",
    meta: "block/goose · PR #6340",
    description: "Implemented user-facing notifications for task completion in the Goose Desktop UI.",
  },
  {
    title: "Add copy as markdown button to documentation",
    href: "https://github.com/block/goose/pull/5158",
    meta: "block/goose · PR #5158",
    description:
      "Built custom markdown conversion handling for Card components and video embeds, improving the docs experience.",
  },
  {
    title: "Maintainers App",
    href: "http://maintainers.github.com",
    meta: "github/devrel · Internal tool",
    description:
      "Built an internal tool for GitHub's DevRel team that automated the end-to-end workflow for developers applying to join the Maintainers Community, replacing manual review processes.",
  },
];

export const podcasts: ContentItem[] = [
  {
    title: "GitHub Copilot",
    href: "https://podrocket.logrocket.com/github-copilot",
    meta: "PodRocket",
  },
  {
    title: "GitHub Actions",
    href: "https://shoptalkshow.com/521/",
    meta: "ShopTalk Show",
  },
  {
    title: "Level up with Open Source",
    href: "https://www.youtube.com/watch?v=_KpYKi83Frk",
    meta: "Secret Sauce",
  },
  {
    title: "Learn to Advocate for Yourself",
    href: "https://scrimba.com/podcast/learn-to-advocate-for-yourself-with-github-developer-advocate-rizel-scarlett/",
    meta: "Scrimba",
  },
  {
    title: "DevRel Deep Dive: Measuring Impact & Where Your Devs Should Be",
    href: "https://open.spotify.com/episode/7IPfcXKyjVTi7cJgGYFYiK",
    meta: "Spotlight",
  },
  {
    title: "Let's Chat About AI",
    href: "https://www.communitypulse.io/76-lets-chat-about-ai",
    meta: "Community Pulse",
  },
];

export const streams: ContentGroup[] = [
  {
    label: "Hosted at Block",
    items: [
      {
        title: "Run a Ralph Wiggum Loop with goose",
        href: "https://www.youtube.com/watch?v=BSLreyGwgWo",
      },
      {
        title: "Intro to beads with goose",
        href: "https://www.youtube.com/watch?v=Dsbd9D7Leyo",
      },
      {
        title: "Welcome to goosetown",
        href: "https://www.youtube.com/watch?v=H2hJjNmvEEA",
      },
      {
        title: "Building the Social Internet with Bluesky's AT Protocol",
        href: "https://www.youtube.com/watch?v=D5WVK7KfTAk",
      },
    ],
  },
  {
    label: "Hosted at GitHub",
    items: [
      {
        title: "The Web Components Framework",
        href: "https://www.youtube.com/live/rD07m-uAGaE",
        meta: "with Zach Leatherman",
      },
      {
        title: "What's new in Astro 2.0?",
        href: "https://www.youtube.com/live/NR2msmLYV7g",
        meta: "with Nate Moore",
      },
      {
        title: "Optimizing Your Development Workflow with AI",
        href: "https://www.youtube.com/live/3VCPqik3QmE",
      },
      {
        title: "The Data Enthusiast's Toolkit",
        href: "https://www.youtube.com/live/zI43eaPc59Q",
        meta: "with Simon Willison",
      },
      {
        title: "The Fullstack Angular Meta Framework",
        href: "https://www.youtube.com/live/7qmNaRTzi88",
        meta: "with Brandon Roberts",
      },
      {
        title: "From Contributor to Maintainer with Nuxt.js",
        href: "https://www.youtube.com/live/r5eG28vxqP0",
      },
      {
        title: "Maintaining Open Source Projects in College",
        href: "https://www.youtube.com/live/jcgqGMIxy-E",
      },
      {
        title: "Your Open Source Alternative for Twilio",
        href: "https://youtu.be/M1pka7At1Uw",
      },
    ],
  },
];

export const thoughtLeadership: ContentItem[] = [
  {
    title: "How to Lead DevRel in the AI Boom: Stop Playing It Safe",
    href: "https://www.linkedin.com/pulse/jev-might-save-your-relationship-rizel-scarlett-cbx2c",
    meta: "LinkedIn",
  },
  {
    title: "Developer Relations Is an All-Company Effort",
    href: "https://dev.to/blackgirlbytes/developer-relations-is-an-all-company-effort-4onm",
    meta: "dev.to",
  },
  {
    title: "How to Learn in Public",
    href: "https://dev.to/blackgirlbytes/how-to-learn-in-public-1coh",
    meta: "dev.to",
  },
  {
    title: "Should We Hire Junior Developer Advocates?",
    href: "https://dev.to/blackgirlbytes/should-we-hire-junior-developer-advocates-13m2",
    meta: "dev.to",
  },
  {
    title: "The Hard Parts of Developer Advocacy for Me",
    href: "https://dev.to/blackgirlbytes/the-hard-parts-of-developer-advocacy-for-me-530h",
    meta: "dev.to",
  },
  {
    title: "How to Speak at Conferences When You're Scared of Public Speaking",
    href: "https://dev.to/blackgirlbytes/how-to-speak-at-a-conference-when-youre-scared-of-public-speaking-562f",
    meta: "dev.to",
  },
];

export type WorkTab = {
  id: string;
  label: string;
  accent: Accent;
  blurb: string;
  groups: ContentGroup[];
};

const genericMeta = new Set(["Conference talk", "Video"]);

function withoutGenericMeta(groups: ContentGroup[]): ContentGroup[] {
  return groups.map((group) => ({
    ...group,
    items: group.items.map((item) => ({ ...item, meta: item.meta && !genericMeta.has(item.meta) ? item.meta : undefined })),
  }));
}

export const workTabs: WorkTab[] = [
  {
    id: "writing",
    label: "Writing",
    accent: "terra",
    blurb: "Articles for developer audiences, from beginner guides on the GitHub Blog to deep dives on MCP and agentic AI.",
    groups: writing,
  },
  {
    id: "speaking",
    label: "Talks & videos",
    accent: "marigold",
    blurb: "Conference talks, a GitHub Universe keynote, a live O'Reilly course, and short educational videos.",
    groups: withoutGenericMeta(speaking),
  },
  {
    id: "open-source",
    label: "Open source",
    accent: "moss",
    blurb: "Contributions to goose, Block's open source AI agent, plus internal tooling built at GitHub.",
    groups: [
      {
        label: "block/goose",
        items: openSource
          .filter((item) => item.href.includes("block/goose"))
          .map((item) => ({ ...item, meta: item.meta?.replace("block/goose · ", "") })),
      },
      {
        label: "GitHub DevRel",
        items: openSource
          .filter((item) => !item.href.includes("block/goose"))
          .map((item) => ({ ...item, meta: "Internal tool" })),
      },
    ],
  },
  {
    id: "podcasts",
    label: "Podcasts",
    accent: "plum",
    blurb: "Guest appearances on Copilot, GitHub Actions, open source, self-advocacy, and measuring DevRel impact.",
    groups: podcasts.map((item) => ({ label: item.meta ?? "Podcast", items: [{ ...item, meta: undefined }] })),
  },
  {
    id: "streams",
    label: "Live streams",
    accent: "terra",
    blurb: "Live streams I hosted for Block and GitHub, often with guests from across the open source ecosystem.",
    groups: streams.map((group) => ({ ...group, label: group.label.replace("Hosted at ", "") })),
  },
  {
    id: "devrel",
    label: "DevRel essays",
    accent: "marigold",
    blurb: "Essays on the strategy and human side of Developer Relations.",
    groups: [{ label: "Essay", items: thoughtLeadership }],
  },
];
