'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { GraduationCap, Building2, Monitor, Zap, ArrowRight, MapPin } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const products = [
  {
    num: '01',
    id: 'kanonkode',
    type: 'B2C EDTECH',
    name: 'KanonKode',
    desc: 'Live cohort-based learning for students, graduates, and professionals. Structured programmes, real projects, career outcomes.',
    icon: GraduationCap,
    color: '#4F46E5',
    lightColor: '#6366F1',
    bg: 'rgba(79,70,229,0.08)',
    border: 'rgba(79,70,229,0.2)',
    arrowBg: '#4F46E5',
    linkText: 'Explore KanonKode',
    link: '/',
    featured: true,
  },
  {
    num: '02',
    id: 'enterprise',
    type: 'B2B CORPORATE',
    name: 'Gisul Enterprise',
    desc: 'End-to-end L&D solutions for corporates. From instructional design to delivery - we build capability at scale.',
    icon: Building2,
    color: '#14B8A6',
    lightColor: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
    border: 'rgba(20,184,166,0.18)',
    arrowBg: '#14B8A6',
    linkText: 'Explore Enterprise',
    link: '#',
    featured: false,
  },
  {
    num: '03',
    id: 'vmlabs',
    type: 'VIRTUAL LABS',
    name: 'VM Labs',
    desc: 'Cloud-based virtual lab infrastructure for hands-on technical training. Practice on real tools without local setup.',
    icon: Monitor,
    color: '#8B5CF6',
    lightColor: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.18)',
    arrowBg: '#8B5CF6',
    linkText: 'Explore VM Labs',
    link: '#',
    featured: false,
  },
  {
    num: '04',
    id: 'aaptor',
    type: 'SAAS PLATFORM',
    name: 'Aaptor',
    desc: 'AI-powered interview and assessment platform. Voice-based interviewing, proctoring, and candidate evaluation at scale.',
    icon: Zap,
    color: '#F59E0B',
    lightColor: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.18)',
    arrowBg: '#F59E0B',
    linkText: 'Explore Aaptor',
    link: '#',
    featured: false,
  },
]

export default function GisulEcosystem() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo('.eco-heading-block', { opacity: 0, x: -40 }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
    gsap.fromTo('.gisul-brand-card', { opacity: 0, y: -30, scale: 0.95 }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      delay: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
    gsap.fromTo('.eco-product-card', { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.eco-products-row', start: 'top 85%' },
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-0 flex flex-col items-start gap-8 sm:gap-12 lg:flex-row lg:gap-16">
          <div className="eco-heading-block w-full flex-shrink-0 pt-0 sm:pt-4 lg:w-[40%]">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-main">Our Ecosystem</p>

            <h2 className="mb-5 font-display font-bold leading-[1.1] text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
              The{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Gisul Ecosystem
              </span>
            </h2>

            <p className="max-w-sm text-[15px] leading-relaxed text-text-secondary">
              Gisul Software Services is the parent organisation behind four focused products - each solving a different layer of the
              talent and learning problem. Together they form a complete ecosystem from learning to placement to enterprise capability.
            </p>
          </div>

          <div className="mt-0 flex flex-1 justify-center sm:mt-[26px] lg:justify-center">
            <div
              className="gisul-brand-card flex w-full max-w-[280px] min-w-0 flex-col items-center rounded-2xl px-5 py-6 text-center sm:min-w-[260px] sm:px-10 sm:py-8"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(99,102,241,0.15)',
                boxShadow: '0 8px 40px rgba(99,102,241,0.1)',
              }}
            >
              <div className="mb-4 flex h-14 w-[120px] items-center justify-center overflow-hidden sm:h-16 sm:w-[140px]">
                <Image
                  src="/images/gisul-logo.png"
                  alt="Gisul logo"
                  width={140}
                  height={56}
                  className="h-12 w-[120px] object-contain sm:h-14 sm:w-[140px]"
                />
              </div>

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-text-sub">Software Services</p>

              <div className="mb-4 h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #4F46E5, #14B8A6)' }} />

              <div className="flex items-center gap-1.5">
                <MapPin size={13} style={{ color: '#94A3B8' }} />
                <p className="text-[12px] text-text-sub sm:text-[13px]">Est. 2020 · Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block" style={{ height: '64px' }}>
          <div
            className="absolute"
            style={{
              top: 0,
              right: 'calc(25% - -30px)',
              width: '2px',
              height: '32px',
              background: 'linear-gradient(to bottom, rgba(99,102,241,0.3), rgba(99,102,241,0.15))',
            }}
          />

          <div
            className="absolute"
            style={{
              top: '32px',
              left: '12.5%',
              right: '12.5%',
              height: '2px',
              borderTop: '2px dashed rgba(99,102,241,0.2)',
            }}
          />

          {[12.5, 37.5, 62.5, 87.5].map((pos, i) => (
            <div key={i}>
              <div
                className="absolute"
                style={{
                  top: '32px',
                  left: `calc(${pos}% - 1px)`,
                  width: '2px',
                  height: '32px',
                  background: 'rgba(99,102,241,0.2)',
                }}
              />
              <div
                className="absolute h-3 w-3 rounded-full border-2 border-white"
                style={{
                  top: '26px',
                  left: `calc(${pos}% - 6px)`,
                  backgroundColor: products[i].color,
                }}
              />
            </div>
          ))}
        </div>

        <div className="eco-products-row grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {products.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.id}
                className="eco-product-card group relative flex min-h-[270px] flex-col rounded-2xl p-4 sm:min-h-[300px] sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                style={{
                  background: p.featured ? `linear-gradient(145deg, ${p.bg}, rgba(238,242,255,0.8))` : '#FAFAFA',
                  border: `1.5px solid ${p.featured ? p.color : p.border}`,
                  boxShadow: p.featured ? `0 4px 24px ${p.color}18` : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                {p.featured && (
                  <div
                    className="absolute -top-3.5 left-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold text-white"
                    style={{ background: p.color }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white opacity-80" />
                    You are here
                  </div>
                )}

                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: p.bg, border: `1px solid ${p.border}` }}>
                    <Icon size={22} style={{ color: p.color }} />
                  </div>

                  <span className="font-display text-[18px] font-bold leading-none" style={{ color: 'rgba(99,102,241,0.15)' }}>
                    {p.num}
                  </span>
                </div>

                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: p.lightColor }}>
                  {p.type}
                </p>

                <h3 className="mb-3 font-display text-[20px] font-bold leading-tight text-dark-hero sm:text-[22px]">{p.name}</h3>

                <p className="mb-5 flex-1 text-[12px] leading-relaxed text-text-secondary sm:mb-6 sm:text-[13px]">{p.desc}</p>

                <div className="mt-auto flex items-center justify-between">
                  <a
                    href={p.link}
                    className="group inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 hover:gap-2.5"
                    style={{ color: p.color }}
                  >
                    {p.linkText}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </a>

                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
                    style={{ background: p.arrowBg, boxShadow: `0 4px 12px ${p.color}35` }}
                  >
                    <ArrowRight size={15} className="text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
