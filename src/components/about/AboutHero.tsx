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
    <section className="relative min-h-screen w-full overflow-hidden" style={{ background: '#F8FAFC' }}>
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image
          src="/images/abouthero.png"
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
            'linear-gradient(95deg, rgba(248,250,252,0.97) 0%, rgba(248,250,252,0.9) 38%, rgba(248,250,252,0.18) 68%, rgba(248,250,252,0) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom right, rgba(79,70,229,0.12) 0%, transparent 50%, rgba(20,184,166,0.08) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]" style={{ zIndex: 3, background: 'linear-gradient(to bottom, transparent, #F8FAFC)' }} />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] flex-col px-4 pb-14 pt-[92px] sm:px-6 sm:pb-20 sm:pt-[108px] lg:px-16">
        <div className="max-w-[780px]">
          <div className="about-hero-item mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-main/15 bg-indigo-main/8 px-3 py-1.5 sm:mb-7 sm:px-4 sm:py-2">
            <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-teal-main" />
            <span className="text-[12px] font-medium" style={{ color: 'rgba(79,70,229,0.85)' }}>
              Founded 2020 · Bengaluru, India
            </span>
          </div>

          <h1 className="about-hero-item mb-6 font-display font-bold leading-[1.03] text-dark-hero" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.75rem)' }}>
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

          <p className="about-hero-item mb-8 max-w-lg text-[15px] leading-[1.6] text-text-secondary sm:mb-10 sm:text-[17px] sm:leading-[1.65]">
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
              className="rounded-xl border-[1.5px] border-indigo-main/25 bg-white px-5 py-3 text-[14px] font-semibold text-dark-hero transition-all duration-200 hover:border-indigo-main/40 hover:bg-indigo-main/5 sm:px-8 sm:py-4 sm:text-[16px]"
            >
              View Programs
            </Link>
          </div>

        </div>

        <div className="about-hero-item mt-auto flex w-full flex-wrap items-center gap-4 rounded-2xl border border-transparent bg-transparent px-3 py-3 sm:px-6 sm:py-5 md:gap-6 lg:gap-8">
          <div className="flex basis-[48%] flex-col items-center gap-1 text-center sm:basis-auto">
            <Users size={18} className="text-indigo-light" />
            <span className="font-display text-[22px] font-bold text-dark-hero">13K+</span>
            <span className="max-w-[90px] text-center text-[11px] text-text-secondary">Learners Empowered</span>
          </div>
          <div className="hidden h-8 w-px bg-[rgba(15,23,42,0.1)] md:block" />

          <div className="flex basis-[48%] flex-col items-center gap-1 text-center sm:basis-auto">
            <Zap size={18} className="text-teal-main" />
            <span className="font-display text-[22px] font-bold text-dark-hero">500+</span>
            <span className="max-w-[90px] text-center text-[11px] text-text-secondary">Students Placed</span>
          </div>
          <div className="hidden h-8 w-px bg-[rgba(15,23,42,0.1)] md:block" />

          <div className="flex basis-[48%] flex-col items-center gap-1 text-center sm:basis-auto">
            <Star size={18} className="text-amber-400" />
            <span className="font-display text-[22px] font-bold text-dark-hero">4+</span>
            <span className="max-w-[100px] text-center text-[11px] text-text-secondary">Industry-Focused Programs</span>
          </div>
          <div className="hidden h-8 w-px bg-[rgba(15,23,42,0.1)] md:block" />

          <div className="flex basis-[48%] flex-col items-center gap-1 text-center sm:basis-auto">
            <Globe size={18} className="text-indigo-light" />
            <span className="font-display text-[22px] font-bold text-dark-hero">4.8/5</span>
            <span className="max-w-[90px] text-center text-[11px] text-text-secondary">Average Learner Rating</span>
          </div>
        </div>

        <div className="about-hero-item mt-3 w-full">
          <div className="relative overflow-hidden rounded-2xl px-3 py-3 sm:px-5 sm:py-4 md:px-8 md:py-5">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(79,70,229,0.08)_0%,rgba(20,184,166,0.04)_45%,rgba(255,255,255,0.25)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.10),transparent_70%)]" />
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent" />
            <p className="relative mb-5 text-center text-[13px] tracking-[0.02em] text-text-secondary">
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
                <span key={logo.name} className={`${logo.font} cursor-default whitespace-nowrap text-[15px] text-dark-hero/75 transition-colors duration-200 hover:text-dark-hero sm:text-[18px]`}>
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
