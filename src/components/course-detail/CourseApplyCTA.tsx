'use client'

import { ArrowRight, Calendar } from 'lucide-react'
import type { Course } from '@/types'

export default function CourseApplyCTA({ course }: { course: Course }) {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: '#080D1A' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #4F46E5 30%, #14B8A6 70%, transparent)' }} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-40px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.15), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            right: '-40px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.1), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Ready to Begin?</p>
        <h2 className="font-display font-bold text-white leading-[1.1] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Your Next Batch Starts{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #818CF8, #14B8A6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {course.nextBatch}
          </span>
        </h2>
        <p className="text-[15px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Seats are limited per cohort. Apply now to secure your spot and lock in the scholarship price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 font-bold text-[15px] text-white px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #14B8A6, #0D9488)',
              boxShadow: '0 6px 24px rgba(20,184,166,0.35)',
            }}
          >
            <Calendar size={17} />
            Apply for {course.code}
            <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Book Free Counselling
          </a>
        </div>
      </div>
    </section>
  )
}
