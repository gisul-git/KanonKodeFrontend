'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart2,
  Bot,
  Atom,
  Brain,
  Briefcase,
  Calendar,
  Cloud,
  Clock,
  Cpu,
  Code2,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Course } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  ShieldCheck,
  Bot,
  Cloud,
  BarChart2,
  Brain,
  Zap,
  Briefcase,
  Cpu,
  Atom,
}

const levelColor = {
  Beginner: { color: '#16A34A', background: 'rgba(22,163,74,0.1)' },
  Intermediate: { color: '#4F46E5', background: 'rgba(79,70,229,0.1)' },
  Advanced: { color: '#DC2626', background: 'rgba(220,38,38,0.1)' },
} as const

function CourseBadge({ badge, badgeIcon }: { badge: string; badgeIcon: string | null }) {
  const badgeIconMap: Record<string, LucideIcon> = {
    '⭐': Star,
    '⚡': Zap,
    '🔥': Zap,
    '✨': Sparkles,
    '🚀': Zap,
  }
  const BadgeIcon: LucideIcon = badgeIcon ? (badgeIconMap[badgeIcon] ?? Star) : Star

  return (
    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold shadow-sm self-start" style={{ color: '#0F172A' }}>
      <BadgeIcon size={11} style={{ color: '#F59E0B' }} />
      {badge}
    </div>
  )
}

function LaunchBadge({
  status,
}: {
  status: 'live' | 'announced' | 'coming-soon'
}) {
  if (status === 'live') return null
  const config = {
    announced: {
      label: 'Announced',
      bg: 'rgba(245,158,11,0.12)',
      color: '#D97706',
      border: 'rgba(245,158,11,0.25)',
    },
    'coming-soon': {
      label: 'Coming Soon',
      bg: 'rgba(139,92,246,0.1)',
      color: '#7C3AED',
      border: 'rgba(139,92,246,0.2)',
    },
  }[status]

  return (
    <span
      className="px-2.5 py-1 rounded-full text-[10px]
        font-bold flex-shrink-0"
      style={{
        background: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
      }}
    >
      {config.label}
    </span>
  )
}

export default function CourseListCard({ course, view }: { course: Course; view: 'grid' | 'list' }) {
  const Icon = iconMap[course.icon ?? 'Code2'] ?? Code2
  const lvlStyle = levelColor[(course.level ?? 'Intermediate') as keyof typeof levelColor]

  if (view === 'list') {
    return (
      <div
        className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
        style={{ border: '1px solid rgba(99,102,241,0.1)', boxShadow: '0 2px 12px rgba(99,102,241,0.06)' }}
      >
        <div className="relative flex-shrink-0 overflow-hidden h-[180px] sm:h-auto sm:w-[200px]" style={{ minHeight: '160px' }}>
          <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.3), transparent)' }} />
          {course.badge && (
            <div className="absolute top-3 left-3">
              <CourseBadge badge={course.badge} badgeIcon={course.badgeIcon} />
            </div>
          )}
          {course.price === 'Free' && (
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: '#14B8A6' }}>
              FREE
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-display font-bold text-[18px] text-dark-hero leading-tight">{course.title}</h3>
            <div className="flex items-center gap-2">
              <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold" style={lvlStyle}>
                {course.level}
              </span>
              <LaunchBadge status={course.launchStatus} />
            </div>
          </div>
          <p className="text-[13px] text-text-secondary leading-relaxed mb-4 line-clamp-2">{course.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {(course.skills ?? []).slice(0, 5).map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                style={{ background: 'rgba(99,102,241,0.08)', color: '#4F46E5', border: '1px solid rgba(99,102,241,0.15)' }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 text-[12px] text-text-secondary flex-wrap">
              <span className="flex items-center gap-1">
                <Star size={12} style={{ color: '#F59E0B' }} />
                <strong className="text-dark-hero font-bold">{course.rating}</strong>
                <span>({course.reviews?.toLocaleString()})</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                Batch: {course.nextBatch}
              </span>
              {course.salary && (
                <span className="flex items-center gap-1 font-semibold" style={{ color: '#14B8A6' }}>
                  <Briefcase size={12} />
                  {course.salary}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <span
                  className="font-display font-bold text-[20px]"
                  style={{ color: '#0F172A' }}
                >
                  ₹{course.standardPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[12px] text-text-sub ml-1">
                  standard
                </span>
              </div>
              <div className="text-right">
                <p
                  className="text-[11px] font-semibold"
                  style={{ color: '#14B8A6' }}
                >
                  Scholarship: {course.scholarshipPrice}
                </p>
                <p className="text-[10px] text-text-sub">
                  EMI: {course.emiPrice}
                </p>
              </div>
            </div>
            <Link
              href={`/courses/${course.id}`}
              className="group/btn inline-flex items-center gap-2 font-bold text-[13px] text-white px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #6366F1)', boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}
            >
              Enroll Now
              <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      style={{ border: '1px solid rgba(99,102,241,0.1)', boxShadow: '0 2px 16px rgba(99,102,241,0.07)' }}
    >
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: '200px' }}>
        <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(15,23,42,0.6) 100%)' }} />

        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            {course.badge && (
              <CourseBadge badge={course.badge} badgeIcon={course.badgeIcon} />
            )}
            {course.price === 'Free' && (
              <div className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white self-start" style={{ background: '#14B8A6' }}>
                FREE
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ ...lvlStyle, backdropFilter: 'blur(8px)', background: `${lvlStyle.background}CC` }}>
              {course.level}
            </span>
            <LaunchBadge status={course.launchStatus} />
          </div>
        </div>

        <div
          className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <Icon size={18} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-[17px] text-dark-hero leading-snug mb-2">{course.title}</h3>
        <p className="text-[13px] text-text-secondary leading-relaxed mb-4 line-clamp-2 flex-1">{course.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {(course.skills ?? []).slice(0, 4).map((s) => (
            <span key={s} className="px-2 py-1 rounded-full text-[10px] font-semibold" style={{ background: 'rgba(99,102,241,0.08)', color: '#4F46E5', border: '1px solid rgba(99,102,241,0.12)' }}>
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-[12px] text-text-secondary mb-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Star size={12} style={{ color: '#F59E0B' }} />
            <strong className="text-dark-hero">{course.rating}</strong>
            <span>({course.reviews?.toLocaleString()})</span>
          </span>
          <span className="text-text-sub">·</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {course.duration}
          </span>
          {course.salary && (
            <>
              <span className="text-text-sub">·</span>
              <span className="font-semibold" style={{ color: '#14B8A6' }}>
                {course.salary}
              </span>
            </>
          )}
        </div>

        {course.nextBatch && (
          <div className="flex items-center gap-2 mb-4 text-[12px]" style={{ color: '#475569' }}>
            <Calendar size={13} style={{ color: '#4F46E5' }} />
            Next batch: <strong>{course.nextBatch}</strong>
          </div>
        )}

        <div className="h-px mb-4" style={{ background: 'rgba(99,102,241,0.08)' }} />

        <div className="flex items-center justify-between mb-3">
          <div>
            <span
              className="font-display font-bold text-[20px]"
              style={{ color: '#0F172A' }}
            >
              ₹{course.standardPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-[12px] text-text-sub ml-1">
              standard
            </span>
          </div>
          <div className="text-right">
            <p
              className="text-[11px] font-semibold"
              style={{ color: '#14B8A6' }}
            >
              Scholarship: {course.scholarshipPrice}
            </p>
            <p className="text-[10px] text-text-sub">
              EMI: {course.emiPrice}
            </p>
          </div>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="group/btn w-full py-3.5 rounded-xl font-bold text-[14px] text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(135deg, #4F46E5, #6366F1)', boxShadow: '0 4px 14px rgba(79,70,229,0.3)' }}
        >
          Enroll Now
          <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
