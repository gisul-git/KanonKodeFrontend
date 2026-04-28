'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Users, Rocket, TrendingUp, Zap } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const milestones = [
  {
    year: '2020',
    yearColor: '#4F46E5',
    yearBg: 'rgba(79,70,229,0.1)',
    icon: Rocket,
    iconBg: 'rgba(79,70,229,0.1)',
    iconColor: '#4F46E5',
    title: 'The Beginning',
    desc: 'Gisul Software Services was founded in Bengaluru with a mission to bridge the gap between industry needs and talent capability.',
  },
  {
    year: '2021',
    yearColor: '#14B8A6',
    yearBg: 'rgba(20,184,166,0.1)',
    icon: Users,
    iconBg: 'rgba(20,184,166,0.1)',
    iconColor: '#14B8A6',
    title: 'First Cohorts',
    desc: 'Kanonkode launched its first live cohort programmes, enrolling students in structured tech learning pathways.',
  },
  {
    year: '2023',
    yearColor: '#8B5CF6',
    yearBg: 'rgba(139,92,246,0.1)',
    icon: TrendingUp,
    iconBg: 'rgba(139,92,246,0.1)',
    iconColor: '#8B5CF6',
    title: 'Ecosystem Expands',
    desc: 'Gisul Enterprise and VM Labs launched, extending the ecosystem to corporate B2B training and virtual lab infrastructure.',
  },
  {
    year: '2024',
    yearColor: '#F59E0B',
    yearBg: 'rgba(245,158,11,0.1)',
    icon: Zap,
    iconBg: 'rgba(245,158,11,0.1)',
    iconColor: '#F59E0B',
    title: 'Aaptor & Scale',
    desc: 'Aaptor - our AI-powered interview and assessment SaaS - launched. 13,000+ learners now inside the Kanonkode community.',
  },
]

export default function OurStory() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo('.story-text-left', { opacity: 0, x: -40 }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
    gsap.fromTo('.story-image-right', { opacity: 0, x: 40, scale: 0.97 }, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      delay: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
    gsap.fromTo('.milestone-card', { opacity: 0, y: 40 }, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.milestones-row', start: 'top 85%' },
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} id="story" className="overflow-hidden bg-[#F8FAFC] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-center gap-12 lg:mb-20 lg:flex-row lg:gap-16">
          <div className="story-text-left relative w-full flex-shrink-0 lg:w-[45%]">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-main">Our Story</p>

            <h2 className="mb-5 font-display font-bold leading-[1.1] text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}>
              From a Classroom Gap
              <br />
              to a{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Career System
              </span>
            </h2>

            <p className="mb-10 max-w-sm text-[16px] leading-relaxed text-text-secondary">
              We started with a simple belief - learning should lead to real opportunities. Today, we&apos;re helping thousands build
              skills that get them hired.
            </p>

            <div className="mb-10 flex items-center gap-4">
              <div
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)' }}
              >
                <Users size={24} style={{ color: '#6366F1' }} />
              </div>
              <div>
                <p className="font-display text-[32px] font-bold leading-none text-dark-hero">13,000+</p>
                <p className="mt-1 text-[13px] text-text-secondary">Learners Transformed</p>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -bottom-8 -left-4 h-32 w-32 select-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.25) 1.5px, transparent 1.5px)',
                backgroundSize: '14px 14px',
              }}
            />

            <div
              className="pointer-events-none absolute top-0 -right-8 h-24 w-24 rounded-full"
              style={{ border: '1.5px dashed rgba(99,102,241,0.2)' }}
            />
          </div>

          <div className="story-image-right relative w-full lg:w-[55%]">
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[420px]">
              <Image src="/images/our-story.png" alt="Kanonkode students learning" fill className="object-cover object-center" />

              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, transparent 50%)' }}
              />

              <div
                className="absolute bottom-3 left-3 right-3 rounded-xl p-3 sm:bottom-4 sm:left-6 sm:right-6 sm:rounded-2xl sm:p-4 lg:bottom-4 lg:left-1/2 lg:right-auto lg:w-[60%] lg:-translate-x-1/2 lg:p-4"
                style={{
                  background: 'rgba(255,255,255,0.97)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.14)',
                  border: '1px solid rgba(255,255,255,0.8)',
                }}
              >
                <div className="mb-2 flex items-start gap-3">
                  <div className="mt-0.5 select-none font-display font-black leading-none" style={{ fontSize: '30px', color: '#4F46E5', lineHeight: '0.8' }}>
                    &quot;
                  </div>
                  <p className="font-display text-[13px] font-bold leading-[1.2] text-dark-hero sm:text-[15px] lg:text-[15px]">
                    We don&apos;t just teach tech.
                    <br />
                    We build careers that actually work.
                  </p>
                </div>
                <div className="mt-0.5 flex items-center gap-2">
                  <p className="text-[18px] font-medium leading-none text-indigo-400 sm:text-[22px]">-</p>
                  <p className="text-[11px] font-medium sm:text-[12px]" style={{ color: '#94A3B8' }}>
                    Founder, Kanonkode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="milestones-row relative">
          <div className="pointer-events-none absolute -top-[192px] left-[6%] hidden h-[245px] w-[300px] rounded-t-full border-t border-r border-[rgba(99,102,241,0.18)] lg:block" />
          <div className="pointer-events-none absolute -top-[108px] left-[28%] hidden h-2.5 w-2.5 rounded-full bg-indigo-500 lg:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => {
              const Icon = m.icon
              return (
                <div
                  key={i}
                  className="milestone-card group relative rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 8px 26px rgba(15,23,42,0.04)' }}
                >
                  <span
                    className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wider"
                    style={{ backgroundColor: m.yearBg, color: m.yearColor, border: `1px solid ${m.yearColor}25` }}
                  >
                    {m.year}
                  </span>

                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: m.iconBg }}>
                      <Icon size={18} style={{ color: m.iconColor }} />
                    </div>
                    <h3 className="font-display text-[16px] font-bold leading-tight text-dark-hero">{m.title}</h3>
                  </div>

                  <p className="text-[13px] leading-relaxed text-text-secondary">{m.desc}</p>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
                    style={{ backgroundColor: m.yearColor }}
                  />

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
