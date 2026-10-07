import Link from "next/link";

const benefits = [
  {
    bold: "More opportunities",
    rest: "for women",
    icon: <path d="M8 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3.5 13.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />,
  },
  {
    bold: "Stronger bonds",
    rest: "for families",
    icon: <path d="M8 13.5S2.5 10 2.5 6.2A2.8 2.8 0 018 4.6a2.8 2.8 0 015.5 1.6C13.5 10 8 13.5 8 13.5z" />,
  },
  {
    bold: "Lasting growth",
    rest: "for communities",
    icon: <path d="M8 14V8M8 8c0-3 1.5-5 5-5-0 3-1.5 5-5 5zM8 10c0-2-1-3.5-3.5-3.5 0 2 1 3.5 3.5 3.5z" />,
  },
];

/* Six orbiting tiles: alternate between the outer and inner ring */
const orbit = [
  { ring: "outer", icon: <path d="M8 2l5 2v4c0 3-2.2 5-5 6-2.8-1-5-3-5-6V4l5-2z" /> },
  { ring: "inner", icon: <path d="M3 13.5h10M4.5 13.5V7l3.5-3 3.5 3v6.5M6.5 13.5V10h3v3.5" /> },
  { ring: "outer", icon: <path d="M2.5 4.5h11v8h-11zM2.5 7.5h11M5.5 4.5v8" /> },
  { ring: "inner", icon: <path d="M2.5 12.5L6 8l2.5 3 2-2 3 3.5M3 3.5h10v9H3z" /> },
  { ring: "outer", icon: <path d="M8 2.5v11M2.5 8h11M4.5 4.5l7 7M11.5 4.5l-7 7" /> },
  { ring: "inner", icon: <path d="M3 12V8.5M6.5 12V5M10 12V7M13.5 12V3.5" /> },
];

export default function Platform() {
  return (
    <section id="platform" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-maroon/10 py-20 sm:px-6 lg:py-28">
          <span className="inline-block rounded-md border border-gold bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-maroon">
            The WE Network
          </span>
          <h2 className="mt-6 font-serif text-4xl tracking-tight text-maroon sm:text-5xl lg:text-6xl">
            Powering our community
          </h2>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            {/* Left: description, benefit chips, CTA */}
            <div className="flex flex-col rounded-2xl border border-maroon/10 bg-white/70 p-6 shadow-sm sm:p-7">
              <p className="max-w-lg text-base leading-relaxed text-maroon-deep/85">
                Built by women from the ground up and deeply rooted in the places we live, the WE
                Network connects mentors, partners and members so every initiative turns into real
                change at scale.
              </p>

              <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <ul className="flex flex-col items-start gap-2">
                  {benefits.map((b) => (
                    <li
                      key={b.bold}
                      className="flex items-center gap-3 rounded-lg border border-maroon/10 bg-white py-2 pr-4 pl-2 shadow-sm"
                    >
                      <span className="grid size-8 place-items-center rounded-md bg-gold-light text-maroon">
                        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          {b.icon}
                        </svg>
                      </span>
                      <span className="text-xs tracking-[0.1em] text-purple-deep uppercase">
                        <strong className="font-bold text-maroon">{b.bold}</strong> {b.rest}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#services"
                  className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-maroon/15 bg-white px-5 py-3 text-sm font-semibold text-maroon shadow-sm transition-colors hover:bg-gold-light sm:self-auto"
                >
                  Explore our services
                  <span className="grid size-5 place-items-center rounded-full bg-maroon text-white">
                    <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: orbiting icons around the WE badge */}
            <div
              className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl shadow-lg lg:aspect-auto lg:min-h-[420px]"
              style={{
                // Square orbit size from the shorter side so rings stay circular on any aspect ratio
                ["--orbit" as string]: "min(86cqw, 86cqh)",
                containerType: "size",
                background:
                  "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px) 0 0 / 16px 16px," +
                  "linear-gradient(180deg, #35102a 0%, #5d3686 55%, #c9a14a 100%)",
              }}
            >
              {/* Rings */}
              <span aria-hidden className="absolute aspect-square w-[var(--orbit)] rounded-full border border-dashed border-white/25" />
              <span aria-hidden className="absolute aspect-square w-[calc(var(--orbit)*0.62)] rounded-full border border-dashed border-white/25" />

              {/* Orbiting tiles — the ring wrapper rotates, each tile counter-rotates to stay upright */}
              {["outer", "inner"].map((ring) => {
                const tiles = orbit.filter((o) => o.ring === ring);
                return (
                  <div
                    key={ring}
                    aria-hidden
                    className={`absolute aspect-square rounded-full ${ring === "outer" ? "orbit w-[var(--orbit)]" : "orbit-reverse w-[calc(var(--orbit)*0.62)]"}`}
                  >
                    {tiles.map((t, i) => {
                      const angle = (360 / tiles.length) * i;
                      return (
                        // Full-size wrapper rotated to the tile's slot on the ring
                        <span key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                          <span
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ transform: `translate(-50%, -50%) rotate(${-angle}deg)` }}
                          >
                            <span
                              className={`grid size-9 place-items-center rounded-lg border border-white/30 bg-white/15 text-white shadow-md backdrop-blur ${ring === "outer" ? "orbit-tile" : "orbit-tile-reverse"}`}
                            >
                              <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                {t.icon}
                              </svg>
                            </span>
                          </span>
                        </span>
                      );
                    })}
                  </div>
                );
              })}

              {/* Center badge */}
              <div className="relative grid size-28 place-items-center rounded-full border-4 border-white/20 bg-white shadow-2xl">
                <span className="font-serif text-4xl font-semibold tracking-tight text-maroon">
                  WE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
