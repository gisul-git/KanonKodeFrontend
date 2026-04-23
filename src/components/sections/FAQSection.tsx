'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { faqs } from '@/data/faqs'
import { gsap } from '@/lib/gsap-init'
import { cn } from '@/lib/utils'

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [openId, setOpenId] = useState(faqs[0]?.id ?? '1')

  const list = useMemo(() => faqs, [])

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.faq-accordion', start: 'top 82%' },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-bg-soft py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-[38%_62%] lg:px-12">
        <div>
          <p className="mb-3 text-[11px] font-medium tracking-[0.15em] text-teal-main">FAQ</p>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] text-dark-hero [font-family:var(--font-display)]">
            Questions We Hear All the Time
          </h2>
          <p className="mt-4 max-w-xs text-[15px] text-text-secondary">Can&apos;t find your answer? Reach us directly.</p>

          <Link
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-indigo-main transition-all duration-200 hover:gap-3"
          >
            <MessageCircle size={18} />
            Chat with our team →
          </Link>

          <div className="relative mt-10 hidden h-24 max-w-[240px] md:block">
            <div className="absolute left-0 top-6 h-12 w-full max-w-[220px] -rotate-[4deg] scale-95 rounded-xl border border-[rgba(99,102,241,0.15)] bg-bg-tinted opacity-40" />
            <div className="absolute left-0 top-3 h-12 w-full max-w-[220px] -rotate-[2deg] scale-[0.97] rounded-xl border border-[rgba(99,102,241,0.15)] bg-white opacity-70" />
            <div className="absolute left-0 top-0 flex h-12 w-full max-w-[220px] items-center gap-2 rounded-xl border border-[rgba(99,102,241,0.15)] bg-white px-4 shadow-card">
              <HelpCircle size={16} className="text-indigo-main" />
              <span className="text-[13px] text-text-secondary">Any question?</span>
            </div>
          </div>
        </div>

        <div className="faq-accordion space-y-3">
          {list.map((item) => {
            const open = openId === item.id
            return (
              <div
                key={item.id}
                className={cn(
                  'faq-item overflow-hidden rounded-xl border border-[rgba(99,102,241,0.1)] bg-white opacity-0',
                  open && 'border-[rgba(99,102,241,0.25)] shadow-card',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? '' : item.id)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors duration-150 hover:bg-bg-tinted"
                >
                  <span className="text-[15px] font-semibold text-dark-hero">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={cn('text-text-secondary transition-transform duration-300', open && 'rotate-180')}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1">
                        <p className="text-[14px] leading-[1.7] text-text-secondary">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
