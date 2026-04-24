'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Star, Users, Zap } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'

export default function AboutHero() {
  useEffect(() => {
    gsap.fromTo('.about-hero-item', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out', delay: 0.2 })
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ background: '#0F172A' }}>
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image
          src="/images/about-hero.png"
          alt="About Kanonkode hero"
          fill
          priority
          className="object-cover object-center"
          onError={(e) => {
            ;(e.target as HTMLElement).style.display = 'none'
          }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(105deg, rgba(0, 0, 0, 0.92) 0%, rgba(15, 23, 42, 0.74) 40%, rgba(15, 23, 42, 0) 70%, rgba(15, 23, 42, 0.22) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom right, rgba(79,70,229,0.18) 0%, transparent 50%, rgba(20,184,166,0.08) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]" style={{ zIndex: 3, background: 'linear-gradient(to bottom, transparent, rgba(15,23,42,0.6))' }} />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] flex-col px-4 pb-14 pt-[92px] sm:px-6 sm:pb-20 sm:pt-[108px] lg:px-16">
        <div className="max-w-[780px]">
          <div className="about-hero-item mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 backdrop-blur-sm sm:mb-7 sm:px-4 sm:py-2">
            <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-teal-main" />
            <span className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Founded 2020 · Bengaluru, India
            </span>
          </div>

          <h1 className="about-hero-item mb-6 font-display font-bold leading-[1.03] text-white" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.75rem)' }}>
            Built to Bridge the Gap
            <br />
            Between Learning
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #818CF8 0%, #14B8A6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              and Earning
            </span>
          </h1>

          <p className="about-hero-item mb-8 max-w-lg text-[15px] leading-[1.6] text-white/70 sm:mb-10 sm:text-[17px] sm:leading-[1.65]">
            We help you go from beginner to job-ready with live learning, real projects, and expert mentorship.
          </p>

          <div className="about-hero-item mb-10 flex flex-wrap items-center gap-3 sm:mb-14 sm:gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-main px-5 py-3 text-[14px] font-bold text-white transition-all duration-250 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:bg-indigo-hover hover:shadow-[0_8px_24px_rgba(79,70,229,0.45)] sm:px-8 sm:py-4 sm:text-[16px]"
            >
              Explore Courses
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#story"
              className="rounded-xl border-[1.5px] border-white/25 bg-white/8 px-5 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/15 sm:px-8 sm:py-4 sm:text-[16px]"
            >
              View Programs
            </Link>
          </div>

        </div>

        <div className="about-hero-item mt-auto flex w-full flex-wrap items-center gap-4 rounded-2xl border border-transparent bg-transparent px-3 py-3 sm:px-6 sm:py-5 md:gap-6 lg:gap-8">
          <div className="flex basis-[48%] flex-col items-center gap-1 text-center sm:basis-auto">
            <Users size={18} className="text-indigo-light" />
            <span className="font-display text-[22px] font-bold text-white">13K+</span>
            <span className="max-w-[90px] text-center text-[11px] text-white/50">Learners Empowered</span>
          </div>
          <div className="hidden h-8 w-px bg-white/12 md:block" />

          <div className="flex basis-[48%] flex-col items-center gap-1 text-center sm:basis-auto">
            <Zap size={18} className="text-teal-main" />
            <span className="font-display text-[22px] font-bold text-white">500+</span>
            <span className="max-w-[90px] text-center text-[11px] text-white/50">Students Placed</span>
          </div>
          <div className="hidden h-8 w-px bg-white/12 md:block" />

          <div className="flex basis-[48%] flex-col items-center gap-1 text-center sm:basis-auto">
            <Star size={18} className="text-amber-400" />
            <span className="font-display text-[22px] font-bold text-white">4+</span>
            <span className="max-w-[100px] text-center text-[11px] text-white/50">Industry-Focused Programs</span>
          </div>
          <div className="hidden h-8 w-px bg-white/12 md:block" />

          <div className="flex basis-[48%] flex-col items-center gap-1 text-center sm:basis-auto">
            <Globe size={18} className="text-indigo-light" />
            <span className="font-display text-[22px] font-bold text-white">4.8/5</span>
            <span className="max-w-[90px] text-center text-[11px] text-white/50">Average Learner Rating</span>
          </div>
        </div>

        <div className="about-hero-item mt-3 w-full">
          <div className="relative overflow-hidden rounded-2xl px-3 py-3 sm:px-5 sm:py-4 md:px-8 md:py-5">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_35%,rgba(255,255,255,0.01)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.10),transparent_70%)]" />
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[rgba(15,23,42,0.6)] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[rgba(15,23,42,0.6)] to-transparent" />
            <p className="relative mb-5 text-center text-[13px] tracking-[0.02em] text-white/70">
            Trusted by learners and leading companies worldwide
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:flex-nowrap lg:justify-between lg:gap-x-10">
              {[
                { name: 'Google', font: 'font-body font-bold' },
                { name: 'Microsoft', font: 'font-body font-bold' },
                { name: 'amazon', font: 'font-body font-bold' },
                { name: 'Deloitte.', font: 'font-body font-bold' },
                { name: 'IBM', font: 'font-body font-bold' },
                { name: 'TATA', font: 'font-body font-bold' },
                { name: 'Infosys', font: 'font-display font-bold' },
                { name: 'accenture', font: 'font-body font-normal' },
              ].map((logo) => (
                <span key={logo.name} className={`${logo.font} cursor-default whitespace-nowrap text-[15px] text-white/75 transition-colors duration-200 hover:text-white sm:text-[18px]`}>
                  {logo.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
