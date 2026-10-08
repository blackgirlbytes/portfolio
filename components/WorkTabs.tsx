"use client";

import { ArrowUpRight } from "lucide-react";
import { useId, useState } from "react";
import type { Accent, ContentGroup, ContentItem, WorkTab } from "@/lib/content";

const INITIAL_COUNT = 6;

const tabActive: Record<Accent, string> = {
  terra: "border-terra bg-terra text-white",
  marigold: "border-marigold bg-marigold text-white",
  moss: "border-moss bg-moss text-white",
  plum: "border-plum bg-plum text-white",
};

const chip: Record<Accent, string> = {
  terra: "bg-terra-soft text-terra-deep",
  marigold: "bg-marigold-soft text-marigold-deep",
  moss: "bg-moss-soft text-moss",
  plum: "bg-plum-soft text-plum",
};

type Entry = ContentItem & { source: string };

function flatten(groups: ContentGroup[]): Entry[] {
  return groups.flatMap((group) => group.items.map((item) => ({ ...item, source: group.label })));
}

export function WorkTabs({ tabs }: { tabs: WorkTab[] }) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(tabs[0].id);
  const [expanded, setExpanded] = useState(false);

  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const entries = flatten(active.groups);
  const visible = expanded ? entries : entries.slice(0, INITIAL_COUNT);
  const hiddenCount = entries.length - visible.length;

  function select(id: string) {
    setActiveId(id);
    setExpanded(false);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = tabs.findIndex((tab) => tab.id === activeId);
    const next = tabs[(index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    select(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Work categories"
        onKeyDown={onKeyDown}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {tabs.map((tab) => {
          const selected = tab.id === activeId;
          const count = flatten(tab.groups).length;
          return (
            <button
              key={tab.id}
              id={`${baseId}-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(tab.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selected ? tabActive[tab.accent] : "border-sand bg-paper text-ink-soft hover:border-ink/20 hover:text-ink"
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-1.5 text-xs tabular-nums ${selected ? "bg-white/20" : "bg-sand/70 text-ink-faint"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active.id}`}
        className="mt-6"
      >
        <p className="text-sm text-ink-soft">{active.blurb}</p>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((entry) => (
            <li key={`${entry.source}-${entry.href}-${entry.title}`}>
              <a
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-sand bg-paper p-4 transition hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-sm"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className={`truncate rounded-full px-2 py-0.5 text-xs font-medium ${chip[active.accent]}`}>
                    {entry.source}
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-ink-faint">
                    {entry.year}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:text-terra" aria-hidden />
                  </span>
                </span>
                <span className="mt-3 font-medium leading-snug text-ink transition group-hover:text-terra-deep">
                  {entry.title}
                </span>
                {entry.meta ? <span className="mt-1 text-sm text-ink-faint">{entry.meta}</span> : null}
                {entry.description ? (
                  <span className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">{entry.description}</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        {entries.length > INITIAL_COUNT ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="mt-5 rounded-full border border-sand bg-paper px-4 py-2 text-sm font-semibold text-ink-soft transition hover:border-terra/40 hover:text-terra-deep"
          >
            {expanded ? "Show fewer" : `Show all ${entries.length} (${hiddenCount} more)`}
          </button>
        ) : null}
      </div>
    </div>
  );
}
