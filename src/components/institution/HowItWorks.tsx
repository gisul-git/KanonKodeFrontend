'use client'

import { useEffect, useRef } from 'react'
import { BarChart2, FileCheck, MessageSquare, Rocket } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Initial Conversation',
    desc: "We discuss your institution's needs, student profile, and academic calendar to understand what fits best.",
    color: '#4F46E5',
  },
  {
    num: '02',
    icon: FileCheck,
    title: 'Proposal & MOU',
    desc: 'We draft a customised programme proposal and sign an MOU with clear deliverables and timelines.',
    color: '#14B8A6',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Launch & Delivery',
    desc: 'Our faculty deliver live sessions on the Kanonkode platform — fully managed, tracked, and reported.',
    color: '#8B5CF6',
  },
  {
    num: '04',
    icon: BarChart2,
    title: 'Outcomes & Reports',
    desc: 'You receive detailed reports on student progress, completion rates, and placement outcomes.',
    color: '#F59E0B',
  },
]

export default function InstitutionHowItWorks() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.ihiw-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">The Process</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
            How Partnership{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Works
            </span>
          </h2>
          <p className="mt-4 text-[15px] text-text-secondary max-w-lg mx-auto leading-relaxed">
            From first conversation to student outcomes — here&apos;s exactly what the partnership journey looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div
            className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px hidden lg:block"
            style={{
              background: 'linear-gradient(to right, #4F46E5, #14B8A6, #8B5CF6, #F59E0B)',
              opacity: 0.3,
            }}
          />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="ihiw-card group relative bg-white rounded-2xl p-7 flex flex-col items-start border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                style={{
                  border: '1px solid rgba(99,102,241,0.1)',
                  boxShadow: '0 2px 16px rgba(99,102,241,0.05)',
                }}
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10 bg-white"
                    style={{
                      background: `${s.color}12`,
                      border: `1.5px solid ${s.color}30`,
                      boxShadow: `0 4px 12px ${s.color}20`,
                    }}
                  >
                    <Icon size={20} style={{ color: s.color }} />
                  </div>
                  <span className="font-display font-black text-[28px] leading-none" style={{ color: 'rgba(99,102,241,0.12)' }}>
                    {s.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-[17px] text-dark-hero leading-snug mb-3">{s.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 h-[3px] rounded-full w-8 group-hover:w-full transition-all duration-500" style={{ background: s.color }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
