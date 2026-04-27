'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const metrics = [
  { value: 50, suffix: '+', label: 'Institutions Partnered', color: '#6366F1', decimal: false },
  { value: 13, suffix: 'K+', label: 'Students Reached', color: '#14B8A6', decimal: false },
  { value: 90, suffix: '%', label: 'Placement Rate', color: '#8B5CF6', decimal: false },
  { value: 4.8, suffix: '★', label: 'Avg Satisfaction Score', color: '#F59E0B', decimal: true },
]

const quotes = [
  {
    quote: 'The Kanonkode programme transformed how our students approach real-world problems. The placement outcomes speak for themselves.',
    author: 'Head of Placements',
    institute: 'Engineering College, Bengaluru',
    initial: 'R',
    color: '#4F46E5',
  },
  {
    quote: 'We saw a 40% improvement in technical interview performance among students who completed the Kanonkode cohort.',
    author: 'Dean, CSE Department',
    institute: 'Polytechnic Institute, Hyderabad',
    initial: 'S',
    color: '#14B8A6',
  },
  {
    quote: 'The curriculum integration was seamless. Our faculty were trained, our students were engaged, and the results were measurable.',
    author: 'Principal',
    institute: 'Arts & Science College, Chennai',
    initial: 'M',
    color: '#8B5CF6',
  },
]

export default function SuccessMetrics() {
  const ref = useRef<HTMLElement>(null)
  const statRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    metrics.forEach((m, i) => {
      gsap.to(
        { val: 0 },
        {
          val: m.value,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
          onUpdate: function () {
            const el = statRefs.current[i]
            if (!el) return
            const v = this.targets()[0].val
            el.textContent = m.decimal ? v.toFixed(1) + m.suffix : Math.round(v) + m.suffix
          },
        },
      )
    })
    gsap.fromTo(
      '.sm-quote',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.sm-quotes', start: 'top 82%' } },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: '#0F172A' }}>
      <div className="h-px mb-16" style={{ background: 'linear-gradient(90deg, transparent, #4F46E5 30%, #14B8A6 70%, transparent)' }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Our Impact</p>
          <h2 className="font-display font-bold text-white mb-12" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
            Numbers That Matter
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-0">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && <div className="h-12 w-px mx-8 hidden sm:block" style={{ background: 'rgba(255,255,255,0.08)' }} />}
                <div className="text-center">
                  <span
                    ref={(el) => {
                      statRefs.current[i] = el
                    }}
                    className="font-display font-black block leading-none"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      color: m.color,
                    }}
                  >
                    0
                  </span>
                  <p className="text-[13px] mt-2 font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {m.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sm-quotes grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="sm-quote rounded-2xl p-7 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: `4px solid ${q.color}`,
              }}
            >
              <span className="font-display font-black text-[48px] leading-none mb-4 select-none" style={{ color: q.color, opacity: 0.4 }}>
                "
              </span>
              <p className="text-[14px] leading-relaxed italic flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {q.quote}
              </p>
              <div className="mt-6 pt-5 flex items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[14px] flex-shrink-0" style={{ background: q.color }}>
                  {q.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-[13px] leading-tight">{q.author}</p>
                  <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {q.institute}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
