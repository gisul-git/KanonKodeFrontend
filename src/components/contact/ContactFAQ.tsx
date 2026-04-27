'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How quickly will I get a response?',
    a: 'Student enquiries are answered within 12 hours. Partnership and institutional requests within 2 business days. Press and career enquiries within 3 business days.',
  },
  {
    q: "I'm not sure which programme is right for me. What should I do?",
    a: "Book a free 30-minute career counselling session with our team. We'll understand your background, goals, and recommend the exact programme that fits — with no pressure to enroll.",
  },
  {
    q: 'Can I visit your office in person?',
    a: "Yes! We're based in Bengaluru, Karnataka. Please email us at hello@kanonkode.com to schedule an in-person visit and we'll confirm a time that works.",
  },
  {
    q: 'I want to hire Kanonkode graduates. Who do I contact?',
    a: 'Email our partnerships team at partnerships@kanonkode.com. We run a dedicated Hire from Us programme where companies get access to our top-performing graduates.',
  },
  {
    q: 'Do you have a WhatsApp number for quick queries?',
    a: 'Yes — you can reach us on WhatsApp at +91 98765 43210 during Mon–Sat, 9AM to 6PM IST. For detailed enquiries, email is faster.',
  },
]

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">FAQs</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
            Common Questions
          </h2>
        </div>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                border: open === i ? '1px solid rgba(79,70,229,0.25)' : '1px solid rgba(99,102,241,0.1)',
                boxShadow: open === i ? '0 4px 20px rgba(79,70,229,0.08)' : 'none',
                background: 'white',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-150 hover:bg-bg-tinted"
                style={{ cursor: 'pointer' }}
              >
                <span className="font-body font-semibold text-[15px] text-dark-hero pr-8">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300 text-text-secondary"
                  style={{
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-[14px] text-text-secondary leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-8 text-center" style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="font-display font-bold text-white text-[22px] mb-3">Still have questions?</p>
          <p className="text-[15px] mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Our team is happy to help. Reach out and we&apos;ll get back to you personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@kanonkode.com"
              className="group inline-flex items-center justify-center gap-2 font-bold text-[14px] text-white px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #14B8A6, #0D9488)',
                boxShadow: '0 4px 16px rgba(20,184,166,0.3)',
              }}
            >
              Email Us
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/919876543210"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
