const features = [
  {
    title: "Built for women, by women",
    body:
      "WE Society is shaped by the lived experience of women across our communities, so every programme meets real needs — not assumptions.",
    icon: (
      <path d="M8 3.5a3 3 0 110 6 3 3 0 010-6zM3 13.5c0-2.5 2.2-4 5-4s5 1.5 5 4" />
    ),
  },
  {
    title: "End-to-end support",
    body:
      "From first idea to a thriving venture, we walk alongside members with mentoring, training, funding links and a network that opens doors.",
    icon: <path d="M3 8h10M9 4l4 4-4 4M3 3v10" />,
  },
  {
    title: "Rooted in the community",
    body:
      "We partner directly with local groups, schools and families so our initiatives fit seamlessly into the places people already live and work.",
    icon: (
      <path d="M2.5 13.5h11M4 13.5V7l4-3.5L12 7v6.5M6.5 13.5v-3h3v3" />
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-maroon/10 py-20 sm:px-6 lg:py-28">
          {/* Heading block */}
          <span className="inline-block rounded-md border border-gold bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-maroon">
            Why WE Society
          </span>
          <h2 className="mt-6 font-serif text-4xl tracking-tight text-maroon sm:text-5xl lg:text-6xl">
            How we&rsquo;re different
          </h2>
          <p className="mt-5 max-w-xl text-base text-maroon-deep/80 sm:text-lg">
            Built exclusively for women and their communities, from the ground up.
          </p>

          {/* Framed media + feature cards */}
          <div className="mt-12 rounded-3xl border border-maroon/10 bg-white/60 p-2 shadow-[0_1px_0_rgba(74,20,55,0.04),0_20px_40px_-24px_rgba(74,20,55,0.25)]">
            <div className="relative overflow-hidden rounded-2xl bg-maroon lg:min-h-[480px]">
              {/* Photo spans the whole frame — replace with your own image in /public */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/we-different/1600/900"
                alt="A WE Society member working from her laptop"
                className="absolute inset-0 size-full object-cover"
              />

              {/* Feature cards float over the right side of the photo */}
              <ul className="relative flex flex-col gap-2 p-2 pt-56 lg:ml-auto lg:w-[42%] lg:pt-2">
                {features.map((f) => (
                  <li
                    key={f.title}
                    className="flex-1 rounded-xl border border-maroon/10 bg-white px-5 py-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-md border border-purple/30 bg-lavender text-purple">
                        <svg
                          viewBox="0 0 16 16"
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {f.icon}
                        </svg>
                      </span>
                      <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-maroon">
                        {f.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-maroon-deep/80">{f.body}</p>
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
