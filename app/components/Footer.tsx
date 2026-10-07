import Link from "next/link";

const explore = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Areas of Service", href: "#services" },
  { label: "Events & Meets", href: "#events" },
];

const discover = [
  { label: "Our Chapters", href: "#chapters" },
  { label: "Gallery", href: "#gallery" },
  { label: "Membership", href: "#membership" },
  { label: "Volunteer With Us", href: "#volunteer" },
];

const values = [
  "Empower Women",
  "Build Confidence",
  "Create Opportunities",
  "Support Children",
  "Grow Entrepreneurs",
  "Strengthen Communities",
  "Inspire Change",
  "Lead Together",
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{children}</h3>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-maroon-deep text-white"
      style={{
        background:
          "radial-gradient(70% 60% at 20% 0%, rgba(122,75,166,0.35) 0%, transparent 70%)," +
          "radial-gradient(50% 50% at 90% 100%, rgba(201,161,74,0.12) 0%, transparent 70%)," +
          "#2a0b22",
      }}
    >
      {/* Giant WE watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[6%] select-none font-serif text-[22rem] leading-none text-white/[0.04] lg:text-[30rem]"
      >
        WE
      </span>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-white/10 sm:px-6">
          {/* CTA */}
          <div className="py-20 lg:py-28">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Join the movement
            </span>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Empower women.
              <br />
              <em className="text-gold">Strengthen communities.</em>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Together, we can create opportunities, build confidence, and make a meaningful
              difference in society.
            </p>
            <Link
              href="#register"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-base font-semibold text-maroon-deep transition-colors hover:bg-gold-light"
            >
              Join WE Society
              <span className="grid size-5 place-items-center rounded-full bg-maroon-deep text-gold">
                <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid gap-12 border-t border-white/10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-md bg-maroon font-serif text-lg italic text-gold ring-1 ring-gold/40">
                  WE
                </span>
              </Link>
              <p className="mt-5 font-serif text-xl leading-tight">
                Women Entrepreneurs
                <br />
                <em className="text-gold">Society</em>
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                A community built to empower women, nurture entrepreneurship, support children,
                and create positive social impact.
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 border-b border-gold/50 pb-0.5 text-sm font-medium text-gold transition-colors hover:border-gold"
              >
                Instagram
                <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 11l6-6M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div>
              <ColumnTitle>Explore</ColumnTitle>
              <ul className="mt-6 space-y-4">
                {explore.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/80 transition-colors hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnTitle>Discover</ColumnTitle>
              <ul className="mt-6 space-y-4">
                {discover.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/80 transition-colors hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnTitle>Find us</ColumnTitle>
              <dl className="mt-6 space-y-6 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Office</dt>
                  <dd className="mt-2 leading-relaxed text-white/85">
                    301, Balaji Nivas,
                    <br />
                    BS Layout, Visakhapatnam,
                    <br />
                    Andhra Pradesh - 530016
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Email</dt>
                  <dd className="mt-2">
                    <a href="mailto:weofficial365@gmail.com" className="text-white/85 hover:text-gold">
                      weofficial365@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Phone</dt>
                  <dd className="mt-2 space-y-1.5 text-white/85">
                    <a href="tel:+919100463052" className="block hover:text-gold">+91 91004 63052</a>
                    <a href="tel:+919700602581" className="block hover:text-gold">+91 97006 02581</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Women Entrepreneurs Society</p>
            <p>RC No. 499/2025</p>
            <p className="font-bold uppercase tracking-[0.25em] text-gold">
              Empower · Lead · Connect · Inspire
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling value chips */}
      <div className="relative border-t border-white/10 py-6">
        <div className="marquee flex gap-4 whitespace-nowrap">
          {[...values, ...values].map((v, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-8 py-5 text-sm font-bold uppercase tracking-wide text-white/90"
            >
              <svg viewBox="0 0 16 16" className="size-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {v}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
