import CareerCounselling from '@/components/sections/CareerCounselling'
import CommunitySection from '@/components/sections/CommunitySection'
import FAQSection from '@/components/sections/FAQSection'
import HeroSection from '@/components/sections/HeroSection'
import HowItWorks from '@/components/sections/HowItWorks'
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
      <HowItWorks />
      <OutcomesSection />
      <CareerCounselling />
      <FAQSection />
      <CommunitySection />
    </>
  )
}
