import { Globe, Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { contact, heroStats } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[26rem] w-[26rem] rounded-full bg-terra-soft/80 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-40 h-80 w-80 rounded-full bg-marigold-soft/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-plum-soft/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terra">
          Developer Relations &middot; AI &amp; Open Source
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-ink sm:text-7xl">Rizel Scarlett</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          I help developers fall in love with new tools. I write beginner-friendly guides, take the stage at
          conferences, ship open source, and build communities &mdash; with a current focus on MCPs, agentic coding,
          and AI-powered tools like goose.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-terra px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-terra-deep"
          >
            Email me
          </a>
          <a
            href="#work"
            className="rounded-full border border-ink/10 bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-terra/40 hover:text-terra-deep"
          >
            Explore my work
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {heroStats.map((stat) => (
            <li key={stat} className="rounded-full border border-sand bg-paper px-3.5 py-1.5 text-sm text-ink-soft">
              {stat}
            </li>
          ))}
        </ul>

        <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-soft">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 font-medium transition hover:text-terra-deep"
            >
              <Mail className="h-4 w-4 text-ink-faint" aria-hidden />
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 font-medium transition hover:text-terra-deep"
            >
              <Phone className="h-4 w-4 text-ink-faint" aria-hidden />
              {contact.phoneDisplay}
            </a>
          </li>
          <li>
            <a
              href={contact.siteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium transition hover:text-terra-deep"
            >
              <Globe className="h-4 w-4 text-ink-faint" aria-hidden />
              {contact.siteLabel}
            </a>
          </li>
          <li>
            <a
              href={contact.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium transition hover:text-terra-deep"
            >
              <GithubIcon className="h-4 w-4 text-ink-faint" />
              {contact.githubLabel}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
