'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Course } from '@/types'

const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faqs', label: 'FAQs' },
]

export default function CourseStickyNav({ course }: { course: Course }) {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setActive(id)
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(99,102,241,0.12)',
        boxShadow: visible ? '0 4px 20px rgba(99,102,241,0.08)' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-14">
        <p className="font-display font-bold text-[14px] text-dark-hero truncate max-w-[200px] hidden sm:block">
          {course.title}
        </p>

        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="px-3 py-1.5 rounded-lg text-[13px] font-medium whitespace-nowrap transition-all duration-150 flex-shrink-0"
              style={{
                color: active === s.id ? '#4F46E5' : '#475569',
                background: active === s.id ? '#EEF2FF' : 'transparent',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <a
          href="#pricing"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('pricing')
          }}
          className="flex-shrink-0 inline-flex items-center gap-1.5 font-bold text-[13px] text-white px-5 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #14B8A6, #0D9488)',
            boxShadow: '0 4px 12px rgba(20,184,166,0.3)',
          }}
        >
          Apply Now
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
