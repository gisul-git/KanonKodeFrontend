'use client'

import { notFound, useParams } from 'next/navigation'
import CourseApplyCTA from '@/components/course-detail/CourseApplyCTA'
import CareerOutcomes from '@/components/course-detail/CareerOutcomes'
import CourseCurriculum from '@/components/course-detail/CourseCurriculum'
import CourseDetailHero from '@/components/course-detail/CourseDetailHero'
import CourseFAQ from '@/components/course-detail/CourseFAQ'
import CoursePricing from '@/components/course-detail/CoursePricing'
import CourseStickyNav from '@/components/course-detail/CourseStickyNav'
import ProgrammeHighlights from '@/components/course-detail/ProgrammeHighlights'
import ToolsAndSkills from '@/components/course-detail/ToolsAndSkills'
import TransformationStrip from '@/components/course-detail/TransformationStrip'
import WhoIsThisFor from '@/components/course-detail/WhoIsThisFor'
import { courses } from '@/data/courses'
import { courseDetails } from '@/data/courseDetails'

export default function CourseDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const course = courses.find((c) => c.id === id)
  const detail = courseDetails[id]

  if (!course) notFound()

  return (
    <>
      <CourseStickyNav course={course} />
      <CourseDetailHero course={course} detail={detail} />
      {detail && (
        <>
          <TransformationStrip detail={detail} />
          <ProgrammeHighlights detail={detail} />
          <WhoIsThisFor detail={detail} />
          <CourseCurriculum detail={detail} course={course} />
          <ToolsAndSkills course={course} />
          <CareerOutcomes course={course} detail={detail} />
          <CoursePricing course={course} />
          <CourseFAQ detail={detail} course={course} />
        </>
      )}
      <CourseApplyCTA course={course} />
    </>
  )
}
