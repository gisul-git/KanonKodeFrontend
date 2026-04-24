'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    desc: 'Gisul Software Services was founded in Bengaluru with a mission to bridge the gap between industry needs and talent capability.',
    color: '#4F46E5',
  },
  {
    year: '2021',
    title: 'First Cohorts',
    desc: 'Kanonkode launched its first live cohort programmes, enrolling students in structured tech learning pathways.',
    color: '#14B8A6',
  },
  {
    year: '2023',
    title: 'Ecosystem Expands',
    desc: 'Gisul Enterprise and VM Labs launched, extending the ecosystem to corporate B2B training and virtual lab infrastructure.',
    color: '#8B5CF6',
  },
  {
    year: '2024',
    title: 'Aaptor & Scale',
    desc: 'Aaptor - our AI-powered interview and assessment SaaS - launched. 13,000+ learners now inside the Kanonkode community.',
    color: '#F59E0B',
  },
]

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo('.story-left', { opacity: 0, x: -50 }, {
      opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
    gsap.fromTo('.story-milestone', { opacity: 0, x: -30 }, {
      opacity: 1, x: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out',
      scrollTrigger: { trigger: '.story-timeline', start: 'top 80%' },
    })
    gsap.fromTo('.story-right', { opacity: 0, x: 50, scale: 0.96 }, {
      opacity: 1, x: 0, scale: 1, duration: 0.85, delay: 0.2, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="story-left w-full lg:w-[50%]">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-main">Our Story</p>
            <h2 className="mb-4 font-display font-bold leading-[1.1] text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
              From a Classroom Gap
              <br />
              to a Career System
            </h2>
            <p className="mb-12 max-w-md text-[16px] leading-relaxed text-text-secondary">
              [Placeholder - replace with your actual story about why you started Kanonkode, what problem you saw, and what drives
              you to build this every day.]
            </p>

            <div className="story-timeline relative pl-8">
              <div
                className="absolute bottom-2 left-[11px] top-2 w-px"
                style={{ background: 'linear-gradient(to bottom, #4F46E5, #14B8A6, #8B5CF6, #F59E0B)' }}
              />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={i} className="story-milestone relative">
                    <div
                      className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                      style={{ backgroundColor: m.color, boxShadow: `0 0 0 3px ${m.color}30` }}
                    >
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <span
                          className="rounded-full px-2.5 py-1 font-display text-[13px] font-bold"
                          style={{ backgroundColor: `${m.color}12`, color: m.color, border: `1px solid ${m.color}25` }}
                        >
                          {m.year}
                        </span>
                        <h3 className="font-display text-[17px] font-bold text-dark-hero">{m.title}</h3>
                      </div>
                      <p className="text-[14px] leading-relaxed text-text-secondary">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="story-right w-full flex-1">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: '520px' }}>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Kanonkode team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.3) 0%, transparent 60%)' }} />
              <div
                className="absolute bottom-6 left-6 right-6 rounded-xl p-5"
                style={{ background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <p className="mb-1 font-display text-[18px] font-bold text-white">
                  "We don&apos;t just teach tech.
                  <br />
                  We build careers."
                </p>
                <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  - Founder, Kanonkode
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
