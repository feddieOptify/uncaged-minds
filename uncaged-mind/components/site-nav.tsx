import Link from 'next/link'
import { socialLinks } from '@/components/social-icons'

const navItems: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Episodes', href: '/#episodes' },
  { label: 'Explore Topics', href: '/#topics' },
  { label: 'About', href: '/#about' },
  { label: 'Nominate a Guest', href: '/nominate' },
  { label: "Let's Connect", href: '/#connect' },
]

export function SiteNav({ active = 'Home' }: { active?: string }) {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="shrink-0 leading-none">
          <span className="block font-display text-lg font-bold tracking-[0.18em] text-foreground">
            UNCAGED MIND
          </span>
          <span className="mt-1 block text-center font-display text-[0.6rem] font-medium tracking-[0.5em] text-muted-foreground">
            PODCAST
          </span>
        </Link>

        {/* Nav pill */}
        <nav className="hidden items-center gap-7 rounded-full border border-border/70 bg-card/40 px-8 py-3 backdrop-blur-sm xl:flex">
          {navItems.map((item) => {
            const isActive = item.label === active
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative whitespace-nowrap font-display text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                  isActive ? 'text-gold' : 'text-foreground/80 hover:text-gold'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Socials */}
        <div className="flex shrink-0 items-center gap-4">
          {socialLinks.map(({ label, Icon }) => (
            <a
              key={label}
              href="#connect"
              aria-label={label}
              className="text-foreground/70 transition-colors hover:text-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
