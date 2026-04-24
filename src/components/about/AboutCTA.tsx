'use client'
import { ArrowRight, Calendar } from 'lucide-react'

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: '#0F172A' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.2), transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(20,184,166,0.15), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #4F46E5 30%, #14B8A6 70%, transparent)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Ready to Start?</p>

        <h2 className="font-display font-bold text-white leading-[1.1] mb-6" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
          Your Career Transition
          <br />
          Starts{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #818CF8 0%, #14B8A6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Today
          </span>
        </h2>

        <p className="text-[16px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Join 13,000+ learners already building real skills through live cohorts, hands-on projects, and career support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="group inline-flex items-center justify-center gap-2 font-bold text-[15px] text-white px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)', boxShadow: '0 8px 28px rgba(79,70,229,0.4)' }}
          >
            Explore Programmes
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="/#career"
            className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}
          >
            <Calendar size={17} />
            Book Free Counselling
          </a>
        </div>
      </div>
    </section>
  )
}
