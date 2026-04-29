'use client'

import { useState } from 'react'
import { BookOpen, ChevronDown, Folder } from 'lucide-react'
import type { CourseDetail } from '@/data/courseDetails'
import type { Course } from '@/types'

export default function CourseCurriculum({
  detail,
}: {
  detail: CourseDetail
  course: Course
}) {
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="curriculum" className="py-20" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-10">
          <div>
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Curriculum</p>
            <h2 className="font-display font-bold text-dark-hero" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              What You&apos;ll Learn,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Week by Week
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-6 text-[13px] text-text-secondary flex-shrink-0">
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} style={{ color: '#4F46E5' }} />
              {detail.curriculum.reduce((acc, w) => acc + w.topics.length, 0)} Topics
            </span>
            <span className="flex items-center gap-1.5">
              <Folder size={14} style={{ color: '#14B8A6' }} />
              {detail.curriculum.filter((w) => w.project).length} Projects
            </span>
          </div>
        </div>

        <div className="space-y-3 max-w-4xl">
          {detail.curriculum.map((week, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: 'white',
                border: open === i ? '1.5px solid rgba(79,70,229,0.25)' : '1px solid rgba(99,102,241,0.1)',
                boxShadow: open === i ? '0 4px 20px rgba(79,70,229,0.08)' : 'none',
              }}
            >
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center gap-5 px-6 py-5 text-left hover:bg-bg-tinted transition-colors">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-black flex-shrink-0"
                  style={{
                    background: open === i ? '#4F46E5' : 'rgba(99,102,241,0.1)',
                    color: open === i ? 'white' : '#4F46E5',
                  }}
                >
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-text-sub mb-0.5">{week.week}</p>
                  <p className="font-display font-bold text-[16px] text-dark-hero">{week.title}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[12px] text-text-sub hidden sm:block">{week.topics.length} topics</span>
                  <ChevronDown size={18} className="text-text-sub transition-transform duration-200" style={{ transform: open === i ? 'rotate(180deg)' : 'none' }} />
                </div>
              </button>

              {open === i && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {week.topics.map((topic, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2.5 text-[13px] text-text-secondary py-1.5 px-3 rounded-lg"
                        style={{
                          background: 'rgba(99,102,241,0.04)',
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#4F46E5' }} />
                        {topic}
                      </div>
                    ))}
                  </div>
                  {week.project && (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(20,184,166,0.06)', border: '1px solid rgba(20,184,166,0.15)' }}>
                      <Folder size={16} style={{ color: '#14B8A6', flexShrink: 0 }} />
                      <div>
                        <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: '#14B8A6' }}>
                          Project Deliverable
                        </span>
                        <p className="text-[13px] font-semibold text-dark-hero mt-0.5">{week.project}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
