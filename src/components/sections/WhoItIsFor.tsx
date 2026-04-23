'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const audiences = [
  {
    id: 'students',
    label: 'Students',
    desc: 'Find direction early. Build real skills from Day 1.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    accent: '#14B8A6',
    accentBg: 'rgba(20,184,166,0.15)',
    icon: '🎓',
  },
  {
    id: 'graduates',
    label: 'Graduates',
    desc: 'Land your first role with a job-ready portfolio.',
    image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80',
    accent: '#4F46E5',
    accentBg: 'rgba(79,70,229,0.15)',
    icon: '🏆',
  },
  {
    id: 'professional',
    label: 'Professional',
    desc: 'Upskill fast. Stay ahead in your career.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    accent: '#8B5CF6',
    accentBg: 'rgba(139,92,246,0.15)',
    icon: '⚡',
  },
  {
    id: 'institutions',
    label: 'Institutions',
    desc: 'Partner with us to upskill your student cohorts.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
    accent: '#0D9488',
    accentBg: 'rgba(13,148,136,0.15)',
    icon: '🏛️',
  },
]

export default function WhoItIsFor() {
  useEffect(() => {
    gsap.fromTo(
      '.who-text-col',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.who-section', start: 'top 75%' },
      },
    )

    gsap.fromTo(
      '.audience-card',
      { opacity: 0, y: 50, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.audience-grid', start: 'top 80%' },
      },
    )

    gsap.fromTo(
      '.stat-bar-fill',
      { width: '0%' },
      {
        width: (i, el) => el.getAttribute('data-width') || '0%',
        duration: 1.2,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.who-section', start: 'top 70%' },
      },
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section className="who-section relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#F8FAFC' }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="who-text-col w-full flex-shrink-0 lg:sticky lg:top-32 lg:w-[38%]">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-main">Who It Is For</p>

            <h2 className="mb-5 font-display font-bold leading-[1.1] text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
              For Those Who Want
              <br />
              to Learn with Purpose
            </h2>

            <p className="mb-8 max-w-sm text-[16px] leading-relaxed text-text-secondary">
              Whether you&apos;re a student finding direction, a graduate seeking your first break, a professional upskilling, or an
              institution building capability — Kanonkode is structured for you.
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-main px-6 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-hover hover:shadow-teal"
              >
                Explore Programmes →
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-indigo-main bg-transparent px-6 py-3.5 text-[15px] font-semibold text-indigo-main transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-tinted"
              >
                Join Scholarship →
              </a>
            </div>

          </div>

          <div className="audience-grid grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {audiences.map((aud) => (
              <div key={aud.id} className="audience-card group relative cursor-pointer overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={aud.image}
                    alt={aud.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.2) 55%, transparent 100%)',
                  }}
                />

                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to top, ${aud.accent}40 0%, transparent 60%)`,
                  }}
                />

                <div className="absolute right-3 top-3 z-10 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-bold text-white" style={{ backgroundColor: aud.accent }}>
                    Explore →
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1 p-5 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="mb-1.5 font-display text-[20px] font-bold leading-tight text-white transition-all duration-300 group-hover:mb-2.5">
                    {aud.label}
                  </h3>
                  <p
                    className="max-h-0 overflow-hidden text-[13px] font-medium leading-snug opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.80)' }}
                  >
                    {aud.desc}
                  </p>
                  <div className="mt-3 h-[2.5px] w-0 rounded-full transition-all duration-500 ease-out group-hover:w-12" style={{ backgroundColor: aud.accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
