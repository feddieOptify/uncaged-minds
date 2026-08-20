import type { SVGProps } from 'react'

function BrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 5a3 3 0 0 0-5.99.14 3 3 0 0 0-2.5 4.36 3 3 0 0 0 .5 4.5A3 3 0 0 0 6 18.5a3 3 0 0 0 6 .5V5z" />
      <path d="M12 5a3 3 0 0 1 5.99.14 3 3 0 0 1 2.5 4.36 3 3 0 0 1-.5 4.5A3 3 0 0 1 18 18.5a3 3 0 0 1-6 .5V5z" />
    </svg>
  )
}

function HeartPulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      <path d="M3.5 12h4l1.5-3 3 6 1.5-3h4" />
    </svg>
  )
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function TrendingUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
      <path d="M15 8h4v4" />
    </svg>
  )
}

const topics = [
  { name: 'Mental Health', count: '12 Episodes', image: '/images/topic-mental.png', Icon: BrainIcon },
  { name: 'Health', count: '6 Episodes', image: '/images/topic-health.png', Icon: HeartPulseIcon },
  { name: 'Culture & Society', count: '8 Episodes', image: '/images/topic-culture.png', Icon: UsersIcon },
  { name: 'Finance', count: '7 Episodes', image: '/images/topic-finance.png', Icon: TrendingUpIcon },
]

export function ExploreTopics() {
  return (
    <section id="topics" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
      <div className="flex items-center gap-5">
        <h2 className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-gold sm:text-2xl">
          Explore Topics
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
        <a
          href="#topics"
          className="inline-flex items-center gap-2 whitespace-nowrap font-display text-xs font-medium uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold"
        >
          View All Topics <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground sm:text-base">
        Curiosity doesn&apos;t stay in one lane. Explore conversations across
        ideas, experiences, and real-world issues.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map(({ name, count, image, Icon }) => (
          <a
            key={name}
            href="#topics"
            className="group relative flex aspect-[5/4] flex-col items-center justify-center overflow-hidden rounded-xl border border-border/70 text-center transition-colors hover:border-gold/50"
          >
            <img
              src={image || '/placeholder.svg'}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-125 object-cover opacity-40 transition-transform duration-500 group-hover:scale-[1.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/30" />
            <div className="relative flex flex-col items-center gap-3 px-4">
              <Icon className="h-9 w-9 text-gold" />
              <h3 className="font-display text-base font-semibold uppercase tracking-[0.12em] text-foreground">
                {name}
              </h3>
              <span className="font-display text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                {count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
