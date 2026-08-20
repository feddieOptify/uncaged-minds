export function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-bleed cinematic studio image (branding baked into the photo) */}
      <div className="relative h-[calc(100svh-5.5rem)] min-h-[440px] w-full">
        <img
          src="/images/hero-studio.jpeg"
          alt="Uncaged Mind Podcast — Where Curiosity Leads. Host seated at a dark studio desk with a microphone, a branded mug, and a brain-logo card."
          className="absolute inset-0 h-full w-full object-cover object-[70%_top] sm:object-top"
          fetchPriority="high"
        />

        {/* Bottom blend into the page background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-background"
        />

        {/* CTA + scroll cue anchored at the bottom */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-6 px-6 pb-10">
          <a
            href="#episodes"
            className="inline-flex items-center gap-3 rounded-lg border border-gold/70 bg-background/40 px-8 py-3.5 font-display text-sm font-medium uppercase tracking-[0.25em] text-foreground shadow-[0_0_35px_-8px_rgba(212,165,58,0.6)] backdrop-blur-sm transition-colors hover:bg-gold/15"
          >
            Listen Now
            <span aria-hidden="true">&rarr;</span>
          </a>

          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/50 pt-1.5">
              <span className="h-1.5 w-0.5 rounded-full bg-gold" />
            </span>
            <span className="font-display text-[0.6rem] font-medium uppercase tracking-[0.4em]">
              Scroll to Explore
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
