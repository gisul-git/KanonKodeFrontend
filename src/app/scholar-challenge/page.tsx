import ChallengeHero from '@/components/scholar/ChallengeHero'
import SelectiveMandate from '@/components/scholar/SelectiveMandate'
import ProtocolTimeline from '@/components/scholar/ProtocolTimeline'
import ApplicationForm from '@/components/scholar/ApplicationForm'
import ScholarCTA from '@/components/scholar/ScholarCTA'

export const metadata = {
  title: 'Scholar Challenge | Kanonkode',
  description:
    'The Kanonkode Scholar Challenge - prove your potential, earn your scholarship. Free entry, merit-based selection.',
}

export default function ScholarChallengePage() {
  return (
    <>
      <ChallengeHero />
      <SelectiveMandate />
      <ProtocolTimeline />
      <ApplicationForm />
      <ScholarCTA />
    </>
  )
}
