'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Calendar, CheckCircle2, Clock, User, Video } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'

export default function CareerCounselling() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.counselling-left',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.counselling-section', start: 'top 78%' },
        },
      )

      gsap.fromTo(
        '.counselling-card',
        { opacity: 0, x: 50, rotateY: 8 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.85,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.counselling-section', start: 'top 78%' },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="counselling-section relative w-full overflow-hidden bg-dark-hero py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-[100px] -top-[100px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] blur-[60px]" />
      <div className="pointer-events-none absolute -bottom-[80px] -right-[80px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)] blur-[50px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-[55%_45%] lg:px-12">
        <div className="counselling-left">
          <span className="inline-flex rounded-full border border-[rgba(20,184,166,0.25)] bg-[rgba(20,184,166,0.12)] px-4 py-2 text-[12px] font-medium text-teal-main">
            Free — No commitment required
          </span>

          <h2 className="mt-5 text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-white [font-family:var(--font-display)]">
            Get Free
            <br />
            Career{' '}
            <span className="relative inline-block">
              Counselling
              <span className="absolute -bottom-2 left-0 h-[12px] w-full">
                <svg viewBox="0 0 300 12" preserveAspectRatio="none" className="h-full w-full">
                  <motion.path
                    d="M2 9 C50 3, 100 11, 150 6 S250 3, 298 8"
                    stroke="#14B8A6"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
                  />
                </svg>
              </span>
            </span>
          </h2>

          <p className="mt-5 max-w-[440px] text-[16px] leading-[1.7] text-white/65">
            Talk to a Kanonkode career advisor — understand which programme fits your goals, timeline, and current skill
            level. No pressure, no sales pitch. Just clarity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {[
              '30-min focused session',
              'Industry-aligned advice',
              'Completely free',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-main" />
                <span className="text-[14px] font-medium text-white/70">{t}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-teal-main px-10 py-[18px] text-[16px] font-bold text-white transition-all duration-250 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-[3px] hover:bg-teal-hover hover:shadow-teal">
            <Calendar size={20} />
            Book a Meeting
            <ArrowRight size={18} />
          </button>

          <p className="mt-4 text-[13px] text-white/40">Typically responds within 24 hours · Available Mon–Sat</p>
        </div>

        <div className="counselling-card hidden md:block">
          <div className="ml-auto max-w-[360px] rounded-xl3 border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-semibold text-white [font-family:var(--font-display)]">Career Advisory Session</p>
              <span className="rounded-full bg-teal-main px-3 py-1 text-[11px] font-bold text-white">FREE</span>
            </div>
            <div className="mt-4 border-t border-white/10" />

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-teal-main" />
                <span className="text-[14px] text-white/75">30 minutes, 1-on-1 session</span>
              </div>
              <div className="flex items-center gap-3">
                <Video size={18} className="text-teal-main" />
                <span className="text-[14px] text-white/75">Google Meet / Zoom</span>
              </div>
              <div className="flex items-center gap-3">
                <User size={18} className="text-teal-main" />
                <span className="text-[14px] text-white/75">Kanonkode Career Advisor</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-teal-main" />
                <span className="text-[14px] text-white/75">Programme recommendation included</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-[rgba(20,184,166,0.2)] bg-[rgba(20,184,166,0.1)] p-4">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-main" />
              <span className="text-[13px] text-white/80">Next available slot: Tomorrow, 10:00 AM</span>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-main py-4 text-[15px] font-bold text-white transition-all duration-200 hover:bg-teal-hover hover:shadow-teal">
              Book Your Free Session → <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
