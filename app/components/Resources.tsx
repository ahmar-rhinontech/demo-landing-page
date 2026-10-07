import Link from "next/link";

const posts = [
  {
    type: "Story",
    title: "From kitchen table to storefront: Priya's journey",
    excerpt: "How a six-week workshop and one mentor turned a hobby into a business.",
    tags: ["Entrepreneurship", "Mentoring"],
    image: "https://picsum.photos/seed/we-res-1/800/800",
    href: "#",
  },
  {
    type: "Guide",
    title: "Starting a community drive in your neighbourhood",
    excerpt: "A step-by-step playbook for organising your first book, food or clothing drive.",
    tags: ["Community", "Volunteering"],
    image: "https://picsum.photos/seed/we-res-2/800/800",
    href: "#",
  },
  {
    type: "Blog",
    title: "Why women-led networks build stronger families",
    excerpt: "What we've learned from three years of programmes across 120 initiatives.",
    tags: ["Families", "Impact"],
    image: "https://picsum.photos/seed/we-res-3/800/800",
    href: "#",
  },
];

function Arrow() {
  return (
    <span className="grid size-5 place-items-center rounded-full bg-maroon text-white">
      <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-maroon/10 py-20 sm:px-6 lg:py-28">
          <span className="inline-block rounded-md border border-gold bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-maroon">
            Resources
          </span>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl font-serif text-4xl tracking-tight text-maroon sm:text-5xl">
              Check out our latest stories to learn more.
            </h2>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-maroon/15 bg-white px-5 py-3 text-sm font-semibold text-maroon shadow-sm transition-colors hover:bg-gold-light sm:self-auto"
            >
              See all resources
              <Arrow />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="group flex flex-col">
                <Link
                  href={p.href}
                  className="relative block aspect-square overflow-hidden rounded-2xl bg-maroon shadow-lg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/90 via-maroon-deep/20 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-md bg-maroon-deep/90 px-3 py-1.5 text-xs font-semibold text-white">
                    <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
                      <path d="M11.5 2l2.5 2.5-7 7L4 12l.5-3 7-7zM3 13h10v1H3z" />
                    </svg>
                    {p.type}
                  </span>
                  <h3 className="absolute inset-x-0 bottom-0 p-5 text-lg leading-snug font-bold text-white">
                    {p.title}
                  </h3>
                </Link>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-maroon/15 bg-white px-2 py-1 text-[11px] font-medium text-maroon-deep/80"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-maroon"
                  >
                    Read
                    <Arrow />
                  </Link>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-maroon-deep/75">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
