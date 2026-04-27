'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Briefcase, Building2, GraduationCap } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const departments = [
  {
    icon: GraduationCap,
    team: 'Student Admissions',
    email: 'admissions@kanonkode.com',
    handles: ['Programme enquiries', 'Scholarship & Scholar Challenge', 'Course selection guidance', 'Fee and payment queries'],
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.08)',
    responseTime: 'Within 12 hours',
  },
  {
    icon: Building2,
    team: 'Institutional Partnerships',
    email: 'partnerships@kanonkode.com',
    handles: ['College / university tie-ups', 'MOU and curriculum integration', 'Campus workshop scheduling', 'Faculty development requests'],
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
    responseTime: 'Within 2 business days',
  },
  {
    icon: Briefcase,
    team: 'Careers & Press',
    email: 'careers@kanonkode.com',
    handles: ['Job openings at Kanonkode', 'Internship applications', 'Media & press enquiries', 'Speaker / event invitations'],
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
    responseTime: 'Within 3 business days',
  },
]

export default function ContactInfo() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.ci-card',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-28" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Reach the Right Team</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
            Contact the Right{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Department
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departments.map((d, i) => {
            const Icon = d.icon
            return (
              <div
                key={i}
                className="ci-card group bg-white rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                style={{
                  border: '1px solid rgba(99,102,241,0.1)',
                  boxShadow: '0 2px 16px rgba(99,102,241,0.05)',
                }}
              >
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center" style={{ background: d.bg }}>
                  <Icon size={26} style={{ color: d.color }} />
                </div>

                <h3 className="font-display font-bold text-[19px] text-dark-hero mb-1">{d.team}</h3>

                <a href={`mailto:${d.email}`} className="text-[13px] font-semibold mb-6 hover:underline" style={{ color: d.color }}>
                  {d.email}
                </a>

                <div className="space-y-2 flex-1">
                  {d.handles.map((h, j) => (
                    <div key={j} className="flex items-center gap-2 text-[13px] text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: '1px solid rgba(99,102,241,0.08)' }}>
                  <span className="text-[11px] font-medium text-text-sub">⏱ {d.responseTime}</span>
                  <a
                    href={`mailto:${d.email}`}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold hover:gap-2.5 transition-all duration-200 group"
                    style={{ color: d.color }}
                  >
                    Email
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="mt-4 h-[3px] rounded-full w-8 group-hover:w-full transition-all duration-500" style={{ background: d.color }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
