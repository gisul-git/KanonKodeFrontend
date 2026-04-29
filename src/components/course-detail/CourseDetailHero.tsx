'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Play,
  Sparkles,
  Star,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Course } from '@/types'
import type { CourseDetail } from '@/data/courseDetails'

const badgeIconMap: Record<string, LucideIcon> = {
  '⭐': Star,
  '⚡': Zap,
  '🔥': Zap,
  '✨': Sparkles,
  '🚀': Zap,
  '🧠': Sparkles,
}

export default function CourseDetailHero({
  course,
  detail,
}: {
  course: Course
  detail?: CourseDetail
}) {
  const [, setShowVideo] = useState(false)
  const BadgeIcon = course.badgeIcon ? (badgeIconMap[course.badgeIcon] ?? Star) : Star

  return (
    <section id="overview" className="relative overflow-hidden pt-[80px]" style={{ background: '#0F172A' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-60px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.2), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[12px] mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <a href="/courses" className="hover:text-white transition-colors">Courses</a>
            <span>›</span>
            <span style={{ color: '#14B8A6' }}>{course.category}</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap mb-4">
            {course.badge && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold text-white" style={{ background: '#4F46E5' }}>
                <BadgeIcon size={12} />
                {course.badge}
              </span>
            )}
            <span
              className="px-3 py-1 rounded-full text-[11px] font-bold"
              style={{
                background: 'rgba(20,184,166,0.15)',
                color: '#14B8A6',
                border: '1px solid rgba(20,184,166,0.25)',
              }}
            >
              {course.mode} Cohort
            </span>
            {course.launchStatus !== 'live' && (
              <span
                className="px-3 py-1 rounded-full text-[11px] font-bold"
                style={{
                  background: 'rgba(245,158,11,0.15)',
                  color: '#F59E0B',
                  border: '1px solid rgba(245,158,11,0.25)',
                }}
              >
                {course.launchStatus === 'announced' ? 'Announced' : 'Coming Soon'}
              </span>
            )}
          </div>

          <h1 className="font-display font-bold text-white leading-[1.05] mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            {course.title}
          </h1>

          <p className="text-[17px] leading-relaxed mb-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {course.longDesc ?? course.description}
          </p>

          <div className="flex items-center flex-wrap gap-5 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-[16px]" style={{ color: '#F59E0B' }}>★</span>
                ))}
              </div>
              <span className="font-bold text-white">{course.rating}</span>
              <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                ({course.reviews?.toLocaleString()} reviews)
              </span>
            </div>
            {course.enrolledCount && (
              <div className="flex items-center gap-1.5 text-[13px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Users size={14} />
                {course.enrolledCount} enrolled
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: Clock, text: course.duration },
              { icon: Calendar, text: `Next batch: ${course.nextBatch}` },
              { icon: Award, text: course.certification ?? 'Certificate included' },
              { icon: Zap, text: `${course.weeklyLiveSessions} live sessions/week` },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-center gap-2 text-[13px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <Icon size={15} style={{ color: '#14B8A6' }} />
                  {item.text}
                </div>
              )
            })}
          </div>

          {detail && (
            <div
              className="rounded-2xl p-6 max-w-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="text-[12px] font-bold tracking-wider uppercase mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                What You Will Learn
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {detail.transformation.after.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#14B8A6' }} />
                    <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-full lg:w-[360px] flex-shrink-0 lg:sticky lg:top-20">
          <div className="rounded-2xl overflow-hidden" style={{ background: 'white', boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
            <div className="relative" style={{ height: '200px' }}>
              <Image src={course.image} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setShowVideo(true)}
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '2px solid rgba(255,255,255,0.4)',
                  }}
                >
                  <Play size={24} fill="white" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display font-black text-[32px] text-dark-hero">
                  ₹{course.standardPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[13px] mb-1" style={{ color: '#14B8A6' }}>
                Scholarship: {course.scholarshipPrice}
              </p>
              <p className="text-[12px] text-text-sub mb-5">EMI: {course.emiPrice}</p>

              <a
                href="/contact"
                className="group w-full py-4 rounded-xl font-bold text-[15px] text-white flex items-center justify-center gap-2 mb-3 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #14B8A6, #0D9488)',
                  boxShadow: '0 6px 20px rgba(20,184,166,0.35)',
                }}
              >
                Apply Now
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="/contact"
                className="w-full py-3 rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 mb-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: '1.5px solid rgba(99,102,241,0.25)',
                  color: '#4F46E5',
                  background: '#EEF2FF',
                }}
              >
                Book Free Counselling
              </a>

              <div className="space-y-2">
                {[
                  `${course.weeklyLiveSessions} live sessions per week`,
                  course.projects,
                  course.support,
                  course.certification ?? 'Certificate of completion',
                  'Async LMS + recorded sessions',
                  'Community + peer learning',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} style={{ color: '#14B8A6', flexShrink: 0 }} />
                    <span className="text-[12px] text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-5 rounded-xl p-3 flex items-center gap-3"
                style={{
                  background: 'rgba(245,158,11,0.08)',
                  border: '1px solid rgba(245,158,11,0.2)',
                }}
              >
                <Calendar size={16} style={{ color: '#F59E0B', flexShrink: 0 }} />
                <p className="text-[12px] font-semibold" style={{ color: '#D97706' }}>
                  Next batch starts {course.nextBatch} - limited seats
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16" style={{ background: 'linear-gradient(to bottom, #0F172A, white)' }} />
    </section>
  )
}
