import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactFAQ from '@/components/contact/ContactFAQ'

export const metadata = {
  title: 'Contact Us | Kanonkode',
  description: 'Get in touch with Kanonkode — for admissions, partnerships, careers, or general enquiries.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
    </>
  )
}
