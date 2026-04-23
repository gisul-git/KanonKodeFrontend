'use client'

import { ArrowRight, BellRing, CheckCircle2, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap-init'

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.community-left',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.community-section', start: 'top 80%' },
        },
      )
      gsap.fromTo(
        '.community-visual',
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.community-section', start: 'top 80%' },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSuccess(true)
  }

  return (
    <section
      ref={sectionRef}
      className="community-section w-full py-20"
      style={{
        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%)',
        backgroundSize: '200% 200%',
        animation: 'communityGradient 6s ease-in-out infinite',
      }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-12">
        <div className="community-left">
          <span className="inline-flex rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.12)] px-4 py-2 text-[12px] font-medium text-indigo-light">
            10,000+ learners already inside
          </span>
          <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.15] text-white [font-family:var(--font-display)]">
            Join the Kanonkode Community
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-[1.65] text-white/60">
            Get early access to new programmes, Scholar Challenge announcements, and career resources — straight to your inbox.
          </p>

          <div className="mt-8">
            {!success ? (
              <form onSubmit={onSubmit} className="flex flex-col gap-3 md:flex-row">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-xl border border-white/12 bg-white/6 px-5 py-4 text-[15px] text-white placeholder:text-white/35 transition-colors duration-200 focus:border-indigo-light focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-main px-7 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:bg-teal-hover hover:shadow-teal"
                >
                  Join <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 font-semibold text-teal-main">
                <CheckCircle2 size={20} />
                You&apos;re in! Check your inbox.
              </div>
            )}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dark-card bg-indigo-main text-sm font-semibold text-white">A</div>
              <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dark-card bg-teal-main text-sm font-semibold text-white">P</div>
              <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dark-card bg-indigo-light text-sm font-semibold text-white">R</div>
              <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dark-card bg-[#8B5CF6] text-sm font-semibold text-white">S</div>
            </div>
            <span className="text-[13px] text-white/50">Join 10,000+ students, graduates &amp; professionals</span>
          </div>
        </div>

        <div className="community-visual relative hidden h-64 md:block">
          <div className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-xl2 border border-white/10 bg-white/6 p-5 backdrop-blur-md" style={{ animation: 'float1 3s ease-in-out infinite' }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-main text-sm font-bold text-white">K</div>
              <div>
                <p className="text-[14px] font-semibold text-white">Kanonkode Community</p>
                <p className="mt-0.5 text-[13px] text-teal-main">Scholar Challenge now open →</p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-[10px] w-[180px] rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.12)] p-3.5" style={{ animation: 'float2 4s ease-in-out infinite' }}>
            <div className="flex items-center gap-2">
              <BellRing size={16} className="text-indigo-light" />
              <p className="text-[12px] text-white/75">New cohort starting soon</p>
            </div>
          </div>

          <div className="absolute bottom-[10px] left-0 w-[200px] rounded-xl border border-[rgba(20,184,166,0.2)] bg-[rgba(20,184,166,0.1)] p-3.5" style={{ animation: 'float3 3.5s ease-in-out infinite' }}>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-teal-main" />
              <p className="text-[12px] text-white/75">230 learners online now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
