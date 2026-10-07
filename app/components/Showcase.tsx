const chat = {
  label: "Member requests",
  question: "“I want to start my own business but don’t know where to begin…”",
  answer:
    "“Sure! Our next entrepreneurship workshop is on Saturday morning. Shall I reserve your seat?”",
  result: "Seat Reserved!",
};

const partners = [
  "Women First",
  "Rotary Club",
  "Lions Foundation",
  "Shakti Trust",
  "Udaan NGO",
  "Seva Sangh",
  "Nari Shakti",
];

export default function Showcase() {
  return (
    <section id="video" className="border-t border-maroon/10 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-maroon/10 py-6 sm:px-6">
          {/* Framed media card */}
          <div className="rounded-3xl border border-maroon/10 bg-white/60 p-2 shadow-[0_1px_0_rgba(74,20,55,0.04),0_20px_40px_-24px_rgba(74,20,55,0.25)]">
            <div className="grid overflow-hidden rounded-2xl md:grid-cols-2">
              {/* Left: dotted canvas with outline mark + rotating quote */}
              <div
                className="relative hidden min-h-[340px] overflow-hidden md:block"
                style={{
                  backgroundImage: "radial-gradient(rgba(74,20,55,0.14) 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                }}
              >
                <svg
                  aria-hidden
                  viewBox="0 0 400 400"
                  className="absolute -bottom-24 -left-24 size-[130%] text-maroon/[0.06]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="34"
                >
                  <ellipse cx="200" cy="200" rx="170" ry="110" transform="rotate(-35 200 200)" />
                  <ellipse cx="200" cy="200" rx="170" ry="110" transform="rotate(35 200 200)" />
                </svg>

                {/* Conversation: cards appear one by one, hold, fade out, repeat */}
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 lg:inset-x-10">
                  <div className="showcase-card ml-auto w-[88%] rounded-xl border border-maroon/10 bg-white/95 px-4 py-3 shadow-sm backdrop-blur lg:w-[80%]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple/60">
                      {chat.label}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-maroon">{chat.question}</p>
                  </div>

                  <div className="showcase-card mt-4 flex w-[88%] overflow-hidden rounded-xl border border-maroon/10 bg-white/95 shadow-sm backdrop-blur lg:w-[80%]">
                    <span className="grid w-12 shrink-0 place-items-center border-r border-maroon/10 bg-lavender/60">
                      <span className="grid size-7 place-items-center rounded-md border border-maroon/10 bg-white">
                        <span className="size-3 rounded-full bg-gradient-to-br from-purple to-gold" />
                      </span>
                    </span>
                    <p className="px-4 py-3 text-sm leading-snug text-maroon">{chat.answer}</p>
                  </div>

                  <div className="showcase-card relative mt-9 ml-[22%] lg:ml-[30%]">
                    {/* dashed connector from the reply card down to the pill */}
                    <span
                      aria-hidden
                      className="absolute -top-9 left-6 h-9 w-10 rounded-bl-xl border-b border-l border-dashed border-maroon/30"
                    />
                    <div className="relative ml-16 inline-flex items-center gap-4 rounded-full border border-gold bg-white pr-6 shadow-md">
                      <span className="grid size-12 place-items-center rounded-full border border-gold/50 bg-gold-light text-maroon">
                        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="py-3 text-base font-bold text-maroon">{chat.result}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: video poster — replace with your own <video> / image in /public */}
              <a href="#video" className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-maroon md:aspect-auto md:min-h-[340px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/we-showcase/1000/800"
                  alt="A WE Society member speaking about the community"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/45 via-maroon/5 to-transparent" />
                <span className="absolute bottom-5 left-5 grid size-12 place-items-center rounded-full border-2 border-gold bg-white text-maroon shadow-lg transition-transform group-hover:scale-105">
                  <svg viewBox="0 0 24 24" className="ml-0.5 size-4" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted-by strip */}
      <div className="border-t border-maroon/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-x border-maroon/10 py-10">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-purple">
              Supported by partners &amp; communities
            </p>
            <div
              className="mt-8 overflow-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <ul className="marquee flex items-center gap-16">
                {[...partners, ...partners].map((p, i) => (
                  <li
                    key={i}
                    aria-hidden={i >= partners.length}
                    className="font-serif text-2xl whitespace-nowrap text-maroon/35 transition-colors hover:text-maroon/70"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
