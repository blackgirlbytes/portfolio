"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream/90 backdrop-blur print:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#main" className="font-serif text-lg font-semibold tracking-tight text-ink">
          Rizel Scarlett
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition hover:text-terra-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-terra px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-terra-deep"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-sand bg-cream px-5 py-4 md:hidden" aria-label="Primary mobile">
          <ul className="flex flex-col gap-1">
            {[...navLinks, { href: "#contact", label: "Contact" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-ink transition hover:bg-paper hover:text-terra-deep"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
