'use client'

import { useEffect, useMemo, useRef } from 'react'
import { BarChart2, Bot, GitMerge, ShieldCheck } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { gsap } from '@/lib/gsap-init'
import type { Testimonial } from '@/types'

type PhotoTestimonial = Testimonial & {
  rating?: number
  image?: string
  accentColor?: string
}

function TestimonialPhotoCard({ t }: { t: PhotoTestimonial }) {
  const accent = t.accentColor ?? '#4F46E5'
  const fallbackImages: Record<string, string> = {
    '1': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=90&auto=format&fit=crop',
    '2': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=90&auto=format&fit=crop',
    '3': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=90&auto=format&fit=crop',
    '4': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=90&auto=format&fit=crop',
    '5': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=90&auto=format&fit=crop',
    '6': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=90&auto=format&fit=crop',
  }
  const imageUrl = t.image ?? fallbackImages[t.id] ?? fallbackImages['1']
  const gradientBg = `
    linear-gradient(
      160deg,
      ${accent}CC 0%,
      ${accent}88 25%,
      #0F172A 65%,
      #0A0F1E 100%
    )
  `

  return (
    <div
      className="group relative flex-shrink-0 cursor-default overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
      style={{
        width: 'min(320px, 82vw)',
        height: '420px',
        backgroundImage: imageUrl
          ? `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.05) 0%,
              rgba(0,0,0,0.2) 35%,
              rgba(0,0,0,0.75) 65%,
              rgba(0,0,0,0.95) 100%
            ),
            url(${imageUrl})
          `
          : gradientBg,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            160deg,
            ${accent}30 0%,
            transparent 45%,
            ${accent}20 100%
          )`,
        }}
      />

      <div
        className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full"
        style={{
          background: `radial-gradient(circle, ${accent}50, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-sm">
            <span className="truncate text-[10px] font-medium text-white/55 flex-shrink-0">{t.beforeRole}</span>
            <span className="text-[10px] text-white/35 flex-shrink-0">→</span>
            <span className="truncate text-[10px] font-bold" style={{ color: accent }}>
              {t.afterRole}
            </span>
          </div>

          <div className="flex flex-shrink-0 gap-0.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 backdrop-blur-sm">
            {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
              <span key={i} className="text-[11px]" style={{ color: '#F59E0B' }}>
                ★
              </span>
            ))}
          </div>
        </div>

        <div>
          <div
            className="mb-4 h-[3px] rounded-full transition-all duration-500 group-hover:w-16"
            style={{ backgroundColor: accent, width: '2rem' }}
          />
          <p className="mb-5 line-clamp-3 text-[14px] leading-relaxed text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            &quot;{t.quote}&quot;
          </p>

          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-[14px] font-bold text-white"
                style={{
                  backgroundColor: accent,
                  borderColor: `${accent}80`,
                }}
              >
                {t.avatar}
              </div>
              <div
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow: `0 0 14px 5px ${accent}55`,
                }}
              />
            </div>

            <div>
              <p className="text-[14px] font-semibold leading-tight text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                {t.name}
              </p>
              <p className="mt-0.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {t.experience}
              </p>
            </div>

            <div className="ml-auto flex-shrink-0 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white/60 backdrop-blur-sm">
              Verified
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OutcomesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const outcomeChips = useMemo(
    () => [
      { label: 'Portfolio Built', ok: true },
      { label: 'Mock Interview Done', ok: true },
      { label: 'Certificate Earned', ok: true },
    ],
    [],
  )

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.outcomes-text', { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.outcomes-top',
          start: 'top 78%',
        },
      })

      gsap.fromTo('.outcomes-visual', { opacity: 0, x: 50, scale: 0.97 }, {
        opacity: 1, x: 0, scale: 1, duration: 0.85,
        delay: 0.15, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.outcomes-top',
          start: 'top 78%',
        },
      })

      gsap.to('.outcomes-progress-bar', {
        width: '94%',
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: '.outcomes-top',
          start: 'top 75%',
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="outcomes-section bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="outcomes-top flex flex-col lg:flex-row gap-16 lg:gap-20 items-center mb-24">
          <div className="outcomes-text w-full lg:w-[45%] flex-shrink-0">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Outcomes</p>

            <h2
              className="font-display font-bold text-dark-hero leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
            >
              Real Transitions.<br />
              Real Careers.
            </h2>

            <p className="text-[16px] text-text-secondary leading-relaxed mb-8 max-w-md">
              Every programme is built with real projects, portfolios, and mock interviews - so you&apos;re job-ready for roles
              that matter.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {[
                {
                  label: 'AI Operator',
                  Icon: Bot,
                  color: '#6366F1',
                  bg: 'rgba(99,102,241,0.06)',
                  border: 'rgba(99,102,241,0.14)',
                },
                {
                  label: 'Data Analyst',
                  Icon: BarChart2,
                  color: '#14B8A6',
                  bg: 'rgba(20,184,166,0.06)',
                  border: 'rgba(20,184,166,0.14)',
                },
                {
                  label: 'DevOps Engineer',
                  Icon: GitMerge,
                  color: '#6366F1',
                  bg: 'rgba(99,102,241,0.06)',
                  border: 'rgba(99,102,241,0.14)',
                },
                {
                  label: 'Cyber Security Analyst',
                  Icon: ShieldCheck,
                  color: '#14B8A6',
                  bg: 'rgba(20,184,166,0.06)',
                  border: 'rgba(20,184,166,0.14)',
                },
              ].map((role) => (
                <span
                  key={role.label}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium cursor-default"
                  style={{
                    background: role.bg,
                    border: `1px solid ${role.border}`,
                    color: '#475569',
                  }}
                >
                  <role.Icon size={15} style={{ color: role.color }} />
                  <span className="text-[13px]" style={{ color: role.color }}>
                    {role.label}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="outcomes-visual flex-1 w-full lg:w-auto">
            <div
              className="relative rounded-2xl p-7 lg:p-8"
              style={{
                background: '#F8FAFF',
                border: '1px solid rgba(99,102,241,0.14)',
                boxShadow: '0 4px 24px rgba(99,102,241,0.08)',
              }}
            >
              <div className="flex items-center gap-4 mb-7 pb-7" style={{ borderBottom: '1px solid rgba(99,102,241,0.08)' }}>
                <div className="flex-1">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5" style={{ color: '#94A3B8' }}>
                    Before
                  </p>
                  <p className="font-display font-bold text-[22px] text-dark-hero leading-tight">Graduate</p>
                </div>

                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.15)',
                    }}
                  >
                    <span className="text-indigo-main font-bold text-[16px]">→</span>
                  </div>
                </div>

                <div className="flex-1 text-right">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5" style={{ color: '#14B8A6' }}>
                    After
                  </p>
                  <p className="font-display font-bold text-[22px] text-dark-hero leading-tight">AI Automation Role</p>
                  <div
                    className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(20,184,166,0.08)',
                      border: '1px solid rgba(20,184,166,0.2)',
                    }}
                  >
                    <span style={{ color: '#14B8A6', fontSize: '12px' }}>★</span>
                    <span className="text-[11px] font-semibold" style={{ color: '#14B8A6' }}>
                      Role Achieved
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-[14px] text-dark-hero">Skill Readiness</span>
                  <span className="font-display font-bold text-[22px] text-dark-hero">94%</span>
                </div>

                <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(99,102,241,0.08)' }}>
                  <div
                    className="outcomes-progress-bar h-full rounded-full"
                    style={{
                      background: 'linear-gradient(to right, #4F46E5, #6366F1 50%, #14B8A6)',
                      width: '0%',
                      transition: 'width 0s',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                {[
                  {
                    label: 'Portfolio Built',
                    sub: 'Showcase ready',
                  },
                  {
                    label: 'Mock Interview Done',
                    sub: 'Interview confident',
                  },
                  {
                    label: 'Certificate Earned',
                    sub: 'Industry recognised',
                  },
                ].map((chip) => (
                  <div
                    key={chip.label}
                    className="rounded-xl p-3 flex items-start gap-2.5"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(99,102,241,0.08)',
                      boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
                    }}
                  >
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                      style={{ background: '#14B8A6' }}
                    >
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-[12px] text-dark-hero leading-tight">{chip.label}</p>
                      <p className="text-[11px] text-text-sub">{chip.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center justify-between gap-4 flex-wrap -mx-7 lg:-mx-8 -mb-7 lg:-mb-8 mt-2 px-7 lg:px-8 py-5 rounded-b-2xl"
                style={{ background: 'rgba(99,102,241,0.06)', borderTop: '1px solid rgba(99,102,241,0.08)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['#4F46E5', '#14B8A6', '#8B5CF6', '#F59E0B'].map((c, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white font-bold text-[10px]"
                        style={{
                          backgroundColor: c,
                          borderColor: '#FFFFFF',
                          position: 'relative',
                          zIndex: 4 - i,
                        }}
                      >
                        {['A', 'P', 'R', 'S'][i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-text-secondary">
                    Join <span className="font-bold text-dark-hero">15,000+</span> learners who made the switch
                  </p>
                </div>

                <a
                  href="#"
                  className="text-indigo-main font-semibold text-[13px] flex items-center gap-1.5 flex-shrink-0 hover:gap-2.5 transition-all duration-200 group"
                >
                  View Success Stories
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-24 -mx-6 lg:-mx-12"
          style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FAFC 100%)',
          }}
        >
          <div className="mx-auto mb-10 flex max-w-[1280px] flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-end lg:px-12">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-main">Student Outcomes</p>
              <h3 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                What Our Learners Say
              </h3>
            </div>

            <div className="flex w-full items-center gap-3 rounded-2xl border border-[rgba(99,102,241,0.12)] bg-bg-tinted px-5 py-3 sm:w-auto">
              <div>
                <div className="mb-0.5 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: '#F59E0B', fontSize: '16px' }}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-text-sub">3,200+ verified reviews</p>
              </div>
              <div className="h-10 w-px bg-[rgba(99,102,241,0.1)]" />
              <div>
                <p className="font-display text-[28px] font-bold leading-none text-dark-hero">4.9</p>
                <p className="text-[11px] text-text-sub">out of 5</p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden py-4"
            style={{
              marginLeft: 'calc(-50vw + 50%)',
              marginRight: 'calc(-50vw + 50%)',
              width: '100vw',
              backgroundColor: '#F8FAFC',
            }}
          >
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0 z-20"
              style={{
                width: 'clamp(140px, 22vw, 280px)',
                background: `linear-gradient(
                  to right,
                  #F8FAFC 0%,
                  #F8FAFC 20%,
                  #F8FAFC 40%,
                  rgba(248,250,252,0.95) 55%,
                  rgba(248,250,252,0.7) 70%,
                  rgba(248,250,252,0.3) 85%,
                  transparent 100%
                )`,
              }}
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-0 z-20"
              style={{
                width: 'clamp(140px, 22vw, 280px)',
                background: `linear-gradient(
                  to left,
                  #F8FAFC 0%,
                  #F8FAFC 20%,
                  #F8FAFC 40%,
                  rgba(248,250,252,0.95) 55%,
                  rgba(248,250,252,0.7) 70%,
                  rgba(248,250,252,0.3) 85%,
                  transparent 100%
                )`,
              }}
            />

            <div
              className="flex w-max gap-5"
              style={{
                animation: 'marqueeLeft 40s linear infinite',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = 'paused'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = 'running'
              }}
            >
              {[...(testimonials as PhotoTestimonial[]), ...(testimonials as PhotoTestimonial[])].map((t, i) => (
                <TestimonialPhotoCard key={`${t.id}-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
