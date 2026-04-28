'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Hand, Hammer, Users, Target } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const features = [
  {
    icon: Hand,
    title: 'Hands-On Execution',
    desc: 'No passive learning. You solve real-world problems that mirror industry workflows.',
    color: '#4F46E5',
    iconBg: 'rgba(79,70,229,0.12)',
  },
  {
    icon: Hammer,
    title: 'Build Something Real',
    desc: 'Every session ends with output — scripts, tools, or working prototypes.',
    color: '#14B8A6',
    iconBg: 'rgba(20,184,166,0.12)',
  },
  {
    icon: Users,
    title: 'Led by Practitioners',
    desc: 'Learn from people actively building in the industry — not just teaching theory.',
    color: '#8B5CF6',
    iconBg: 'rgba(139,92,246,0.12)',
  },
  {
    icon: Target,
    title: 'Zero Confusion',
    desc: 'Clear outcomes. Clear deliverables. You know exactly what you walk away with.',
    color: '#F59E0B',
    iconBg: 'rgba(245,158,11,0.12)',
  },
]

export default function WhatAreWorkshops() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(
      '.waw-text',
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
      '.waw-image',
      { opacity: 0, x: 40, scale: 0.96 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.85,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      },
    )
    gsap.fromTo(
      '.waw-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.waw-cards', start: 'top 84%' },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="overflow-hidden bg-[#F8FAFC] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-center gap-12 lg:mb-20 lg:flex-row lg:gap-16">
          <div className="waw-text relative w-full flex-shrink-0 lg:w-[45%]">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">The Methodology</p>

            <h2 className="font-display font-bold text-dark-hero leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}>
              What You Actually
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Build in These Workshops
              </span>
            </h2>

            <p className="mb-10 max-w-sm text-[16px] leading-relaxed text-text-secondary">
              Live, focused sessions where you learn by doing with clear outcomes in a short time. We eliminate the fluff and focus
              purely on tactical execution.
            </p>

            <div className="mb-10 flex items-center gap-4">
              <div
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)' }}
              >
                <Hand size={22} style={{ color: '#6366F1' }} />
              </div>
              <div>
                <p className="font-display text-[32px] font-bold leading-none text-dark-hero">2-3 hrs</p>
                <p className="mt-1 text-[13px] text-text-secondary">Typical hands-on workshop sprint</p>
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

          <div className="waw-image relative w-full lg:w-[55%]">
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[420px]">
              <Image src="/images/workshopmethodology.png" alt="Kanonkode workshop methodology session" fill className="object-cover object-center" priority />

              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, transparent 50%)' }} />

              <div
                className="absolute bottom-3 left-3 right-3 rounded-xl p-3 sm:bottom-4 sm:left-6 sm:right-6 sm:rounded-2xl sm:p-4 lg:bottom-4 lg:left-1/2 lg:right-auto lg:w-[62%] lg:-translate-x-1/2 lg:p-4"
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
                    You don&apos;t watch tutorials here.
                    <br />
                    You build projects while mentors guide live.
                  </p>
                </div>
                <div className="mt-0.5 flex items-center gap-2">
                  <p className="text-[18px] font-medium leading-none text-indigo-400 sm:text-[22px]">-</p>
                  <p className="text-[11px] font-medium sm:text-[12px]" style={{ color: '#94A3B8' }}>
                    Workshop Mentor, Kanonkode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="waw-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="waw-card group bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex flex-col"
                style={{
                  border: '1px solid rgba(99,102,241,0.1)',
                  boxShadow: '0 2px 16px rgba(99,102,241,0.06)',
                }}
              >
                <div
                  className="w-[72px] h-[72px] rounded-2xl mb-7 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: f.iconBg }}
                >
                  <Icon size={30} style={{ color: f.color }} />
                </div>

                <h3 className="font-body font-black text-[15px] text-dark-hero uppercase tracking-wide mb-3 leading-snug">{f.title}</h3>

                <p className="text-[14px] text-text-secondary leading-relaxed flex-1">{f.desc}</p>

                <div className="mt-6 h-[3px] rounded-full w-8 group-hover:w-full transition-all duration-500" style={{ background: f.color }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
