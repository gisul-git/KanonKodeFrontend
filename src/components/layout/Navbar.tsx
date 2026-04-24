'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Search, UserCircle2, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'scholar', label: 'Scholar Challenge', href: '#' },
  { id: 'workshop', label: 'Workshop', href: '#' },
  { id: 'institution', label: 'For Institution', href: '#' },
]

const courseColumns = [
  { title: 'AI Programmes', courses: ['AI Automation Operator', 'AI Full Stack Developer', 'AI Cloud & DevOps Engineer'] },
  { title: 'Data & Analytics', courses: ['Data Analytics Foundations', 'Power BI Essentials', 'SQL for Decision Making'] },
  { title: 'Cloud & DevOps', courses: ['Cloud Foundations', 'CI/CD with GitHub Actions', 'Containerization Basics'] },
  { title: 'Cyber Security', courses: ['Ethical Hacking Essentials', 'SOC Analyst Bootcamp', 'Network Security Basics'] },
]

function CourseDropdown({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-0 top-full z-50 mt-3 w-[min(760px,calc(100vw-2rem))] rounded-xl2 bg-white p-6 shadow-card-hover"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courseColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-sm font-semibold text-indigo-main">{col.title}</p>
                <div className="space-y-2">
                  {col.courses.map((course) => (
                    <Link key={course} href="#" className="block text-sm text-text-secondary transition-colors duration-150 hover:text-indigo-main">
                      {course}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
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
            className="fixed right-0 top-0 z-50 flex h-full w-[84%] max-w-sm flex-col bg-white p-6 lg:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-base font-semibold text-dark-hero">Menu</span>
              <button onClick={onClose} className="text-text-secondary transition-colors hover:text-indigo-main" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="space-y-4">
              <Link href="#" onClick={onClose} className="block text-base font-medium text-text-secondary transition-colors hover:text-indigo-main">
                Explore Courses
              </Link>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={onClose}
                  className="block text-base font-medium text-text-secondary transition-colors hover:text-indigo-main"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-3">
              <button className="w-full rounded-lg border-[1.5px] border-indigo-main px-4 py-2 text-sm font-medium text-indigo-main transition-all duration-200 hover:bg-bg-tinted">
                Contact Us
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-main px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-hover hover:shadow-teal">
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
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink] = useState('about')
  const isLight = lightThemeNav

  useEffect(() => {
    const onScroll = () => {
      const trigger = document.querySelector('.whatk-section') as HTMLElement | null
      if (!trigger) {
        setLightThemeNav(window.scrollY >= 80)
        return
      }
      const switchPoint = trigger.offsetTop - 68
      setLightThemeNav(window.scrollY >= switchPoint)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-40 h-[68px] w-full transition-all duration-300',
          isLight
            ? 'border-b border-[rgba(15,23,42,0.08)] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-4 lg:px-8">
          <Link href="/" className="group mr-8 flex shrink-0 items-center">
            <Image src={isLight ? '/logo.svg' : '/KanonKode%20Light%20Theme.svg'} alt="Kanonkode logo" width={170} height={44} priority className="h-11 w-auto" />
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-between lg:flex">
            <nav className="flex items-center gap-4 lg:gap-5">
              <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button
                  className={cn(
                    'flex items-center gap-1 border-b-2 border-transparent py-1 text-sm font-medium whitespace-nowrap transition-colors duration-150',
                    isLight ? 'text-text-secondary hover:text-dark-hero' : 'text-white/80 hover:text-white',
                  )}
                >
                  Explore Courses <ChevronDown size={16} />
                </button>
                <CourseDropdown open={dropdownOpen} />
              </div>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn(
                    'border-b-2 border-transparent py-1 text-sm font-medium whitespace-nowrap transition-colors duration-150',
                    isLight ? 'text-text-secondary hover:text-dark-hero' : 'text-white/80 hover:text-white',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="ml-5 flex shrink-0 items-center gap-2 lg:gap-3">
              <button
                aria-label="Search"
                className={cn('transition-colors duration-150', isLight ? 'text-text-secondary hover:text-dark-hero' : 'text-white/70 hover:text-white')}
              >
                <Search size={20} />
              </button>
              <button
                className={cn(
                  'rounded-lg border-[1.5px] bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200',
                  isLight ? 'border-[rgba(15,23,42,0.2)] text-dark-hero hover:bg-bg-tinted' : 'border-white/40 text-white hover:bg-white/10',
                )}
              >
                Contact Us
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-teal-main px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-hover hover:shadow-teal">
                Login <UserCircle2 size={16} />
              </button>
            </div>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={cn('lg:hidden', isLight ? 'text-dark-hero' : 'text-white')}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
