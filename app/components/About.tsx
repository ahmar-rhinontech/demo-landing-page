function PlayButton({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="grid size-14 place-items-center rounded-full border-2 border-gold bg-white text-maroon shadow-lg transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      {label && (
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-purple">
          {label}
        </span>
      )}
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-serif text-3xl tracking-tight text-maroon sm:text-4xl">
      <span aria-hidden className="flex items-center">
        <span className="h-px w-10 bg-purple" />
        <span className="size-1.5 rounded-full bg-purple" />
      </span>
      {children}
    </h2>
  );
}

const placeholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.";

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-x border-maroon/10 py-20 sm:px-6 lg:py-28">
          {/* Media row */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Photo card — placeholder image, replace with your own in /public */}
            <a
              href="#video"
              className="group relative block aspect-[2/1] overflow-hidden rounded-2xl bg-maroon"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/we-about/1200/600"
                alt="WE Society members at a community book donation drive"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/50 via-transparent to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <PlayButton />
              </div>
            </a>

            {/* Video card */}
            <a
              href="#video"
              className="group relative block aspect-[2/1] overflow-hidden rounded-2xl border border-maroon/10"
              style={{
                background:
                  "radial-gradient(60% 80% at 100% 100%, rgba(201,161,74,0.25) 0%, transparent 70%)," +
                  "linear-gradient(135deg, #fbf6fd 0%, #f1e9f7 100%)",
              }}
            >
              {/* Decorative line sketch */}
              <svg
                aria-hidden
                viewBox="0 0 200 160"
                className="absolute right-0 bottom-0 h-full w-auto text-maroon/15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M60 160 L150 40 L200 110" />
                <path d="M90 160 L170 60" />
                <path d="M120 160 L190 80" />
                <path d="M150 40 L120 100 L170 95" />
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <PlayButton label="Video" />
              </div>
            </a>
          </div>

          {/* Vision / Mission */}
          <div className="mt-24 space-y-12 lg:mt-32">
            <div className="max-w-2xl">
              <Heading>Vision</Heading>
              <p className="mt-6 text-base leading-relaxed text-maroon-deep sm:text-lg">
                {placeholder}
              </p>
            </div>

            <div className="max-w-2xl lg:ml-[30%]">
              <Heading>Mission</Heading>
              <p className="mt-6 text-base leading-relaxed text-maroon-deep sm:text-lg">
                {placeholder}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
