"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Resources" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold tracking-tight text-ink">
            Versed Hand
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-copper sm:inline">
            Nashville
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`text-sm font-semibold transition-colors hover:text-copper ${
                pathname === l.href ? "text-copper" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+16155909800"
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-copper"
          >
            (615) 590-9800
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md border border-line p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper px-5 pb-5 pt-2 md:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-semibold text-ink hover:bg-line/50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+16155909800"
                className="mt-2 block rounded-md bg-ink px-4 py-3 text-center text-base font-semibold text-white"
              >
                Call (615) 590-9800
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
