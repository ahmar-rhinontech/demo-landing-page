import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Maroon → purple → gold wash on the right, like SpinSci's gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 75% at 88% 15%, rgba(122,75,166,0.35) 0%, transparent 70%)," +
            "radial-gradient(45% 60% at 100% 80%, rgba(201,161,74,0.40) 0%, transparent 70%)," +
            "radial-gradient(40% 55% at 60% 100%, rgba(74,20,55,0.12) 0%, transparent 70%)," +
            "linear-gradient(90deg, #fffdf9 0%, #fffdf9 40%, #f1e9f7 100%)",
        }}
      />
      {/* Dotted texture fading in toward the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(74,20,55,0.25) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(to right, transparent 40%, black 80%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 40%, black 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-maroon/10 py-20 sm:px-6 lg:py-20">
          <span className="inline-block rounded-md border border-gold bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-maroon">
            WE Society
          </span>

          <h1 className="mt-10 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-maroon sm:text-6xl lg:text-[88px]">
            Empowering Women.
            <br />
            Building <em className="text-purple">Strong Communities.</em>
          </h1>

          <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-maroon-deep sm:text-xl">
              Creating opportunities, strengthening communities, and supporting women and
              children through meaningful initiatives, entrepreneurship, and social impact.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#register"
                className="inline-flex items-center gap-2.5 rounded-full bg-maroon px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-maroon-deep"
              >
                Register
                <span className="grid size-5 place-items-center rounded-full bg-gold text-maroon">
                  <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 11l6-6M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-maroon bg-white px-6 py-3.5 text-base font-semibold text-maroon transition-colors hover:bg-gold-light"
              >
                Services
                <span className="grid size-5 place-items-center rounded-full bg-maroon text-white">
                  <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
