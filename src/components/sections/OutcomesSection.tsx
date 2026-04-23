'use client'

import { useEffect, useMemo, useRef } from 'react'
import { BarChart2, Bot, ChevronLeft, ChevronRight, GitMerge, ShieldCheck } from 'lucide-react'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import { gsap } from '@/lib/gsap-init'

const roles = [
  { label: 'AI Operator', Icon: Bot },
  { label: 'Data Analyst', Icon: BarChart2 },
  { label: 'DevOps Engineer', Icon: GitMerge },
  { label: 'Cyber Security Analyst', Icon: ShieldCheck },
]

export default function OutcomesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollByCard = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const first = el.querySelector<HTMLElement>('[data-card]')
    const delta = (first?.offsetWidth ?? 320) + 20
    el.scrollBy({ left: dir === 'left' ? -delta : delta, behavior: 'smooth' })
  }

  const outcomeChips = useMemo(
    () => [
      { label: 'Portfolio Built', ok: true },
      { label: 'Mock Interview Done', ok: true },
      { label: 'Certificate Earned', ok: true },
    ],
    [],
  )

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.outcomes-text',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.outcomes-top', start: 'top 78%' },
        },
      )

      gsap.fromTo(
        '.outcomes-visual',
        { opacity: 0, x: 40, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.outcomes-top', start: 'top 78%' },
        },
      )

      gsap.fromTo(
        '.skill-fill',
        { width: '0%' },
        {
          width: '94%',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.outcomes-visual', start: 'top 80%' },
        },
      )

      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials-carousel', start: 'top 85%' },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <div className="outcomes-top mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[45%_55%] lg:items-start">
          <div className="outcomes-text">
            <p className="mb-3 text-[11px] font-medium tracking-[0.15em] text-teal-main">OUTCOMES</p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-dark-hero [font-family:var(--font-display)]">
              Real Transitions. Real Careers.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-[1.65] text-text-secondary">
              Each course is designed with real projects, portfolios, and mock interviews, so you&apos;re fully prepared for
              roles like AI Operator, Data Analyst, DevOps Engineer, or Cyber Security Analyst.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {roles.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.15)] bg-bg-tinted px-4 py-2 text-[13px] font-medium text-indigo-main"
                >
                  <Icon size={16} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="outcomes-visual">
            <div className="rounded-xl2 border border-[rgba(99,102,241,0.12)] bg-bg-tinted p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] tracking-wider text-text-sub">BEFORE</p>
                  <p className="mt-1 text-[20px] font-bold text-dark-hero [font-family:var(--font-display)]">Graduate</p>
                </div>
                <div className="mx-2 mt-6 text-[24px] font-bold text-indigo-main">→</div>
                <div>
                  <p className="text-[10px] tracking-wider text-teal-main">AFTER</p>
                  <p className="mt-1 text-[20px] font-bold text-dark-hero [font-family:var(--font-display)]">
                    AI Automation Role
                  </p>
                </div>
              </div>

              <div className="my-5 h-px w-full bg-[rgba(99,102,241,0.12)]" />

              <div className="mt-4">
                <div className="flex items-center justify-between text-[13px] text-text-secondary">
                  <span>Skill Readiness</span>
                  <span>94%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-[rgba(99,102,241,0.1)]">
                  <div className="skill-fill h-2 rounded-full bg-[linear-gradient(to_right,#4F46E5,#14B8A6)]" style={{ width: '0%' }} />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {outcomeChips.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center rounded-full border border-[rgba(99,102,241,0.15)] bg-white px-3 py-1.5 text-[12px] font-medium text-text-secondary"
                  >
                    <span className="mr-1 font-bold text-teal-main">✓</span>
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-[22px] font-semibold text-dark-hero">What Our Learners Say</h3>
          <div className="flex items-center gap-2">
            <button
              aria-label="Scroll testimonials left"
              onClick={() => scrollByCard('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-indigo-main text-indigo-main transition-all duration-200 hover:bg-indigo-main hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Scroll testimonials right"
              onClick={() => scrollByCard('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-indigo-main text-indigo-main transition-all duration-200 hover:bg-indigo-main hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="testimonials-carousel relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <div key={t.id} data-card className="w-[85vw] flex-shrink-0 md:w-[calc(33.333%-14px)]">
                <TestimonialCard testimonial={t} className="testimonial-card w-full opacity-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
