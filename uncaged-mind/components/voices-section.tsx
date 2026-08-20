function BrainIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 5a3 3 0 0 0-5.99.14 3 3 0 0 0-2.5 4.36 3 3 0 0 0 .5 4.5A3 3 0 0 0 6 18.5a3 3 0 0 0 6 .5V5z" />
      <path d="M12 5a3 3 0 0 1 5.99.14 3 3 0 0 1 2.5 4.36 3 3 0 0 1-.5 4.5A3 3 0 0 1 18 18.5a3 3 0 0 1-6 .5V5z" />
    </svg>
  )
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function VoicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="rounded-2xl border border-border/80 bg-card/40 p-4 sm:p-6">
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,220px)_1fr_minmax(0,320px)]">
          {/* Doorway image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/glowing-doorway.png?v=2"
              alt="A glowing golden archway in a dark stone chamber"
              className="h-full min-h-44 w-full scale-150 object-cover object-center"
            />
          </div>

          {/* Center copy */}
          <div className="flex flex-col justify-center px-2 py-6 text-center">
            <BrainIcon className="mx-auto h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.18em] text-gold sm:text-2xl">
              Every Voice Matters.
              <br />
              Every Story Counts.
            </h3>
            <div className="mx-auto mt-4 flex items-center gap-2">
              <span className="h-px w-8 bg-gold/60" />
              <span className="h-1 w-1 rounded-full bg-gold" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Thank you for helping us
              <br />
              discover perspectives worth sharing.
            </p>
          </div>

          {/* Right box */}
          <div className="flex flex-col justify-center rounded-xl border border-border/70 bg-background/50 px-6 py-8 text-center">
            <EnvelopeIcon className="mx-auto h-7 w-7 text-gold" />
            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              We&apos;ll be in touch if we feel it&apos;s a great fit for the show.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Follow Uncaged Mind and stay connected with the conversations that
              go beyond the surface.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
