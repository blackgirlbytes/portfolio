import { Code2, Mic, PenLine, Sparkles, Users, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skills, type Accent, type Skill } from "@/lib/content";

const icons: Record<Skill["icon"], LucideIcon> = {
  pen: PenLine,
  mic: Mic,
  code: Code2,
  users: Users,
  video: Video,
  sparkles: Sparkles,
};

const iconBox: Record<Accent, string> = {
  terra: "bg-terra-soft text-terra-deep",
  marigold: "bg-marigold-soft text-marigold-deep",
  moss: "bg-moss-soft text-moss",
  plum: "bg-plum-soft text-plum",
};

export function Skills() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => {
        const Icon = icons[skill.icon];
        return (
          <li key={skill.title} className="flex gap-4 rounded-2xl border border-sand bg-paper p-5">
            <span
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBox[skill.accent]}`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-semibold leading-snug text-ink">{skill.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{skill.blurb}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
