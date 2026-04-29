'use client'

import {
  Briefcase,
  CheckCircle2,
  GraduationCap,
  RefreshCw,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import type { CourseDetail } from '@/data/courseDetails'

const profileIconMap: Record<string, LucideIcon> = {
  '🎓': GraduationCap,
  '📋': Briefcase,
  '🔄': RefreshCw,
  '📉': TrendingUp,
  '💼': Briefcase,
  '🧑‍💻': Briefcase,
  '🏫': GraduationCap,
  '📈': TrendingUp,
  '🏢': Briefcase,
  '💡': TrendingUp,
  '🚀': TrendingUp,
  '👨‍💻': Briefcase,
  '📚': GraduationCap,
  '🖥️': Briefcase,
  '🧪': Briefcase,
}

export default function WhoIsThisFor({
  detail,
}: {
  detail: CourseDetail
}) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Who It Is For</p>
            <h2 className="font-display font-bold text-dark-hero leading-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              Built For{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                These Learners
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.whoFor.map((w, i) => (
                (() => {
                  const Icon = profileIconMap[w.emoji] ?? GraduationCap
                  return (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid rgba(99,102,241,0.1)',
                  }}
                >
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'rgba(79,70,229,0.08)' }}
                  >
                    <Icon size={20} style={{ color: '#4F46E5' }} />
                  </span>
                  <h4 className="font-display font-bold text-[15px] text-dark-hero mb-1">{w.profile}</h4>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{w.desc}</p>
                </div>
                  )
                })()
              ))}
            </div>
          </div>

          <div className="lg:w-[360px] flex-shrink-0">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Eligibility</p>
            <h2 className="font-display font-bold text-dark-hero leading-tight mb-6" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              What You Need to Join
            </h2>

            <div
              className="rounded-2xl p-6 space-y-4"
              style={{
                background: '#F8FAFC',
                border: '1px solid rgba(99,102,241,0.1)',
              }}
            >
              {detail.eligibility.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#14B8A6' }} />
                  <p className="text-[14px] text-text-secondary leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-5 rounded-xl p-4"
              style={{
                background: 'rgba(99,102,241,0.05)',
                border: '1px solid rgba(99,102,241,0.12)',
                borderLeft: '3px solid #4F46E5',
              }}
            >
              <p className="text-[13px] text-text-secondary leading-relaxed italic">
                Not sure if this is right for you?{' '}
                <a href="/contact" className="font-semibold hover:underline" style={{ color: '#4F46E5' }}>
                  Book a free counselling session
                </a>{' '}
                and we&apos;ll tell you honestly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
