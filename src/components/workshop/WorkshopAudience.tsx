'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { GraduationCap, Briefcase, BookOpen, Building2, ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const audiences = [
  {
    icon: BookOpen,
    label: 'Students',
    desc: 'Explore real tools and technologies before committing to a full programme. Build your first project.',
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.12)',
  },
  {
    icon: GraduationCap,
    label: 'Graduates',
    desc: 'Add practical skills to your CV fast. Walk away with something to show every potential employer.',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.12)',
  },
  {
    icon: Briefcase,
    label: 'Professionals',
    desc: 'Upskill quickly in a specific domain. No fluff — just the tactical knowledge you can use on Monday.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.12)',
  },
  {
    icon: Building2,
    label: 'Institutions',
    desc: 'We run custom workshops for colleges and institutes. Bring Kanonkode to your campus.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
  },
]

export default function WorkshopAudience() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(
      '.wa-text',
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
      '.wa-image',
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
      '.wa-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.wa-cards', start: 'top 84%' },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center mb-16">
          <div className="wa-text w-full lg:w-[45%] flex-shrink-0">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Who It Is For</p>

            <div className="w-10 h-[3px] rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #4F46E5, #14B8A6)' }} />

            <h2 className="font-display font-bold text-dark-hero leading-[1.08] mb-6" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}>
              Workshops Built for
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Every Stage
              </span>
            </h2>

            <p className="text-[16px] text-text-secondary leading-relaxed max-w-md">
              For those who want to learn with purpose, build with clarity, and achieve real career outcomes.
            </p>
          </div>

          <div className="wa-image flex-1 relative flex items-center justify-center lg:justify-end">
            <div
              className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none"
              style={{
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, rgba(99,102,241,0.04) 50%, transparent 75%)',
                zIndex: 0,
              }}
            />

            <div
              className="absolute top-[12%] right-[32%] pointer-events-none select-none"
              style={{
                width: '90px',
                height: '90px',
                backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.28) 1.5px, transparent 1.5px)',
                backgroundSize: '14px 14px',
                zIndex: 0,
              }}
            />

            <div className="relative z-10 w-full max-w-[560px]">
              <Image
                src="/images/workshop-laptop.png"
                alt="Workshop audience visual laptop and desk"
                width={560}
                height={380}
                className="object-contain w-full"
                priority
              />
            </div>
          </div>
        </div>

        <div className="wa-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => {
            const Icon = a.icon
            return (
              <div
                key={i}
                className="wa-card group bg-white rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex flex-col"
                style={{
                  border: '1px solid rgba(99,102,241,0.1)',
                  boxShadow: '0 2px 16px rgba(99,102,241,0.06)',
                }}
              >
                <div className="w-[64px] h-[64px] rounded-2xl mb-6 flex items-center justify-center" style={{ background: a.bg }}>
                  <Icon size={28} style={{ color: a.color }} />
                </div>
                <h3 className="font-display font-bold text-[20px] text-dark-hero mb-3 leading-tight">{a.label}</h3>
                <p className="text-[14px] text-text-secondary leading-relaxed flex-1">{a.desc}</p>
                <a
                  href="#upcoming"
                  className="mt-5 inline-flex items-center justify-center gap-2 text-[13px] font-semibold rounded-lg px-4 py-2 transition-all duration-200 border"
                  style={{ color: a.color, borderColor: `${a.color}55`, background: `${a.color}08` }}
                >
                  View Workshops
                  <ArrowRight size={14} />
                </a>
                <div className="mt-5 h-[3px] rounded-full w-8 group-hover:w-full transition-all duration-500" style={{ background: a.color }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
