'use client'
import { useEffect, useRef } from 'react'
import { GraduationCap, Building2, Monitor, Zap, ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const products = [
  {
    id: 'kanonkode',
    name: 'KanonKode',
    type: 'B2C EdTech',
    desc: 'Live cohort-based learning for students, graduates, and professionals. Structured programmes, real projects, career outcomes.',
    icon: GraduationCap,
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.08)',
    border: 'rgba(79,70,229,0.2)',
    tag: '← You are here',
    tagColor: '#4F46E5',
    featured: true,
    link: '/',
  },
  {
    id: 'enterprise',
    name: 'Gisul Enterprise',
    type: 'B2B Corporate',
    desc: 'End-to-end L&D solutions for corporates. From instructional design to delivery - we build capability at scale.',
    icon: Building2,
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
    border: 'rgba(20,184,166,0.2)',
    tag: null,
    featured: false,
    link: '#',
  },
  {
    id: 'vmlabs',
    name: 'VM Labs',
    type: 'Virtual Labs',
    desc: 'Cloud-based virtual lab infrastructure for hands-on technical training. Practice on real tools without local setup.',
    icon: Monitor,
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    tag: null,
    featured: false,
    link: '#',
  },
  {
    id: 'aaptor',
    name: 'Aaptor',
    type: 'SaaS Platform',
    desc: 'AI-powered interview and assessment platform. Voice-based interviewing, proctoring, and candidate evaluation at scale.',
    icon: Zap,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    tag: null,
    featured: false,
    link: '#',
  },
]

export default function GisulEcosystem() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.eco-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      },
    )
    gsap.fromTo(
      '.eco-card',
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.eco-grid', start: 'top 82%' },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="eco-heading mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">The Parent Company</p>
              <h2 className="font-display font-bold text-dark-hero leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                The{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Gisul Ecosystem
                </span>
              </h2>
              <p className="text-[16px] text-text-secondary leading-relaxed">
                Gisul Software Services is the parent organisation behind four focused products - each solving a different layer of
                the talent and learning problem. Together they form a complete ecosystem from learning to placement to enterprise
                capability.
              </p>
            </div>

            <div
              className="flex-shrink-0 rounded-2xl px-8 py-5 text-center"
              style={{
                background: '#0F172A',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="font-display font-black text-[32px] text-white tracking-tight leading-none mb-1">
                Gi
                <span style={{ color: '#6366F1' }}>sul</span>
              </p>
              <p className="text-[10px] tracking-[0.2em] font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>
                SOFTWARE SERVICES
              </p>
              <p className="text-[11px] mt-2 font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Est. 2020 · Bengaluru
              </p>
            </div>
          </div>
        </div>

        <div className="eco-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.id}
                className={`eco-card relative rounded-2xl p-6
                  flex flex-col transition-all duration-300
                  hover:-translate-y-1 hover:shadow-card-hover
                  ${p.featured ? 'ring-2 ring-indigo-main' : ''}`}
                style={{
                  background: p.featured ? 'linear-gradient(145deg, #EEF2FF, #F8FAFF)' : '#F8FAFC',
                  border: `1.5px solid ${p.border}`,
                  minHeight: '280px',
                }}
              >
                {p.featured && (
                  <div
                    className="absolute -top-3 left-1/2
                    -translate-x-1/2 px-3 py-1 rounded-full
                    text-[10px] font-bold text-white whitespace-nowrap"
                    style={{ background: '#4F46E5' }}
                  >
                    ← You are here
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-xl mb-5
                  flex items-center justify-center"
                  style={{
                    background: p.bg,
                    border: `1px solid ${p.border}`,
                  }}
                >
                  <Icon size={22} style={{ color: p.color }} />
                </div>

                <span className="text-[10px] font-bold tracking-wider uppercase mb-2" style={{ color: p.color }}>
                  {p.type}
                </span>

                <h3 className="font-display font-bold text-[20px] text-dark-hero mb-3 leading-tight">{p.name}</h3>

                <p className="text-[13px] text-text-secondary leading-relaxed flex-1">{p.desc}</p>

                <a
                  href={p.link}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 hover:gap-2.5 group"
                  style={{ color: p.color }}
                >
                  {p.featured ? "You're here" : 'Learn more'}
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <div
                  className="absolute bottom-0 left-6 right-6
                  h-[3px] rounded-full opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 rounded-b-none"
                  style={{ background: p.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
