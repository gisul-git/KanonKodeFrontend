'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Code2, ShieldCheck, Bot, Cloud, BarChart2, Brain, Layers,
  Clock, FolderOpen, BadgeCheck, Award, ArrowRight, ChevronLeft, ChevronRight, Calendar, Zap, Star, Sparkles, Flame,
  type LucideIcon,
} from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'
import { cn } from '@/lib/utils'
import { launchedCourses } from '@/data/courses'
import type { Course } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Code2, ShieldCheck, Bot, Cloud, BarChart2, Brain, Layers,
}

const badgeIconMap: Record<string, LucideIcon> = {
  '⚡': Zap,
  '⭐': Star,
  '✨': Sparkles,
  '🔥': Flame,
  '🚀': Zap,
}

const TABS = [
  'All Programs',
  'Software Development',
  'Data & Analytics',
  'Cybersecurity',
  'Cloud & DevOps',
  'Automation',
  'Career Support',
]

function ProgramCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon ?? 'Code2'] ?? Code2
  const BadgeIcon = course.badgeIcon ? (badgeIconMap[course.badgeIcon] ?? Star) : Star
  return (
    <div
      className="group relative flex-shrink-0 bg-white rounded-2xl
        border border-[rgba(99,102,241,0.12)] overflow-hidden
        shadow-card flex flex-col
        hover:shadow-card-hover hover:-translate-y-1
        transition-all duration-300"
      style={{ width: 'min(360px, 86vw)', minHeight: '540px' }}
    >
      <div className="relative h-[200px] flex-shrink-0 sm:h-[220px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500
            group-hover:scale-105"
        />
        <div className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom,rgba(15,23,42,0.2) 0%,rgba(15,23,42,0.75) 100%)',
          }} />
        <div className="absolute inset-0 opacity-40"
          style={{
            background:
              'linear-gradient(135deg,rgba(79,70,229,0.6) 0%,transparent 60%)',
          }} />

        {course.badge && (
          <div className="absolute top-4 left-4 z-10 flex items-center
            gap-1.5 bg-white/95 backdrop-blur-sm
            px-3 py-1.5 rounded-full shadow-sm">
            <BadgeIcon size={13} style={{ color: '#F59E0B' }} />
            <span className="text-[10px] font-bold text-dark-hero">
              {course.badge}
            </span>
          </div>
        )}

        <div className="absolute bottom-4 left-4 z-10 w-11 h-11
          rounded-xl bg-white/15 backdrop-blur-sm border border-white/25
          flex items-center justify-center">
          <Icon size={20} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-bold text-[24px]
          text-dark-hero leading-tight mb-2">
          {course.title}
        </h3>
        <p className="text-[13px] text-text-secondary
          leading-relaxed mb-4">
          {course.description}
        </p>

        <div className="space-y-2 mb-5">
          {([
            { icon: Layers, text: course.level ? (course.id === 'afsad' ? 'Beginner to Intermediate' : `${course.level}`) : undefined },
            { icon: Clock, text: course.duration },
            { icon: FolderOpen, text: course.projects },
            { icon: BadgeCheck, text: course.support },
            { icon: Calendar, text: course.nextBatch ? `Next Cohort: ${course.nextBatch}` : undefined },
          ] as { icon: LucideIcon; text?: string }[])
            .filter(m => !!m.text)
            .map(({ icon: MI, text }) => (
              <div key={text}
                className="flex items-center gap-2.5 text-[13px]
                  text-text-secondary">
                <MI size={14} className="text-indigo-light flex-shrink-0" />
                {text}
              </div>
            ))}
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="flex -space-x-2">
              {['#4F46E5','#14B8A6','#8B5CF6','#F59E0B'].map((c, i) => (
                <div key={i}
                  className="w-7 h-7 rounded-full border-2 border-white
                    flex items-center justify-center
                    text-white font-bold text-[9px]"
                  style={{ backgroundColor: c }}>
                  {['A','P','R','S'][i]}
                </div>
              ))}
            </div>
            <span className="text-[12px] font-semibold text-dark-hero">
              +{course.enrolledCount ?? '1K+'}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-amber-400">★</span>
              <span className="font-bold text-[13px] text-dark-hero">
                {course.rating}
              </span>
              <span className="text-[11px] text-text-sub">
                ({course.reviews?.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          {course.certification && (
            <div className="flex items-center gap-2 text-[12px]
              font-medium text-indigo-main mb-4">
              <Award size={14} />
              {course.certification}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button className="flex-1 bg-indigo-main text-white
              font-bold text-[14px] py-3.5 rounded-xl
              flex items-center justify-center gap-2
              hover:bg-indigo-hover hover:-translate-y-0.5
              transition-all duration-200">
              View Program →
            </button>
            <button className="text-indigo-main font-semibold
              text-[14px] px-2 hover:underline inline-flex items-center gap-1">
              See Curriculum
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState('All Programs')
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const programmes = launchedCourses.slice(0, 6)

  const filtered = activeTab === 'All Programs'
    ? programmes
    : programmes.filter((c) => {
      if (activeTab === 'Software Development') return c.category === 'Development'
      if (activeTab === 'Data & Analytics') return c.category === 'Data & Analytics'
      if (activeTab === 'Cloud & DevOps') return c.category === 'Cloud & DevOps'
      if (activeTab === 'Automation') return c.id === 'aao'
      if (activeTab === 'Career Support') return !!c.support?.toLowerCase().includes('placement')
      if (activeTab === 'Cybersecurity') return c.category === 'Cybersecurity'
      return true
    })

  const scrollCards = (dir: 'left' | 'right') => {
    if (!cardsRef.current) return
    cardsRef.current.scrollBy({
      left: dir === 'left' ? -380 : 380,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    gsap.fromTo('.prog-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
        },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section
      ref={sectionRef}
      className="programs-section bg-white py-14 sm:py-16 lg:py-20"
      style={{ overflow: 'hidden' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="prog-heading flex flex-col lg:flex-row
          lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-teal-main font-semibold text-[11px]
              tracking-[0.15em] uppercase mb-3">
              Career Paths
            </p>
            <h2 className="font-display font-bold text-dark-hero leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              Explore Programs Built Around{' '}
              <span style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Real Career Paths
              </span>
            </h2>
            <p className="mt-4 text-[15px] text-text-secondary
              leading-relaxed max-w-lg">
              Industry-aligned programs designed to help learners build practical skills, complete real projects, and move
              toward meaningful career outcomes.
            </p>
          </div>
          <a href="/courses"
            className="inline-flex items-center gap-2 flex-shrink-0
              border-[1.5px] border-indigo-main text-indigo-main
              font-semibold text-[14px] px-6 py-3 rounded-xl
              hover:bg-bg-tinted hover:-translate-y-0.5
              transition-all duration-200 self-start lg:self-end">
            Explore All Programs →
          </a>
        </div>

        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-[14px] font-medium',
                  'transition-all duration-200 border',
                  activeTab === tab
                    ? 'bg-indigo-main text-white border-indigo-main shadow-md'
                    : 'bg-white text-text-secondary'
                      + ' border-[rgba(99,102,241,0.2)]'
                      + ' hover:border-indigo-main hover:text-indigo-main',
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => scrollCards('left')}
              aria-label="Scroll programs left"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(99,102,241,0.2)] bg-white text-indigo-main transition-all duration-200 hover:bg-bg-tinted"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollCards('right')}
              aria-label="Scroll programs right"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(99,102,241,0.2)] bg-white text-indigo-main transition-all duration-200 hover:bg-bg-tinted"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          paddingLeft: 'max(0px, calc((100vw - 1280px) / 2 + 2px))',
          paddingRight: 'max(0px, calc((100vw - 1280px) / 2 + 2px))',
        }}
      >
        <div
          ref={cardsRef}
          className="flex h-full items-stretch gap-4 overflow-x-auto sm:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtered.map((course) => (
            <ProgramCard key={course.id} course={course} />
          ))}
        </div>
      </div>

    </section>
  )
}
