import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { NominateHero } from '@/components/nominate-hero'
import { NominationForm } from '@/components/nomination-form'
import { VoicesSection } from '@/components/voices-section'
import { ConnectFooter } from '@/components/connect-footer'

export const metadata: Metadata = {
  title: 'Nominate a Guest | Uncaged Mind Podcast',
  description:
    'Know someone with a story, insight, or expertise that deserves to be heard? Nominate a guest for the Uncaged Mind podcast — where curiosity leads.',
}

export default function NominatePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient light beam from the top, behind the brain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[700px] bg-[radial-gradient(60%_70%_at_78%_0%,rgba(212,165,58,0.22),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-0 z-0 h-[520px] w-[340px] -translate-y-10 rotate-6 bg-[linear-gradient(180deg,rgba(232,199,106,0.18),transparent_75%)] blur-2xl"
      />

      <div className="relative z-10">
        <SiteNav active="Nominate a Guest" />
        <div className="space-y-12 pt-2">
          <NominateHero />
          <NominationForm />
          <VoicesSection />
        </div>
        <ConnectFooter />
      </div>
    </main>
  )
}
