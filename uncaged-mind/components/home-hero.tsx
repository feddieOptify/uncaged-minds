export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient top light beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[600px] bg-[radial-gradient(45%_60%_at_50%_-5%,rgba(232,199,106,0.28),transparent_65%)]"
      />
      {/* Floor reflection glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(212,165,58,0.14),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-8 text-center lg:pb-24">
        <h1 className="font-display text-6xl font-bold uppercase leading-[0.85] tracking-[0.02em] text-gold text-balance drop-shadow-[0_0_35px_rgba(212,165,58,0.35)] sm:text-7xl lg:text-8xl">
          Uncaged
          <br />
          Mind
        </h1>

        <div className="relative my-2 w-full max-w-md">
          <img
            src="/images/hero-brain.png"
            alt="A glowing golden brain illuminated by a beam of light"
            className="mx-auto h-auto w-full select-none object-contain"
          />
        </div>

        <p className="font-display text-xl font-medium uppercase tracking-[0.55em] text-gold sm:text-2xl lg:text-3xl">
          Where Curiosity Leads
        </p>

        <a
          href="#episodes"
          className="mt-8 inline-flex items-center gap-3 rounded-lg border border-gold/70 bg-gold/5 px-8 py-3.5 font-display text-sm font-medium uppercase tracking-[0.25em] text-foreground shadow-[0_0_35px_-8px_rgba(212,165,58,0.6)] transition-colors hover:bg-gold/15"
        >
          Listen Now
          <span aria-hidden="true">&rarr;</span>
        </a>

        {/* Scroll cue */}
        <div className="mt-14 flex flex-col items-center gap-3 text-muted-foreground">
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/50 pt-1.5">
            <span className="h-1.5 w-0.5 rounded-full bg-gold" />
          </span>
          <span className="font-display text-[0.6rem] font-medium uppercase tracking-[0.4em]">
            Scroll to Explore
          </span>
        </div>
      </div>
    </section>
  )
}
