'use client'

import { useEffect, useRef } from 'react'
import { FileText, Filter, Swords, Trophy, type LucideIcon } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

type Step = {
  num: number
  label: string
  title: string
  desc: string
  icon: LucideIcon
  color: string
  softBg: string
  borderColor: string
  glowColor: string
  side: 'left' | 'right'
  tag: string
}

const steps: Step[] = [
  {
    num: 1,
    label: 'Step 1',
    title: 'APPLICATION OPEN',
    desc: 'Complete the application form with your details, portfolio link, and a brief intent statement. Takes 5 minutes.',
    icon: FileText,
    color: '#4F46E5',
    softBg: 'rgba(79,70,229,0.08)',
    borderColor: '#4F46E5',
    glowColor: 'rgba(79,70,229,0.25)',
    side: 'left',
    tag: 'Open Now',
  },
  {
    num: 2,
    label: 'Step 2',
    title: 'SHORTLISTING',
    desc: 'Applications are reviewed based on portfolio quality and intent clarity. Shortlisted candidates receive an email within 5 business days.',
    icon: Filter,
    color: '#14B8A6',
    softBg: 'rgba(20,184,166,0.08)',
    borderColor: '#14B8A6',
    glowColor: 'rgba(20,184,166,0.25)',
    side: 'right',
    tag: '~5 Days',
  },
  {
    num: 3,
    label: 'Step 3',
    title: 'CHALLENGE ROUND',
    desc: 'Shortlisted participants receive a real-world technical task. You have 48 hours to complete and submit your solution.',
    icon: Swords,
    color: '#8B5CF6',
    softBg: 'rgba(139,92,246,0.08)',
    borderColor: '#8B5CF6',
    glowColor: 'rgba(139,92,246,0.25)',
    side: 'left',
    tag: '48 Hours',
  },
  {
    num: 4,
    label: 'Step 4',
    title: 'FINAL SELECTION',
    desc: 'Top submissions are evaluated by our panel. Winners receive scholarship letters and priority programme enrollment.',
    icon: Trophy,
    color: '#F59E0B',
    softBg: 'rgba(245,158,11,0.08)',
    borderColor: '#F59E0B',
    glowColor: 'rgba(245,158,11,0.25)',
    side: 'right',
    tag: 'Results',
  },
]

export default function ProtocolTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '.timeline-steps',
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 1,
          },
        },
      )

      const isMobile = window.matchMedia('(max-width: 1023px)').matches

      steps.forEach((step, i) => {
        const isLeft = step.side === 'left'
        const card = `.tl-card-${i}`
        const icon = `.tl-icon-${i}`
        const num = `.tl-num-${i}`
        const count = `.tl-count-${i}`

        gsap.fromTo(
          card,
          isMobile ? { opacity: 0, y: 40, scale: 0.92 } : { opacity: 0, x: isLeft ? -100 : 100, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          },
        )

        gsap.fromTo(
          icon,
          { scale: 0, rotation: -15 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: 'back.out(2)',
            delay: 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          },
        )

        gsap.fromTo(
          num,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          },
        )

        const counterObj = { val: 0 }
        gsap.to(counterObj, {
          val: step.num,
          duration: 0.7,
          ease: 'power2.out',
          onUpdate: () => {
            const target = document.querySelector(count)
            if (target) target.textContent = String(Math.round(counterObj.val))
          },
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="timeline" className="py-20 sm:py-24 lg:py-32 overflow-hidden" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">The Process</p>
          <h2 className="font-display font-bold text-dark-hero leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
            Protocol{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Timeline
            </span>
          </h2>
        </div>

        <div className="timeline-steps relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden lg:block" style={{ background: 'rgba(99,102,241,0.15)' }}>
            <div
              ref={lineRef}
              className="timeline-line absolute inset-0 origin-top"
              style={{
                background: 'linear-gradient(to bottom, #4F46E5, #14B8A6, #8B5CF6, #F59E0B)',
                transform: 'scaleY(0)',
              }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = step.side === 'left'

              return (
                <div key={i} className="flex items-center gap-0 lg:gap-0 flex-col lg:flex-row">
                  <div className={`w-full lg:w-[calc(50%-40px)] flex ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} order-2 lg:order-none`}>
                    {isLeft ? (
                      <div
                        className={`tl-card-${i} group relative bg-white rounded-2xl p-5 sm:p-7 w-full lg:w-[88%] transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                        style={{
                          border: '1px solid rgba(99,102,241,0.1)',
                          borderRight: `4px solid ${step.borderColor}`,
                          boxShadow: '0 4px 24px rgba(99,102,241,0.12)',
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className={`tl-num-${i} inline-block text-[11px] font-bold tracking-wider uppercase mb-2`} style={{ color: step.color }}>
                              {step.label}
                            </span>
                            <h3 className="font-display font-black text-[17px] sm:text-[19px] text-dark-hero leading-tight tracking-tight">{step.title}</h3>
                          </div>
                          <span
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-4"
                            style={{
                              background: step.softBg,
                              color: step.color,
                              border: `1px solid ${step.color}30`,
                            }}
                          >
                            {step.tag}
                          </span>
                        </div>
                        <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 order-1 lg:order-none mb-4 lg:mb-0">
                    <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500" style={{ boxShadow: `0 0 0 8px ${step.glowColor}` }} />

                    <div
                      className={`tl-icon-${i} w-[58px] h-[58px] sm:w-[72px] sm:h-[72px] rounded-2xl flex items-center justify-center`}
                      style={{
                        background: '#FFFFFF',
                        border: `2px solid ${step.color}35`,
                        boxShadow: `0 4px 20px ${step.glowColor}, 0 0 0 6px ${step.softBg}`,
                      }}
                    >
                      <Icon size={24} style={{ color: step.color }} />
                    </div>

                    <div
                      className={`tl-count-${i} absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 rounded-full flex items-center justify-center text-white font-black text-[11px] border-2 border-white`}
                      style={{ background: step.color }}
                    >
                      0
                    </div>
                  </div>

                  <div className={`w-full lg:w-[calc(50%-40px)] flex ${!isLeft ? 'lg:justify-start' : 'lg:justify-end'} order-3 lg:order-none`}>
                    {!isLeft ? (
                      <div
                        className={`tl-card-${i} group relative bg-white rounded-2xl p-5 sm:p-7 w-full lg:w-[88%] transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                        style={{
                          border: '1px solid rgba(99,102,241,0.1)',
                          borderLeft: `4px solid ${step.borderColor}`,
                          boxShadow: '0 4px 24px rgba(99,102,241,0.12)',
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className={`tl-num-${i} inline-block text-[11px] font-bold tracking-wider uppercase mb-2`} style={{ color: step.color }}>
                              {step.label}
                            </span>
                            <h3 className="font-display font-black text-[17px] sm:text-[19px] text-dark-hero leading-tight tracking-tight">{step.title}</h3>
                          </div>
                          <span
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-4"
                            style={{
                              background: step.softBg,
                              color: step.color,
                              border: `1px solid ${step.color}30`,
                            }}
                          >
                            {step.tag}
                          </span>
                        </div>
                        <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className="mt-16 flex flex-col items-center gap-4 rounded-2xl px-4 py-8 sm:mt-20 sm:py-10"
          style={{
            background: 'white',
            border: '1px solid rgba(99,102,241,0.1)',
            boxShadow: '0 4px 24px rgba(99,102,241,0.08)',
            maxWidth: '400px',
            margin: '5rem auto 0',
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
              boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
            }}
          >
            <Trophy size={26} className="text-white" />
          </div>
          <div className="text-center">
            <p className="font-display font-bold text-[18px] text-dark-hero mb-1">Scholarship Awarded</p>
            <p className="text-[13px] text-text-secondary">50-75% off any Kanonkode programme</p>
          </div>
          <a
            href="#apply"
            className="mt-2 inline-flex items-center gap-2 font-bold text-[14px] text-white px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
            style={{
              background: 'linear-gradient(135deg, #14B8A6, #0D9488)',
              boxShadow: '0 4px 16px rgba(20,184,166,0.3)',
            }}
          >
            Start Your Application
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
