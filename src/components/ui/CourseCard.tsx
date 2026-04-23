'use client'

import Image from 'next/image'
import {
  Award,
  Bot,
  Cloud,
  Layers,
  ShieldCheck,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Course } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Bot,
  ShieldCheck,
  Layers,
  Cloud,
}

interface CourseCardProps {
  course: Course
  className?: string
}

export default function CourseCard({ course, className }: CourseCardProps) {
  const Icon = iconMap[course.icon ?? 'Bot'] ?? Bot

  return (
    <div
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-xl2 border border-[rgba(99,102,241,0.1)] bg-white shadow-card transition-all duration-300',
        'hover:-translate-y-2 hover:border-[rgba(99,102,241,0.3)] hover:shadow-card-hover',
        className,
      )}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />

        <div className="absolute left-3 top-3 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-main shadow-md">
            <Icon size={18} className="text-white" />
          </div>
          <span className="rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold tracking-wider text-indigo-main backdrop-blur-sm">
            {course.category}
          </span>
        </div>

        <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="rounded-full bg-dark-hero/80 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm">
            Quick View
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-[17px] font-bold leading-snug text-dark-hero">{course.title}</h3>
        <span className="mt-1.5 inline-block rounded-full bg-bg-tinted px-2.5 py-1 text-[11px] font-bold tracking-wide text-indigo-main">
          ({course.code})
        </span>
        <div className="mt-3 flex items-center gap-3 text-[13px]">
          <span className="flex items-center gap-1 font-semibold text-dark-hero">
            <span className="text-amber-400">★</span> {course.rating}
          </span>
          <span className="text-text-sub">·</span>
          {course.hasCertification && (
            <span className="flex items-center gap-1 text-text-secondary">
              <Award size={14} className="text-indigo-light" /> Certification
            </span>
          )}
        </div>
        <div className="mt-4 border-t border-[rgba(99,102,241,0.08)]" />
        <button className="cart-icon-bounce mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-main py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-teal-hover hover:shadow-teal">
          Add to cart
          <ShoppingCart size={16} className="cart-icon" />
        </button>
      </div>
    </div>
  )
}
