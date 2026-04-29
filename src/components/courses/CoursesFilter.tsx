'use client'

import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'

export interface FilterState {
  categories: string[]
  levels: string[]
  prices: string[]
  launchStatus: string[]
  durations: string[]
}

interface CoursesFilterProps {
  filters: FilterState
  onChange: (filters: FilterState) => void
}

const FILTER_GROUPS = [
  {
    key: 'categories',
    label: 'Category',
    options: [
      { value: 'Employability', count: 1 },
      { value: 'AI & Automation', count: 1 },
      { value: 'Data & Analytics', count: 1 },
      { value: 'Business & AI', count: 1 },
      { value: 'Development', count: 1 },
      { value: 'Cloud & DevOps', count: 1 },
      { value: 'AI & Data', count: 1 },
      { value: 'Cybersecurity', count: 1 },
      { value: 'DeepTech', count: 2 },
    ],
  },
  {
    key: 'levels',
    label: 'Level',
    options: [
      { value: 'Beginner', count: 4 },
      { value: 'Intermediate', count: 3 },
      { value: 'Advanced', count: 3 },
    ],
  },
  {
    key: 'prices',
    label: 'Price',
    options: [{ value: 'Paid', count: 10 }],
  },
  {
    key: 'launchStatus',
    label: 'Availability',
    options: [
      { value: 'live', count: 6 },
      { value: 'announced', count: 2 },
      { value: 'coming-soon', count: 2 },
    ],
  },
  {
    key: 'durations',
    label: 'Duration',
    options: [
      { value: 'Under 6 weeks', count: 1 },
      { value: '12–16 weeks', count: 2 },
      { value: '20–24 weeks', count: 7 },
    ],
  },
] as const

export default function CoursesFilter({ filters, onChange }: CoursesFilterProps) {
  const [open, setOpen] = useState<string[]>(FILTER_GROUPS.map((g) => g.key))

  const toggle = (key: string) => setOpen((o) => (o.includes(key) ? o.filter((k) => k !== key) : [...o, key]))

  const toggleFilter = (key: keyof FilterState, value: string) => {
    const current = filters[key]
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    onChange({ ...filters, [key]: next })
  }

  const totalActive = Object.values(filters).flat().length

  const clearAll = () => onChange({ categories: [], levels: [], prices: [], launchStatus: [], durations: [] })

  return (
    <div className="w-full lg:w-[260px] flex-shrink-0 lg:sticky lg:top-28">
      <div
        className="rounded-2xl p-5"
        style={{ background: 'white', border: '1px solid rgba(99,102,241,0.1)', boxShadow: '0 4px 24px rgba(99,102,241,0.07)' }}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display font-bold text-[16px] text-dark-hero">
            Filters
            {totalActive > 0 && (
              <span className="ml-2 px-2 py-0.5 rounded-full text-white text-[11px] font-bold" style={{ background: '#4F46E5' }}>
                {totalActive}
              </span>
            )}
          </h3>
          {totalActive > 0 && (
            <button onClick={clearAll} className="flex items-center gap-1 text-[12px] font-semibold transition-colors hover:text-dark-hero" style={{ color: '#4F46E5' }}>
              <X size={13} />
              Clear all
            </button>
          )}
        </div>

        <div className="space-y-1">
          {FILTER_GROUPS.map((group) => (
            <div key={group.key}>
              <button onClick={() => toggle(group.key)} className="w-full flex items-center justify-between py-3 text-left transition-colors hover:text-indigo-main">
                <span className="font-semibold text-[13px] text-dark-hero">{group.label}</span>
                <ChevronDown
                  size={16}
                  className="text-text-sub transition-transform duration-200"
                  style={{ transform: open.includes(group.key) ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {open.includes(group.key) && (
                <div className="pb-3 space-y-2">
                  {group.options.map((opt) => {
                    const checked = (filters[group.key as keyof FilterState] as string[]).includes(opt.value)
                    return (
                      <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() => toggleFilter(group.key as keyof FilterState, opt.value)}
                          className="rounded flex items-center justify-center flex-shrink-0 transition-all duration-150 cursor-pointer"
                          style={{
                            width: '18px',
                            height: '18px',
                            background: checked ? '#4F46E5' : 'white',
                            border: checked ? '2px solid #4F46E5' : '2px solid rgba(99,102,241,0.25)',
                          }}
                        >
                          {checked && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span
                          className="text-[13px] flex-1 transition-colors group-hover:text-dark-hero"
                          style={{ color: checked ? '#0F172A' : '#475569' }}
                          onClick={() => toggleFilter(group.key as keyof FilterState, opt.value)}
                        >
                          {opt.value}
                        </span>
                        <span className="text-[11px]" style={{ color: '#94A3B8' }}>
                          ({opt.count})
                        </span>
                      </label>
                    )
                  })}
                </div>
              )}

              <div className="h-px" style={{ background: 'rgba(99,102,241,0.07)' }} />
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl p-4" style={{ background: 'rgba(20,184,166,0.06)', border: '1px solid rgba(20,184,166,0.15)' }}>
          <p className="font-semibold text-[13px] text-dark-hero mb-1">Not sure which course?</p>
          <p className="text-[12px] text-text-secondary mb-3">Get a free 30-min career counselling session.</p>
          <a
            href="/contact"
            className="block w-full py-2.5 rounded-lg text-center font-bold text-[13px] text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #14B8A6, #0D9488)', boxShadow: '0 4px 12px rgba(20,184,166,0.25)' }}
          >
            Book Free Session →
          </a>
        </div>
      </div>
    </div>
  )
}
