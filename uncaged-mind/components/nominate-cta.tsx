import Link from 'next/link'
import type { SVGProps } from 'react'

function ClipboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="18" rx="2" />
      <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V4z" />
      <path d="M8 10h6" />
      <path d="M8 14h5" />
      <path d="M8 18h4" />
      <path d="m15 15 3-3 2 2-3 3-2.5.5.5-2.5z" />
    </svg>
  )
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  )
}

const points = [
  'Nominate someone you admire',
  'Recommend an expert or professional',
  'Share a unique perspective',
  'Or nominate yourself',
]

export function NominateCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
      <div className="grid items-center gap-8 rounded-2xl border border-border/80 bg-card/40 p-8 shadow-[0_0_60px_-25px_rgba(212,165,58,0.3)] lg:grid-cols-[1fr_auto_1fr] lg:p-12">
        {/* Left copy */}
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.06em] text-gold sm:text-4xl">
            Nominate a Guest
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/80">
            Know someone with a story, insight, or expertise that deserves to be
            heard? Nominate them below – or nominate yourself!
          </p>
          <Link
            href="/nominate"
            className="mt-6 inline-flex items-center gap-3 rounded-md bg-gradient-to-b from-gold-light to-gold px-7 py-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-background shadow-[0_0_30px_-6px_rgba(212,165,58,0.6)] transition-transform hover:scale-[1.02]"
          >
            Nominate Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Center illustration */}
        <div className="hidden justify-center lg:flex">
          <ClipboardIcon className="h-40 w-40 text-gold drop-shadow-[0_0_25px_rgba(212,165,58,0.35)]" />
        </div>

        {/* Right checklist */}
        <ul className="space-y-4">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm text-foreground/85">
              <CheckIcon className="h-5 w-5 shrink-0 text-gold" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
