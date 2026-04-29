'use client'

import { Briefcase, Building2, Quote, TrendingUp } from 'lucide-react'
import type { Course } from '@/types'
import type { CourseDetail } from '@/data/courseDetails'

export default function CareerOutcomes({
  course,
  detail,
}: {
  course: Course
  detail: CourseDetail
}) {
  return (
    <section id="outcomes" className="py-24" style={{ background: '#0F172A' }}>
      <div className="h-px mb-16" style={{ background: 'linear-gradient(90deg, transparent, #4F46E5 30%, #14B8A6 70%, transparent)' }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Career Outcomes</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Where This Takes{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818CF8, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              You
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp size={20} style={{ color: '#14B8A6' }} />
                <p className="font-bold text-[14px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Average Salary Range
                </p>
              </div>
              <p className="font-display font-black text-white" style={{ fontSize: '36px' }}>
                {course.salary}
              </p>
              <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Based on recent placements and industry benchmarks
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={16} style={{ color: '#6366F1' }} />
                <p className="font-bold text-[14px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Roles You Can Target
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {detail.targetRoles.map((role, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                    style={{
                      background: 'rgba(99,102,241,0.12)',
                      border: '1px solid rgba(99,102,241,0.2)',
                      color: '#818CF8',
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 size={16} style={{ color: '#14B8A6' }} />
                <p className="font-bold text-[14px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Companies That Hire For These Roles
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {detail.hiringCompanies.map((company, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                    style={{
                      background: 'rgba(20,184,166,0.1)',
                      border: '1px solid rgba(20,184,166,0.2)',
                      color: '#14B8A6',
                    }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-[380px] flex-shrink-0">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${detail.successStory.color}30`,
                borderLeft: `4px solid ${detail.successStory.color}`,
              }}
            >
              <div className="p-7">
                <Quote size={40} className="mb-4 opacity-40" style={{ color: detail.successStory.color }} />
                <p className="text-[16px] leading-relaxed italic mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  &quot;{detail.successStory.quote}&quot;
                </p>

                <div className="mb-5" style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-[18px] flex-shrink-0"
                    style={{ background: detail.successStory.color }}
                  >
                    {detail.successStory.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-[15px]">{detail.successStory.name}</p>
                    <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {detail.successStory.before} →{' '}
                      <span style={{ color: detail.successStory.color }}>{detail.successStory.after}</span>
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{
                    background: `${detail.successStory.color}12`,
                    border: `1px solid ${detail.successStory.color}25`,
                  }}
                >
                  <p className="text-[11px] font-bold tracking-wider uppercase mb-1" style={{ color: detail.successStory.color }}>
                    Salary Achieved
                  </p>
                  <p className="font-display font-black text-white text-[28px] leading-none">{detail.successStory.salary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
