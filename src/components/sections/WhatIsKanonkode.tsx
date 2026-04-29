'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  GitBranch,
  LayoutGrid,
  MessageSquare,
  Mic,
  PhoneOff,
  Star,
  TrendingUp,
  Users,
  Video,
  Video as VideoIcon,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-init'

export default function WhatIsKanonkode() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.fromTo(
      '.whatk-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.whatk-section', start: 'top 80%' },
      },
    )

    gsap.fromTo(
      '.whatk-card',
      { opacity: 0, y: 50, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.whatk-grid', start: 'top 78%' },
      },
    )

    gsap.fromTo(
      '.progress-fill-1',
      { width: '0%' },
      {
        width: '75%',
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.whatk-grid', start: 'top 75%' },
      },
    )

    gsap.fromTo(
      '.path-item',
      { opacity: 0, x: 10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.whatk-grid', start: 'top 75%' },
      },
    )

    gsap.fromTo(
      '.outcomes-strip',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.outcomes-strip', start: 'top 90%' },
      },
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={sectionRef} className="whatk-section bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="whatk-heading mb-14 max-w-2xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-main">Why KanonKode Works</p>
          <h2 className="font-display font-bold leading-[1.1] text-dark-hero" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Learn Live. Build Real Work.
            <br />
            Move Toward Real{' '}
            <span className="relative inline-block">
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Opportunities.
              </span>
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-text-secondary">
            From live mentor-led sessions to portfolio projects and interview prep, every part of the experience is designed to
            help learners build proof of skill - not just complete lessons.
          </p>
        </div>

        <div className="whatk-grid flex flex-col gap-5 lg:flex-row">
          <div className="whatk-card flex flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-[rgba(99,102,241,0.12)] bg-[#EEF2FF] transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:w-[38%]">
            <div className="flex flex-1 flex-col p-7">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-main text-[14px] font-bold text-white [font-family:var(--font-display)]">
                  01
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Video size={22} className="text-indigo-main" />
                </div>
              </div>

              <h3 className="font-display text-[24px] font-bold leading-snug text-dark-hero">
                Learn Live With Mentors and Peers
              </h3>

              <p className="mt-3 text-[13px] leading-relaxed text-text-secondary">
                Ask questions in real time, get feedback as you learn, and stay accountable inside a guided cohort experience.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center">
                  {[
                    { bg: '#4F46E5', label: 'A' },
                    { bg: '#14B8A6', label: 'P' },
                    { bg: '#8B5CF6', label: 'R' },
                  ].map((av, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 flex-shrink-0 rounded-full border-2 border-[#EEF2FF] text-[11px] font-bold text-white flex items-center justify-center"
                      style={{
                        backgroundColor: av.bg,
                        marginLeft: i > 0 ? '-8px' : '0',
                        zIndex: 3 - i,
                        position: 'relative',
                      }}
                    >
                      {av.label}
                    </div>
                  ))}
                </div>
                <div className="ml-1">
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot h-2 w-2 rounded-full bg-[#22C55E]" />
                    <span className="text-[13px] font-semibold text-dark-hero">Live now</span>
                  </div>
                  <p className="text-[11px] text-text-secondary">+120 learners online</p>
                </div>
              </div>

              <div className="relative mt-5 flex-1 overflow-hidden rounded-xl" style={{ minHeight: '180px' }}>
                <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-[#EF4444] px-2.5 py-1">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="text-[10px] font-bold tracking-wider text-white">LIVE</span>
                </div>

                <div className="absolute right-3 top-3 z-10 flex flex-col gap-1.5">
                  {[
                    { bg: 'rgba(79,70,229,0.5)', label: 'P' },
                    { bg: 'rgba(20,184,166,0.5)', label: 'R' },
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="flex h-12 w-[72px] items-center justify-center overflow-hidden rounded-lg border border-white/20"
                      style={{ backgroundColor: t.bg }}
                    >
                      <span className="text-lg font-bold text-white/70">{t.label}</span>
                    </div>
                  ))}
                </div>

                <div className="live-video-bg absolute inset-0">
                  <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" alt="Live session" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/25" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 flex h-12 items-center justify-center gap-3 px-4" style={{ background: 'rgba(15,23,42,0.85)' }}>
                  {[
                    { Icon: Mic, bg: 'rgba(255,255,255,0.12)' },
                    { Icon: VideoIcon, bg: 'rgba(255,255,255,0.12)' },
                    { Icon: MessageSquare, bg: 'rgba(255,255,255,0.12)' },
                    { Icon: LayoutGrid, bg: 'rgba(255,255,255,0.12)' },
                    { Icon: PhoneOff, bg: '#EF4444' },
                  ].map(({ Icon, bg }, i) => (
                    <button
                      key={i}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                      style={{ backgroundColor: bg }}
                    >
                      <Icon size={15} className="text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <div className="whatk-card rounded-2xl border border-[rgba(99,102,241,0.1)] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex flex-row items-start gap-5">
                <div className="min-w-0 flex-1">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[rgba(99,102,241,0.15)] bg-bg-tinted text-[12px] font-bold text-indigo-main [font-family:var(--font-display)]">
                      02
                    </div>
                    <div className="ml-2 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-tinted">
                      <Code2 size={20} className="text-indigo-main" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-display text-[18px] font-bold leading-snug text-dark-hero">Build Real Projects from Day One</h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary">
                    Every major concept is paired with hands-on work so learners apply skills immediately and create
                    portfolio-ready outcomes.
                  </p>
                </div>

                <div className="hidden w-[200px] flex-shrink-0 sm:block">
                  <div className="rounded-xl border border-[rgba(99,102,241,0.1)] bg-white p-4 shadow-card">
                    <p className="mb-3 text-[11px] font-semibold text-text-sub">Project Progress</p>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-dark-hero">E-Commerce Website</span>
                      <span className="ml-2 text-[12px] font-semibold text-dark-hero">75%</span>
                    </div>
                    <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-[rgba(99,102,241,0.1)]">
                      <div
                        className="progress-fill-1 h-full rounded-full"
                        style={{ background: 'linear-gradient(to right, #4F46E5, #6366F1)', width: '0%' }}
                      />
                    </div>
                    <p className="mb-2 text-[10px] text-text-sub">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: 'React', color: '#0EA5E9', bg: 'rgba(97,218,251,0.12)', border: 'rgba(14,165,233,0.2)' },
                        { label: 'Node.js', color: '#16A34A', bg: 'rgba(104,211,145,0.12)', border: 'rgba(22,163,74,0.2)' },
                        { label: 'MongoDB', color: '#0D9488', bg: 'rgba(78,205,196,0.12)', border: 'rgba(13,148,136,0.2)' },
                      ].map((t) => (
                        <span
                          key={t.label}
                          className="flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold"
                          style={{ color: t.color, backgroundColor: t.bg, border: `1px solid ${t.border}` }}
                        >
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: t.color }} />
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="whatk-card rounded-2xl border border-[rgba(99,102,241,0.1)] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex flex-row items-start gap-5">
                <div className="min-w-0 flex-1">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[rgba(99,102,241,0.15)] bg-bg-tinted text-[12px] font-bold text-indigo-main [font-family:var(--font-display)]">
                      03
                    </div>
                    <div className="ml-2 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-tinted">
                      <GitBranch size={20} className="text-indigo-main" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-display text-[18px] font-bold leading-snug text-dark-hero">
                    No Guesswork - Just Guided Progress
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary">
                    Follow a clear learning roadmap from fundamentals to advanced work, with milestones that keep progress
                    visible and manageable.
                  </p>
                </div>

                <div className="hidden w-[200px] flex-shrink-0 sm:block">
                  <div className="rounded-xl border border-[rgba(99,102,241,0.1)] bg-white p-4 shadow-card">
                    <p className="mb-3 text-[11px] font-semibold text-text-sub">Your Learning Path</p>
                    <div className="space-y-2">
                      {['Fundamentals', 'Core Concepts'].map((label) => (
                        <div key={label} className="path-item flex items-center justify-between py-1">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0 text-[#22C55E]" />
                            <span className="text-[12px] font-medium text-dark-hero">{label}</span>
                          </div>
                          <CheckCircle2 size={14} className="text-[#22C55E]" />
                        </div>
                      ))}

                      <div className="path-item flex items-center justify-between rounded-lg bg-bg-tinted px-2 py-1.5">
                        <div className="flex items-center gap-2">
                          <div className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-main">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-main" />
                          </div>
                          <span className="text-[12px] font-semibold text-indigo-main">Projects</span>
                        </div>
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-indigo-main" />
                      </div>

                      <div className="path-item flex items-center justify-between py-1">
                        <div className="flex items-center gap-2">
                          <div className="h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-[rgba(99,102,241,0.25)]" />
                          <span className="text-[12px] text-text-sub">Advanced</span>
                        </div>
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-[rgba(99,102,241,0.15)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="whatk-card rounded-2xl border border-[rgba(99,102,241,0.1)] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="flex flex-row items-start gap-5">
                <div className="min-w-0 flex-1">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[rgba(99,102,241,0.15)] bg-bg-tinted text-[12px] font-bold text-indigo-main [font-family:var(--font-display)]">
                      04
                    </div>
                    <div className="ml-2 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-tinted">
                      <Briefcase size={20} className="text-indigo-main" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-display text-[18px] font-bold leading-snug text-dark-hero">Prepare for Interviews and Career Moves</h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary">
                    Strengthen your portfolio, practice with mock interviews, and get targeted support to present your skills
                    with confidence.
                  </p>
                </div>

                <div className="hidden w-[200px] flex-shrink-0 space-y-3 sm:block">
                  <div className="rounded-xl border border-[rgba(99,102,241,0.1)] bg-white p-3 shadow-card">
                    <p className="mb-2 text-[10px] font-semibold text-text-sub">Your Portfolio</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[0, 1].map((i) => (
                        <div key={i} className="flex aspect-video flex-col items-start justify-center gap-1 overflow-hidden rounded-lg bg-bg-tinted p-2">
                          <div className="h-1.5 w-full rounded-full bg-[rgba(99,102,241,0.3)]" />
                          <div className="h-1.5 w-3/4 rounded-full bg-[rgba(99,102,241,0.2)]" />
                          <div className="h-1.5 w-1/2 rounded-full bg-[rgba(99,102,241,0.15)]" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[rgba(99,102,241,0.1)] bg-white p-3 shadow-card">
                    <p className="mb-2 text-[10px] font-semibold text-text-sub">Mock Interview</p>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2">
                        <div className="relative flex-shrink-0">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-main text-[10px] font-bold text-white">
                            K
                          </div>
                          <span className="absolute inset-0 rounded-full bg-indigo-main opacity-25 animate-ping" />
                        </div>
                        <span className="truncate text-[11px] font-medium text-dark-hero">Next session tomorrow, 7:00 PM</span>
                      </div>
                      <ChevronRight size={14} className="flex-shrink-0 text-text-sub" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="outcomes-strip mt-5 flex flex-col items-start justify-between gap-6 rounded-2xl bg-dark-hero px-6 py-7 sm:px-8 lg:px-10">
          <p className="flex-shrink-0 whitespace-nowrap font-display text-[16px] font-semibold text-white">Outcomes Our Learners Achieve</p>

          <div className="flex w-full flex-wrap items-center gap-y-4">
            {[
              {
                icon: TrendingUp,
                iconColor: '#14B8A6',
                iconBg: 'rgba(20,184,166,0.15)',
                num: '90%',
                numColor: '#14B8A6',
                label: 'Eligible learners achieved a career transition within 6 months',
              },
              {
                icon: Briefcase,
                iconColor: '#6366F1',
                iconBg: 'rgba(99,102,241,0.15)',
                num: '250+',
                numColor: '#6366F1',
                label: 'Hiring and industry connections across our network',
              },
              {
                icon: Users,
                iconColor: '#6366F1',
                iconBg: 'rgba(99,102,241,0.15)',
                num: '15,000+',
                numColor: '#6366F1',
                label: 'Learners reached across programs, cohorts, and challenges',
              },
              {
                icon: Star,
                iconColor: '#FBBF24',
                iconBg: 'rgba(251,191,36,0.15)',
                num: '4.8/5',
                numColor: '#FBBF24',
                label: 'Average learner rating',
              },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="flex w-full items-center sm:w-1/2 lg:w-auto">
                  {i > 0 && <div className="mx-4 hidden h-10 w-px flex-shrink-0 lg:mx-8 lg:block" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: stat.iconBg }}>
                      <Icon size={20} style={{ color: stat.iconColor }} />
                    </div>
                    <div>
                      <p className="font-display text-[24px] font-bold leading-none" style={{ color: stat.numColor }}>
                        {stat.num}
                      </p>
                      <p className="mt-0.5 max-w-[170px] text-[11px] leading-snug" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-[11px] text-white/45">Based on internal program data across eligible learners and community initiatives.</p>
        </div>
      </div>
    </section>
  )
}
