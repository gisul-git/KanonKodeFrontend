'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BarChart2, Bot, ChevronLeft, ChevronRight, GitMerge, ShieldCheck } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { gsap } from '@/lib/gsap-init'
import type { Testimonial } from '@/types'

const transitionOutcomes = [
  {
    key: 'ai-operator',
    label: 'AI Operator',
    Icon: Bot,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.06)',
    border: 'rgba(99,102,241,0.14)',
    before: 'Graduate',
    after: 'AI Workflow Automation Role',
    context: 'Example learner pathway',
    story: 'Built an automation portfolio, completed mock interviews, and moved into an AI workflow role.',
  },
  {
    key: 'data-analyst',
    label: 'Data Analyst',
    Icon: BarChart2,
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.06)',
    border: 'rgba(20,184,166,0.14)',
    before: 'Graduate / Working Professional',
    after: 'Data Analyst Role',
    context: 'Example learner pathway',
    story: 'Built dashboard projects, completed mock interviews, and moved toward a data analyst opportunity.',
  },
  {
    key: 'devops-engineer',
    label: 'DevOps Engineer',
    Icon: GitMerge,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.06)',
    border: 'rgba(99,102,241,0.14)',
    before: 'Working Professional',
    after: 'DevOps Engineer Role',
    context: 'Example learner pathway',
    story: 'Completed cloud deployment projects and interview prep to transition toward a DevOps role.',
  },
  {
    key: 'cybersecurity-analyst',
    label: 'Cybersecurity Analyst',
    Icon: ShieldCheck,
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.06)',
    border: 'rgba(20,184,166,0.14)',
    before: 'Career Switcher',
    after: 'Cybersecurity Analyst Role',
    context: 'Example learner pathway',
    story: 'Built security challenge projects and portfolio proof to move toward a cybersecurity path.',
  },
] as const

function TestimonialCard({ t }: { t: Testimonial }) {
  const accent = t.accentColor ?? '#4F46E5'

  return (
    <div
      className="flex-shrink-0 flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        width: 'min(380px, calc(100vw - 56px))',
        boxShadow: '0 4px 32px rgba(99,102,241,0.1), 0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: '240px' }}>
        <Image src={t.image ?? ''} alt={t.name} fill className="object-cover object-top" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              ${accent}15 0%,
              transparent 40%,
              rgba(255,255,255,0.15) 100%
            )`,
          }}
        />
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
            style={{
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              color: '#0F172A',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <span style={{ color: '#94A3B8' }}>{t.beforeRole}</span>
            <span style={{ color: '#94A3B8' }}>→</span>
            <span style={{ color: accent, fontWeight: 700 }}>{t.afterRole}</span>
          </div>
          <div
            className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
              <span key={i} className="text-[13px]" style={{ color: '#F59E0B' }}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div
          className="font-display font-black leading-none mb-3 select-none"
          style={{
            fontSize: '52px',
            color: accent,
            lineHeight: '0.8',
            opacity: 0.8,
          }}
        >
          &quot;
        </div>
        <p className="text-[14px] text-dark-hero leading-relaxed flex-1 mb-5" style={{ fontStyle: 'italic' }}>
          {t.quote}
        </p>
        <div
          className="mb-4"
          style={{
            height: '1px',
            background: 'rgba(99,102,241,0.1)',
          }}
        />
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0"
              style={{ backgroundColor: t.avatarColor }}
            >
              {t.avatar}
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[14px] text-dark-hero leading-tight truncate">{t.name}</p>
              <p className="text-[12px] text-text-sub mt-0.5">{t.experience}</p>
            </div>
          </div>
          <div
            className="flex items-center gap-1 px-2.5 py-1 rounded-full flex-shrink-0 text-[10px] font-bold tracking-wide"
            style={{
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.2)',
              color: '#16A34A',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5l2 2 4-4"
                stroke="#16A34A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            VERIFIED
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OutcomesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedOutcomeKey, setSelectedOutcomeKey] = useState<(typeof transitionOutcomes)[number]['key']>('ai-operator')
  const DESKTOP_CARD_WIDTH = 380
  const CARD_GAP = 20
  const selectedOutcome = transitionOutcomes.find((o) => o.key === selectedOutcomeKey) ?? transitionOutcomes[0]

  const getScrollStep = () => {
    if (!trackRef.current) return DESKTOP_CARD_WIDTH + CARD_GAP
    const firstItem = trackRef.current.firstElementChild as HTMLElement | null
    if (!firstItem) return DESKTOP_CARD_WIDTH + CARD_GAP
    return firstItem.getBoundingClientRect().width + CARD_GAP
  }

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const delta = dir === 'left' ? -getScrollStep() : getScrollStep()
    trackRef.current.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const scrollToIndex = (i: number) => {
    if (!trackRef.current) return
    const step = getScrollStep()
    trackRef.current.scrollTo({
      left: i * step,
      behavior: 'smooth',
    })
    setActiveIndex(i)
  }

  const handleScroll = () => {
    if (!trackRef.current) return
    const step = getScrollStep()
    const idx = Math.round(trackRef.current.scrollLeft / step)
    setActiveIndex(idx)
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.outcomes-text',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.outcomes-top',
            start: 'top 78%',
          },
        },
      )

      gsap.fromTo(
        '.outcomes-visual',
        { opacity: 0, x: 50, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.85,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.outcomes-top',
            start: 'top 78%',
          },
        },
      )

      gsap.to('.outcomes-progress-bar', {
        width: '94%',
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: '.outcomes-top',
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="outcomes-section bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="outcomes-top flex flex-col lg:flex-row gap-10 lg:gap-12 items-center mb-14 lg:mb-16">
          <div className="outcomes-text w-full lg:w-[45%] flex-shrink-0">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Outcomes</p>

            <h2 className="font-display font-bold text-dark-hero leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
              Real Transitions.<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Real Careers.
              </span>
            </h2>

            <p className="text-[16px] text-text-secondary leading-relaxed mb-8 max-w-md">
              Every KanonKode program is designed to help learners build proof of skill through real projects, portfolio work,
              mock interviews, and practical outcomes that support real career movement.
            </p>

            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-sub mb-3">Popular transition outcomes:</p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {transitionOutcomes.map((role) => (
                <button
                  key={role.label}
                  onClick={() => setSelectedOutcomeKey(role.key)}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-all duration-200"
                  style={{
                    background: selectedOutcome.key === role.key ? `${role.bg}` : 'white',
                    border: `1px solid ${selectedOutcome.key === role.key ? role.color : role.border}`,
                    color: selectedOutcome.key === role.key ? role.color : '#475569',
                    boxShadow: selectedOutcome.key === role.key ? '0 4px 16px rgba(99,102,241,0.14)' : 'none',
                  }}
                >
                  <role.Icon size={15} style={{ color: selectedOutcome.key === role.key ? role.color : '#64748B' }} />
                  <span className="text-[13px]">
                    {role.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="outcomes-visual flex-1 w-full lg:w-auto">
            <div
              className="relative rounded-2xl p-7 lg:p-8"
              style={{
                background: '#F8FAFF',
                border: '1px solid rgba(99,102,241,0.14)',
                boxShadow: '0 4px 24px rgba(99,102,241,0.08)',
              }}
            >
              <div className="flex items-center gap-4 mb-7 pb-7" style={{ borderBottom: '1px solid rgba(99,102,241,0.08)' }}>
                <div className="flex-1">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5" style={{ color: '#94A3B8' }}>
                    Before
                  </p>
                  <p className="font-display font-bold text-[22px] text-dark-hero leading-tight">{selectedOutcome.before}</p>
                </div>

                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.15)',
                    }}
                  >
                    <span className="text-indigo-main font-bold text-[16px]">→</span>
                  </div>
                </div>

                <div className="flex-1 text-right">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5" style={{ color: '#14B8A6' }}>
                    After
                  </p>
                  <p className="font-display font-bold text-[22px] text-dark-hero leading-tight">{selectedOutcome.after}</p>
                  <p className="text-[11px] text-text-sub mt-1">{selectedOutcome.context}</p>
                  <div
                    className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(20,184,166,0.08)',
                      border: '1px solid rgba(20,184,166,0.2)',
                    }}
                  >
                    <span style={{ color: '#14B8A6', fontSize: '12px' }}>★</span>
                    <span className="text-[11px] font-semibold" style={{ color: '#14B8A6' }}>
                      Outcome: Role Achieved
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-[14px] text-dark-hero">Interview &amp; Portfolio Readiness</span>
                  <span className="font-display font-bold text-[22px] text-dark-hero">94%</span>
                </div>
                <p className="text-[11px] text-text-sub mb-3">
                  Based on project completion, portfolio review, and mock interview progress.
                </p>

                <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(99,102,241,0.08)' }}>
                  <div
                    className="outcomes-progress-bar h-full rounded-full"
                    style={{
                      background: 'linear-gradient(to right, #4F46E5, #6366F1 50%, #14B8A6)',
                      width: '0%',
                      transition: 'width 0s',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                {[
                  {
                    label: 'Portfolio Built',
                    sub: 'Showcase-ready work completed',
                  },
                  {
                    label: 'Mock Interview Completed',
                    sub: 'Interview readiness strengthened',
                  },
                  {
                    label: 'Certificate Earned',
                    sub: 'Industry-recognized completion proof',
                  },
                ].map((chip) => (
                  <div
                    key={chip.label}
                    className="rounded-xl p-3 flex items-start gap-2.5"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(99,102,241,0.08)',
                      boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
                    }}
                  >
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                      style={{ background: '#14B8A6' }}
                    >
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-[12px] text-dark-hero leading-tight">{chip.label}</p>
                      <p className="text-[11px] text-text-sub">{chip.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center justify-between gap-4 flex-wrap -mx-7 lg:-mx-8 -mb-7 lg:-mb-8 mt-2 px-7 lg:px-8 py-5 rounded-b-2xl"
                style={{ background: 'rgba(99,102,241,0.06)', borderTop: '1px solid rgba(99,102,241,0.08)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['#4F46E5', '#14B8A6', '#8B5CF6', '#F59E0B'].map((c, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white font-bold text-[10px]"
                        style={{
                          backgroundColor: c,
                          borderColor: '#FFFFFF',
                          position: 'relative',
                          zIndex: 4 - i,
                        }}
                      >
                        {['A', 'P', 'R', 'S'][i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-text-secondary">
                    Explore success stories from <span className="font-bold text-dark-hero">15,000+</span> learners across
                    programs, challenges, and cohorts
                  </p>
                </div>

                <a
                  href="/contact"
                  className="text-indigo-main font-semibold text-[13px] flex items-center gap-1.5 flex-shrink-0 hover:gap-2.5 transition-all duration-200 group"
                >
                  View Success Stories
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-16" ref={carouselRef}>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Student Outcomes</p>
              <h3
                className="font-display font-bold text-dark-hero leading-tight mb-2"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                What Our Learners Say
              </h3>
              <p className="text-[15px] text-text-secondary max-w-sm">
                Real stories from real learners who transformed their careers with our hands-on learning experience.
              </p>
            </div>

            <div
              className="flex-shrink-0 flex items-center gap-4 px-6 py-4 rounded-2xl"
              style={{
                background: 'white',
                border: '1px solid rgba(99,102,241,0.12)',
                boxShadow: '0 4px 20px rgba(99,102,241,0.08)',
              }}
            >
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-[20px]" style={{ color: '#F59E0B' }}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[12px] text-text-sub">3,200+ verified reviews</p>
              </div>
              <div>
                <p className="font-display font-black text-dark-hero leading-none" style={{ fontSize: '40px' }}>
                  4.9
                </p>
                <p className="text-[12px] text-text-sub">out of 5</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[1180px]">
            <button
              onClick={() => scroll('left')}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-bg-tinted hover:-translate-y-1/2 hover:shadow-card-hover"
              style={{
                border: '1.5px solid rgba(99,102,241,0.2)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.1)',
              }}
            >
              <ChevronLeft size={20} style={{ color: '#4F46E5' }} />
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-bg-tinted hover:shadow-card-hover"
              style={{
                border: '1.5px solid rgba(99,102,241,0.2)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.1)',
              }}
            >
              <ChevronRight size={20} style={{ color: '#4F46E5' }} />
            </button>

            <div
              ref={trackRef}
              className="flex gap-5 overflow-x-auto pb-4 scroll-smooth scrollbar-none"
              style={{ scrollSnapType: 'x mandatory' }}
              onScroll={handleScroll}
            >
              {testimonials.map((t) => (
                <div key={t.id} style={{ scrollSnapAlign: 'start' }}>
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: activeIndex === i ? '24px' : '8px',
                    height: '8px',
                    background: activeIndex === i ? '#4F46E5' : 'rgba(99,102,241,0.2)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
