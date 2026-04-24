'use client'
import { useEffect, useRef } from 'react'
import { Target, Telescope } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

export default function MissionVision() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.mv-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-teal-main">What Drives Us</p>
          <h2
            className="font-display font-bold leading-[1.1] text-dark-hero"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Mission &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Vision
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 lg:grid-cols-2">
          <div className="mv-card relative overflow-hidden rounded-xl3 p-5 sm:p-8 lg:p-10" style={{ background: '#0F172A', minHeight: '280px' }}>
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
            <div className="relative z-10">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}
              >
                <Target size={26} style={{ color: '#6366F1' }} />
              </div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: '#6366F1' }}>
                Our Mission
              </p>
              <h3 className="mb-4 text-[24px] font-bold leading-[1.2] text-white [font-family:var(--font-display)] sm:text-[28px] lg:text-[32px]">
                Make Practical Tech Education Accessible to Every Learner
              </h3>
              <p className="text-[15px] leading-[1.65] text-white/65">
                We build programmes that go beyond content - combining live instruction, real execution, and career support into one
                structured system that actually works.
              </p>
            </div>
          </div>

          <div
            className="mv-card relative flex overflow-hidden rounded-xl3 p-5 sm:p-8 lg:p-10"
            style={{
              background: 'linear-gradient(145deg, #F8FAFF 0%, #EEF2FF 60%, #F0F9FF 100%)',
              border: '1.5px solid rgba(99,102,241,0.12)',
              minHeight: '280px',
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl3"
            >
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
            <div className="relative z-10">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white"
                style={{ border: '1px solid rgba(99,102,241,0.15)', boxShadow: '0 4px 16px rgba(99,102,241,0.1)' }}
              >
                <Telescope size={26} style={{ color: '#4F46E5' }} />
              </div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-teal-main">Our Vision</p>
              <h3 className="mb-4 text-[24px] font-bold leading-[1.2] text-dark-hero [font-family:var(--font-display)] sm:text-[28px] lg:text-[32px]">
                Be the Career Launchpad for 1 Million+ Tech Professionals
              </h3>
              <p className="text-[15px] leading-[1.65] text-text-secondary">
                A future where every motivated learner - regardless of background - has a clear, supported, and structured path to a
                meaningful tech career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
