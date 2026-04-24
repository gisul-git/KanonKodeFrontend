'use client'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const stats = [
  { value: 2020, suffix: '', label: 'Year Founded', color: '#6366F1', decimal: false },
  { value: 13000, suffix: '+', label: 'Learners Enrolled', color: '#14B8A6', decimal: false, isK: true },
  { value: 500, suffix: '+', label: 'Students Placed', color: '#8B5CF6', decimal: false },
  { value: 4, suffix: '', label: 'Products in Ecosystem', color: '#F59E0B', decimal: false },
  { value: 4.8, suffix: '★', label: 'Average Rating', color: '#EF4444', decimal: true },
]

export default function AboutStats() {
  const ref = useRef<HTMLElement>(null)
  const statRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    stats.forEach((s, i) => {
      const target = s.isK ? s.value / 1000 : s.value
      gsap.to({ val: 0 }, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        onUpdate: function () {
          const el = statRefs.current[i]
          if (!el) return
          const v = this.targets()[0].val
          if (s.decimal) {
            el.textContent = v.toFixed(1) + s.suffix
          } else if (s.isK) {
            el.textContent = Math.round(v) + 'K' + s.suffix
          } else {
            el.textContent = Math.round(v) + s.suffix
          }
        },
      })
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="py-20" style={{ background: '#0F172A' }}>
      <div className="h-px mb-16" style={{ background: 'linear-gradient(90deg, transparent, #4F46E5 30%, #14B8A6 70%, transparent)' }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between flex-wrap gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              {i > 0 && <div className="h-12 w-px mr-8 hidden sm:block" style={{ background: 'rgba(255,255,255,0.07)' }} />}
              <div className="text-center">
                <span
                  ref={(el) => {
                    statRefs.current[i] = el
                  }}
                  className="font-display font-black leading-none block"
                  style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: s.color }}
                >
                  0
                </span>
                <p className="text-[12px] mt-2 font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
