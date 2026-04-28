'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BarChart3, Bot, Briefcase, Building2, ChevronDown, ChevronLeft, ChevronRight, Cloud, Compass, FileText, GraduationCap, Grid2x2, Mail, Menu, Search, Shield, Sparkles, Trophy, UserCircle2, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useAuthModal } from '@/context/AuthModalContext'
import { cn } from '@/lib/utils'

const links = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'scholar', label: 'Scholar Challenge', href: '/scholar-challenge' },
  { id: 'workshop', label: 'Workshop', href: '/workshop' },
  { id: 'institution', label: 'For Institution', href: '/for-institution' },
]

const courseColumns = [
  {
    title: 'AI PROGRAMS',
    description: 'Build intelligent solutions with AI & ML',
    icon: Bot,
    iconColor: '#6D28D9',
    iconBg: 'rgba(109,40,217,0.08)',
    courses: ['AI Automation Operator', 'AI Full Stack Developer', 'AI Cloud & DevOps Engineer'],
    cta: 'View all AI Programs',
  },
  {
    title: 'DATA & ANALYTICS',
    description: 'Turn data into decisions and drive impact',
    icon: BarChart3,
    iconColor: '#14B8A6',
    iconBg: 'rgba(20,184,166,0.08)',
    courses: ['Data Analytics Foundations', 'Power BI Essentials', 'SQL for Decision Making'],
    cta: 'View all Data Courses',
  },
  {
    title: 'CLOUD & DEVOPS',
    description: 'Build, deploy and scale modern applications',
    icon: Cloud,
    iconColor: '#0284C7',
    iconBg: 'rgba(2,132,199,0.08)',
    courses: ['Cloud Foundations', 'CI/CD with GitHub Actions', 'Containerization Basics'],
    cta: 'View all Cloud Courses',
  },
  {
    title: 'CYBER SECURITY',
    description: 'Learn to protect systems and secure the future',
    icon: Shield,
    iconColor: '#F59E0B',
    iconBg: 'rgba(245,158,11,0.08)',
    courses: ['Ethical Hacking Essentials', 'SOC Analyst Bootcamp', 'Network Security Basics'],
    cta: 'View all Security Courses',
  },
]

const searchItems = [
  { label: 'AI Full Stack Developer', type: 'Programme', href: '/courses/afsd', icon: GraduationCap, iconColor: '#4F46E5', iconBg: '#EEF2FF' },
  { label: 'AI Automation Operator', type: 'Programme', href: '/courses/aao', icon: GraduationCap, iconColor: '#4F46E5', iconBg: '#EEF2FF' },
  { label: 'AI Cyber Security & Ethical Hacker', type: 'Programme', href: '/courses/acseh', icon: GraduationCap, iconColor: '#4F46E5', iconBg: '#EEF2FF' },
  { label: 'AI Cloud & DevOps Engineer', type: 'Programme', href: '/courses/acde', icon: GraduationCap, iconColor: '#4F46E5', iconBg: '#EEF2FF' },
  { label: 'AI Data Analyst', type: 'Programme', href: '/courses/ada', icon: GraduationCap, iconColor: '#4F46E5', iconBg: '#EEF2FF' },
  { label: 'Scholar Challenge', type: 'Page', href: '/scholar-challenge', icon: Trophy, iconColor: '#F59E0B', iconBg: '#FFFBEB' },
  { label: 'Workshops', type: 'Page', href: '/workshop', icon: Briefcase, iconColor: '#14B8A6', iconBg: '#ECFEFF' },
  { label: 'For Institutions', type: 'Page', href: '/for-institution', icon: Building2, iconColor: '#0891B2', iconBg: '#ECFEFF' },
  { label: 'About Us', type: 'Page', href: '/about', icon: FileText, iconColor: '#64748B', iconBg: '#F1F5F9' },
  { label: 'Contact Us', type: 'Page', href: '/contact', icon: Mail, iconColor: '#6366F1', iconBg: '#EEF2FF' },
  { label: 'Career Counselling', type: 'Feature', href: '/#career', icon: Sparkles, iconColor: '#0D9488', iconBg: '#F0FDFA' },
  { label: 'Free Career Counselling', type: 'Feature', href: '/#career', icon: Sparkles, iconColor: '#0D9488', iconBg: '#F0FDFA' },
]

const exploreCategories = [
  { icon: Bot, label: 'Artificial Intelligence' },
  { icon: FileText, label: 'Data & Analytics' },
  { icon: Cloud, label: 'Cloud & DevOps' },
  { icon: Shield, label: 'Cyber Security' },
  { icon: GraduationCap, label: 'Career Programs' },
  { icon: Briefcase, label: 'Workshops' },
  { icon: Building2, label: 'Institutions' },
  { icon: Trophy, label: 'Scholar Challenge' },
]

function CourseDropdown({ open }: { open: boolean }) {
  const categoriesRef = useRef<HTMLDivElement>(null)

  const scrollCategories = (dir: 'left' | 'right') => {
    if (!categoriesRef.current) return
    const x = dir === 'left' ? -320 : 320
    categoriesRef.current.scrollBy({ left: x, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-0 top-full z-50 mt-3 w-[min(1120px,calc(100vw-2rem))] rounded-[18px] border border-[rgba(99,102,241,0.1)] bg-white p-5 shadow-[0_22px_60px_rgba(15,23,42,0.18)]"
        >
          <div className="relative mb-4">
            <button
              type="button"
              onClick={() => scrollCategories('left')}
              aria-label="Scroll categories left"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[rgba(99,102,241,0.12)] bg-white p-1.5 text-text-secondary shadow-sm transition-colors hover:text-indigo-main"
            >
              <ChevronLeft size={15} />
            </button>
            <div
              ref={categoriesRef}
              className="mx-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {exploreCategories.map((cat) => (
                <button
                  key={cat.label}
                  type="button"
                  className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-[rgba(99,102,241,0.14)] bg-white px-3.5 py-2 text-[12px] font-medium text-text-secondary transition-all duration-150 hover:border-indigo-main/35 hover:text-dark-hero"
                >
                  <cat.icon size={14} className="text-indigo-main" />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollCategories('right')}
              aria-label="Scroll categories right"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[rgba(99,102,241,0.12)] bg-white p-1.5 text-text-secondary shadow-sm transition-colors hover:text-indigo-main"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1fr_1fr_1fr_1fr_220px]">
            {courseColumns.map((col) => (
              <div key={col.title} className="rounded-xl border border-[rgba(99,102,241,0.08)] bg-[#FCFDFE] p-4 flex flex-col min-h-[262px]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: col.iconBg }}>
                    <col.icon size={19} style={{ color: col.iconColor }} />
                  </div>
                  <div className="min-h-[40px]">
                    <p className="text-[12px] font-bold tracking-[0.04em] text-indigo-main">{col.title}</p>
                    <p className="mt-0.5 text-[11px] text-text-secondary">{col.description}</p>
                  </div>
                </div>
                <div className="space-y-1.5 flex-1">
                  {col.courses.map((course) => (
                    <Link
                      key={course}
                      href="#"
                      className="flex min-h-[38px] items-center justify-between rounded-lg px-2.5 py-2 text-[13px] text-text-secondary transition-all duration-150 hover:bg-bg-tinted hover:text-dark-hero"
                    >
                      {course}
                      <span className="text-text-sub">›</span>
                    </Link>
                  ))}
                </div>
                <Link href="#" className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-indigo-main transition-all hover:gap-1.5">
                  {col.cta} →
                </Link>
              </div>
            ))}

            <div className="rounded-xl border border-[rgba(99,102,241,0.1)] bg-[linear-gradient(155deg,#F8FAFF_0%,#EEF2FF_100%)] p-5">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-indigo-main/20 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=160&q=60"
                  alt="Career guidance"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mx-auto mb-2 flex h-6 w-6 items-center justify-center text-indigo-main/80">
                <Compass size={16} />
              </div>
              <p className="text-center font-display text-[26px] leading-none text-dark-hero">Not sure where to start?</p>
              <p className="mt-2 text-center text-[12px] leading-relaxed text-text-secondary">
                Answer a few questions and we&apos;ll recommend the right path for you.
              </p>
              <Link
                href="#"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-main px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-150 hover:bg-indigo-hover"
              >
                Find My Path
              </Link>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 rounded-xl border border-[rgba(99,102,241,0.08)] bg-[#FBFCFF] p-2.5 md:grid-cols-4">
            {[
              { icon: GraduationCap, label: 'For Students & Graduates', desc: 'Kickstart your career with in-demand skills' },
              { icon: Briefcase, label: 'For Professionals', desc: 'Upskill and stay ahead' },
              { icon: Building2, label: 'For Institutions', desc: 'Empower learners with industry-ready programs' },
              { icon: Grid2x2, label: 'View All Programs', desc: 'Explore complete course catalog' },
            ].map((item) => (
              <Link key={item.label} href="#" className="flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-bg-tinted">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-main/10 text-indigo-main">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-dark-hero">{item.label}</p>
                    <p className="text-[10px] text-text-sub">{item.desc}</p>
                  </div>
                </div>
                <span className="pl-2 text-text-sub">›</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileDrawer({ open, onClose, onLogin }: { open: boolean; onClose: () => void; onLogin: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close menu overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-dark-hero/40 backdrop-blur-sm lg:hidden"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed right-0 top-0 z-50 flex h-full w-[92%] max-w-[320px] flex-col bg-white p-4 sm:w-[84%] sm:max-w-sm sm:p-6 lg:hidden"
          >
            <div className="mb-6 flex items-center justify-between sm:mb-8">
              <span className="text-base font-semibold text-dark-hero">Menu</span>
              <button onClick={onClose} className="text-text-secondary transition-colors hover:text-indigo-main" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="space-y-4">
              <Link href="#" onClick={onClose} className="block text-base font-medium text-text-secondary transition-colors hover:text-indigo-main max-[360px]:text-[15px]">
                Explore Courses
              </Link>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={onClose}
                  className="block text-base font-medium text-text-secondary transition-colors hover:text-indigo-main max-[360px]:text-[15px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-3">
              <Link href="/contact" onClick={onClose} className="block w-full rounded-lg border-[1.5px] border-indigo-main px-4 py-2.5 text-center text-sm font-medium text-indigo-main transition-all duration-200 hover:bg-bg-tinted">
                Contact Us
              </Link>
              <button
                onClick={() => {
                  onClose()
                  onLogin()
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-main px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-hover hover:shadow-teal"
              >
                Login <UserCircle2 size={16} />
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [lightThemeNav, setLightThemeNav] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const { openModal } = useAuthModal()
  const isLight = lightThemeNav
  const isWorkshopFirstSection = pathname === '/workshop' && !isLight
  const useHeroBlurNav =
    pathname === '/' || pathname === '/about' || pathname === '/scholar-challenge' || pathname === '/workshop' || pathname === '/for-institution' || pathname === '/contact'
  const isDarkTransparentTop = (pathname === '/' || pathname === '/about' || pathname === '/workshop' || pathname === '/scholar-challenge' || pathname === '/for-institution' || pathname === '/contact') && !isLight
  const useDarkNavText = isLight || isDarkTransparentTop
  const useDarkLogo = isLight || pathname === '/' || pathname === '/about' || pathname === '/workshop' || pathname === '/scholar-challenge' || pathname === '/for-institution' || pathname === '/contact'
  const filtered =
    searchQuery.trim().length === 0
      ? searchItems.slice(0, 6)
      : searchItems.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY <= 4)
      const triggerSelector =
        pathname === '/about'
          ? '#story'
          : pathname === '/scholar-challenge'
            ? '.mandate-left'
            : pathname === '/workshop'
              ? '#upcoming'
              : pathname === '/for-institution'
                ? '#what-we-offer'
                : pathname === '/contact'
                  ? '#contact-form-section'
                : '.whatk-section'
      const trigger = document.querySelector(triggerSelector) as HTMLElement | null
      if (!trigger) {
        setLightThemeNav(pathname === '/about' || pathname === '/scholar-challenge' ? false : window.scrollY >= 80)
        return
      }
      const switchPoint = pathname === '/workshop' || pathname === '/contact' ? trigger.offsetTop : trigger.offsetTop - 68
      setLightThemeNav(window.scrollY >= switchPoint)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    setSelectedIndex(-1)
  }, [searchQuery])

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSearchQuery('')
      setSelectedIndex(-1)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [searchOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!searchOpen) return
      if (e.key === 'Escape') {
        setSearchOpen(false)
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((i) => Math.max(i - 1, -1))
      }
      if (e.key === 'Enter' && selectedIndex >= 0) {
        const item = filtered[selectedIndex]
        if (item) {
          router.push(item.href)
          setSearchOpen(false)
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [filtered, router, searchOpen, selectedIndex])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-40 h-16 w-full transition-all duration-300 sm:h-[68px]',
          isLight
            ? 'border-b border-[rgba(15,23,42,0.08)] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]'
            : isWorkshopFirstSection
              ? isAtTop
                ? 'border-b border-transparent bg-transparent'
                : 'border-b border-[rgba(255,255,255,0.45)] bg-white/55 backdrop-blur-md'
            : useHeroBlurNav
              ? isAtTop
                ? 'border-b border-transparent bg-transparent'
                : 'border-b border-[rgba(255,255,255,0.25)] bg-white/35 backdrop-blur-md'
              : 'border-b border-transparent bg-dark-hero/10 backdrop-blur-sm',
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-3 sm:px-4 lg:px-8">
          <Link href="/" className="group mr-3 flex shrink-0 items-center sm:mr-8">
            <Image
              src={useDarkLogo ? '/logo.svg' : '/KanonKode%20Light%20Theme.svg'}
              alt="Kanonkode logo"
              width={170}
              height={44}
              priority
              className="h-9 w-auto max-w-[150px] sm:h-11 sm:max-w-none"
            />
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-between lg:flex">
            <nav className="flex items-center gap-4 lg:gap-5">
              <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  aria-expanded={dropdownOpen}
                  className={cn(
                    'flex items-center gap-1 border-b-2 border-transparent py-1 text-sm font-medium whitespace-nowrap transition-colors duration-150',
                    useDarkNavText ? 'text-text-secondary hover:text-dark-hero' : 'text-white/80 hover:text-white',
                  )}
                >
                  Explore Courses <ChevronDown size={16} />
                </button>
                <CourseDropdown open={dropdownOpen} />
              </div>
              {links.map((link) => (
                (() => {
                  const isActive = link.href !== '#' && pathname === link.href
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      className={cn(
                        'border-b-2 py-1 text-sm font-medium whitespace-nowrap transition-colors duration-150',
                        isActive
                          ? useDarkNavText
                            ? 'border-indigo-main text-indigo-main'
                            : 'border-white text-white'
                          : cn('border-transparent', useDarkNavText ? 'text-text-secondary hover:text-dark-hero' : 'text-white/80 hover:text-white'),
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })()
              ))}
            </nav>

            <div className="ml-5 flex shrink-0 items-center gap-2 lg:gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className={cn('rounded-lg p-2 transition-colors duration-150', useDarkNavText ? 'text-text-secondary hover:bg-bg-tinted hover:text-dark-hero' : 'text-white/70 hover:bg-white/10 hover:text-white')}
              >
                <Search size={20} />
              </button>
              <Link
                href="/contact"
                className={cn(
                  'rounded-lg border-[1.5px] bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 inline-block',
                  useDarkNavText ? 'border-[rgba(15,23,42,0.2)] text-dark-hero hover:bg-bg-tinted' : 'border-white/40 text-white hover:bg-white/10',
                )}
              >
                Contact Us
              </Link>
              <button onClick={() => openModal('login')} className="flex items-center gap-2 rounded-lg bg-teal-main px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-hover hover:shadow-teal">
                Login <UserCircle2 size={16} />
              </button>
            </div>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={cn('rounded-md p-1.5 lg:hidden', useDarkNavText ? 'text-dark-hero' : 'text-white')}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              key="search-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 z-[200]"
              style={{
                background: 'rgba(248,250,252,0.72)',
                backdropFilter: 'blur(3px)',
                WebkitBackdropFilter: 'blur(3px)',
              }}
            />

            <div className="fixed inset-0 z-[201] flex items-center justify-center px-6">
              <motion.div
                key="search-modal"
                initial={{ opacity: 0, scale: 0.96, y: -12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{
                  width: 'min(680px, calc(100vw - 48px))',
                }}
              >
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(99,102,241,0.15)',
                    boxShadow: '0 24px 64px rgba(99,102,241,0.15), 0 4px 16px rgba(0,0,0,0.08)',
                  }}
                >
                <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
                  <Search size={20} style={{ color: '#4F46E5', flexShrink: 0 }} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search programmes, pages, features..."
                    className="flex-1 bg-transparent text-[16px] outline-none"
                    style={{
                      color: '#0F172A',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="flex-shrink-0 rounded-lg p-1 transition-colors hover:bg-bg-tinted">
                      <X size={16} style={{ color: '#94A3B8' }} />
                    </button>
                  )}
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="flex flex-shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1 text-[12px] font-medium transition-colors hover:bg-bg-tinted"
                    style={{ color: '#94A3B8' }}
                  >
                    <span>ESC</span>
                  </button>
                </div>

                <div className="py-3">
                  <p className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: '#94A3B8' }}>
                    {searchQuery ? `Results for "${searchQuery}"` : 'Top Programmes & Pages'}
                  </p>

                  {filtered.length > 0 ? (
                    <div>
                      {filtered.map((item, i) => (
                        <Link
                          key={`${item.label}-${item.href}`}
                          href={item.href}
                          onClick={() => setSearchOpen(false)}
                          className="group flex items-center gap-4 px-5 py-3.5 transition-all duration-150 hover:bg-[#EEF2FF]"
                          style={{ background: selectedIndex === i ? '#EEF2FF' : 'transparent' }}
                        >
                          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: item.iconBg }}>
                            <item.icon size={17} style={{ color: item.iconColor }} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[14px] font-semibold leading-tight text-dark-hero">{item.label}</p>
                            <p className="mt-0.5 text-[11px]" style={{ color: '#94A3B8' }}>
                              {item.type}
                            </p>
                          </div>
                          <ArrowRight
                            size={16}
                            className={cn(
                              'flex-shrink-0 transition-all duration-150 group-hover:translate-x-0.5',
                              selectedIndex === i ? 'translate-x-0.5 opacity-100' : '-translate-x-1 opacity-0 group-hover:opacity-100',
                            )}
                            style={{ color: '#4F46E5' }}
                          />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-5 py-8 text-center">
                      <p className="text-[14px] font-medium text-text-secondary">No results for &quot;{searchQuery}&quot;</p>
                      <p className="mt-1 text-[12px] text-text-sub">Try searching for a programme name or page</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(99,102,241,0.08)', background: '#FAFBFF' }}>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-[11px] text-text-sub">
                      <kbd className="rounded border border-[rgba(99,102,241,0.15)] bg-white px-2 py-0.5 font-mono text-[10px] text-text-secondary">↑↓</kbd>
                      navigate
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-text-sub">
                      <kbd className="rounded border border-[rgba(99,102,241,0.15)] bg-white px-2 py-0.5 font-mono text-[10px] text-text-secondary">↵</kbd>
                      select
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-text-sub">
                      <kbd className="rounded border border-[rgba(99,102,241,0.15)] bg-white px-2 py-0.5 font-mono text-[10px] text-text-secondary">esc</kbd>
                      close
                    </span>
                  </div>
                  <Link href="/courses" onClick={() => setSearchOpen(false)} className="text-[12px] font-semibold" style={{ color: '#4F46E5' }}>
                    Browse all programmes →
                  </Link>
                </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} onLogin={() => openModal('login')} />
    </>
  )
}
