"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const stats = [
  {
    value: "500",
    suffix: "+",
    label: "Women empowered",
    body: "Members who have launched ventures, found work, or gained new skills through our programmes.",
  },
  {
    value: "120",
    suffix: "+",
    label: "Community initiatives",
    body: "Drives, workshops and campaigns run across neighbourhoods, schools and families.",
  },
  {
    value: "25",
    suffix: "",
    label: "Partner organisations",
    body: "NGOs, trusts and local groups who work alongside us to widen our reach.",
  },
];

const testimonials = [
  {
    quote:
      "WE Society gave me the confidence and the network to turn a kitchen-table idea into a business that now supports three families. I never felt alone at any step.",
    name: "Priya Sharma",
    role: "Founder, Anokhi Crafts",
    org: "Anokhi Crafts",
    tags: ["3 years a member", "12 employees"],
  },
  {
    quote:
      "The mentoring circle changed how I see myself. I went from quietly volunteering to leading our district's education drive for over 200 children.",
    name: "Meena Iyer",
    role: "Education Programme Lead",
    org: "Udaan NGO",
    tags: ["200+ children reached", "4 schools"],
  },
  {
    quote:
      "Partnering with WE Society means our resources actually reach the women who need them. Their community roots make every initiative land.",
    name: "Dr. Kavita Rao",
    role: "Director",
    org: "Shakti Trust",
    tags: ["6 joint programmes", "Since 2021"],
  },
];

export default function Numbers() {
  const [active, setActive] = useState(0);

  // Auto-advance every 7s; a manual click resets the timer because `active` changes.
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section id="numbers" className="relative overflow-hidden bg-maroon-deep text-white">
      {/* Stats */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-white/10 pt-20 pb-12 sm:px-6 lg:pt-28">
          <span className="inline-block rounded-md border border-gold/60 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
            By the numbers
          </span>
          <h2 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Proof, not promises
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col rounded-2xl border border-white/10 bg-white text-maroon shadow-lg"
              >
                <p className="px-5 pt-6 pb-16 font-serif text-6xl leading-none tracking-tight sm:text-7xl">
                  {s.value}
                  <span className="text-5xl text-purple sm:text-6xl">{s.suffix}</span>
                </p>
                <div className="mt-auto border-t border-maroon/10 px-5 py-5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em]">{s.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-maroon-deep/75">{s.body}</p>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div
              className="flex flex-col justify-end rounded-2xl border border-white/10 p-5 text-maroon shadow-lg"
              style={{
                background:
                  "linear-gradient(180deg, #ffffff 0%, #ffffff 35%, #f3e6c5 100%)",
              }}
            >
              <span className="grid size-8 place-items-center rounded-md border border-purple/30 bg-lavender text-purple">
                <svg viewBox="0 0 16 16" className="size-4" fill="currentColor">
                  <path d="M9 1L3 9h4l-1 6 7-9H9l1-5z" />
                </svg>
              </span>
              <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.15em]">Start today</h3>
              <p className="mt-2 text-sm leading-relaxed text-maroon-deep/80">
                Join WE Society and see how a community of women can transform your journey.
              </p>
              <Link
                href="#register"
                className="mt-4 flex items-center justify-between text-sm font-semibold text-purple-deep"
              >
                Register now
                <span className="grid size-8 place-items-center rounded-full bg-maroon text-white">
                  <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials — gradient + dotted texture backdrop */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 50% 100%, rgba(201,161,74,0.55) 0%, rgba(122,75,166,0.45) 45%, transparent 80%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage: "linear-gradient(to bottom, transparent 30%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 30%, black 100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-x border-white/10 py-16 sm:px-6 lg:py-24">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-maroon-deep/80 shadow-2xl backdrop-blur">
              {/* Slide track */}
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <figure key={t.name} className="w-full shrink-0">
                    <blockquote className="px-6 pt-8 text-xl leading-relaxed sm:px-8 sm:text-2xl lg:px-10">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-10 flex flex-col gap-5 px-6 pb-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
                      <div className="flex items-center gap-4">
                        <span className="grid size-12 place-items-center rounded-lg bg-gold font-serif text-xl text-maroon">
                          {t.name[0]}
                        </span>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-wider">{t.name}</p>
                          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                            {t.role}
                          </p>
                        </div>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {t.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </figcaption>
                    <div className="border-t border-white/10 px-6 py-4 font-serif text-lg text-white/70 sm:px-8 lg:px-10">
                      {t.org}
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-3">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === active}
                  className={`size-2 rounded-full transition-all ${
                    i === active ? "scale-125 bg-white" : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
