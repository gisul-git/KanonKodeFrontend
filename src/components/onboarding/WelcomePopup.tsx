'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Building2, Check, GraduationCap, Trophy, Wrench, X } from 'lucide-react'

const STORAGE_KEY = 'kanonkode_onboarding_done'

const paths = [
  {
    id: 'learner',
    icon: GraduationCap,
    title: 'For Learners',
    desc: 'Explore 6 live AI programmes — from VibeCheck to Full Stack Dev',
    href: '/courses',
    color: '#4F46E5',
    lightBg: 'rgba(79,70,229,0.08)',
    border: 'rgba(79,70,229,0.25)',
    glow: 'rgba(79,70,229,0.2)',
    selectedBg: 'rgba(79,70,229,0.06)',
  },
  {
    id: 'institution',
    icon: Building2,
    title: 'For Institutions',
    desc: 'Launch practical upskilling programs for students, teams, or communities.',
    href: '/for-institution',
    color: '#14B8A6',
    lightBg: 'rgba(20,184,166,0.08)',
    border: 'rgba(20,184,166,0.25)',
    glow: 'rgba(20,184,166,0.2)',
    selectedBg: 'rgba(20,184,166,0.06)',
  },
  {
    id: 'workshop',
    icon: Wrench,
    title: 'For Workshop Participants',
    desc: 'Book hands-on, mentor-led workshops designed for real application.',
    href: '/workshop',
    color: '#8B5CF6',
    lightBg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    glow: 'rgba(139,92,246,0.2)',
    selectedBg: 'rgba(139,92,246,0.06)',
  },
  {
    id: 'scholar',
    icon: Trophy,
    title: 'For Scholar Challenge Applicants',
    desc: 'Compete, learn, and unlock opportunities through challenge-based learning.',
    href: '/scholar-challenge',
    color: '#F59E0B',
    lightBg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
    glow: 'rgba(245,158,11,0.2)',
    selectedBg: 'rgba(245,158,11,0.06)',
  },
] as const

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    try {
      const done = localStorage.getItem(STORAGE_KEY)
      if (!done) {
        const t = setTimeout(() => setVisible(true), 600)
        return () => clearTimeout(t)
      }
    } catch {
      // no-op if storage is unavailable
    }
  }, [])

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // no-op if storage is unavailable
    }
    setVisible(false)
  }

  const handleContinue = () => {
    if (!selected) return
    const path = paths.find((p) => p.id === selected)
    if (!path) return
    dismiss()
    setTimeout(() => router.push(path.href), 200)
  }

  const selectedPath = paths.find((p) => p.id === selected)

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="welcome-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[400]"
            style={{
              background: 'rgba(8,13,26,0.82)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
            }}
          />

          <motion.div
            key="welcome-modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[401] flex items-center justify-center p-4"
          >
            <div
              className="relative w-full overflow-hidden rounded-3xl"
              style={{
                maxWidth: '680px',
                background: 'white',
                boxShadow: '0 40px 100px rgba(0,0,0,0.35), 0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              <div
                className="h-[3px] w-full"
                style={{
                  background: 'linear-gradient(90deg, #4F46E5 0%, #8B5CF6 33%, #14B8A6 66%, #F59E0B 100%)',
                }}
              />

              <button
                onClick={dismiss}
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-xl text-[#64748B] transition-colors duration-150 hover:bg-[#F1F5F9] hover:text-dark-hero"
                aria-label="Close onboarding"
              >
                <X size={18} />
              </button>

              <div className="px-8 pb-8 pt-8">
                <div className="mb-8 text-center">
                  <div className="mb-5 flex items-center justify-center gap-0">
                    <Image src="/KanonKode Logo.png" alt="Kanonkode" width={170} height={44} className="h-11 w-auto" priority />
                  </div>

                  <h2 className="mb-2 font-display font-bold leading-tight text-dark-hero" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
                    Choose the path that fits you
                  </h2>
                  <p className="mx-auto max-w-sm text-[15px] leading-relaxed text-text-secondary">
                    Tell us who you are and we&apos;ll take you straight to what matters most.
                  </p>
                </div>

                <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {paths.map((path, i) => {
                    const isSelected = selected === path.id
                    return (
                      <motion.button
                        key={path.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => setSelected(path.id)}
                        className="group relative min-h-[122px] rounded-2xl p-5 text-left outline-none transition-all duration-200 active:scale-[0.98] focus-visible:ring-2"
                        style={{
                          background: isSelected ? path.selectedBg : '#F8FAFC',
                          border: isSelected ? `2px solid ${path.color}` : '2px solid rgba(99,102,241,0.1)',
                          boxShadow: isSelected ? `0 8px 32px ${path.glow}` : '0 2px 8px rgba(99,102,241,0.04)',
                          transform: isSelected ? 'translateY(-2px)' : 'none',
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            const el = e.currentTarget as HTMLElement
                            el.style.borderColor = path.border
                            el.style.background = path.lightBg
                            el.style.transform = 'translateY(-2px)'
                            el.style.boxShadow = `0 8px 24px ${path.glow}`
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            const el = e.currentTarget as HTMLElement
                            el.style.borderColor = 'rgba(99,102,241,0.1)'
                            el.style.background = '#F8FAFC'
                            el.style.transform = 'none'
                            el.style.boxShadow = '0 2px 8px rgba(99,102,241,0.04)'
                          }
                        }}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full text-white"
                            style={{ background: path.color }}
                          >
                            <Check size={13} strokeWidth={2.5} />
                          </motion.div>
                        )}

                        <div className="flex items-start gap-4">
                          <div
                            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                            style={{ background: path.lightBg }}
                          >
                            <path.icon size={22} style={{ color: path.color }} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="mb-1 text-[16px] font-bold leading-tight text-dark-hero font-display">{path.title}</p>
                            <p className="text-[14px] leading-relaxed text-text-secondary">{path.desc}</p>
                          </div>
                        </div>

                        <div
                          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                          style={{
                            background: path.color,
                            opacity: isSelected ? 1 : undefined,
                          }}
                        />
                      </motion.button>
                    )
                  })}
                </div>

                <div className="flex flex-col items-center gap-3">
                  <motion.button
                    onClick={handleContinue}
                    disabled={!selected}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl py-4 text-[16px] font-bold text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                    style={{
                      background: selected
                        ? `linear-gradient(135deg, ${selectedPath?.color}, ${selectedPath?.color}CC)`
                        : 'linear-gradient(135deg, #94A3B8, #94A3B8)',
                      boxShadow: selected ? `0 6px 24px ${selectedPath?.glow}` : 'none',
                      transform: selected ? undefined : 'none',
                    }}
                    whileHover={selected ? { y: -2 } : {}}
                    whileTap={selected ? { scale: 0.98 } : {}}
                  >
                    {selected ? `Take me to ${selectedPath?.title}` : 'Select a path to continue'}
                    {selected && <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />}
                  </motion.button>

                  <button
                    onClick={dismiss}
                    className="text-[14px] font-medium text-[#64748B] underline-offset-2 transition-colors hover:text-dark-hero hover:underline"
                  >
                    Skip for now - take me to the homepage
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
