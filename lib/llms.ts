import { contact, workTabs, type ContentItem, type WorkTab } from "@/lib/content";

export const SITE_URL = "https://blackgirlbytes.github.io/portfolio/";

const HIGHLIGHTS_PER_SECTION = 5;

const profile = {
  name: "Rizel Scarlett",
  tagline:
    "Head of Developer Relations at Entire. Writer, speaker, and open source contributor focused on AI coding agents, MCP, and agentic engineering.",
  summary:
    "Rizel Scarlett is Head of Developer Relations at Entire. She writes, speaks, streams, and ships open source about AI coding agents, the Model Context Protocol (MCP), and agentic engineering. Before Entire she worked in developer advocacy at Block (on the goose open source AI agent and TBD) and at GitHub (GitHub Copilot, GitHub Actions, and open source). She founded BlackRel, a community for Black Developer Relations professionals.",
  topics: [
    "Developer Relations and developer advocacy",
    "AI coding agents and agentic engineering",
    "Model Context Protocol (MCP) and MCP Apps",
    "goose, Block's open source AI agent",
    "Entire and agent session history",
    "GitHub Copilot and prompt engineering",
    "Open source contribution and maintenance",
    "Technical writing and conference speaking",
  ],
  profiles: [
    ["Portfolio", SITE_URL],
    ["GitHub", contact.githubHref],
    ["X", "https://x.com/blackgirlbytes"],
    ["Instagram", "https://instagram.com/blackgirlbytes"],
    ["dev.to", "https://dev.to/blackgirlbytes"],
    ["goose blog author page", "https://goose-docs.ai/blog/authors/rizel"],
    ["The Agent Whisperer newsletter (LinkedIn)", "https://www.linkedin.com/newsletters/the-agent-whisperer-7456853816626483200/"],
  ],
} as const;

type Entry = ContentItem & { source: string };

function entries(tab: WorkTab): Entry[] {
  return tab.groups.flatMap((group) => group.items.map((item) => ({ ...item, source: group.label })));
}

function line(entry: Entry): string {
  const details = [entry.source, entry.meta, entry.year].filter(Boolean).join(", ");
  const description = entry.description ? ` ${entry.description}` : "";
  return `- [${entry.title}](${entry.href}): ${details}.${description}`;
}

function header(): string[] {
  const counts = workTabs.map((tab) => `${entries(tab).length} ${tab.label.toLowerCase()}`).join(", ");
  return [
    `# ${profile.name}`,
    "",
    `> ${profile.tagline}`,
    "",
    profile.summary,
    "",
    `Body of work listed here: ${counts}.`,
    "",
    "## Topics",
    "",
    ...profile.topics.map((topic) => `- ${topic}`),
    "",
    "## Profiles",
    "",
    ...profile.profiles.map(([label, href]) => `- [${label}](${href})`),
  ];
}

export function llmsTxt(): string {
  const sections = workTabs.flatMap((tab) => [
    "",
    `## ${tab.label}`,
    "",
    ...entries(tab).slice(0, HIGHLIGHTS_PER_SECTION).map(line),
  ]);
  return [
    ...header(),
    ...sections,
    "",
    "## Optional",
    "",
    `- [Full list of all work](${SITE_URL}llms-full.txt): every article, talk, video, podcast, live stream, and open source contribution.`,
    "",
  ].join("\n");
}

export function llmsFullTxt(): string {
  const sections = workTabs.flatMap((tab) => {
    const all = entries(tab);
    return ["", `## ${tab.label} (${all.length})`, "", ...all.map(line)];
  });
  return [...header(), ...sections, ""].join("\n");
}
