import WorkshopHero from '@/components/workshop/WorkshopHero'
import WhatAreWorkshops from '@/components/workshop/WhatAreWorkshops'
import UpcomingWorkshops from '@/components/workshop/UpcomingWorkshops'
import WorkshopAudience from '@/components/workshop/WorkshopAudience'
import WorkshopRegister from '@/components/workshop/WorkshopRegister'
import WorkshopCTA from '@/components/workshop/WorkshopCTA'

export const metadata = {
  title: 'Workshops | Kanonkode',
  description:
    'Join Kanonkode live workshops — free and paid sessions designed to build real skills in short, focused bursts.',
}

export default function WorkshopPage() {
  return (
    <>
      <WorkshopHero />
      <WhatAreWorkshops />
      <UpcomingWorkshops />
      <WorkshopAudience />
      <WorkshopRegister />
      <WorkshopCTA />
    </>
  )
}
