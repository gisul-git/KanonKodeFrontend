'use client'

import { useEffect, useRef, useState } from 'react'
import { Hammer, Users, Target, Flame, Star } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const values = [
  {
    num: '01',
    icon: Hammer,
    title: "Build, Don't Just Watch",
    desc: 'Every concept is paired with real execution. We believe capability comes from doing - not from passive consumption.',
    color: '#4F46E5',
    iconBg: 'rgba(79,70,229,0.1)',
    numColor: 'rgba(79,70,229,0.25)',
    dotColor: '#4F46E5',
  },
  {
    num: '02',
    icon: Users,
    title: 'Learn in Community',
    desc: 'Cohort-based learning creates accountability, connection, and shared momentum. No one learns alone at Kanonkode.',
    color: '#14B8A6',
    iconBg: 'rgba(20,184,166,0.1)',
    numColor: 'rgba(20,184,166,0.3)',
    dotColor: '#14B8A6',
  },
  {
    num: '03',
    icon: Target,
    title: 'Outcome Over Content',
    desc: 'We measure success by placements and career outcomes - not course completions or certificate counts.',
    color: '#8B5CF6',
    iconBg: 'rgba(139,92,246,0.1)',
    numColor: 'rgba(139,92,246,0.3)',
    dotColor: '#8B5CF6',
  },
  {
    num: '04',
    icon: Flame,
    title: 'Relentlessly Practical',
    desc: "Everything we teach is industry-aligned and immediately applicable. If it's not useful on Day 1 of a job, it's not in our curriculum.",
    color: '#F59E0B',
    iconBg: 'rgba(245,158,11,0.1)',
    numColor: 'rgba(245,158,11,0.35)',
    dotColor: '#F59E0B',
  },
]

export default function OurValues() {
  const ref = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    gsap.fromTo('.values-left', { opacity: 0, x: -40 }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
    gsap.fromTo('.value-row', { opacity: 0, x: 40 }, {
      opacity: 1,
      x: 0,
      duration: 0.55,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.values-right', start: 'top 80%' },
    })
    gsap.fromTo('.values-quote', { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.values-quote', start: 'top 90%' },
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden py-12 sm:py-14 lg:py-16" style={{ background: '#F8FAFC' }}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[170px]">
        <svg className="absolute bottom-0 left-0 h-full w-full" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,150 C180,105 300,120 430,150 C560,182 700,170 840,148 C980,126 1090,136 1200,150 L1200,240 L0,240 Z"
            fill="rgba(99,102,241,0.12)"
          />
          <path
            d="M0,172 C170,132 300,146 430,172 C560,198 700,188 850,168 C990,150 1100,160 1200,172 L1200,240 L0,240 Z"
            fill="rgba(99,102,241,0.08)"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-10 flex flex-col items-start gap-8 lg:mb-12 lg:flex-row lg:gap-12">
          <div className="values-left relative w-full flex-shrink-0 lg:sticky lg:top-32 lg:w-[30%]">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-main">What We Stand For</p>

            <h2 className="mb-4 font-display font-bold leading-[1.03] text-dark-hero" style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)' }}>
              Our Core <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Values
              </span>
            </h2>

            <div className="mb-6 h-[3px] w-10 rounded-full" style={{ background: 'linear-gradient(90deg, #4F46E5, #14B8A6)' }} />

            <p className="mb-6 max-w-xs text-[14px] leading-[1.5] text-text-secondary">
              These are the principles that guide every decision we make and every experience we create.
            </p>

            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.15)' }}
              >
                <Star size={18} style={{ color: '#4F46E5' }} />
              </div>
              <div>
                <p className="text-[13px] text-text-secondary">Built for learners.</p>
                <p className="text-[13px] font-bold" style={{ color: '#4F46E5' }}>
                  Driven by impact.
                </p>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -bottom-40 -left-6 h-28 w-32 select-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(79,70,229,0.2) 1.3px, transparent 1.3px)',
                backgroundSize: '11px 11px',
              }}
            />

          </div>

          <div className="values-right flex-1 space-y-3">
            {values.map((v, i) => {
              const Icon = v.icon
              const isActive = activeIndex === i
              return (
                <div
                  key={i}
                  className="value-row group relative flex cursor-pointer items-center gap-3 rounded-2xl p-3.5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(99,102,241,0.08)',
                    borderLeft: isActive ? `3px solid ${v.color}` : '1px solid rgba(99,102,241,0.08)',
                    boxShadow: isActive ? `0 8px 32px ${v.color}15` : '0 2px 12px rgba(99,102,241,0.05)',
                  }}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div
                    className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105"
                    style={{ background: v.iconBg }}
                  >
                    <Icon size={21} style={{ color: v.color }} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 font-display font-bold leading-tight text-dark-hero" style={{ fontSize: 'clamp(1.2rem, 1.45vw, 1.45rem)' }}>
                      {v.title}
                    </h3>
                    <p className="max-w-[390px] text-[12px] leading-[1.45] text-text-secondary">{v.desc}</p>
                  </div>

                  <div className="flex min-w-[42px] flex-shrink-0 flex-col items-end gap-1.5">
                    <span className="font-display text-[24px] font-bold leading-none" style={{ color: v.numColor }}>
                      {v.num}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="h-px w-7 transition-all duration-300" style={{ background: isActive ? v.color : 'rgba(99,102,241,0.2)' }} />
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all duration-300" style={{ background: isActive ? v.dotColor : 'rgba(99,102,241,0.2)' }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="values-quote pt-4 text-center">
          <div className="mb-4 flex items-center justify-center gap-6">
            <div className="h-px max-w-[120px] flex-1" style={{ background: 'rgba(99,102,241,0.15)' }} />
            <span className="select-none font-display text-[34px] font-black leading-none" style={{ color: '#4F46E5', lineHeight: '0.8' }}>
              "
            </span>
            <div className="h-px max-w-[120px] flex-1" style={{ background: 'rgba(99,102,241,0.15)' }} />
          </div>

          <p className="mb-2 font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(1.2rem, 2.1vw, 1.65rem)' }}>
            These values aren&apos;t just words.
          </p>
          <p
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(1.2rem, 2.1vw, 1.65rem)',
              background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            They shape every learner journey.
          </p>
        </div>
      </div>
    </section>
  )
}
