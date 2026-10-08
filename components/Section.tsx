import type { ReactNode } from "react";
import type { Accent } from "@/lib/content";

const accentClasses: Record<Accent, { chip: string; text: string }> = {
  terra: { chip: "border-terra/25 bg-terra-soft text-terra-deep", text: "text-terra-deep" },
  marigold: { chip: "border-marigold/25 bg-marigold-soft text-marigold-deep", text: "text-marigold-deep" },
  moss: { chip: "border-moss/25 bg-moss-soft text-moss", text: "text-moss" },
  plum: { chip: "border-plum/25 bg-plum-soft text-plum", text: "text-plum" },
};

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  accent?: Accent;
  children: ReactNode;
};

export function Section({ id, index, eyebrow, title, intro, accent = "terra", children }: SectionProps) {
  const classes = accentClasses[accent];

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] ${classes.text}`}>
          <span className={`rounded-full border px-2.5 py-1 ${classes.chip}`}>{index}</span>
          {eyebrow}
        </p>
        <h2 id={`${id}-heading`} className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {intro ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{intro}</p> : null}
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}
