export function NominateHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-4 lg:px-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        {/* Left copy */}
        <div className="max-w-2xl">
          <h1 className="font-display text-6xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-gold text-balance sm:text-7xl lg:text-8xl">
            Nominate a Guest
          </h1>

          <p className="mt-6 max-w-xl font-display text-xl font-normal uppercase tracking-[0.06em] leading-snug text-foreground/90 text-balance sm:text-2xl">
            Know someone with a story, insight, or expertise that deserves to be
            heard?
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" />
            <span className="h-1 w-1 rounded-full bg-gold" />
          </div>

          <p className="mt-6 text-base text-foreground/85">
            Nominate them below — or nominate yourself!
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            We&apos;re always looking for guests who bring unique perspectives,
            real experiences, and powerful ideas to the conversation. Help us
            uncage more minds.
          </p>
        </div>

        {/* Right brain image */}
        <div className="relative mx-auto hidden w-full max-w-sm lg:block">
          <img
            src="/images/glowing-brain.png"
            alt="A glowing golden brain resting on a dark pedestal, illuminated by beams of light"
            className="h-auto w-full select-none object-contain"
          />
        </div>
      </div>
    </section>
  )
}
