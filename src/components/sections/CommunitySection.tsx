'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, Users, Zap, Star } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

export default function CommunitySection() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const stat1Ref = useRef<HTMLSpanElement>(null)
  const stat2Ref = useRef<HTMLSpanElement>(null)
  const stat3Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    gsap.fromTo(
      '.comm-content',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      },
    )

    const s1 = { val: 0 }
    const s2 = { val: 0 }
    const s3 = { val: 0 }

    gsap.to(s1, {
      val: 13000,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      onUpdate: () => {
        if (stat1Ref.current) {
          const v = Math.round(s1.val)
          stat1Ref.current.textContent = v >= 1000 ? `${Math.round(v / 1000)}K+` : `${v}`
        }
      },
    })
    gsap.to(s2, {
      val: 50,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      onUpdate: () => {
        if (stat2Ref.current) stat2Ref.current.textContent = `${Math.round(s2.val)}+`
      },
    })
    gsap.to(s3, {
      val: 4.8,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      onUpdate: () => {
        if (stat3Ref.current) stat3Ref.current.textContent = `${s3.val.toFixed(1)}★`
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  const submitJoin = () => {
    if (email.trim()) setJoined(true)
  }

  return (
    <section ref={sectionRef} className="community-section relative overflow-hidden" style={{ background: '#0A0F1E' }}>
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #14B8A6 30%, #4F46E5 70%, transparent)' }} />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-40px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.12), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-40px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.1), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: 'linear-gradient(125deg, rgba(99,102,241,0.06), rgba(20,184,166,0.04), rgba(99,102,241,0.06))', backgroundSize: '200% 200%', animation: 'commBgShift 10s ease-in-out infinite' }} />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24" style={{ background: 'linear-gradient(to bottom, transparent, #080D1A)' }} />

      <div className="relative z-10 mx-auto max-w-[860px] px-6 py-16 text-center sm:py-20 lg:py-24">
        <div className="comm-content">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[#22C55E]" />
            <span className="text-[12px] font-semibold" style={{ color: '#818CF8' }}>
              10,000+ learners already inside
            </span>
          </div>

          <h2 className="mb-4 font-display text-white font-bold leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', textShadow: '0 0 24px rgba(99,102,241,0.2)' }}>
            Join the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #14B8A6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 10px rgba(99,102,241,0.2))',
              }}
            >
              Kanonkode Community
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-lg text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Get early access to new programmes, Scholar Challenge announcements, and career resources — straight to your inbox.
          </p>

          {!joined ? (
            <div className="mx-auto mb-5 max-w-[500px] rounded-[14px] p-[1px]" style={{ background: 'linear-gradient(120deg, rgba(20,184,166,0.6), rgba(99,102,241,0.6), rgba(20,184,166,0.6))', backgroundSize: '200% 200%', animation: 'commBorderShift 6s linear infinite' }}>
              <div className="flex flex-col gap-3 rounded-[13px] bg-[rgba(10,15,30,0.94)] p-2 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submitJoin()}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-xl px-5 py-4 text-[15px] text-white outline-none transition-all duration-200 placeholder:text-white/25"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', caretColor: '#14B8A6' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(20,184,166,0.45)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20,184,166,0.08)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
                <button
                  onClick={submitJoin}
                  className="group flex flex-shrink-0 items-center justify-center gap-2 rounded-xl px-7 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)', boxShadow: '0 6px 20px rgba(20,184,166,0.3)' }}
                >
                  Join
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ) : (
            <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-xl px-6 py-4" style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.3)' }}>
              <CheckCircle2 size={20} style={{ color: '#14B8A6' }} />
              <p className="text-[14px] font-semibold" style={{ color: '#14B8A6' }}>
                You&apos;re in! Check your inbox for a welcome email.
              </p>
            </div>
          )}

          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            🔒 No spam. Unsubscribe anytime.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex -space-x-2.5">
              {[
                { bg: '#4F46E5', l: 'A' },
                { bg: '#14B8A6', l: 'P' },
                { bg: '#8B5CF6', l: 'R' },
                { bg: '#F59E0B', l: 'S' },
                { bg: '#EF4444', l: 'M' },
              ].map((av, i) => (
                <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-[10px] font-bold text-white" style={{ backgroundColor: av.bg, borderColor: '#0A0F1E', position: 'relative', zIndex: 5 - i }}>
                  {av.l}
                </div>
              ))}
            </div>
            <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Joined by <span className="font-semibold text-white">10,000+</span> students & professionals
            </p>
          </div>

          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-y-4">
            {[
              { numRef: stat1Ref, fallback: '13K+', label: 'Community members', color: '#6366F1', icon: Users },
              { numRef: stat2Ref, fallback: '50+', label: 'Live cohorts run', color: '#14B8A6', icon: Zap },
              { numRef: stat3Ref, fallback: '4.8★', label: 'Average rating', color: '#F59E0B', icon: Star },
            ].map((s, i, arr) => {
              const StatIcon = s.icon
              return (
                <div key={s.label} className="flex w-full items-center justify-center sm:w-auto">
                  <div className="px-6 text-center sm:px-8">
                    <div className="mb-2 flex items-center justify-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: `${s.color}22` }}>
                        <StatIcon size={14} style={{ color: s.color }} />
                      </span>
                    </div>
                    <span ref={s.numRef} className="mb-1 block font-display text-[28px] font-bold leading-none" style={{ color: s.color }}>
                      {s.fallback}
                    </span>
                    <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {s.label}
                    </p>
                  </div>
                  {i < arr.length - 1 && <div className="hidden h-8 w-px flex-shrink-0 sm:block" style={{ background: 'rgba(255,255,255,0.08)' }} />}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes commBgShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes commBorderShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  )
}
