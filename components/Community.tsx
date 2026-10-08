import { ArrowUpRight } from "lucide-react";
import { community } from "@/lib/content";

export function Community() {
  return (
    <ul className="grid gap-3 lg:grid-cols-3">
      {community.map((item) => (
        <li key={item.name} className="flex flex-col rounded-2xl border border-sand bg-paper p-5">
          <span className="w-fit rounded-full border border-terra/25 bg-terra-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-terra-deep">
            {item.role}
          </span>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-start justify-between gap-2 font-serif text-xl text-ink transition hover:text-terra-deep"
            >
              {item.name}
              <ArrowUpRight
                className="mt-1 h-4 w-4 shrink-0 text-ink-faint transition group-hover:text-terra"
                aria-hidden
              />
            </a>
          ) : (
            <h3 className="mt-4 font-serif text-xl text-ink">{item.name}</h3>
          )}
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
