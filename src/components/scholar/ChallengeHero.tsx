'use client'

import { useEffect } from 'react'
import { ArrowRight, Trophy, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap-init'

export default function ChallengeHero() {
  useEffect(() => {
    gsap.fromTo(
      '.ch-item',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out', delay: 0.2 },
    )
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ background: '#F8FAFC' }}>
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image src="/images/scholarhero.png" alt="Scholar Challenge hero" fill priority className="object-cover object-center" />
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

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-start justify-center gap-8 px-4 pb-12 pt-[92px] sm:gap-12 sm:px-6 sm:pb-20 sm:pt-[108px] lg:px-16">
        <div className="w-full max-w-[780px] flex-shrink-0">
          <div
            className="ch-item mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:mb-7 sm:px-4 sm:py-2"
            style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.15)' }}
          >
            <Users size={14} style={{ color: '#14B8A6' }} />
            <span className="text-[11px] font-medium sm:text-[12px]" style={{ color: '#4F46E5' }}>
              For Students, Graduates, Professionals
            </span>
          </div>

          <div className="ch-item mb-6">
            <p className="font-display font-black uppercase leading-[0.95] text-dark-hero" style={{ fontSize: 'clamp(1.95rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              Kanonkode
            </p>
            <p
              className="font-display font-black uppercase leading-[0.95]"
              style={{
                fontSize: 'clamp(1.95rem, 5vw, 4rem)',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #818CF8 0%, #14B8A6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Scholar
              <br />
              Challenge
            </p>
          </div>

          <p className="ch-item mb-8 max-w-lg text-[15px] leading-relaxed text-text-secondary sm:mb-10 sm:text-[16px]">
            Prove your potential through real tasks - and earn a 50-75% scholarship, recognition, and priority access to Kanonkode
            programmes. Free entry. Merit-based. No shortcuts.
          </p>

          <div className="ch-item mb-10 flex w-full flex-col items-stretch gap-3 sm:mb-14 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#apply"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:py-4 sm:text-[15px]"
              style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)', boxShadow: '0 8px 24px rgba(20,184,166,0.4)' }}
            >
              Accept the Challenge
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#timeline"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:py-4 sm:text-[15px]"
              style={{ background: '#FFFFFF', border: '1.5px solid rgba(79,70,229,0.25)', color: '#0F172A' }}
            >
              View Protocol →
            </a>
          </div>

          <div className="ch-item flex flex-wrap items-center gap-4 sm:gap-6">
            {[
              { icon: Trophy, num: '1K+', label: 'Participants', color: '#F59E0B', bg: 'rgba(245,158,11,0.15)' },
              { icon: Zap, num: '50-75%', label: 'Scholarship', color: '#14B8A6', bg: 'rgba(20,184,166,0.15)' },
              { icon: Users, num: 'Free', label: 'Entry', color: '#6366F1', bg: 'rgba(99,102,241,0.15)' },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex min-w-[120px] items-center gap-2.5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl sm:h-9 sm:w-9" style={{ background: s.bg }}>
                    <Icon size={16} style={{ color: s.color }} />
                  </div>
                  <div>
                    <p className="font-display text-[16px] font-bold leading-none text-dark-hero sm:text-[18px]">{s.num}</p>
                    <p className="text-[11px] text-text-secondary">
                      {s.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
