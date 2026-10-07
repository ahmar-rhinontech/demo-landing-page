"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Service = {
  id: string;
  title: string;
  highlight: string;
  short: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "size-6",
};

// Placeholder photos — swap for your own images in /public/services
const services: Service[] = [
  {
    id: "skill",
    title: "Skill Development &",
    highlight: "Training",
    short: "Practical, job-ready skills through workshops, certifications, and mentorship.",
    description:
      "Equipping women with practical, job-ready skills through workshops, certifications, and mentorship that open doors to sustainable livelihoods.",
    image: "https://picsum.photos/seed/we-skill/1200/800",
    alt: "Women attending a skill development workshop",
    icon: (
      <svg {...iconProps}>
        <path d="M4 7h16M4 12h10M4 17h7" />
        <path d="M17 15l2 2 3-3" />
      </svg>
    ),
  },
  {
    id: "welfare",
    title: "Women & Child",
    highlight: "Welfare",
    short: "Health, safety, and education support for women and children.",
    description:
      "Supporting the health, safety, and education of women and children through community programs, awareness drives, and direct assistance.",
    image: "https://picsum.photos/seed/we-welfare/1200/800",
    alt: "Volunteers at a women and child welfare activity",
    icon: (
      <svg {...iconProps}>
        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
      </svg>
    ),
  },
  {
    id: "entrepreneurship",
    title: "Women Entrepreneurship",
    highlight: "Programs",
    short: "Business training, networks, and guidance to launch and grow ventures.",
    description:
      "Helping women launch and grow their own ventures with business training, access to networks, and guidance from experienced founders.",
    image: "https://picsum.photos/seed/we-entrepreneurship/1200/800",
    alt: "Women entrepreneurs collaborating on a business plan",
    icon: (
      <svg {...iconProps}>
        <path d="M4 19h16" />
        <path d="M6 16l4-5 3 3 5-7" />
        <path d="M15 7h3v3" />
      </svg>
    ),
  },
  {
    id: "digital",
    title: "Digital & Tech",
    highlight: "Empowerment",
    short: "Hands-on technology workshops, digital awareness, and practical skills.",
    description:
      "Bridging the digital divide for women through hands-on technology workshops, digital awareness, and practical skills.",
    image: "https://picsum.photos/seed/we-digital/1200/800",
    alt: "Women working together on laptops in a modern office",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

type Rect = { top: number; left: number; width: number; height: number };

const DURATION = 520; // ms — keep in sync with the transition below
const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const [origin, setOrigin] = useState<Rect | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cardRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    [hoverTimer, closeTimer].forEach((t) => {
      if (t.current) clearTimeout(t.current);
      t.current = null;
    });
  };

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const open = useCallback((s: Service) => {
    clearTimers();
    const el = cardRefs.current[s.id];
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOrigin({ top: r.top, left: r.left, width: r.width, height: r.height });
    setActive(s);
    setExpanded(false);
    // Two frames so the browser paints the start state before transitioning
    requestAnimationFrame(() => requestAnimationFrame(() => setExpanded(true)));
  }, []);

  const close = useCallback(() => {
    clearTimers();
    setExpanded(false);
    closeTimer.current = setTimeout(() => {
      setActive(null);
      setOrigin(null);
    }, DURATION);
  }, []);

  // Hover intent: only open after the pointer rests on a card briefly
  const onEnter = (s: Service) => {
    if (isTouch) return;
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => open(s), 160);
  };
  const onLeaveCard = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  useEffect(() => clearTimers, []);

  // Escape key + scroll lock while open
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  // Final modal geometry (centered)
  const target = (): Rect => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = Math.min(1120, vw - 32);
    const height = Math.min(vw < 768 ? vh - 32 : 560, vh - 32);
    return { top: (vh - height) / 2, left: (vw - width) / 2, width, height };
  };

  const box = active && origin ? (expanded ? target() : origin) : null;

  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-maroon/10 py-20 sm:px-6 lg:py-28">
          {/* Heading row */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-md border border-gold bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-maroon">
                Areas of Service
              </span>
              <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight text-maroon sm:text-5xl lg:text-6xl">
                Where we make
                <br />
                <em className="text-purple">a difference.</em>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-maroon-deep sm:text-lg lg:pb-2">
              Four focused programmes that turn opportunity into lasting change for women,
              children, and the communities around them.
            </p>
          </div>

          {/* Cards */}
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const isActive = active?.id === s.id;
              return (
                <li key={s.id}>
                  <a
                    ref={(el) => {
                      cardRefs.current[s.id] = el;
                    }}
                    href={`#${s.id}`}
                    onMouseEnter={() => onEnter(s)}
                    onMouseLeave={onLeaveCard}
                    onClick={(e) => {
                      e.preventDefault();
                      open(s);
                    }}
                    aria-haspopup="dialog"
                    style={{ opacity: isActive ? 0 : 1, transition: `opacity 200ms ${EASE}` }}
                    className="group flex h-full flex-col rounded-2xl border border-maroon/10 bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_12px_32px_-16px_rgba(74,20,55,0.35)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-xl bg-lavender text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                        {s.icon}
                      </span>
                      <span className="font-serif text-sm text-maroon/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold leading-snug tracking-tight text-maroon">
                      {s.title} {s.highlight}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-maroon-deep/80">
                      {s.short}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-maroon">
                      Explore
                      <span className="grid size-5 place-items-center rounded-full bg-maroon text-white transition-colors group-hover:bg-gold group-hover:text-maroon">
                        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Expanding modal */}
      {active && box && (
        <div
          className="fixed inset-0 z-60"
          onMouseLeave={isTouch ? undefined : close}
        >
          {/* Backdrop */}
          <div
            onClick={close}
            className="absolute inset-0 bg-maroon-deep/40 backdrop-blur-sm"
            style={{
              opacity: expanded ? 1 : 0,
              transition: `opacity ${DURATION}ms ${EASE}`,
            }}
          />

          {/* Morphing panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            onMouseLeave={isTouch ? undefined : close}
            className="absolute overflow-hidden rounded-2xl border border-maroon/10 bg-white shadow-[0_30px_80px_-20px_rgba(42,11,34,0.45)] will-change-[top,left,width,height]"
            style={{
              top: box.top,
              left: box.left,
              width: box.width,
              height: box.height,
              transition: `top ${DURATION}ms ${EASE}, left ${DURATION}ms ${EASE}, width ${DURATION}ms ${EASE}, height ${DURATION}ms ${EASE}`,
            }}
          >
            {/* Card skeleton — visible at the start, fades as the panel grows */}
            <div
              aria-hidden
              className="absolute inset-0 flex flex-col p-7"
              style={{
                opacity: expanded ? 0 : 1,
                transition: `opacity ${DURATION * 0.4}ms ${EASE}`,
              }}
            >
              <span className="grid size-12 place-items-center rounded-xl bg-purple text-white">
                {active.icon}
              </span>
              <h3 className="mt-8 text-xl font-semibold leading-snug tracking-tight text-maroon">
                {active.title} {active.highlight}
              </h3>
            </div>

            {/* Expanded content — image left, text right */}
            <div
              className="absolute inset-0 grid grid-rows-[45%_1fr] md:grid-cols-[1.15fr_1fr] md:grid-rows-1"
              style={{
                opacity: expanded ? 1 : 0,
                transform: expanded ? "scale(1)" : "scale(0.96)",
                transition: `opacity ${DURATION * 0.6}ms ${EASE} ${DURATION * 0.35}ms, transform ${DURATION}ms ${EASE} ${DURATION * 0.2}ms`,
              }}
            >
              <div className="relative overflow-hidden bg-lavender">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.image}
                  alt={active.alt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center overflow-y-auto p-8 md:p-12">
                <span className="grid size-12 place-items-center rounded-xl bg-lavender text-purple">
                  {active.icon}
                </span>
                <h3
                  id="service-dialog-title"
                  className="mt-8 font-serif text-3xl leading-tight tracking-tight text-maroon sm:text-4xl lg:text-5xl"
                >
                  {active.title}
                  <br />
                  <em className="text-purple">{active.highlight}</em>
                </h3>
                <p className="mt-6 text-base leading-relaxed text-maroon-deep sm:text-lg">
                  {active.description}
                </p>
                <Link
                  href={`#${active.id}`}
                  className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-maroon px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-maroon-deep"
                >
                  Explore
                  <span className="grid size-5 place-items-center rounded-full bg-gold text-maroon">
                    <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 11l6-6M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-maroon shadow backdrop-blur transition-colors hover:bg-gold-light"
              style={{
                opacity: expanded ? 1 : 0,
                transition: `opacity 200ms ${EASE} ${DURATION * 0.5}ms`,
              }}
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
