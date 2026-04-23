'use client'

import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import { gsap, ScrollTrigger } from '@/lib/gsap-init'

const steps = [
  {
    number: '1',
    label: 'Join a live cohort',
    color: 'rgba(99,102,241,0.15)',
    barClass: '',
  },
  {
    number: '2',
    label: 'Learn guided execution',
    color: 'rgba(99,102,241,0.30)',
    barClass: '',
  },
  {
    number: '3',
    label: 'Build projects / capability',
    color: 'rgba(99,102,241,0.55)',
    barClass: '',
  },
  {
    number: '4',
    label: 'Stronger career outcomes',
    color: '#4F46E5',
    barClass: 'bg-gradient-to-t from-indigo-main to-indigo-light shadow-[0_-8px_32px_rgba(79,70,229,0.35)]',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const placedRef = useRef<HTMLSpanElement | null>(null)
  const completionRef = useRef<HTMLSpanElement | null>(null)
  const ratingRef = useRef<HTMLSpanElement | null>(null)
  const milestonesAnimated = useRef(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const targetHeights = ['25%', '50%', '75%', '100%']

      const bars = gsap.utils.toArray<HTMLElement>('.stair-bar')
      bars.forEach((bar, i) => {
        gsap.fromTo(
          bar,
          { height: 0 },
          {
            height: targetHeights[i],
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.staircase-container',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.18,
          },
        )

        gsap.fromTo(
          `.stair-label-${i}`,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: i * 0.18 + 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.staircase-container',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      ScrollTrigger.create({
        trigger: '.milestone-strip',
        start: 'top 85%',
        onEnter: () => {
          if (milestonesAnimated.current) return
          milestonesAnimated.current = true

          const placed = { val: 0 }
          const completion = { val: 0 }
          const rating = { val: 0 }

          gsap.to(placed, {
            val: 500,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: () => {
              if (placedRef.current) placedRef.current.textContent = `${Math.round(placed.val)}+`
            },
          })
          gsap.to(completion, {
            val: 92,
            duration: 1.1,
            ease: 'power2.out',
            onUpdate: () => {
              if (completionRef.current) completionRef.current.textContent = `${Math.round(completion.val)}%`
            },
          })
          gsap.to(rating, {
            val: 4.8,
            duration: 1.1,
            ease: 'power2.out',
            onUpdate: () => {
              if (ratingRef.current) ratingRef.current.textContent = `${rating.val.toFixed(1)}★`
            },
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-bg-soft py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-[60px] -top-[60px] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[40%_60%]">
          <div className="lg:sticky lg:top-32">
            <p className="mb-3 text-[11px] font-medium tracking-[0.15em] text-teal-main">HOW IT WORKS</p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-bold leading-[1.15] text-dark-hero [font-family:var(--font-display)]">
              Four Steps to a Career-Ready You
            </h2>
            <p className="mt-4 max-w-sm text-base leading-[1.65] text-text-secondary">
              Experience how we help you learn, build, and move toward real career outcomes — before you commit.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="#">
                Explore Programmes →
              </Button>
            </div>
          </div>

          <div>
            <div className="staircase-container flex h-[380px] items-end gap-4 lg:gap-5">
              {steps.map((step, i) => (
                <div key={step.number} className="flex flex-1 flex-col items-center justify-end">
                  <div className={`stair-label-${i} mb-2 text-center opacity-0`}>
                    <p className={`mx-auto mb-2 max-w-[90px] text-[13px] font-medium leading-[1.35] ${i === 3 ? 'text-dark-hero' : 'text-text-secondary'}`}>
                      {step.label}
                    </p>
                    <div
                      className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-[16px] font-bold text-white [font-family:var(--font-display)] ${
                        i === 3 ? 'bg-indigo-main' : 'bg-dark-card'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className={`stair-bar w-full rounded-t-[12px] ${i === 3 ? step.barClass : ''}`} style={{ background: i === 3 ? undefined : step.color, height: 0 }} />
                </div>
              ))}
            </div>
            <div className="mt-0 h-px w-full border-t-2 border-dashed border-[rgba(99,102,241,0.2)]" />

            <div className="milestone-strip mt-12 flex flex-col items-stretch justify-between gap-8 md:flex-row md:items-center md:gap-0">
              <div className="flex flex-1 flex-col items-center text-center">
                <span ref={placedRef} className="font-display text-[36px] font-bold text-indigo-main">
                  0+
                </span>
                <span className="mt-1 text-[13px] text-text-secondary">Students placed in roles</span>
              </div>
              <div className="hidden h-10 w-px bg-[rgba(99,102,241,0.15)] md:block" />
              <div className="flex flex-1 flex-col items-center text-center">
                <span ref={completionRef} className="font-display text-[36px] font-bold text-indigo-main">
                  0%
                </span>
                <span className="mt-1 text-[13px] text-text-secondary">Programme completion rate</span>
              </div>
              <div className="hidden h-10 w-px bg-[rgba(99,102,241,0.15)] md:block" />
              <div className="flex flex-1 flex-col items-center text-center">
                <span ref={ratingRef} className="font-display text-[36px] font-bold text-indigo-main">
                  0.0★
                </span>
                <span className="mt-1 text-[13px] text-text-secondary">Average learner rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
