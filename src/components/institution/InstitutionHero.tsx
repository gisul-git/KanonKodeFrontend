'use client'

import { useEffect } from 'react'
import { ArrowRight, Award, BookOpen, Building2, Users } from 'lucide-react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap-init'

export default function InstitutionHero() {
  useEffect(() => {
    gsap.fromTo('.ih-item', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out', delay: 0.2 })
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '88vh', background: '#F8FAFC' }}>
      <div className="absolute inset-0">
        <Image src="/images/instituteHero.png" alt="Institution hero background" fill priority className="object-cover object-center" />
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
          <div className="w-full lg:w-[75%] flex-shrink-0">
          <div
            className="ih-item inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7"
            style={{
              background: 'rgba(79,70,229,0.08)',
              border: '1px solid rgba(79,70,229,0.15)',
            }}
          >
            <Building2 size={14} style={{ color: '#14B8A6' }} />
            <span className="text-[12px] font-medium" style={{ color: '#4F46E5' }}>
              For Colleges, Universities & Training Institutes
            </span>
          </div>

          <div className="ih-item mb-6">
            <p className="font-display font-black text-dark-hero uppercase leading-[0.95] whitespace-nowrap" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', letterSpacing: '-0.02em' }}>
              Bring Industry-Ready
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
              Skills to Your Campus
            </p>
          </div>

          <div className="ih-item mb-10 max-w-lg">
            <p className="text-[16px] leading-relaxed text-text-secondary">
              Kanonkode partners with institutions to deliver live cohort programmes, workshops, and career-focused curriculum — helping your students move from classroom learning to real-world employability.
            </p>
          </div>

          <div className="ih-item flex items-center gap-4 flex-wrap mb-8">
            <a
              href="#partner"
              className="group inline-flex items-center gap-2 font-bold text-[15px] text-white px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                boxShadow: '0 8px 24px rgba(79,70,229,0.3)',
              }}
            >
              Partner With Us
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#what-we-offer"
              className="inline-flex items-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(79,70,229,0.25)',
                color: '#0F172A',
              }}
            >
              View What We Offer →
            </a>
          </div>
          </div>
        </div>

        <div className="ih-item flex w-full flex-wrap items-center gap-4 rounded-2xl border border-transparent bg-transparent px-3 py-3 sm:px-6 sm:py-5 md:gap-6 lg:gap-8">
          {[
            { icon: Building2, num: '50+', label: 'Institutions Partnered', color: '#6366F1', bg: 'rgba(99,102,241,0.12)' },
            { icon: Users, num: '13K+', label: 'Students Reached', color: '#14B8A6', bg: 'rgba(20,184,166,0.12)' },
            { icon: BookOpen, num: '100+', label: 'Programmes Delivered', color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)' },
            { icon: Award, num: '4.8★', label: 'Avg Satisfaction', color: '#F59E0B', bg: 'rgba(245,158,11,0.12)' },
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
