import { Globe, Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 px-5 pb-12 pt-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-ink px-6 py-12 text-cream sm:px-12 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-soft">
            Hiring for Developer Relations?
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">Let&apos;s talk.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80">
            Everything on this page links out to proof. If you&apos;d like a conversation about DevRel, AI tooling, or
            developer communities, the fastest way to reach me is below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full bg-terra px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-terra-deep"
            >
              Email me
            </a>
            <a
              href={contact.phoneHref}
              className="rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition hover:border-cream/60"
            >
              Call {contact.phoneDisplay}
            </a>
          </div>

          <ul className="mt-10 grid gap-4 border-t border-cream/15 pt-8 text-sm sm:grid-cols-2">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 text-cream/85 transition hover:text-cream"
              >
                <Mail className="h-4 w-4 text-terra-soft" aria-hidden />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2.5 text-cream/85 transition hover:text-cream"
              >
                <Phone className="h-4 w-4 text-terra-soft" aria-hidden />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.siteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-cream/85 transition hover:text-cream"
              >
                <Globe className="h-4 w-4 text-terra-soft" aria-hidden />
                {contact.siteLabel}
              </a>
            </li>
            <li>
              <a
                href={contact.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-cream/85 transition hover:text-cream"
              >
                <GithubIcon className="h-4 w-4 text-terra-soft" />
                {contact.githubLabel}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-center text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} Rizel Scarlett &middot; Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
