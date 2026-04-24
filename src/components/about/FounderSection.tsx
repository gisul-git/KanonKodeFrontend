'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
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
    <section ref={ref} className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Leadership</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
            Meet the Founder
          </h2>
          <p className="mt-3 text-[16px] text-text-secondary">The vision. The purpose. The person behind it all.</p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 sm:gap-10 lg:flex-row lg:gap-16">
          <div className="founder-photo w-full max-w-[380px] flex-shrink-0 lg:w-[380px]">
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl sm:h-[460px]">
              <div className="w-full h-full flex items-center justify-center" style={{ background: '#EEF2FF' }}>
                <div
                  className="pointer-events-none absolute left-6 top-6 h-16 w-16"
                  style={{ backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.2) 1px, transparent 1px)', backgroundSize: '10px 10px' }}
                />
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-indigo-100/70" />
              </div>

              <Image
                src="/images/founderImage.png"
                alt="Founder"
                fill
                priority
                className="absolute inset-0 z-10 object-contain object-bottom scale-[1.08]"
              />
            </div>
          </div>

          <div className="founder-text flex-1">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-teal-main mb-2">Founder & CEO</p>
            <h3 className="font-display font-bold text-dark-hero text-[30px] leading-tight mb-2 sm:text-[36px]">Sahil Goyal</h3>
            <p className="text-[15px] text-indigo-main font-medium mb-4">Gisul Software Services · Kanonkode</p>
            <div className="mb-6 h-[3px] w-16 rounded-full bg-indigo-main/90" />

            <div className="space-y-3 mb-7">
              <p className="text-[15px] text-text-secondary leading-relaxed">
                Before founding Gisul, Karthik worked across learning design and technology implementation, helping teams build practical skills for real projects.
              </p>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                He started Kanonkode after seeing that most learners completed courses but still struggled to become job-ready.
              </p>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                Today, he is focused on building an ecosystem where education, assessment, and hiring outcomes are tightly connected - so every learner has a clear, supported path from learning to earning.
              </p>
            </div>

            <div
              className="mb-7 rounded-xl p-5"
              style={{ background: '#EEF2FF', border: '1px solid rgba(99,102,241,0.12)' }}
            >
              <p className="font-display font-bold text-[17px] text-dark-hero leading-snug">
                &quot;Skills create confidence, but outcomes create momentum. We are building both.&quot;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <span style={{ color: '#4F46E5' }}>
                  <LinkedInIcon />
                </span>
              </a>
              <a href="#" className="text-[13px] font-medium text-text-secondary transition-colors duration-200 hover:text-indigo-main">
                Connect on Linkedin <span className="ml-1 text-[11px]">↗</span>
              </a>
              <div className="hidden h-6 w-px bg-slate-200 sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: 'rgba(20,184,166,0.12)' }}>
                  <MapPin size={14} className="text-teal-main" />
                </div>
                <span className="text-[13px] text-text-sub">Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
