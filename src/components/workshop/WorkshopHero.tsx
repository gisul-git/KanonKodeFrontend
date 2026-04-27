'use client'
import { useEffect } from 'react'
import { ArrowRight, Clock, Users, Zap, Star } from 'lucide-react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap-init'

export default function WorkshopHero() {
  useEffect(() => {
    gsap.fromTo(
      '.wh-item',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out', delay: 0.2 },
    )
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '88vh', background: '#F8FAFC' }}>
      <div className="absolute inset-0">
        <Image src="/images/workshop-hero1.png" alt="Workshop hero background" fill priority className="object-cover object-center" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(95deg, rgba(248,250,252,0.97) 0%, rgba(248,250,252,0.9) 38%, rgba(248,250,252,0.18) 68%, rgba(248,250,252,0) 100%)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-60px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.12), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ zIndex: 3, background: 'linear-gradient(to bottom, transparent, #F8FAFC)' }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-6 lg:gap-8" style={{ minHeight: '88vh', paddingTop: '120px', paddingBottom: '48px' }}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-[55%] flex-shrink-0">
            <div
              className="wh-item inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7"
              style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.15)' }}
            >
              <Users size={14} style={{ color: '#14B8A6' }} />
              <span className="text-[12px] font-medium" style={{ color: '#4F46E5' }}>
                FOR STUDENTS, GRADUATES, PROFESSIONALS
              </span>
            </div>

            <div className="wh-item mb-6">
            <p className="font-display font-black text-dark-hero uppercase leading-[0.95] whitespace-nowrap" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', letterSpacing: '-0.02em' }}>
                Level Up With
              </p>
              <p
              className="font-display font-black uppercase leading-[0.95] whitespace-nowrap"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Live Workshops
              </p>
            </div>

            <div className="wh-item mb-10 max-w-lg">
              <p className="text-[16px] leading-relaxed text-text-secondary">
                Practical, hands-on sessions that cut through the noise. Learn by building, solving, and shipping real-world projects
                with expert mentors.
              </p>
            </div>

            <div className="wh-item flex items-center gap-4 flex-wrap mb-8">
              <a
                href="#upcoming"
                className="group inline-flex items-center gap-2 font-bold text-[15px] text-white px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)', boxShadow: '0 8px 24px rgba(79,70,229,0.3)' }}
              >
                View Upcoming Workshops
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#register"
                className="inline-flex items-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#FFFFFF', border: '1.5px solid rgba(79,70,229,0.25)', color: '#0F172A' }}
              >
                Register Now →
              </a>
            </div>
          </div>

        </div>

        <div className="wh-item flex w-full flex-wrap items-center gap-4 rounded-2xl border border-transparent bg-transparent px-3 py-3 sm:px-6 sm:py-5 md:gap-6 lg:gap-8">
          {[
            { icon: Clock, num: '2–3 hrs', label: 'Per Session', color: '#6366F1', bg: 'rgba(99,102,241,0.12)' },
            { icon: Zap, num: 'Free', label: 'Entry', color: '#14B8A6', bg: 'rgba(20,184,166,0.12)' },
            { icon: Star, num: '4.8+', label: 'Avg Rating', color: '#F59E0B', bg: 'rgba(245,158,11,0.12)' },
            { icon: Users, num: '500+', label: 'Attended', color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)' },
          ].map((s, i, arr) => {
            const Icon = s.icon
            return (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                  <Icon size={17} style={{ color: s.color }} />
                </div>
                <div>
                  <p className="font-display font-bold text-[18px] text-dark-hero leading-none">{s.num}</p>
                  <p className="text-[12px] text-text-secondary">{s.label}</p>
                </div>
                {i < arr.length - 1 ? <div className="ml-3 hidden h-10 w-px bg-[rgba(15,23,42,0.1)] md:block" /> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
