import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import MissionVision from '@/components/about/MissionVision'
import GisulEcosystem from '@/components/about/GisulEcosystem'
import AboutStats from '@/components/about/AboutStats'
import FounderSection from '@/components/about/FounderSection'
import OurValues from '@/components/about/OurValues'

export const metadata = {
  title: 'About Us | Kanonkode',
  description:
    'Learn about Kanonkode - our story, mission, the Gisul Ecosystem, and the team building career-ready professionals.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <GisulEcosystem />
      <AboutStats />
      <FounderSection />
      <OurValues />
    </>
  )
}
