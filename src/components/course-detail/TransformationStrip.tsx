'use client'

import { ArrowRight, Check, X } from 'lucide-react'
import type { CourseDetail } from '@/data/courseDetails'

export default function TransformationStrip({
  detail,
}: {
  detail: CourseDetail
}) {
  return (
    <section className="bg-white py-20" id="transformation">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">
            The Transformation
          </p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Where You Start vs{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Where You Finish
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-stretch max-w-4xl mx-auto">
          <div
            className="flex-1 rounded-2xl p-7"
            style={{
              background: '#FFF5F5',
              border: '1.5px solid rgba(239,68,68,0.15)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <X size={16} style={{ color: '#EF4444' }} />
              </div>
              <p className="font-display font-bold text-[16px]" style={{ color: '#EF4444' }}>
                Before This Programme
              </p>
            </div>
            <div className="space-y-3">
              {detail.transformation.before.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(239,68,68,0.1)' }}>
                    <X size={10} style={{ color: '#EF4444' }} />
                  </div>
                  <p className="text-[14px] leading-snug" style={{ color: '#7F1D1D' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:flex-col py-4 lg:py-0 flex-shrink-0">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center rotate-90 lg:rotate-0"
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                boxShadow: '0 8px 24px rgba(79,70,229,0.3)',
              }}
            >
              <ArrowRight size={22} className="text-white" />
            </div>
          </div>

          <div
            className="flex-1 rounded-2xl p-7"
            style={{
              background: '#F0FDF4',
              border: '1.5px solid rgba(20,184,166,0.2)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Check size={16} style={{ color: '#14B8A6' }} />
              </div>
              <p className="font-display font-bold text-[16px]" style={{ color: '#14B8A6' }}>
                After This Programme
              </p>
            </div>
            <div className="space-y-3">
              {detail.transformation.after.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(20,184,166,0.1)' }}>
                    <Check size={10} style={{ color: '#14B8A6' }} />
                  </div>
                  <p className="text-[14px] leading-snug" style={{ color: '#064E3B' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
