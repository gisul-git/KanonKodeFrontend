'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2, Shield, Zap } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const eligibility = [
  'Students or early professionals looking for radical growth',
  'Clear intent to execute and ship real products',
  'Basic proficiency in code or data structures',
  'Hunger to prove capability - not just potential',
]

const features = [
  {
    icon: Shield,
    title: 'Practical Rigour',
    desc: 'Solve real-world engineering problems that mirror actual industry sprints.',
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.08)',
  },
  {
    icon: Zap,
    title: 'Meritocracy',
    desc: 'Your entry is strictly determined by the quality of your output - nothing else.',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
  },
]

export default function SelectiveMandate() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.mandate-left',
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      },
    )
    gsap.fromTo(
      '.mandate-right',
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-start gap-10 sm:gap-12 lg:flex-row lg:gap-16">
          <div className="mandate-left flex-1">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-text-sub">The Selective Mandate</p>
            <h2 className="mb-5 font-display font-bold leading-[1.1] text-dark-hero" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
              Not a Typical Application.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                A High-Stakes Environment.
              </span>
            </h2>
            <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-text-secondary sm:mb-10 sm:text-[16px]">
              The Kanonkode Scholar Challenge is designed to identify high potential learners through real technical tasks. We
              don&apos;t care about your CV - we care about your execution.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-10 sm:gap-5 sm:grid-cols-2">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={i} className="rounded-2xl p-5 sm:p-6" style={{ background: f.bg, border: `1px solid ${f.color}20` }}>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${f.color}15` }}>
                      <Icon size={20} style={{ color: f.color }} />
                    </div>
                    <h3 className="mb-2 font-display text-[16px] font-bold text-dark-hero">{f.title}</h3>
                    <p className="text-[13px] leading-relaxed text-text-secondary">{f.desc}</p>
                  </div>
                )
              })}
            </div>

            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{ background: '#F8FAFC', border: '1px solid rgba(99,102,241,0.1)', borderLeft: '4px solid #4F46E5' }}
            >
              <p className="font-display text-[17px] font-bold leading-snug text-dark-hero">
                &quot;Execution is the only thing that matters. Show us what you&apos;ve built, not what you&apos;ve thought about
                building.&quot;
              </p>
            </div>
          </div>

          <div className="mandate-right w-full flex-shrink-0 lg:w-[380px]">
            <div
              className="overflow-hidden rounded-2xl"
              style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 16px 48px rgba(0,0,0,0.2)' }}
            >
              <div className="px-5 py-5 sm:px-7" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="mb-1 flex items-center gap-2">
                  <Shield size={16} style={{ color: '#6366F1' }} />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: '#6366F1' }}>
                    Eligibility
                  </p>
                </div>
              </div>

              <div className="px-5 py-6 sm:px-7" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="space-y-4">
                  {eligibility.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#14B8A6' }} />
                      <p className="text-[14px] leading-snug" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-5 py-6 sm:px-7">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Primary Reward
                </p>
                <p className="mb-1 font-display text-[28px] font-black leading-tight text-white">50-75% Scholarship</p>
                <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  On any Kanonkode programme of your choice
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Certificate', 'Priority Access', 'Recognition'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-[11px] font-semibold"
                      style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)', color: '#818CF8' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#apply"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #14B8A6, #0D9488)', boxShadow: '0 4px 16px rgba(20,184,166,0.3)' }}
                >
                  Apply Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
