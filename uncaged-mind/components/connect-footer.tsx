import type { SVGProps } from 'react'
import {
  SpotifyIcon,
  AppleIcon,
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
  MailIcon,
} from '@/components/social-icons'

function AmazonMusicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14V9.5a1.5 1.5 0 0 1 3 0V14" />
      <path d="M11 11.5a1.5 1.5 0 0 1 3 0V14" />
      <path d="M6.5 16.5c3.5 1.8 7.5 1.8 11 0" />
    </svg>
  )
}

function ApplePodcastsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="9.5" r="2.5" />
      <path d="M8.5 15.5a5 5 0 1 1 7 0" />
      <path d="M10 20.5c0-1.5.5-4 2-4s2 2.5 2 4a2 2 0 0 1-4 0z" />
    </svg>
  )
}

function AudibleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M7 12.5c2.2-3.5 7.8-3.5 10 0" />
      <path d="M9 12.2c1.4-1.8 4.6-1.8 6 0" />
    </svg>
  )
}

const connectLinks: { label: string; Icon: (p: SVGProps<SVGSVGElement>) => JSX.Element }[] = [
  { label: 'Spotify', Icon: SpotifyIcon },
  { label: 'Amazon Music', Icon: AmazonMusicIcon },
  { label: 'Apple Podcasts', Icon: ApplePodcastsIcon },
  { label: 'Audible', Icon: AudibleIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
  { label: 'TikTok', Icon: TiktokIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Email', Icon: MailIcon },
]

export function ConnectFooter() {
  return (
    <footer id="connect" className="mx-auto max-w-7xl px-6 pb-10 pt-8 lg:px-10">
      <h2 className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-gold sm:text-2xl">
        Let&apos;s Connect
      </h2>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-gold/40 to-transparent" />

      <ul className="mt-10 grid grid-cols-4 gap-y-8 sm:grid-cols-8">
        {connectLinks.map(({ label, Icon }) => (
          <li key={label} className="flex flex-col items-center gap-3 text-center">
            <a
              href="#connect"
              aria-label={label}
              className="text-gold transition-colors hover:text-gold-light"
            >
              <Icon className="h-6 w-6" />
            </a>
            <span className="font-display text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center font-display text-xs font-medium uppercase tracking-[0.35em] text-gold/90 sm:text-sm">
        Uncaged Mind Podcast — Where Curiosity Leads.
      </p>
    </footer>
  )
}
