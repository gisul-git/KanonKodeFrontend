'use client'

import { useEffect, useRef } from 'react'
import { Users, BookOpen, Layers, Rocket, type LucideIcon } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

type Step = {
  number: string
  title: string
  desc: string
  icon: LucideIcon
  color: string
  glow: string
  tag: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Join a Live Cohort',
    desc: 'Pick your programme and enroll in the next live batch. Meet your cohort and get oriented.',
    icon: Users,
    color: '#6366F1',
    glow: 'rgba(99,102,241,0.4)',
    tag: 'Week 1',
  },
  {
    number: '02',
    title: 'Learn with Guided Execution',
    desc: 'Attend live sessions, complete guided tasks, and build alongside industry practitioners.',
    icon: BookOpen,
    color: '#14B8A6',
    glow: 'rgba(20,184,166,0.4)',
    tag: 'Weeks 2–6',
  },
  {
    number: '03',
    title: 'Build Real Projects',
    desc: 'Apply your skills to real-world projects. Build a portfolio that proves what you can do.',
    icon: Layers,
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.4)',
    tag: 'Weeks 7–10',
  },
  {
    number: '04',
    title: 'Get Career-Ready',
    desc: 'Mock interviews, resume reviews, and placement support until you land the role.',
    icon: Rocket,
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.4)',
    tag: 'Final Week',
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon
  return (
    <div className={`hiw-step-card step-card-${index} group flex flex-col items-center text-center`}>
      <div
        className="relative z-10 mb-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${step.color}30, ${step.color}15)`,
          border: `1.5px solid ${step.color}50`,
          boxShadow: `0 0 0 0 ${step.glow}`,
        }}
      >
        <Icon size={22} style={{ color: step.color }} />
        <div
          className="hiw-glow-ring absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
          style={{ boxShadow: `0 0 24px 8px ${step.glow}` }}
        />
      </div>

      <div
        className="flex w-full flex-col gap-3 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 transition-all duration-300 hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.07)]"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <span
          className="inline-flex self-start rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider"
          style={{
            backgroundColor: `${step.color}18`,
            color: step.color,
            border: `1px solid ${step.color}30`,
          }}
        >
          {step.tag}
        </span>

        <span className="select-none font-display text-[48px] font-black leading-none opacity-10" style={{ color: step.color }}>
          {step.number}
        </span>

        <h3 className="-mt-3 font-display text-[17px] font-bold leading-snug text-white">{step.title}</h3>

        <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {step.desc}
        </p>

        <div className="accent-line mt-1 h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-full" style={{ backgroundColor: step.color }} />
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const stat1Ref = useRef<HTMLSpanElement>(null)
  const stat2Ref = useRef<HTMLSpanElement>(null)
  const stat3Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hiw-timeline-area',
        start: 'top 72%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.fromTo('.hiw-heading', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    tl.to('.hiw-progress-line', { strokeDashoffset: '0%', duration: 1.6, ease: 'power2.inOut' }, '-=0.2')

    steps.forEach((_, i) => {
      tl.fromTo(
        `.step-card-${i}`,
        { opacity: 0, y: 50, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'power3.out' },
        `-=${i === 0 ? 0.8 : 0.3}`,
      )
      tl.to(`.step-card-${i} .hiw-glow-ring`, { opacity: 1, duration: 0.3 }, '<')
    })

    gsap.to(
      { val: 0 },
      {
        val: 500,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.hiw-stats', start: 'top 85%' },
        onUpdate: function () {
          if (stat1Ref.current) stat1Ref.current.textContent = `${Math.round(this.targets()[0].val)}+`
        },
      },
    )

    gsap.to(
      { val: 0 },
      {
        val: 92,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.hiw-stats', start: 'top 85%' },
        onUpdate: function () {
          if (stat2Ref.current) stat2Ref.current.textContent = `${Math.round(this.targets()[0].val)}%`
        },
      },
    )

    gsap.to(
      { val: 0 },
      {
        val: 4.8,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.hiw-stats', start: 'top 85%' },
        onUpdate: function () {
          if (stat3Ref.current) stat3Ref.current.textContent = `${this.targets()[0].val.toFixed(1)}★`
        },
      },
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={sectionRef} className="hiw-section relative overflow-hidden bg-dark-hero py-24 lg:py-32">
      <div
        className="hiw-orb pointer-events-none absolute -left-[100px] -top-[200px] h-[600px] w-[600px] rounded-full max-md:opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="hiw-orb-2 pointer-events-none absolute -bottom-[150px] -right-[100px] h-[500px] w-[500px] rounded-full max-md:opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="hiw-heading mb-20 text-center">
          <span className="mx-auto inline-flex rounded-full border border-[rgba(20,184,166,0.25)] bg-[rgba(20,184,166,0.1)] px-4 py-2 text-[12px] font-medium text-teal-main">
            ✦ How It Works
          </span>
          <h2 className="mt-5 font-display font-bold leading-[1.05] text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            Your Path from
            <br />
            Zero to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366F1, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Career-Ready
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Four structured steps that take you from curiosity to capability — with live support every step of the way.
          </p>
        </div>

        <div className="hiw-timeline-area relative mb-6" ref={timelineRef}>
          <svg className="hiw-timeline-svg absolute left-0 top-[28px] hidden w-full lg:block" height="4" style={{ overflow: 'visible' }}>
            <line x1="12.5%" y1="2" x2="87.5%" y2="2" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="6 4" />
            <line className="hiw-progress-line" x1="12.5%" y1="2" x2="87.5%" y2="2" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="33%" stopColor="#14B8A6" />
                <stop offset="66%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        <div className="hiw-stats mt-20 flex flex-col items-center justify-between gap-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-8 py-10 backdrop-blur-sm sm:flex-row lg:px-16">
          <div className="flex flex-1 flex-col items-center text-center">
            <span ref={stat1Ref} className="font-display text-[56px] font-black leading-none" style={{ color: '#6366F1' }}>
              0+
            </span>
            <span className="mt-2 max-w-[120px] text-center text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Students placed in roles
            </span>
          </div>
          <div className="hidden h-16 w-px bg-[rgba(255,255,255,0.08)] sm:block" />
          <div className="flex flex-1 flex-col items-center text-center">
            <span ref={stat2Ref} className="font-display text-[56px] font-black leading-none" style={{ color: '#14B8A6' }}>
              0%
            </span>
            <span className="mt-2 max-w-[120px] text-center text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Programme completion rate
            </span>
          </div>
          <div className="hidden h-16 w-px bg-[rgba(255,255,255,0.08)] sm:block" />
          <div className="flex flex-1 flex-col items-center text-center">
            <span ref={stat3Ref} className="font-display text-[56px] font-black leading-none" style={{ color: '#F59E0B' }}>
              0.0★
            </span>
            <span className="mt-2 max-w-[120px] text-center text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Average learner rating
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hiw-progress-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        .hiw-step-card .accent-line {
          transition: width 0.5s ease;
        }
        @keyframes orbDrift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 15px) scale(0.97);
          }
        }
        .hiw-orb {
          animation: orbDrift 12s ease-in-out infinite;
        }
        .hiw-orb-2 {
          animation: orbDrift 16s ease-in-out infinite reverse;
        }
      `}</style>
    </section>
  )
}
