import InstitutionHero from '@/components/institution/InstitutionHero'
import WhatWeOffer from '@/components/institution/WhatWeOffer'
import HowItWorks from '@/components/institution/HowItWorks'
import SuccessMetrics from '@/components/institution/SuccessMetrics'
import PartnerLogos from '@/components/institution/PartnerLogos'
import InstitutionCTA from '@/components/institution/InstitutionCTA'

export const metadata = {
  title: 'For Institutions | Kanonkode',
  description: 'Partner with Kanonkode to upskill your students with live cohort programmes, workshops, and career-focused curriculum.',
}

export default function ForInstitutionPage() {
  return (
    <>
      <InstitutionHero />
      <WhatWeOffer />
      <HowItWorks />
      <SuccessMetrics />
      <PartnerLogos />
      <InstitutionCTA />
    </>
  )
}
