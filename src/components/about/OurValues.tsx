'use client'
import { useEffect, useRef } from 'react'
import { Hammer, Users, Target, Flame } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const values = [
  {
    icon: Hammer,
    title: "Build, Don't Just Watch",
    desc: 'Every concept is paired with real execution. We believe capability comes from doing - not from passive consumption.',
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.08)',
  },
  {
    icon: Users,
    title: 'Learn in Community',
    desc: 'Cohort-based learning creates accountability, connection, and shared momentum. No one learns alone at Kanonkode.',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
  },
  {
    icon: Target,
    title: 'Outcome Over Content',
    desc: 'We measure success by placements and career outcomes - not course completions or certificate counts.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: Flame,
    title: 'Relentlessly Practical',
    desc: "Everything we teach is industry-aligned and immediately applicable. If it's not useful on Day 1 of a job, it's not in our curriculum.",
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
  },
]

export default function OurValues() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.value-card',
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">What We Stand For</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={i}
                className="value-card group rounded-2xl p-8 bg-white border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                style={{ border: '1px solid rgba(99,102,241,0.1)' }}
              >
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-colors duration-300" style={{ background: v.bg }}>
                  <Icon size={26} style={{ color: v.color }} />
                </div>
                <h3 className="font-display font-bold text-[20px] text-dark-hero mb-3 leading-snug">{v.title}</h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">{v.desc}</p>
                <div className="mt-6 h-[3px] rounded-full w-8 group-hover:w-full transition-all duration-500" style={{ background: v.color }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
