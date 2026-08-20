import { SiteNav } from '@/components/site-nav'
import { HomeHero } from '@/components/home-hero'
import { NoTopicSection } from '@/components/no-topic-section'
import { LatestEpisodes } from '@/components/latest-episodes'
import { ExploreTopics } from '@/components/explore-topics'
import { NominateCta } from '@/components/nominate-cta'
import { ConnectFooter } from '@/components/connect-footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteNav active="Home" />
      <HomeHero />
      <NoTopicSection />
      <LatestEpisodes />
      <ExploreTopics />
      <NominateCta />
      <ConnectFooter />
    </main>
  )
}
