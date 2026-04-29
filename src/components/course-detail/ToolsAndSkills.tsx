'use client'

import type { Course } from '@/types'

export default function ToolsAndSkills({ course }: { course: Course }) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Tools & Skills</p>
          <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            What You&apos;ll{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Master
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {course.skills.map((skill, i) => (
            <div
              key={i}
              className="px-5 py-3 rounded-2xl text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background:
                  i % 4 === 0
                    ? 'rgba(79,70,229,0.08)'
                    : i % 4 === 1
                      ? 'rgba(20,184,166,0.08)'
                      : i % 4 === 2
                        ? 'rgba(139,92,246,0.08)'
                        : 'rgba(245,158,11,0.08)',
                color: i % 4 === 0 ? '#4F46E5' : i % 4 === 1 ? '#14B8A6' : i % 4 === 2 ? '#8B5CF6' : '#D97706',
                border: `1px solid ${i % 4 === 0 ? 'rgba(79,70,229,0.2)' : i % 4 === 1 ? 'rgba(20,184,166,0.2)' : i % 4 === 2 ? 'rgba(139,92,246,0.2)' : 'rgba(245,158,11,0.2)'}`,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
