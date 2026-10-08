import { contact } from "@/lib/content";

const links = [
  { href: `mailto:${contact.email}`, label: "Email" },
  { href: contact.githubHref, label: "GitHub", external: true },
  { href: contact.siteHref, label: "Blog", external: true },
];

const intro = "Developer relations for AI dev tools. GitHub, Block, and now Entire.";

// A menu bar along the top of the "screen" holds the intro, so the work window starts right below it.
export function Hero() {
  return (
    <header className="z-50 border-b border-line bg-window/70 backdrop-blur-md sm:sticky sm:top-0">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 sm:h-10 sm:flex-nowrap sm:py-0">
        <p className="flex min-w-0 items-baseline gap-3">
          <span className="whitespace-nowrap text-[15px] font-bold">Rizel Scarlett</span>
          <span className="hidden truncate text-[13px] text-ink-soft md:inline">{intro}</span>
        </p>
        <ul className="flex gap-1 text-[13px]">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block rounded px-2 py-1 hover:bg-[#8fb8ff] hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="w-full text-[13px] text-ink-soft md:hidden">{intro}</p>
      </div>
    </header>
  );
}
