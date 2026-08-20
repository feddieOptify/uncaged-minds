export function NoTopicSection() {
  return (
    <section id="about" className="border-y border-border/60 bg-card/20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-6 py-10 lg:grid-cols-[minmax(0,480px)_1fr] lg:px-10">
        {/* Doorway image with logo overlay */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/images/glowing-doorway.png?v=2"
            alt="A glowing golden archway with steps in a dark stone chamber"
            className="h-full min-h-56 w-full scale-[1.7] object-cover object-center"
          />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 leading-none">
            <span className="block font-display text-lg font-bold tracking-[0.18em] text-gold-light">
              UNCAGED
              <br />
              MIND
            </span>
            <span className="mt-1 block font-display text-[0.55rem] font-medium tracking-[0.5em] text-gold-light/80">
              PODCAST
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.06em] text-foreground text-balance sm:text-4xl">
            No Topic Is Off-Limits.
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" />
            <span className="h-1 w-1 rounded-full bg-gold" />
          </div>

          <div className="mt-5 space-y-1.5 text-sm leading-relaxed text-foreground/80 sm:text-base">
            <p>Uncaged Mind is a podcast that goes beyond the surface.</p>
            <p>
              We explore the ideas, emotions, experiences, and questions that
              shape the way we think, live, and connect.
            </p>
            <p>Deep conversations. Different perspectives.</p>
            <p>Real people. Real stories.</p>
          </div>

          <p className="mt-5 font-medium text-gold">
            Because curiosity deserves no boundaries.
          </p>
        </div>
      </div>
    </section>
  )
}
