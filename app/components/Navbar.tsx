"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Areas of Service", href: "#services" },
  { label: "Events & Meets", href: "#events" },
  { label: "Chapters", href: "#chapters" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

function ArrowCircle() {
  return (
    <span className="grid size-5 place-items-center rounded-full bg-gold text-maroon">
      <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gold bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-md bg-maroon font-serif text-lg italic text-gold">
            WE
          </span>
          <span className="text-xl font-semibold tracking-tight text-maroon">WE Society</span>
        </Link>

        <ul className="hidden items-center gap-8 xl:flex">
          {links.map((l, i) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={
                  i === 0
                    ? "rounded-full bg-gold-light px-4 py-2 text-[15px] font-semibold text-maroon"
                    : "text-[15px] font-medium text-maroon transition-colors hover:text-purple"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#login"
            className="hidden items-center gap-2.5 rounded-full bg-maroon px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-maroon-deep sm:inline-flex"
          >
            Login
            <ArrowCircle />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full border border-maroon/20 text-maroon xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-maroon/10 bg-white xl:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-maroon hover:text-purple"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 sm:hidden">
              <Link
                href="#login"
                className="inline-flex items-center gap-2.5 rounded-full bg-maroon px-5 py-3 font-semibold text-white"
              >
                Login
                <ArrowCircle />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
