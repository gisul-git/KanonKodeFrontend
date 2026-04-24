'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.5 9.5V18M6.5 6.8v.2M10 18v-4.6c0-2.5 3.5-2.7 3.5 0V18M13.5 11.5c.6-1 1.7-1.7 3.1-1.7 2 0 3.4 1.4 3.4 4V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 17L17 7M9.5 7H17v7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function FounderSection() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.founder-photo',
      { opacity: 0, x: -50, scale: 0.96 },
      {
        opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      },
    )
    gsap.fromTo(
      '.founder-text',
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 0.85, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Leadership</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
            Meet the Founder
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-4xl mx-auto">
          <div className="founder-photo flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden" style={{ width: '320px', height: '400px' }}>
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)' }}>
                <div className="text-center">
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center font-display font-black text-[40px] text-white"
                    style={{ background: '#4F46E5' }}
                  >
                    K
                  </div>
                  <p className="text-[13px] text-text-sub">Photo coming soon</p>
                </div>
              </div>

              {/*
              <Image
                src="/images/founder.jpg"
                alt="Founder"
                fill
                className="object-cover object-top"
              />
              */}

              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.6), transparent)' }}
              />
            </div>
          </div>

          <div className="founder-text flex-1">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-teal-main mb-2">Founder & CEO</p>
            <h3 className="font-display font-bold text-dark-hero text-[36px] leading-tight mb-2">[Founder Name]</h3>
            <p className="text-[15px] text-indigo-main font-medium mb-6">Gisul Software Services · Kanonkode</p>

            <div className="space-y-4 mb-8">
              <p className="text-[16px] text-text-secondary leading-relaxed">
                [Placeholder - Add founder bio here. What&apos;s your background? What did you do before starting Gisul? What was the
                moment you decided to build this?]
              </p>
              <p className="text-[16px] text-text-secondary leading-relaxed">
                [Placeholder - What are you building toward? What excites you most about the future of Kanonkode and the Gisul
                Ecosystem?]
              </p>
            </div>

            <div
              className="rounded-xl p-5 mb-8"
              style={{ background: '#EEF2FF', border: '1px solid rgba(99,102,241,0.15)', borderLeft: '4px solid #4F46E5' }}
            >
              <p className="font-display font-bold text-[18px] text-dark-hero leading-snug">
                &quot;[Add your signature quote or belief about education, careers, or what you&apos;re building here]&quot;
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <span style={{ color: '#4F46E5' }}>
                  <LinkedInIcon />
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.2)' }}
              >
                <span style={{ color: '#14B8A6' }}>
                  <TwitterIcon />
                </span>
              </a>
              <span className="text-[13px] text-text-sub ml-2">Bengaluru, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
