const episodes = [
  {
    number: 'Episode 03',
    title: 'The Strange Comfort of Chaos',
    description: 'Why we run from calm and what our brain has to say about it.',
    image: '/images/episode-chaos.png',
  },
  {
    number: 'Episode 02',
    title: 'When Pain Becomes Power',
    description: 'From rock bottom to breakthrough. 10 steps that changed everything.',
    image: '/images/episode-pain.png',
  },
  {
    number: 'Episode 01',
    title: "Energy as Life's Base",
    description: 'Vibrations, frequency, and the unseen forces that shape our reality.',
    image: '/images/episode-energy.png',
  },
  {
    number: 'Episode 04',
    title: 'What 25 Years in Mental Health',
    description: 'A mental health nurse reveals what being human really means.',
    image: '/images/episode-mental.png',
  },
  {
    number: 'Episode 05',
    title: 'Money, Wealth and the World',
    description: 'An economist on the systems we live in and the future we can build.',
    image: '/images/episode-money.png',
  },
]

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function LatestEpisodes() {
  return (
    <section id="episodes" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
      <div className="flex items-center gap-5">
        <h2 className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-gold sm:text-2xl">
          Latest Episodes
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
        <a
          href="#episodes"
          className="inline-flex items-center gap-2 whitespace-nowrap font-display text-xs font-medium uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold"
        >
          View All Episodes <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {episodes.map((ep) => (
          <article
            key={ep.number}
            className="group flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card/40 transition-colors hover:border-gold/50"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={ep.image || '/placeholder.svg'}
                alt={ep.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                type="button"
                aria-label={`Play ${ep.title}`}
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/70 bg-background/70 text-gold backdrop-blur-sm transition-colors hover:bg-gold hover:text-background"
              >
                <PlayIcon className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <span className="font-display text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                {ep.number}
              </span>
              <h3 className="mt-2 font-display text-sm font-semibold uppercase leading-tight tracking-[0.05em] text-foreground">
                {ep.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {ep.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
