import { ArrowUpRight } from "lucide-react";
import { highlights, type Accent } from "@/lib/content";

const chip: Record<Accent, string> = {
  terra: "border-terra/25 bg-terra-soft text-terra-deep",
  marigold: "border-marigold/25 bg-marigold-soft text-marigold-deep",
  moss: "border-moss/25 bg-moss-soft text-moss",
  plum: "border-plum/25 bg-plum-soft text-plum",
};

export function Highlights() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map((item) => (
        <li key={item.title} className="flex flex-col rounded-2xl border border-sand bg-paper p-5">
          <span
            className={`w-fit rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${chip[item.accent]}`}
          >
            {item.category}
          </span>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-start justify-between gap-2 font-serif text-xl leading-snug text-ink transition hover:text-terra-deep"
          >
            {item.title}
            <ArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 text-ink-faint transition group-hover:text-terra"
              aria-hidden
            />
          </a>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
