'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-init'

const scholarBenefits = [
  'Real-world problem statements',
  'Performance-based evaluation',
  'Scholarship opportunities',
  'Early access to programmes',
]

const workshopBenefits = [
  'Live guided session with industry context',
  'Hands-on mini project or task',
  'Exposure to real tools & workflows',
  'Clarity on career paths and skill expectations',
]

export default function WorkshopScholar() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.workshop-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.workshop-section', start: 'top 80%' },
        },
      )

      gsap.fromTo(
        '.scholar-card',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.workshop-panels', start: 'top 82%' },
        },
      )

      gsap.fromTo(
        '.workshop-card',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.workshop-panels', start: 'top 82%' },
        },
      )
    }, sectionRef)

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="workshop-section w-full bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <div className="workshop-heading mx-auto mb-16 max-w-[640px] text-center">
          <p className="mb-3 text-[11px] font-medium tracking-[0.15em] text-teal-main">LEARN BEFORE YOU COMMIT</p>
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-dark-hero [font-family:var(--font-display)]">
            Workshop &amp; Scholar Challenge
          </h2>
          <p className="mt-4 text-base leading-[1.65] text-text-secondary">
            Experience how we help you learn, build, and move toward real career outcomes — before you commit.
          </p>
        </div>

        <div className="workshop-panels grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[55%_45%]">
          <div className="scholar-card relative overflow-hidden rounded-xl3 bg-dark-hero p-8 opacity-0 lg:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[rgba(99,102,241,0.12)]" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[rgba(20,184,166,0.08)]" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.08)] px-4 py-2 text-[12px] font-medium text-white">
                Prove your potential. Earn your opportunity.
              </span>

              <h3 className="mt-5 text-[28px] font-bold leading-[1.2] text-white [font-family:var(--font-display)] lg:text-[32px]">
                Kanonkode <span className="text-indigo-light">Scholar Challenge</span>
              </h3>

              <p className="mt-4 text-[15px] leading-[1.65] text-white/65">
                Stand out by completing real tasks — and unlock scholarships, recognition, and priority access to
                Kanonkode programmes.
              </p>

              <p className="mt-6 text-[14px] font-semibold text-white">What you&apos;ll get:</p>
              <div className="mt-3 space-y-2.5">
                {scholarBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-teal-main" />
                    <span className="text-[14px] text-white/75">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-light text-sm font-semibold text-white">A</div>
                  <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-main text-sm font-semibold text-white">R</div>
                  <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-main text-sm font-semibold text-white">S</div>
                </div>
                <span className="text-sm font-semibold text-white">1k+ Participants</span>
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-main py-4 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-hover hover:shadow-teal">
                Take the Challenge <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="workshop-card relative flex overflow-hidden rounded-xl3 border-[1.5px] border-[rgba(99,102,241,0.15)] bg-bg-tinted p-8 opacity-0 lg:p-10">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-bl-[7rem] border-2 border-[rgba(99,102,241,0.15)]" />

            <div className="relative flex min-h-full flex-1 flex-col">
              <span className="inline-flex w-fit rounded-full border border-[rgba(99,102,241,0.2)] bg-white px-4 py-2 text-[12px] font-medium text-text-secondary">
                Start building, not just learning.
              </span>

              <h3 className="mt-5 text-[24px] font-bold leading-[1.25] text-dark-hero [font-family:var(--font-display)] lg:text-[28px]">
                Kanonkode Career Launch <span className="text-indigo-main">Workshop</span>
              </h3>

              <p className="mt-4 text-[15px] leading-[1.65] text-text-secondary">
                Get a clear understanding of how Kanonkode programmes actually work — through hands-on execution.
              </p>

              <p className="mt-6 text-[14px] font-semibold text-dark-hero">What you&apos;ll get:</p>
              <div className="mt-3 space-y-2.5">
                {workshopBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-indigo-main" />
                    <span className="text-[14px] text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-main py-4 pt-4 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-hover">
                Join Free Workshop <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
