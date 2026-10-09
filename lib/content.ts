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

const GOOSE_BLOG = "Block · goose blog";
const NEWSLETTER = "The Agent Whisperer";

// Display order is intentional, so posts are not grouped by publication.
const writingInOrder: (ContentItem & { source: string })[] = [
  { source: NEWSLETTER, title: "Welcome to Glass Town", href: "https://lnkd.in/p/g84cj5RW", year: "2026" },
  {
    source: NEWSLETTER,
    year: "2026",
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

// Further posts, newest first, after the curated list above.
const moreNewsletterPosts: [title: string, slug: string][] = [
  ["Beyond LLMs: How World Models Are Changing Generative Media", "beyond-llms-how-world-models-changing-generative-media-rizel-scarlett-nmygc"],
  ["How to Improve Playwright Test Coverage Using Agent Context", "how-improve-playwright-test-coverage-using-agent-context-scarlett-q4tyc"],
  ["How I Put My Agent in CI to Automate Release Notes", "how-i-put-my-agent-ci-automate-release-notes-rizel-scarlett-pgrwc"],
  ["Why Is Everyone Trying to Rebuild Git Hosting?", "why-everyone-trying-rebuild-github-rizel-scarlett-wx0ic"],
  ["Human Attention Is a Scarce Resource", "human-attention-scarce-resource-rizel-scarlett-wjhqc"],
];

const moreGoosePosts: [title: string, path: string][] = [
  ["WebMCP for Beginners", "2026/03/17/webmcp-for-beginners"],
  ["How I Taught My Agent My Design Taste", "2026/01/04/how-i-taught-my-agent-my-design-taste"],
  ["Code Mode Doesn't Replace MCP (Here's What It Actually Does)", "2025/12/21/code-mode-doesnt-replace-mcp"],
  ["Does Your AI Agent Need a Plan?", "2025/12/19/does-your-ai-agent-need-a-plan"],
  ["How to Stop Your AI Agent From Making Unwanted Code Changes", "2025/12/10/stop-ai-agent-unwanted-changes"],
  ["Announcing Advent of AI", "2025/11/30/announcing-advent-of-ai"],
  ["How to Successfully Migrate Your App with an AI Agent", "2025/11/17/migrate-app-with-ai-agent"],
  [
    "Intro to Agent Client Protocol (ACP): The Standard for AI Agent-Editor Integration",
    "2025/10/24/intro-to-agent-client-protocol-acp",
  ],
  ["Your First goose Experience Is On Us", "2025/08/27/get-started-for-free-with-tetrate"],
  ["The AI Skeptic's Guide to Context Windows", "2025/08/18/understanding-context-windows"],
  ["How PulseMCP Automated Their Newsletter Workflow with goose", "2025/08/13/pulse-mcp-automates-recipe"],
  ["How OpenRouter Unlocked Our Workshop Strategy", "2025/07/29/openrouter-unlocks-workshops"],
  ["Orchestrating 6 Subagents to Build a Collaborative API Playground for Kids", "2025/07/21/orchestrating-subagents"],
  ["Why I Used goose to Build a Chaotic Emotion Detection App", "2025/06/17/goose-emotion-detection-app"],
  ["How I Manage Localhost Port Conflicts With an AI Agent", "2025/05/22/manage-local-host-conflicts-with-goose"],
  ["A Recipe for Success: Cooking Up Repeatable Agentic Workflows", "2025/05/06/recipe-for-success"],
  ["11 Practical Ways I Use AI Agents Without Losing My Authenticity", "2025/04/21/practical-use-cases-of-ai"],
  ["How to Vibe Code Responsibly (with goose)", "2025/04/08/vibe-code-responsibly"],
  ["Codename goose Goes to Boston", "2025/03/21/goose-boston-meetup"],
  ["Screenshot-Driven Development", "2024/11/22/screenshot-driven-development"],
];

// Remaining dev.to posts, newest first.
const moreDevtoPosts: [title: string, path: string, year: string][] = [
  ["How to Review AI-Generated Code with Multiple AI Agents", "entire/how-to-review-ai-generated-code-with-multiple-ai-agents-gdc", "2026"],
  ["How to Enable Entire", "entire/how-to-enable-entire-4h9l", "2026"],
  ["Stateless MCP for Beginners", "blackgirlbytes/stateless-mcp-for-beginners-23dg", "2026"],
  ["A New Developer Platform for Agent-Human Collaboration", "entire/a-new-developer-platform-for-agent-human-collaboration-f1h", "2026"],
  ["How I Added Goose as an External Agent to Entire", "entire/how-i-added-goose-as-an-external-agent-to-entire-6gf", "2026"],
  ["How to Make Coding Agents Remember Past Solutions", "entire/how-to-make-coding-agents-remember-past-solutions-4a71", "2026"],
  ["The #1 Developer Skill in the Agentic Era", "entire/the-1-developer-skill-in-the-agentic-era-21d7", "2026"],
  ["Banning Agent PRs Won't Save Open Source", "entire/why-banning-agent-prs-wont-save-open-source-4822", "2026"],
  ["Your Agent Sessions Belong in Your Codebase: Nullius in Verba", "entire/your-agent-sessions-belong-in-your-codebase-nullius-in-verba-3ggd", "2026"],
  ["How to Keep Entire Checkpoints Separate from Your Code", "entire/how-to-keep-entire-checkpoints-separate-from-your-code-50a1", "2026"],
  ["Turning Agent History into Procedural Memory", "blackgirlbytes/turning-agent-history-into-procedural-memory-37f8", "2026"],
  ["I Don't Make Slides Anymore. My Agent and Entire Do It for Me.", "entire/i-dont-make-slides-anymore-my-agent-and-entire-do-it-for-me-m17", "2026"],
  ["The Worst Thing to Happen to React and Next.js: React2Shell", "blackgirlbytes/the-worst-thing-to-happen-to-react-and-nextjs-react2shell-5fdf", "2025"],
  ["How I Built an MCP App to Roast My GitHub Year in Review", "blackgirlbytes/how-i-built-an-mcp-app-to-roast-my-github-year-in-review-28gh", "2025"],
  ["How to Query a Railway SQLite Database from GitHub Actions", "blackgirlbytes/how-to-query-a-railway-sqlite-database-from-github-actions-376j", "2025"],
  ["How I Use AI to Build Frontend Apps: My Candid, Messy Process", "goose_oss/how-i-use-ai-to-build-frontend-apps-my-candid-messy-process-3ehk", "2025"],
  ["Your AI Agent isn't an Engineer", "blackgirlbytes/your-ai-agent-isnt-an-engineer-5egf", "2025"],
  ["What Text Area Popovers Taught Me About Browser APIs", "blackgirlbytes/what-text-area-popovers-taught-me-about-browser-apis-9cf", "2025"],
  ["The Average Developer is a Multitasker: A Case for Agents", "blackgirlbytes/the-average-developer-is-a-multitasker-a-case-for-agents-832", "2025"],
  ["How to Extend your AI Agent for Custom Developer Workflows", "blackgirlbytes/how-to-extend-your-ai-agent-for-custom-developer-workflows-4fld", "2024"],
  ["How My AI Dev Agent Turns Screenshots into UI Updates", "blackgirlbytes/how-my-ai-dev-agent-turns-screenshots-into-ui-updates-189p", "2024"],
  ["Beyond LLMs: My Introductory Experience with AI Agents", "blackgirlbytes/beyond-llms-my-introductory-experience-with-ai-agents-1fjb", "2024"],
  ["Should we open source AI?", "blackgirlbytes/should-we-open-source-ai-hed", "2024"],
  ["How Web5 and Bluesky are Building the Next Layer of the Web - A Comparative Analysis", "tbdevs/how-web5-and-bluesky-are-building-the-next-layer-of-the-web-a-comparative-analysis-49d", "2024"],
  ["Simplifying Cross-Platform Payments with DAPs", "tbdevs/simplifying-cross-platform-payments-with-daps-2210", "2024"],
  ["7 Unexpected Ways Verifiable Credentials are Used Today", "tbdevs/7-unexpected-ways-verifiable-credentials-are-used-today-438", "2024"],
  ["9 Things You Didn't Know About Decentralized Identifiers", "tbdevs/9-things-you-didnt-know-about-decentralized-identifiers-2eh9", "2024"],
  ["How JSON Web Tokens Power Mobile Driver's Licenses", "blackgirlbytes/how-json-web-tokens-power-mobile-drivers-licenses-31hp", "2024"],
  ["A Beginner-Friendly Illustrated Guide to Verifiable Credentials", "tbdevs/the-illustrated-beginners-guide-to-cryptographic-identity-verification-51f0", "2024"],
  ["The Future of Personal AI", "tbdevs/the-future-of-personal-ai-3gc9", "2024"],
  ["Shifting Loan Power to Borrowers", "tbdevs/shifting-loan-power-to-borrowers-2g1i", "2024"],
  ["Web5 Meets Generative AI: Reimagining the Future of Digital Identity with Netonomy", "tbdevs/web5-meets-generative-ai-reimagining-the-future-of-digital-identity-with-netonomy-53fo", "2023"],
  ["The Illusion of Data Ownership", "tbdevs/the-illusion-of-data-ownership-3nbi", "2023"],
  ["Web5: How to Query Records by Protocol Path", "tbdevs/web5-how-to-query-records-by-protocol-path-1g6h", "2023"],
  ["What's the point of Web5?", "tbdevs/whats-the-point-of-web5-2kjb", "2023"],
  ["Use Copilot Chat to Guide Your JavaScript to TypeScript Migration", "github/migrate-from-javascript-to-typescript-with-copilot-chat-2f91", "2023"],
  ["Building an AI-Powered, Decentralized App for Time Management", "github/building-an-ai-powered-decentralized-app-for-time-management-88l", "2023"],
  ["How containers promote equity in tech", "github/how-containerization-promotes-equity-in-tech-54h5", "2023"],
  ["How I'm using GitHub Copilot to learn p5.js", "github/how-im-using-github-copilot-to-learn-p5js-39gh", "2023"],
  ["Revolutionize authentication through the 1Password Hackathon", "blackgirlbytes/revolutionize-authentication-through-the-1password-hackathon-lo4", "2023"],
  ["How to build a markdown editor in two minutes (with GitHub Copilot)", "github/how-to-build-a-markdown-editor-in-two-minutes-with-github-copilot-khb", "2023"],
  ["How to set up a dev container for a Next.js/TypeScript app", "github/how-to-set-up-a-dev-container-for-a-nextjstypescript-app-2jd", "2023"],
  ["How I used dev containers to enable GitHub Codespaces for ChatGPT", "github/chatgpt-meets-github-codespaces-how-im-optimizing-chatgpt-quickstart-plugins-for-remote-development-5bc8", "2023"],
  ["How to build a rock, paper, scissors game with GitHub Copilot", "github/how-to-build-a-rock-paper-scissors-game-with-github-copilot-1flo", "2023"],
  ["Securely store environment variables with GitHub Codespaces", "github/securely-store-environment-variables-with-github-codespaces-3dgc", "2023"],
  ["Could GitHub Copilot be a valuable investment for my team?", "github/could-github-copilot-be-a-valuable-investment-for-my-team-4l9h", "2023"],
  ["Generate AI Art with GitHub Codespaces", "github/generate-ai-art-with-github-codespaces-59fc", "2023"],
  ["Share your locally hosted web app using Codespaces", "github/share-your-locally-hosted-web-app-using-codespaces-276k", "2023"],
  ["Contribute to open source without knowing how to code", "github/contribute-to-open-source-without-knowing-how-to-code-2li9", "2022"],
  ["Why are people developing inside containers?", "github/why-are-people-developing-inside-containers-38o6", "2022"],
  ["What is the difference between a message broker and a message queue?", "memphis_dev/what-is-the-difference-between-a-message-broker-and-a-message-queue-4dlf", "2022"],
  ["How to run a frontend workshop in Codespaces", "github/how-to-run-a-frontend-workshop-in-codespaces-2ede", "2022"],
  ["How to deploy an Astro site to GitHub Pages", "github/how-to-deploy-a-static-site-in-any-framework-of-your-choice-github-pages-neh", "2022"],
  ["How to host a Hugo or Next.js site on GitHub Pages", "github/how-to-host-a-static-nextjs-site-on-github-pages-4pe0", "2022"],
  ["How to host your first site for free on GitHub Pages", "github/how-to-host-your-first-site-for-free-on-github-pages-45ob", "2022"],
  ["Create a No-Touch QR Code Menu with GitHub Pages", "github/create-a-no-touch-qr-code-menu-with-github-pages-288b", "2022"],
  ["How to Thank Sponsors for Supporting Your Open Source Project", "github/how-to-thank-sponsors-for-supporting-your-open-source-project-2hc3", "2022"],
  ["How do you make folks who sponsor your open source projects feel valued?", "blackgirlbytes/how-do-you-make-folks-who-sponsor-your-open-source-projects-feel-valued-3ij7", "2022"],
  ["How to Prevent Merge Conflicts (or at least have less of them)", "github/how-to-prevent-merge-conflicts-or-at-least-have-less-of-them-109p", "2022"],
  ["How to Create a Great GitHub Sponsors Profile", "github/how-to-create-the-perfect-sponsors-profile-for-your-open-source-project-3747", "2022"],
  ["How I Built It: The Anatomy of a VS Code Extension", "github/how-i-built-it-the-anatomy-of-a-vs-code-extension-3p55", "2022"],
  ["Deploy Your First Website without Leaving Your IDE", "github/deploy-your-first-website-without-leaving-your-ide-2mpp", "2022"],
  ["Why Use GitHub Copilot And Copilot Labs: Practical Use Cases for the AI Pair Programmer", "github/why-use-github-copilot-and-copilot-labs-practical-use-cases-for-the-ai-pair-programmer-4hf4", "2022"],
  ["Use Copilot to Write and Translate a Binary Search Algorithm", "github/use-copilot-to-write-and-translate-a-binary-search-algorithm-lcm", "2022"],
  ["How to Undo Pushed Commits with Git", "github/how-to-undo-pushed-commits-with-git-2pe6", "2022"],
  ["Deploying My Probot App to a Serverless Lambda", "github/deploying-my-probot-app-to-a-serverless-lambda-352h", "2022"],
  ["Automating GitHub Org Invitations", "github/automating-org-invitations-with-github-37b9", "2022"],
  ["Programmatically Add Labels to Your Issues", "github/programmatically-add-labels-to-your-issues-50dn", "2022"],
  ["Automatically Open Issues with Code", "github/automatically-open-issues-with-code-51hb", "2022"],
  ["Developing My First GitHub App with Probot", "github/developing-my-first-github-app-with-probot-3g0p", "2022"],
  ["28 Days of GitHub: Automating and Improving Your Workflow", "github/28-days-of-github-automating-and-improving-your-workflow-4d6n", "2022"],
  ["Make your first contribution to a GitHub Action!", "github/how-to-edit-a-github-action-3j14", "2022"],
  ["How to View Build Logs for GitHub Pages", "github/visualize-github-pages-build-logs-1mc1", "2021"],
  ["Top 10 Gifts For the Developer in Your Life", "github/top-11-gifts-for-the-developer-in-your-life-893", "2021"],
  ["3 Ways to Backup Your Code (Even If You Don't Know Git)", "github/3-ways-to-backup-your-code-even-if-you-dont-know-git-1o5l", "2021"],
  ["GitHub Actions: You Can Build Reusable Workflows!", "github/github-actions-you-can-build-reusable-workflows-4gc7", "2021"],
  ["GitHub Actions: Build Your First Workflow", "github/github-actions-build-your-first-workflow-2m34", "2021"],
  ["How to Create the Perfect README for Your Open Source Project", "github/how-to-create-the-perfect-readme-for-your-open-source-project-1k69", "2021"],
  ["Jamstack Open Source Projects Looking for Contributors", "github/jamstack-open-source-projects-looking-for-contributors-2ooh", "2021"],
  ["Open Source Friday Recap: Slinkity and TinaCMS", "github/open-source-friday-recap-slinkity-and-tinacms-1h4l", "2021"],
  ["If You're Reading This, Contribute to Forem", "github/if-you-re-reading-this-contribute-to-forem-368o", "2021"],
  ["Respond Faster with Saved Replies", "github/respond-faster-with-saved-replies-37i9", "2021"],
  ["Add Fuzzy Search to Your Web App with this Open Source Tool", "github/add-fuzzy-search-to-your-web-app-with-this-open-source-tool-22d7", "2021"],
  ["Looking for an Open Source Project? Try Julia.", "github/looking-for-an-open-source-project-try-julia-1jci", "2021"],
  ["From Zero to Hero: Quick Tips to Navigating Open Source Like a Pro", "github/from-zero-to-hero-quick-tips-to-navigating-open-source-like-a-pro-4lhl", "2021"],
  ["A Faster Way to Track Down Bugs", "blackgirlbytes/a-faster-way-to-track-down-bugs-2aod", "2020"],
];

const allWriting: (ContentItem & { source: string })[] = [
  ...writingInOrder,
  ...moreNewsletterPosts.map(([title, slug]) => ({
    source: NEWSLETTER,
    title,
    href: `https://www.linkedin.com/pulse/${slug}`,
    year: "2026",
  })),
  ...moreGoosePosts.map(([title, path]) => ({
    source: GOOSE_BLOG,
    title,
    href: `https://goose-docs.ai/blog/${path}/`,
    year: path.slice(0, 4),
  })),
  ...moreDevtoPosts.map(([title, path, year]) => ({ source: "dev.to", title, href: `https://dev.to/${path}`, year })),
];

export const writing: ContentGroup[] = allWriting.map(({ source, ...item }) => ({ label: source, items: [item] }));

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
        title: "Escaping the Curse of Outdated Docs",
        href: "https://www.youtube.com/watch?v=moWFvZyd1rw",
        meta: "SquiggleConf",
        year: "2025",
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
      {
        title: "The Last Website You'll Ever Visit (in the Browser)",
        href: "https://www.youtube.com/watch?v=9PFjcoxYFic",
        meta: "G2i",
        year: "2026",
      },
      {
        title: "Level Up with Copilot at JSWORLD",
        href: "https://www.youtube.com/watch?v=RqUu03DN7iI",
        meta: "JSWORLD Conference",
        year: "2023",
      },
      {
        title: "The Missing Paper Trail for Agentic Engineering",
        href: "https://www.youtube.com/watch?v=Rgmt_99VbkA",
        meta: "AI ❤️ Monorepos Conf",
        year: "2026",
      },
      {
        title: "The Missing Paper Trail for Agentic Engineering",
        href: "https://www.youtube.com/watch?v=wwMZvX6Wkzg",
        meta: "Code Europe",
        year: "2026",
      },
      {
        title: "MCP-UI: Where Intent Becomes Interface",
        href: "https://www.youtube.com/watch?v=JXeU9oZtT-Q",
        meta: "Dallas Software Developers",
        year: "2025",
      },
      {
        title: "Objects in Mirror Are Closer Than They Appear",
        href: "https://www.youtube.com/watch?v=pV3OFuDrYww",
        meta: "Certified Fresh Events",
        year: "2025",
      },
      {
        title: "Introducing goose to OpenMetadata",
        href: "https://www.youtube.com/watch?v=VefYcp8IfzQ",
        meta: "OpenMetadata",
        year: "2025",
      },
      {
        title: "How JSON Web Tokens Define the Future of Mobile Driver's License",
        href: "https://www.youtube.com/watch?v=4lfxK00yAjQ",
        meta: "Conf42 JS",
        year: "2024",
      },
      {
        title: "Introduction to Open Source 101",
        href: "https://www.youtube.com/watch?v=ZJppHg3taRk",
        meta: "All In Open Source course",
        year: "2023",
      },
      {
        title: "Overcoming the Fear of Contributing to Open Source",
        href: "https://www.youtube.com/watch?v=8a73pJ1wTiQ",
        meta: "Upstream by Tidelift",
        year: "2022",
      },
      {
        title: "GitHub Pages Reimagined: Deploy Your First Website Without Leaving Your IDE",
        href: "https://www.youtube.com/watch?v=43cneIXFoZ0",
        meta: "Certified Fresh Events",
        year: "2022",
      },
      {
        title: "How Can My Team Support a Junior Developer Advocate?",
        href: "https://www.youtube.com/watch?v=zXg60XNzQ8A",
        meta: "DevRelX Summit",
        year: "2022",
      },
      {
        title: "Overcoming the Fear of Contributing to Open Source",
        href: "https://www.youtube.com/watch?v=o7vLz4DmrQs",
        meta: "All Things Open",
        year: "2021",
      },
      {
        title: "Teaching to Empower: How to Support Junior Engineers",
        href: "https://www.youtube.com/watch?v=oWa9Vfk7aGY",
        meta: "Women Who Code",
        year: "2021",
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
      {
        title: "How to Create Your First Checkpoint | Entire 101, Ep. 2",
        href: "https://www.youtube.com/watch?v=ehWDtXYFZ2Y",
        meta: "Video",
      },
      {
        title: "Bring Your Repos to Entire | Entire 101, Ep. 4",
        href: "https://www.youtube.com/watch?v=-l0axVoGh_w",
        meta: "Video",
      },
      {
        title: "Building Confidence Through Community",
        href: "https://www.youtube.com/watch?v=DfWhozJIc68",
        meta: "Resilient Coders",
        year: "2025",
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
    href: "https://www.youtube.com/watch?v=JFpY4dTvCPc",
    meta: "Stoplight",
    year: "2022",
  },
  {
    title: "Let's Chat About AI",
    href: "https://www.communitypulse.io/76-lets-chat-about-ai",
    meta: "Community Pulse",
  },
  {
    title: "Redesigning the SDLC for the Agentic Era",
    href: "https://www.youtube.com/watch?v=7TYVmr5qLew",
    meta: "Cloudflare · The Clanker Chronicles",
  },
  {
    title: "She Ships, Episode 11",
    href: "https://www.youtube.com/watch?v=SgZcCkXKAXc",
    meta: "torc.dev",
    year: "2026",
  },
  {
    title: "Coffee and Open Source Conversation",
    href: "https://www.youtube.com/watch?v=qgXY_n42JDk",
    meta: "Isaac Levin",
    year: "2026",
  },
  {
    title: "The Tech Commute",
    href: "https://www.youtube.com/watch?v=xlua-diSUA4",
    meta: "Jason Torres",
    year: "2026",
  },
  {
    title: "How Entire's Developer Platform Preserves Context for AI-Assisted Development",
    href: "https://www.youtube.com/watch?v=DxaV2D7S1Hg",
    meta: "This Dot Media",
    year: "2026",
  },
  {
    title: "Open Source, Advocacy, and the Power of Joy in Developer Marketing",
    href: "https://www.youtube.com/watch?v=8SfxfQSDvwc",
    meta: "Bits and Bants",
    year: "2025",
  },
  {
    title: "AI, Open Source, and Developer Safety",
    href: "https://www.youtube.com/watch?v=ZwFeeZPDRLQ",
    meta: "Galileo",
    year: "2025",
  },
  {
    title: "MCP: Hype, Security, and Real-World Use",
    href: "https://www.youtube.com/watch?v=OLcALmE7p5k",
    meta: "Two Voice Devs",
    year: "2025",
  },
  {
    title: "goose, Open Source, and the Future of Coding with AI",
    href: "https://www.youtube.com/watch?v=nMndVZEBnSM",
    meta: "Chaos Agents",
    year: "2025",
  },
  {
    title: "Block Developer Advocate Rizel Scarlett",
    href: "https://www.youtube.com/watch?v=iDKGF98ooQ0",
    meta: "Sama",
    year: "2024",
  },
  {
    title: "Coffee and Open Source Conversation",
    href: "https://www.youtube.com/watch?v=sIInQkco49I",
    meta: "Isaac Levin",
    year: "2024",
  },
  {
    title: "devrelshow, Episode 16",
    href: "https://www.youtube.com/watch?v=CrjxuX2ulQw",
    meta: "Frédéric Harper",
    year: "2024",
  },
  {
    title: "The Future of Identity with Web5 & Verifiable Credentials",
    href: "https://www.youtube.com/watch?v=f6KVCN94hYs",
    meta: "Nick Taylor",
    year: "2024",
  },
  {
    title: "Modern Fintech, DevRel, and Inclusive Communities",
    href: "https://www.youtube.com/watch?v=KFBlgsCzxbI",
    meta: "CompressedFM",
    year: "2024",
  },
  {
    title: "Equity in Open Source, the Impact of Imposter Syndrome, and More",
    href: "https://www.youtube.com/watch?v=3g45SWUWJ6g",
    meta: "All Things Open",
    year: "2024",
  },
  {
    title: "How to Own Your Digital Identity, DevRel and Skepticism, GitHub Copilot",
    href: "https://www.youtube.com/watch?v=49XrXsQx9Bs",
    meta: "Tejas Kumar",
    year: "2024",
  },
  {
    title: "Open Source and Advocacy",
    href: "https://www.youtube.com/watch?v=caYwW32lfUc",
    meta: "Certified Fresh Events",
    year: "2023",
  },
  {
    title: "Advocating for an Inclusive Future",
    href: "https://www.youtube.com/watch?v=jEpYdtF6g_8",
    meta: "The Dev Morning Show",
    year: "2022",
  },
  {
    title: "Empowering and Educating Engineers as a Developer Advocate at GitHub",
    href: "https://www.youtube.com/watch?v=lXoLMB8U7Ss",
    meta: "Sisters in Tech",
    year: "2022",
  },
  {
    title: "Cloud Engineering Summit 2021: Build Panel Discussion",
    href: "https://www.youtube.com/watch?v=uZgnf1iXi6w",
    meta: "Pulumi",
    year: "2021",
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
  {
    label: "The Great Goose Off",
    // Newest first, following the channel's Great Goose Off playlist.
    items: (
      [
        ["Speed Vibe Coding Challenge", "NmL7uGBC7gc"],
        ["AI Champions", "zvDUrM_34D0"],
        ["The Great Goose Off", "dhJjUDaIjGw"],
        ["The Tinkerers Edition", "zCcvCKsYN7o"],
        ["Non-Dev Vibe Coding Competition", "H7_u8rdv-hw"],
        ["Manager vs. Report", "tTf_LftwZ_M"],
        ["Creator Edition", "SBWYEGB0_xc"],
        ["Unscripted", "wS5-4hXcnL4"],
        ["Can Non-Developers Vibe Code?", "ElyxsIctQms"],
        ["Vibe Coding with MCPs: Non-Dev Edition", "Vyy8G3_RgKw"],
        ["A Vibe Coding Competition with MCPs, Episode 3", "vyV1nkN0_sc"],
        ["A Vibe Coding Competition with MCPs, Episode 2", "OsA3qhns7dg"],
        ["A Vibe Coding Competition with MCPs", "cLPKU53vlTI"],
      ] as const
    ).map(([title, id]) => ({ title, href: `https://www.youtube.com/watch?v=${id}` })),
  },
];

export const entireContributions: ContentItem[] = (
  [
    [1421, "2026", "Compact external agent transcripts for --full/--verbose display"],
    [1379, "2026", "Update CLI docs overview link"],
    [1093, "2026", "Copy login device code to clipboard"],
    [1191, "2026", "Gracefully skip missing Entire git hooks"],
    [1189, "2026", "Add first-time contributors guide"],
    [1038, "2026", "Fix false installer PATH conflict detection"],
    [1010, "2026", "Add sessions command reference to the docs"],
    [987, "2026", "Fix rewind/resume continuation wording across agents"],
    [816, "2026", "Add Codex mentions to documentation"],
  ] as const
).map(([number, year, title]) => ({
  title,
  href: `https://github.com/entireio/cli/pull/${number}`,
  meta: `PR #${number}`,
  year,
}));

export const thoughtLeadership: ContentItem[] = [
  {
    title: "How to Lead DevRel in the AI Boom: Stop Playing It Safe",
    href: "https://www.linkedin.com/pulse/how-lead-devrel-ai-boom-stop-playing-safe-rizel-scarlett-lnppc",
    meta: "The Agent Whisperer",
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
  {
    title: "Why Every Conference Needs a Nursing Room",
    href: "https://dev.to/blackgirlbytes/why-every-conference-needs-a-nursing-room-3g74",
    meta: "dev.to",
    year: "2025",
  },
  {
    title: "How to Choose a Conference Talk Topic",
    href: "https://dev.to/blackgirlbytes/how-to-choose-a-conference-talk-topic-c09",
    meta: "dev.to",
    year: "2025",
  },
  {
    title: "2024 Year in Review: My Greatest Achievement",
    href: "https://dev.to/blackgirlbytes/2024-year-in-review-my-greatest-achievement-5322",
    meta: "dev.to",
    year: "2025",
  },
  {
    title: "The Reality of Balancing Pregnancy in Developer Relations",
    href: "https://dev.to/blackgirlbytes/the-reality-of-balancing-pregnancy-in-developer-relations-2anp",
    meta: "dev.to",
    year: "2024",
  },
  {
    title: "My First Six Months as a Staff Developer Advocate at TBD",
    href: "https://dev.to/blackgirlbytes/my-first-six-months-as-a-staff-developer-advocate-at-tbd-4l82",
    meta: "dev.to",
    year: "2024",
  },
  {
    title: "How to Stay and Grow in Tech (especially if you're a minority)",
    href: "https://dev.to/blackgirlbytes/how-to-stay-and-grow-in-tech-especially-if-youre-a-minority-3cp7",
    meta: "dev.to",
    year: "2024",
  },
  {
    title: "How to make an impact as a developer advocate",
    href: "https://dev.to/blackgirlbytes/how-to-make-an-impact-as-a-developer-advocate-1jge",
    meta: "dev.to",
    year: "2023",
  },
  {
    title: "The Ultimate Guide to Writing Technical Blog Posts",
    href: "https://dev.to/blackgirlbytes/the-ultimate-guide-to-writing-technical-blog-posts-5464",
    meta: "dev.to",
    year: "2023",
  },
  {
    title: "Closing a chapter at GitHub",
    href: "https://dev.to/blackgirlbytes/closing-a-chapter-at-github-1k06",
    meta: "dev.to",
    year: "2023",
  },
  {
    title: "Can community solve imposter syndrome?",
    href: "https://dev.to/blackgirlbytes/can-community-solve-imposter-syndrome-53k",
    meta: "dev.to",
    year: "2022",
  },
  {
    title: "Tips to Succeed In Your First DevRel Job",
    href: "https://dev.to/blackgirlbytes/tips-to-succeed-in-your-first-devrel-job-48m7",
    meta: "dev.to",
    year: "2022",
  },
  {
    title: "How Did I Become a Developer Advocate?",
    href: "https://dev.to/blackgirlbytes/how-did-i-become-a-developer-advocate-ied",
    meta: "dev.to",
    year: "2022",
  },
  {
    title: "How to Support Early-Career Developers",
    href: "https://dev.to/blackgirlbytes/how-to-support-early-career-developers-3897",
    meta: "dev.to",
    year: "2021",
  },
  {
    title: "How to Convince Your Boss to Open Source a Project",
    href: "https://dev.to/github/how-to-convince-your-boss-to-open-source-a-project-2kb8",
    meta: "dev.to",
    year: "2021",
  },
  {
    title: "How Do You Become a Developer Advocate?",
    href: "https://dev.to/blackgirlbytes/how-did-i-become-a-developer-advocate-1n7d",
    meta: "dev.to",
    year: "2021",
  },
];

export type WorkTab = {
  id: string;
  label: string;
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
    groups: writing,
  },
  {
    id: "speaking",
    label: "Talks/videos",
    // Show the event or publisher where one is known, otherwise the kind of piece.
    groups: withoutGenericMeta(speaking).flatMap((group) =>
      group.items.map((item) => ({ label: item.meta ?? group.label, items: [{ ...item, meta: undefined }] })),
    ),
  },
  {
    id: "open-source",
    label: "Open source",
    groups: [
      {
        label: "block/goose",
        items: openSource
          .filter((item) => item.href.includes("block/goose"))
          .map((item) => ({ ...item, meta: item.meta?.replace("block/goose · ", "") })),
      },
      { label: "entireio/cli", items: entireContributions },
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
    groups: podcasts.map((item) => ({ label: item.meta ?? "Podcast", items: [{ ...item, meta: undefined }] })),
  },
  {
    id: "streams",
    label: "Live streams",
    groups: streams.map((group) => ({ ...group, label: group.label.replace("Hosted at ", "") })),
  },
  {
    id: "devrel",
    label: "Essays",
    groups: thoughtLeadership.map((item) => ({ label: item.meta ?? "Essay", items: [{ ...item, meta: undefined }] })),
  },
];
