import CareerCounselling from '@/components/sections/CareerCounselling'
import CommunitySection from '@/components/sections/CommunitySection'
import FAQSection from '@/components/sections/FAQSection'
import HeroSection from '@/components/sections/HeroSection'
import OutcomesSection from '@/components/sections/OutcomesSection'
import ProgramsSection from '@/components/sections/ProgramsSection'
import WhatIsKanonkode from '@/components/sections/WhatIsKanonkode'
import WhoItIsFor from '@/components/sections/WhoItIsFor'
import WorkshopScholar from '@/components/sections/WorkshopScholar'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIsKanonkode />
      <WhoItIsFor />
      <ProgramsSection />
      <WorkshopScholar />
      <OutcomesSection />
      <CareerCounselling />
      <FAQSection />
      <CommunitySection />
    </>
  )
}
