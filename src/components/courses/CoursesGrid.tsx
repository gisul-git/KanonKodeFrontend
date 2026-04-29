'use client'

import { useMemo, useState } from 'react'
import { ChevronDown, Grid3X3, List, SlidersHorizontal } from 'lucide-react'
import { courses } from '@/data/courses'
import CourseListCard from './CourseListCard'
import type { FilterState } from './CoursesFilter'

type SortKey = 'popular' | 'rating' | 'newest' | 'duration'
type ViewMode = 'grid' | 'list'

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'popular', label: 'Most Popular' },
  { key: 'rating', label: 'Highest Rated' },
  { key: 'newest', label: 'Newest First' },
  { key: 'duration', label: 'Shortest First' },
]

export default function CoursesGrid({ filters }: { filters: FilterState }) {
  const [sort, setSort] = useState<SortKey>('popular')
  const [view, setView] = useState<ViewMode>('grid')
  const [sortOpen, setSortOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...courses]

    if (filters.categories.length) list = list.filter((c) => filters.categories.includes(c.category))
    if (filters.levels.length) list = list.filter((c) => c.level && filters.levels.includes(c.level))
    if (filters.prices.length) list = list.filter((c) => c.price && filters.prices.includes(c.price))
    if (filters.durations.length) {
      list = list.filter(c => {
        const w = c.durationWeeks ?? 0
        return filters.durations.some(d => {
          if (d === 'Under 6 weeks') return w <= 5
          if (d === '12–16 weeks') return w >= 12 && w <= 16
          if (d === '20–24 weeks') return w >= 20
          return true
        })
      })
    }
    if (filters.launchStatus.length) {
      list = list.filter(c =>
        filters.launchStatus.includes(c.launchStatus)
      )
    }

    switch (sort) {
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      case 'duration':
        list.sort((a, b) => (a.durationWeeks ?? 0) - (b.durationWeeks ?? 0))
        break
      case 'popular':
        list.sort((a, b) => (b.reviews ?? 0) - (a.reviews ?? 0))
        break
      case 'newest':
        list.sort((a, b) => b.id.localeCompare(a.id))
        break
    }

    return list
  }, [filters, sort])

  const activeCount = Object.values(filters).flat().length

  return (
    <div id="courses-grid" className="flex-1 min-w-0">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div>
          <p className="font-semibold text-[15px] text-dark-hero">
            {filtered.length} Programmes
            {activeCount > 0 && <span className="text-text-secondary font-normal ml-1">(filtered)</span>}
          </p>
          <p className="text-[13px] text-text-sub mt-0.5">Live cohort-based - Career-focused</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 hover:border-indigo-main"
              style={{ background: 'white', border: '1.5px solid rgba(99,102,241,0.2)', color: '#475569' }}
            >
              <SlidersHorizontal size={14} />
              {SORT_OPTIONS.find((s) => s.key === sort)?.label}
              <ChevronDown size={14} style={{ transform: sortOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
            </button>
            {sortOpen && (
              <div
                className="absolute right-0 top-full mt-2 z-20 rounded-xl overflow-hidden w-48"
                style={{ background: 'white', border: '1px solid rgba(99,102,241,0.12)', boxShadow: '0 8px 32px rgba(99,102,241,0.12)' }}
              >
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      setSort(opt.key)
                      setSortOpen(false)
                    }}
                    className="w-full text-left px-4 py-3 text-[13px] font-medium transition-colors hover:bg-bg-tinted"
                    style={{ color: sort === opt.key ? '#4F46E5' : '#475569', background: sort === opt.key ? '#EEF2FF' : 'transparent' }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center rounded-xl overflow-hidden" style={{ border: '1.5px solid rgba(99,102,241,0.2)' }}>
            {(['grid', 'list'] as ViewMode[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="p-2.5 transition-colors duration-150"
                style={{ background: view === v ? '#EEF2FF' : 'white', color: view === v ? '#4F46E5' : '#94A3B8' }}
              >
                {v === 'grid' ? <Grid3X3 size={16} /> : <List size={16} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {['All', 'AI & Automation', 'Data & Analytics', 'Development', 'Cloud & DevOps', 'Business & AI', 'Employability'].map((cat) => (
            <span
              key={cat}
              className="flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium border"
              style={{
                background: (cat === 'All' && !filters.categories.length) || filters.categories.includes(cat) ? '#4F46E5' : 'white',
                color: (cat === 'All' && !filters.categories.length) || filters.categories.includes(cat) ? 'white' : '#475569',
                border:
                  (cat === 'All' && !filters.categories.length) || filters.categories.includes(cat)
                    ? '1.5px solid #4F46E5'
                    : '1.5px solid rgba(99,102,241,0.2)',
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 rounded-2xl" style={{ background: 'white', border: '1px solid rgba(99,102,241,0.1)' }}>
          <p className="font-display font-bold text-[22px] text-dark-hero mb-2">No courses found</p>
          <p className="text-text-secondary text-[15px]">Try adjusting your filters or clearing them.</p>
        </div>
      ) : (
        <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 gap-6' : 'flex flex-col gap-5'}>
          {filtered.map((course) => (
            <CourseListCard key={course.id} course={course} view={view} />
          ))}
        </div>
      )}
    </div>
  )
}
