'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-init'

const scholarBenefits = [
  'Real-world challenge prompts',
  'Performance-based evaluation',
  'Scholarship opportunity consideration',
  'Priority access to selected programs',
]

const workshopBenefits = [
  'Guided live session with practical industry context',
  'A mini task or hands-on project',
  'Exposure to real tools & workflows',
  'Clearer understanding of relevant career paths and skill expectations',
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
    <section ref={sectionRef} className="workshop-section w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <div className="workshop-heading mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-3 text-[11px] font-medium tracking-[0.15em] text-teal-main">LEARN BEFORE YOU COMMIT</p>
          <h2
            className="font-display font-bold text-dark-hero
    leading-[1.1] text-center"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            <span className="md:whitespace-nowrap">Experience the KanonKode Approach</span>
            <br />
            <span className="md:whitespace-nowrap">
              Before Choosing Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Full Path
              </span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-[1.65] text-text-secondary">
            Not ready to enroll yet? Start with a guided workshop or skill-based challenge to experience how KanonKode helps
            learners build, perform, and move toward real opportunities.
          </p>
          <p className="mt-3 text-[13px] text-text-secondary">
            Want to prove your potential? <span className="font-semibold text-dark-hero">Take the Challenge</span>. Want a
            guided preview? <span className="font-semibold text-dark-hero">Join the Workshop</span>.
          </p>
        </div>

        <div className="workshop-panels grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[55%_45%]">
          <div className="scholar-card relative overflow-hidden rounded-xl3 bg-dark-hero p-8 opacity-0 lg:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)',
                filter: 'blur(25px)',
              }}
            />

            <div className="relative">
              <span className="inline-flex rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.08)] px-4 py-2 text-[12px] font-medium text-white">
                Prove your potential. Unlock your opportunity.
              </span>

              <h3 className="mt-5 text-[28px] font-bold leading-[1.2] text-white [font-family:var(--font-display)] lg:text-[32px]">
                KanonKode <span className="text-indigo-light">Scholar Challenge</span>
              </h3>

              <p className="mt-4 text-[15px] leading-[1.65] text-white/65">
                Stand out by solving real tasks and demonstrating practical potential - with the chance to unlock scholarships,
                recognition, and priority access to selected KanonKode programs.
              </p>
              <p className="mt-3 text-[13px] text-white/70">
                <span className="font-semibold text-white">Best for:</span> motivated learners who want to prove ability and earn
                access to opportunities
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Duration: Challenge window', 'Format: Online', 'Evaluation included'].map((meta) => (
                  <span
                    key={meta}
                    className="rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.06)] px-3 py-1 text-[11px] text-white/80"
                  >
                    {meta}
                  </span>
                ))}
              </div>

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
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      { bg: '#6366F1', l: 'A' },
                      { bg: '#14B8A6', l: 'R' },
                      { bg: '#8B5CF6', l: 'S' },
                    ].map((av, i) => (
                      <div
                        key={i}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-[11px] font-bold text-white"
                        style={{
                          backgroundColor: av.bg,
                          borderColor: '#0F172A',
                          position: 'relative',
                          zIndex: 3 - i,
                        }}
                      >
                        {av.l}
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-[14px] font-semibold text-white">1k+ Participants</span>
              </div>
              <p className="mt-1 text-[12px] text-white/65">1,000+ challenge participants</p>

              <button
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
                  boxShadow: '0 6px 24px rgba(20,184,166,0.35)',
                }}
              >
                Take the Challenge
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div
            className="workshop-card relative flex overflow-hidden rounded-xl3 p-8 opacity-0 lg:p-10"
            style={{
              background: 'linear-gradient(145deg, #F8FAFF 0%, #EEF2FF 60%, #F0F9FF 100%)',
              border: '1.5px solid rgba(99,102,241,0.12)',
            }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl3">
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.06) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            </div>
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-bl-[7rem] border-2 border-[rgba(99,102,241,0.15)]" />

            <div className="relative flex min-h-full flex-1 flex-col">
              <span className="inline-flex w-fit rounded-full border border-[rgba(99,102,241,0.2)] bg-white px-4 py-2 text-[12px] font-medium text-text-secondary">
                Start building, not just learning.
              </span>

              <h3 className="mt-5 text-[24px] font-bold leading-[1.25] text-dark-hero [font-family:var(--font-display)] lg:text-[28px]">
                KanonKode Career Launch <span className="text-indigo-main">Workshop</span>
              </h3>

              <p className="mt-4 text-[15px] leading-[1.65] text-text-secondary">
                Join a guided hands-on session that helps you experience how KanonKode programs work through real tasks,
                practical tools, and structured learning context.
              </p>
              <p className="mt-3 text-[13px] text-text-secondary">
                <span className="font-semibold text-dark-hero">Best for:</span> learners who want a low-risk, guided preview
                before choosing a full program
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Next free session: 12 May', 'Live', 'Limited seats'].map((meta) => (
                  <span
                    key={meta}
                    className="rounded-full border border-[rgba(99,102,241,0.2)] bg-white px-3 py-1 text-[11px] text-text-secondary"
                  >
                    {meta}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-[14px] font-semibold text-dark-hero">What you&apos;ll get:</p>
              <div className="mt-3 space-y-2.5">
                {workshopBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.2)' }}
                    >
                      <div className="h-2 w-2 rounded-full bg-indigo-main" />
                    </div>
                    <span className="text-[14px] text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <button
                className="group mt-auto flex w-full items-center justify-center gap-2 rounded-xl py-4 pt-4 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow: '0 6px 24px rgba(79,70,229,0.35)',
                }}
              >
                Reserve Your Spot
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
