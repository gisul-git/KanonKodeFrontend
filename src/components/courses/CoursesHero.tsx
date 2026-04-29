'use client'

import { useState } from 'react'
import { ArrowRight, Search, Star, Trophy, Users } from 'lucide-react'

export default function CoursesHero() {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    document.querySelector('#courses-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden pt-[108px] pb-16" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-40px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.12), transparent 70%)',
            filter: 'blur(70px)',
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
            background: 'radial-gradient(circle, rgba(20,184,166,0.08), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #F8FAFC)', zIndex: 3, pointerEvents: 'none' }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ background: '#FFFFFF', border: '1px solid rgba(99,102,241,0.15)', boxShadow: '0 4px 14px rgba(15,23,42,0.06)' }}
            >
              <span className="w-2 h-2 rounded-full bg-teal-main animate-pulse" />
              <span className="text-[12px] font-medium" style={{ color: '#475569' }}>
                6 AI-powered programmes - all live cohort
              </span>
            </div>

            <h1 className="font-display font-bold text-dark-hero leading-[1.05] mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Find Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #818CF8 0%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Career Path
              </span>
            </h1>

            <p className="text-[16px] leading-relaxed mb-8 max-w-lg" style={{ color: '#475569' }}>
              Industry-aligned programmes with live instruction, real projects, and career support - from beginner to
              job-ready.
            </p>

            <form onSubmit={handleSearch} className="flex items-center gap-3 max-w-lg">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#94A3B8' }} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search courses, skills, topics..."
                  className="w-full pl-11 pr-4 py-4 rounded-xl text-[15px] text-dark-hero outline-none transition-all duration-200"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid rgba(99,102,241,0.18)',
                    caretColor: '#14B8A6',
                    boxShadow: '0 6px 20px rgba(15,23,42,0.06)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(79,70,229,0.4)'
                    e.target.style.background = '#FFFFFF'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(99,102,241,0.18)'
                    e.target.style.background = '#FFFFFF'
                  }}
                />
              </div>
              <button
                type="submit"
                className="group flex items-center gap-2 font-bold text-[14px] text-white px-6 py-4 rounded-xl flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #14B8A6, #0D9488)', boxShadow: '0 4px 16px rgba(20,184,166,0.3)' }}
              >
                Search
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-[12px]" style={{ color: '#94A3B8' }}>
                Popular:
              </span>
              {['AI', 'Full Stack', 'Data Analytics', 'DevOps', 'Cybersecurity'].map((tag) => (
                <button
                  key={tag}
                  className="text-[12px] font-medium px-3 py-1 rounded-full transition-all duration-150 hover:border-white/40"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(99,102,241,0.18)',
                    color: '#64748B',
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4 flex-shrink-0 w-64">
            {[
              { icon: Users, num: '13,000+', label: 'Enrolled Learners', color: '#6366F1', bg: 'rgba(99,102,241,0.12)' },
              { icon: Star, num: '4.8★', label: 'Average Rating', color: '#F59E0B', bg: 'rgba(245,158,11,0.12)' },
              { icon: Trophy, num: '90%', label: 'Placement Rate', color: '#14B8A6', bg: 'rgba(20,184,166,0.12)' },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(99,102,241,0.12)',
                    boxShadow: '0 8px 22px rgba(15,23,42,0.07)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                    <Icon size={18} style={{ color: s.color }} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-[20px] text-dark-hero leading-none">{s.num}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: '#64748B' }}>
                      {s.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
