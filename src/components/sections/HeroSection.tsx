'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Star, Users, Zap } from 'lucide-react'
import { useEffect } from 'react'
import { gsap } from '@/lib/gsap-init'
import Image from 'next/image'

const companies = ['Google', 'Microsoft', 'amazon', 'Deloitte.', 'IBM', 'TATA', 'Infosys', 'accenture']

export default function HeroSection() {
  useEffect(() => {
    gsap.fromTo(
      '.hero-item',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      },
    )

    gsap.fromTo(
      '.hero-deco-text',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out', delay: 0.5 },
    )
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/BgHero.png"
        alt="Kanonkode hero background"
        fill
        priority
        className="absolute inset-0 object-cover"
        style={{ zIndex: 0 }}
      />

      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(105deg, rgba(0, 0, 0, 0.92) 0%, rgba(15, 23, 42, 0.74) 40%, rgba(15, 23, 42, 0) 70%, rgba(15, 23, 42, 0.22) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 2,
          background:
            'linear-gradient(to bottom right, rgba(79, 70, 229, 0.18) 0%, transparent 50%, rgba(20, 184, 166, 0.08) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]"
        style={{ zIndex: 3, background: 'linear-gradient(to bottom, transparent, rgba(15,23,42,0.6))' }}
      />

      {/* <div className="hero-deco-text pointer-events-none absolute right-[60px] top-1/2 hidden -translate-y-1/2 text-right lg:block" style={{ zIndex: 5 }}>
        <p className="text-[clamp(3rem,6vw,5.5rem)] font-black tracking-[-0.04em] text-white/[0.07] [font-family:var(--font-display)]">Build</p>
        <p className="text-[clamp(3rem,6vw,5.5rem)] font-black tracking-[-0.04em] text-white/[0.05] [font-family:var(--font-display)]">Ship</p>
        <p className="text-[clamp(3rem,6vw,5.5rem)] font-black tracking-[-0.04em] text-white/[0.04] [font-family:var(--font-display)]">Grow</p>
      </div> */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] flex-col justify-center px-6 pb-20 pt-[108px] lg:px-16">
        <div className="max-w-[680px]">
          <div className="hero-item inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal-main" />
            <span className="text-[13px] font-medium text-white/80">New: AI Programmes Now Live →</span>
          </div>

          <div className="hero-item mt-6">
            <h1 className="text-[clamp(3rem,7vw,6rem)] font-black leading-[1] tracking-[-0.03em] [font-family:var(--font-display)]">
              <span className="block text-white">Learn Today.</span>
              <span className="block text-white">Build Real Skills.</span>
              <span className="relative block text-indigo-light">
                Get Hired<span className="text-teal-main">.</span>
                <span className="absolute -bottom-2 left-0 h-[14px] w-[72%]">
                  <svg viewBox="0 0 300 12" preserveAspectRatio="none" className="h-full w-full">
                    <motion.path
                      d="M2 9 C50 3, 100 11, 150 6 S250 3, 298 8"
                      stroke="#6366F1"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </div>

          <p className="hero-item mt-6 max-w-[480px] text-[17px] leading-[1.65] text-white/70">
            Live cohort-based learning with real projects, industry mentorship, and career support — from <strong className="font-bold text-white">Day 1</strong> to your dream job.
          </p>

          <div className="hero-item mt-8 flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-main px-8 py-4 text-[16px] font-bold text-white transition-all duration-250 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:bg-indigo-hover hover:shadow-[0_8px_24px_rgba(79,70,229,0.45)]">
              Start Building Skills <ArrowRight size={18} />
            </button>
            <button className="rounded-xl border-[1.5px] border-white/25 bg-white/8 px-8 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/15">
              Explore Programmes
            </button>
          </div>

          <div className="hero-item mt-10 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col items-center gap-1 text-center">
              <Users size={18} className="text-indigo-light" />
              <span className="stat-number font-display text-[22px] font-bold text-white">2,000+</span>
              <span className="max-w-[80px] text-center text-[11px] text-white/50">Students Enrolled</span>
            </div>
            <div className="hidden h-8 w-px bg-white/12 md:block" />
            <div className="flex flex-col items-center gap-1 text-center">
              <Zap size={18} className="text-teal-main" />
              <span className="stat-number font-display text-[22px] font-bold text-white">10+</span>
              <span className="max-w-[80px] text-center text-[11px] text-white/50">Live Cohorts Running</span>
            </div>
            <div className="hidden h-8 w-px bg-white/12 md:block" />
            <div className="flex flex-col items-center gap-1 text-center">
              <Star size={18} className="text-amber-400" />
              <span className="stat-number font-display text-[22px] font-bold text-white">1k+</span>
              <span className="max-w-[80px] text-center text-[11px] text-white/50">Scholar Challenge Participants</span>
            </div>
            <div className="hidden h-8 w-px bg-white/12 md:block" />
            <div className="flex flex-col items-center gap-1 text-center">
              <Globe size={18} className="text-indigo-light" />
              <span className="stat-number font-display text-[22px] font-bold text-white">5</span>
              <span className="max-w-[80px] text-center text-[11px] text-white/50">Continents Reached</span>
            </div>
          </div>
        </div>

        <div className="hero-item mt-12 w-full">
          <div className="relative overflow-hidden rounded-2xl px-5 py-4 md:px-8 md:py-5">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_35%,rgba(255,255,255,0.01)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.10),transparent_70%)]" />
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[rgba(15,23,42,0.6)] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[rgba(15,23,42,0.6)] to-transparent" />
            <p className="relative mb-5 text-center text-[13px] tracking-[0.02em] text-white/70">
              Trusted by learners and leading companies worldwide
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:flex-nowrap lg:justify-between lg:gap-x-10">
              {companies.map((company) => (
                <span
                  key={company}
                  className={`cursor-default whitespace-nowrap text-[18px] text-white/75 transition-colors duration-200 hover:text-white ${company === 'Infosys' ? 'font-bold [font-family:var(--font-display)]' : company === 'accenture' ? 'font-normal' : 'font-bold'}`}
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
