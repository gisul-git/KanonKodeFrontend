'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, BookOpen, Monitor, Star, Trophy, Users } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const offerings = [
  {
    icon: Monitor,
    title: 'Live Cohort\nProgrammes',
    desc: 'Full-semester or short-term live programmes delivered on the Kanonkode platform — integrated with your academic calendar.',
    color: '#4F46E5',
    iconBg: 'rgba(79,70,229,0.1)',
    recommended: true,
  },
  {
    icon: BookOpen,
    title: 'Curriculum\nIntegration',
    desc: 'We help design and deliver industry-aligned modules that plug directly into your existing curriculum.',
    color: '#14B8A6',
    iconBg: 'rgba(20,184,166,0.1)',
    recommended: false,
  },
  {
    icon: Trophy,
    title: 'Scholar Challenge\non Campus',
    desc: 'Run Kanonkode Scholar Challenges exclusively for your students — with scholarships, leaderboards and placement support.',
    color: '#8B5CF6',
    iconBg: 'rgba(139,92,246,0.1)',
    recommended: false,
  },
  {
    icon: Users,
    title: 'Faculty\nDevelopment',
    desc: 'Upskill your faculty with industry-relevant training so they can deliver modern tech curriculum confidently.',
    color: '#F59E0B',
    iconBg: 'rgba(245,158,11,0.1)',
    recommended: false,
  },
]

export default function WhatWeOffer() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo('.wwo2-left', { opacity: 0, x: -40 }, {
      opacity: 1,
      x: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
    gsap.fromTo('.wwo2-card', { opacity: 0, y: 40, scale: 0.96 }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.wwo2-grid', start: 'top 82%' },
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section
      ref={ref}
      id="what-we-offer"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 50%, #F0FDF9 100%)',
      }}
    >
      <div
        className="absolute bottom-0 left-0 h-48 w-48 pointer-events-none select-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          <div className="wwo2-left flex w-full flex-shrink-0 flex-col lg:w-[38%]">
            <div className="mb-6">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-main">What We Offer</p>
              <div className="h-[3px] w-10 rounded-full" style={{ background: 'linear-gradient(90deg, #4F46E5, #14B8A6)' }} />
            </div>

            <h2 className="mb-6 font-display font-bold leading-[1.1] text-dark-hero" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              Everything Your
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Institution
              </span>
              <br />
              Needs to Scale
            </h2>

            <p className="mb-10 max-w-sm text-[15px] leading-relaxed text-text-secondary">
              From live learning to curriculum design — we bring the full Kanonkode system to your campus, customised for your students and goals.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <a
                href="#partner"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
                }}
              >
                Partner With Us
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#what-we-offer"
                className="group inline-flex items-center gap-2.5 text-[15px] font-semibold text-dark-hero transition-all duration-200 hover:gap-3.5"
              >
                <div
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 group-hover:bg-dark-hero group-hover:border-dark-hero"
                  style={{ borderColor: '#0F172A' }}
                >
                  <ArrowRight size={14} className="transition-colors duration-200 group-hover:text-white" style={{ color: '#0F172A' }} />
                </div>
                Explore Solutions
                <ArrowRight size={14} className="opacity-60" style={{ color: '#0F172A' }} />
              </a>
            </div>

            <div className="relative mt-auto h-[240px] flex-shrink-0 overflow-hidden rounded-2xl">
              <Image src="/images/institution-campus.png" alt="Students on campus" fill className="object-cover object-center" />

              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      to top,
                      rgba(240,244,255,0.9) 0%,
                      rgba(240,244,255,0.3) 40%,
                      transparent 70%
                    )
                  `,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      to right,
                      transparent 60%,
                      rgba(240,244,255,0.85) 100%
                    )
                  `,
                }}
              />
            </div>
          </div>

          <div className="wwo2-grid grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
            {offerings.map((o, i) => {
              const Icon = o.icon
              return (
                <div
                  key={i}
                  className="wwo2-card group relative flex flex-col rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 4px 32px rgba(99,102,241,0.08), 0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  {o.recommended && (
                    <div
                      className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: 'rgba(99,102,241,0.08)',
                        border: '1px solid rgba(99,102,241,0.15)',
                        color: '#4F46E5',
                      }}
                    >
                      <Star size={10} fill="#4F46E5" />
                      Recommended
                    </div>
                  )}

                  <div
                    className="mb-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: o.iconBg }}
                  >
                    <Icon size={26} style={{ color: o.color }} />
                  </div>

                  <h3 className="mb-4 flex-1 font-display text-dark-hero" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', lineHeight: 1.15, fontWeight: 700 }}>
                    {o.title.split('\n').map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < o.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </h3>

                  <p className="mb-7 text-[14px] leading-relaxed text-text-secondary">{o.desc}</p>

                  <div
                    className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full transition-all duration-500 group-hover:left-0 group-hover:right-0"
                    style={{ background: o.color }}
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
