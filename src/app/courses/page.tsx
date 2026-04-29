'use client'

import { useState } from 'react'
import CourseCTA from '@/components/courses/CourseCTA'
import CoursesFilter, { type FilterState } from '@/components/courses/CoursesFilter'
import CoursesGrid from '@/components/courses/CoursesGrid'
import CoursesHero from '@/components/courses/CoursesHero'

export default function CoursesPage() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    levels: [],
    prices: [],
    launchStatus: [],
    durations: [],
  })

  return (
    <>
      <CoursesHero />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-8 items-start">
        <CoursesFilter filters={filters} onChange={setFilters} />
        <CoursesGrid filters={filters} />
      </div>
      <CourseCTA />
    </>
  )
}
