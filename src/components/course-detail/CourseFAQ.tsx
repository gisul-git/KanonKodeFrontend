'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { CourseDetail } from '@/data/courseDetails'
import type { Course } from '@/types'

export default function CourseFAQ({
  detail,
  course,
}: {
  detail: CourseDetail
  course: Course
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="bg-white py-20">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">FAQs</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Common Questions About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {course.code}
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {detail.faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                border: open === i ? '1.5px solid rgba(79,70,229,0.25)' : '1px solid rgba(99,102,241,0.1)',
                boxShadow: open === i ? '0 4px 20px rgba(79,70,229,0.08)' : 'none',
                background: 'white',
              }}
            >
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-bg-tinted transition-colors">
                <span className="font-semibold text-[15px] text-dark-hero pr-8">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 text-text-secondary transition-transform duration-300"
                  style={{
                    transform: open === i ? 'rotate(180deg)' : 'none',
                  }}
                />
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-[14px] text-text-secondary leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
