'use client'

import { cn } from '@/lib/utils'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'relative flex-shrink-0 scroll-snap-align-start rounded-xl2 border border-[rgba(99,102,241,0.1)] bg-white p-6 shadow-card transition-all duration-250',
        'hover:-translate-y-1 hover:shadow-card-hover',
        className,
      )}
    >
      <div className="mb-4 flex items-stretch gap-4">
        <div>
          <p className="mb-0.5 text-[10px] tracking-wider text-text-sub uppercase">{testimonial.beforeLabel}</p>
          <p className="text-[14px] font-semibold text-dark-hero">{testimonial.beforeRole}</p>
        </div>
        <div className="w-px self-stretch bg-[rgba(99,102,241,0.15)]" />
        <div>
          <p className="mb-0.5 text-[10px] tracking-wider text-teal-main uppercase">{testimonial.afterLabel}</p>
          <p className="text-[14px] font-semibold text-dark-hero">{testimonial.afterRole}</p>
        </div>
      </div>

      <span className="absolute right-5 top-4 select-none font-display text-[60px] font-bold leading-none text-indigo-light opacity-40">
        &quot;
      </span>

      <p className="mb-6 text-[14px] italic leading-relaxed text-text-secondary">{testimonial.quote}</p>

      <div className="mb-4 border-t border-dashed border-[rgba(99,102,241,0.15)]" />

      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white"
          style={{ backgroundColor: testimonial.avatarColor }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="leading-tight text-[14px] font-semibold text-dark-hero">{testimonial.name}</p>
          <p className="text-[12px] text-text-secondary">{testimonial.experience}</p>
        </div>
      </div>
    </div>
  )
}
