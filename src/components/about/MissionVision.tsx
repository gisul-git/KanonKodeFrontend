'use client'
import { useEffect, useRef } from 'react'
import { Target, Telescope } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

export default function MissionVision() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.mv-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">What Drives Us</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
            Mission & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="mv-card relative rounded-2xl p-10 overflow-hidden" style={{ background: '#0F172A', minHeight: '320px' }}>
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(79,70,229,0.25), transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center"
                style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}
              >
                <Target size={26} style={{ color: '#6366F1' }} />
              </div>
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase mb-3" style={{ color: '#6366F1' }}>
                Our Mission
              </p>
              <h3 className="font-display font-bold text-white text-[26px] leading-snug mb-4">
                Make Practical Tech Education Accessible to Every Learner
              </h3>
              <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We build programmes that go beyond content - combining live instruction, real execution, and career support into one
                structured system that actually works.
              </p>
            </div>
          </div>

          <div
            className="mv-card relative rounded-2xl p-10 overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #F8FAFF, #EEF2FF)',
              border: '1.5px solid rgba(99,102,241,0.12)',
              minHeight: '320px',
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-white"
                style={{ border: '1px solid rgba(99,102,241,0.15)', boxShadow: '0 4px 16px rgba(99,102,241,0.1)' }}
              >
                <Telescope size={26} style={{ color: '#4F46E5' }} />
              </div>
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase mb-3 text-teal-main">Our Vision</p>
              <h3 className="font-display font-bold text-dark-hero text-[26px] leading-snug mb-4">
                Be the Career Launchpad for 1 Million+ Tech Professionals
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                A future where every motivated learner - regardless of background - has a clear, supported, and structured path to a
                meaningful tech career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
