import { ArrowUpRight } from "lucide-react";
import { Thumbnail } from "@/components/Thumbnail";
import type { Accent, Highlight } from "@/lib/content";

const chip: Record<Accent, string> = {
  terra: "border-terra/25 bg-terra-soft text-terra-deep",
  marigold: "border-marigold/25 bg-marigold-soft text-marigold-deep",
  moss: "border-moss/25 bg-moss-soft text-moss",
  plum: "border-plum/25 bg-plum-soft text-plum",
};

export function Highlights({ items }: { items: Highlight[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand bg-paper transition hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-sm"
          >
            <Thumbnail
              src={item.image}
              label={item.title}
              accent={item.accent}
              className="aspect-[1.91/1] border-b border-sand"
            />
            <span className="flex flex-1 flex-col p-5">
              <span
                className={`w-fit rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${chip[item.accent]}`}
              >
                {item.category}
              </span>
              <span className="mt-3 inline-flex items-start justify-between gap-2 font-serif text-xl leading-snug text-ink transition group-hover:text-terra-deep">
                {item.title}
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-ink-faint transition group-hover:text-terra"
                  aria-hidden
                />
              </span>
              <span className="mt-2 text-sm leading-relaxed text-ink-soft">{item.blurb}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
