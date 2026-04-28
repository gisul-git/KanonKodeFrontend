'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Building2, Star, TrendingUp, Users } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const metrics = [
  {
    icon: Building2,
    value: 50,
    suffix: '+',
    label: 'Institutions Partnered',
    color: '#6366F1',
    iconBg: 'rgba(99,102,241,0.15)',
    decimal: false,
  },
  {
    icon: Users,
    value: 13,
    suffix: 'K+',
    label: 'Students Reached',
    color: '#14B8A6',
    iconBg: 'rgba(20,184,166,0.15)',
    decimal: false,
  },
  {
    icon: TrendingUp,
    value: 90,
    suffix: '%',
    label: 'Placement Rate',
    color: '#6366F1',
    iconBg: 'rgba(99,102,241,0.15)',
    decimal: false,
  },
  {
    icon: Star,
    value: 4.8,
    suffix: '★',
    label: 'Avg Satisfaction Score',
    color: '#F59E0B',
    iconBg: 'rgba(245,158,11,0.15)',
    decimal: true,
  },
]

const quotes = [
  {
    id: 'q1',
    quote: 'The Kanonkode programme transformed how our students approach real-world problems. The placement outcomes speak for themselves.',
    name: 'Head of Placements',
    institute: 'Engineering College, Bengaluru',
    color: '#6366F1',
  },
  {
    id: 'q2',
    quote: 'We saw a 40% improvement in technical interview performance among students who completed the Kanonkode cohort.',
    name: 'Dean, CSE Department',
    institute: 'Polytechnic Institute, Hyderabad',
    color: '#14B8A6',
  },
  {
    id: 'q3',
    quote: 'The curriculum integration was seamless. Our faculty were trained, our students were engaged, and the results were measurable.',
    name: 'Principal',
    institute: 'Arts & Science College, Chennai',
    color: '#8B5CF6',
  },
]

export default function SuccessMetrics() {
  const ref = useRef<HTMLElement>(null)
  const statRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0)

  const orderedQuotes = useMemo(() => {
    return quotes.map((_, i) => quotes[(activeQuoteIndex + i) % quotes.length])
  }, [activeQuoteIndex])

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
      '.sm2-quote',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.sm2-quotes', start: 'top 82%' },
      },
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #F3F6FF 0%, #FFFFFF 55%, #F1FCF8 100%)' }}>
      <div
        className="pointer-events-none absolute left-8 top-8 select-none"
        style={{
          width: '120px',
          height: '120px',
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div
        className="pointer-events-none absolute -left-20 -top-20"
        style={{
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1.5px solid rgba(99,102,241,0.18)',
        }}
      />

      <div
        className="pointer-events-none absolute -left-10 -top-10"
        style={{
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.1), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-16 -right-16"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,184,166,0.08), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div
        className="pointer-events-none absolute bottom-8 right-8 select-none"
        style={{
          width: '100px',
          height: '100px',
          backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px max-w-[80px] flex-1" style={{ background: 'rgba(20,184,166,0.4)' }} />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-main">Our Impact</p>
            <div className="h-px max-w-[80px] flex-1" style={{ background: 'rgba(20,184,166,0.4)' }} />
          </div>

          <h2 className="mb-4 font-display font-bold leading-[1.05] text-dark-hero" style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)' }}>
            Numbers{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #14B8A6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              That Matter
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-text-secondary">
            Real outcomes. Real impact. See how Kanonkode is transforming education and empowering institutions.
          </p>
        </div>

        <div
          className="mb-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl px-7 py-8"
          style={{
            background: 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(99,102,241,0.12)',
            boxShadow: '0 8px 28px rgba(79,70,229,0.08)',
          }}
        >
          {metrics.map((m, i) => {
            const Icon = m.icon
            return (
              <div key={i} className="flex items-center">
                {i > 0 && <div className="mr-7 hidden h-14 w-px flex-shrink-0 lg:mr-10 sm:block" style={{ background: 'rgba(15,23,42,0.1)' }} />}

                <div className="flex items-center gap-5">
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: m.iconBg,
                      border: `1px solid ${m.color}25`,
                    }}
                  >
                    <Icon size={22} style={{ color: m.color }} />
                  </div>

                  <div>
                    <span
                      ref={(el) => {
                        statRefs.current[i] = el
                      }}
                      className="block font-display font-black leading-none"
                      style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', color: m.color }}
                    >
                      0
                    </span>
                    <p className="mt-1 text-[12px] font-medium text-text-secondary">
                      {m.label}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={orderedQuotes[0].id}
            className="sm2-quotes flex flex-col items-stretch gap-5 lg:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div
              className="sm2-quote relative flex min-h-[380px] flex-shrink-0 flex-col justify-end overflow-hidden rounded-2xl lg:w-[55%]"
              style={{ border: '1px solid rgba(99,102,241,0.16)', boxShadow: '0 8px 30px rgba(79,70,229,0.12)' }}
            >
              <Image src="/images/institution-students.png" alt="Students at institution" fill className="object-cover object-center" />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
                    to top,
                    rgba(15,23,42,0.74) 0%,
                    rgba(15,23,42,0.56) 45%,
                    rgba(15,23,42,0.3) 72%,
                    rgba(15,23,42,0.14) 100%
                  )`,
                }}
              />

              <div className="absolute bottom-0 left-0 top-0 w-[3px]" style={{ background: `linear-gradient(to bottom, ${orderedQuotes[0].color}, transparent)` }} />

              <div className="relative z-10 p-6">
                <div className="mb-3 select-none font-display text-[52px] font-black leading-none" style={{ color: orderedQuotes[0].color, lineHeight: '0.8' }}>
                  &quot;
                </div>

                <p
                  className="mb-6 text-[17px] italic leading-relaxed"
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                  }}
                >
                  {orderedQuotes[0].quote}
                </p>

                <div className="mb-4" style={{ height: '1px', background: 'rgba(255,255,255,0.18)' }} />

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white" style={{ background: orderedQuotes[0].color }}>
                    {orderedQuotes[0].name[0]}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold leading-tight text-white">{orderedQuotes[0].name}</p>
                    <p className="mt-0.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {orderedQuotes[0].institute}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-5">
              {orderedQuotes.slice(1).map((q) => (
                <div
                  key={q.id}
                  className="sm2-quote relative flex flex-1 flex-col rounded-2xl p-6"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    border: '1px solid rgba(99,102,241,0.12)',
                    borderLeft: `3px solid ${q.color}`,
                    boxShadow: '0 6px 22px rgba(79,70,229,0.08)',
                  }}
                >
                  <div className="mb-2 select-none font-display text-[44px] font-black leading-none" style={{ color: q.color, lineHeight: '0.8' }}>
                  &quot;
                  </div>

                  <p className="mb-5 flex-1 text-[14px] italic leading-relaxed" style={{ color: '#334155', fontFamily: 'var(--font-display)', fontWeight: 400 }}>
                    {q.quote}
                  </p>

                  <div className="mb-4" style={{ height: '1px', background: 'rgba(15,23,42,0.08)' }} />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white" style={{ background: q.color }}>
                      {q.name[0]}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold leading-tight text-dark-hero">{q.name}</p>
                      <p className="mt-0.5 text-[12px] text-text-secondary">{q.institute}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
