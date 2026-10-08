"use client";

import { useId, useState } from "react";
import { Thumbnail } from "@/components/Thumbnail";
import { WindowChrome } from "@/components/WindowChrome";
import type { ContentGroup, ContentItem, WorkTab } from "@/lib/content";
import { type Flavor, flavorStyle } from "@/lib/flavors";

const tabFlavor: Record<string, Flavor> = {
  writing: "strawberry",
  speaking: "grape",
  "open-source": "lime",
  podcasts: "blueberry",
  streams: "tangerine",
  devrel: "bondi",
};

type Entry = ContentItem & { source: string };

function flatten(groups: ContentGroup[]): Entry[] {
  return groups.flatMap((group) => group.items.map((item) => ({ ...item, source: group.label })));
}

export function WorkTabs({ tabs }: { tabs: WorkTab[] }) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(tabs[0].id);

  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const entries = flatten(active.groups);

  function select(id: string, button: HTMLElement) {
    setActiveId(id);
    button.scrollIntoView({ inline: "nearest", block: "nearest" });
    // Once the list is scrolled, switching jumps back to the top of the new list.
    const section = document.getElementById("work");
    if (section && section.getBoundingClientRect().top < 0) section.scrollIntoView();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = tabs.findIndex((tab) => tab.id === activeId);
    const next = tabs[(index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    const button = document.getElementById(`${baseId}-tab-${next.id}`);
    if (!button) return;
    select(next.id, button);
    button.focus();
  }

  return (
    <section
      id="work"
      aria-label="Work"
      style={flavorStyle(tabFlavor[active.id] ?? "strawberry")}
      className="window-open mx-3 mt-5 scroll-mt-12 rounded-xl border border-line bg-window shadow-[0_24px_60px_rgba(150,110,190,0.18)] sm:mx-auto sm:mt-7 sm:max-w-[calc(72rem-2rem)]"
    >
      <WindowChrome title={active.label} />

      <div className="chrome sticky top-0 z-40 border-b border-line sm:top-10">
        <div
          role="tablist"
          aria-label="Work categories"
          onKeyDown={onKeyDown}
          className="flex gap-2 overflow-x-auto px-3 py-2.5 [scrollbar-width:none] md:justify-center"
        >
          {tabs.map((tab) => {
            const selected = tab.id === activeId;
            return (
              <button
                key={tab.id}
                id={`${baseId}-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={(event) => select(tab.id, event.currentTarget)}
                style={flavorStyle(tabFlavor[tab.id] ?? "strawberry")}
                className={`gel flex shrink-0 items-baseline gap-1.5 rounded-full px-4 py-1 text-[13px] font-bold ${
                  selected ? "gel-flavor" : "text-ink-soft hover:text-ink"
                }`}
              >
                {tab.label}
                <span className="text-[11px] font-normal tabular-nums opacity-75">{flatten(tab.groups).length}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active.id}`}
        className="pinstripes p-4 sm:p-6"
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <li key={`${entry.source}-${entry.href}-${entry.title}`}>
              <a
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-window shadow-[0_2px_6px_rgba(150,110,190,0.10)] transition-shadow hover:border-[var(--flavor)] hover:shadow-[0_0_0_3px_var(--flavor)]"
              >
                <Thumbnail src={entry.image} label={entry.source} className="aspect-[1.91/1] border-b border-line" />
                <span className="flex flex-1 flex-col gap-2 p-3.5 group-hover:bg-[var(--flavor-soft)]">
                  <span className="text-[15px] font-bold leading-snug">{entry.title}</span>
                  <span className="mt-auto flex items-center justify-between gap-3 text-[13px] text-ink-soft">
                    <span className="truncate">{entry.source}</span>
                    <span className="shrink-0 tabular-nums">{entry.year}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="chrome rounded-b-[11px] border-t border-line px-3 py-1 text-center text-[11px] text-ink-soft">
        {entries.length} items
      </p>
    </section>
  );
}
