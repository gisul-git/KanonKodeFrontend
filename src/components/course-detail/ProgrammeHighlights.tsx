'use client'

import {
  Award,
  Bot,
  Briefcase,
  CalendarDays,
  FileText,
  FlaskConical,
  Goal,
  type LucideIcon,
} from 'lucide-react'
import type { CourseDetail } from '@/data/courseDetails'

const highlightIconMap: Record<string, LucideIcon> = {
  '📅': CalendarDays,
  '🎭': FlaskConical,
  '📄': FileText,
  '👥': Briefcase,
  '🎯': Goal,
  '📜': Award,
  '🤖': Bot,
  '🏗️': Briefcase,
  '💼': Briefcase,
  '🧪': FlaskConical,
  '📚': FileText,
  '🎖️': Award,
  '📊': Goal,
  '🏆': Award,
  '⚡': Goal,
  '📋': FileText,
  '🔄': Goal,
  '💻': Briefcase,
  '🚢': Goal,
  '📱': Briefcase,
  '🐙': Briefcase,
  '☁️': Bot,
  '🚀': Goal,
  '🔧': Briefcase,
}

export default function ProgrammeHighlights({
  detail,
}: {
  detail: CourseDetail
}) {
  return (
    <section className="py-20" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">
            Why This Programme
          </p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            What Makes It{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Different
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {detail.highlights.map((h, i) => (
            (() => {
              const Icon = highlightIconMap[h.icon] ?? Award
              return (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{
                border: '1px solid rgba(99,102,241,0.1)',
                boxShadow: '0 2px 12px rgba(99,102,241,0.06)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(79,70,229,0.08)' }}>
                <Icon size={22} style={{ color: '#4F46E5' }} />
              </div>
              <h3 className="font-display font-bold text-[16px] text-dark-hero mb-2">{h.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">{h.desc}</p>
              <div
                className="mt-4 h-[2px] rounded-full w-8 group-hover:w-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(90deg, #4F46E5, #14B8A6)',
                }}
              />
            </div>
              )
            })()
          ))}
        </div>
      </div>
    </section>
  )
}
