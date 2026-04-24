'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

function SocialIcon({ kind }: { kind: 'linkedin' | 'twitter' | 'instagram' }) {
  const common = { viewBox: '0 0 24 24', width: 15, height: 15, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }
  if (kind === 'linkedin') {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M6.5 9.5V18M6.5 6.8v.2M10 18v-4.6c0-2.5 3.5-2.7 3.5 0V18M13.5 11.5c.6-1 1.7-1.7 3.1-1.7 2 0 3.4 1.4 3.4 4V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  if (kind === 'twitter') {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M7 17L17 7M9.5 7H17v7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  return (
    <svg {...common} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-5 text-[13px] font-semibold uppercase tracking-wider text-white">{title}</p>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="inline-block text-[14px] text-white/45 transition-all duration-150 hover:translate-x-0.5 hover:text-white/85">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo('.footer-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: footerRef.current, start: 'top 95%' } })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{ background: '#080D1A' }}>
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(79,70,229,0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(20,184,166,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #4F46E5 30%, #14B8A6 70%, transparent 100%)' }} />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden" style={{ top: '10%', opacity: 0.5 }}>
        <span className="whitespace-nowrap font-display font-black" style={{ fontSize: 'clamp(80px, 14vw, 180px)', letterSpacing: '-0.04em', background: 'linear-gradient(135deg, rgba(99,102,241,0.03) 0%, rgba(20,184,166,0.02) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>KANONKODE</span>
      </div>

      <div className="relative z-10 border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-12 lg:py-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.1)] px-4 py-2">
                <Sparkles size={14} className="text-indigo-light" />
                <span className="text-[12px] font-semibold tracking-wide text-indigo-light">Start Learning Today</span>
              </div>
              <h2 className="font-display text-white font-bold leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Ready to Build Your
                <br />
                <span style={{ background: 'linear-gradient(135deg, #6366F1 0%, #14B8A6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Dream Career?</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Join 13,000+ learners building real skills through live cohorts, hands-on projects, and structured career support.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-4 sm:flex-row">
              <a href="#" className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[14px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}>Explore Programmes<ArrowRight size={18} /></a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-[14px] font-semibold" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.04)' }}>Book Free Counselling</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content relative z-10">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 pb-10 pt-16 sm:grid-cols-2 lg:grid-cols-6 lg:px-12">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/KanonKode%20Light%20Theme.svg"
                alt="Kanonkode logo"
                width={190}
                height={52}
                className="h-11 w-auto"
              />
            </div>
            <p className="mb-6 max-w-xs text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>Building career-ready professionals through live learning, structured execution, and outcome-focused programmes.</p>
            <div className="mb-7 space-y-2.5">
              <div className="flex items-center gap-2.5"><Mail size={14} style={{ color: 'rgba(255,255,255,0.3)' }} /><span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>hello@kanonkode.com</span></div>
              <div className="flex items-center gap-2.5"><MapPin size={14} style={{ color: 'rgba(255,255,255,0.3)' }} /><span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Bengaluru, India</span></div>
            </div>
            <div className="flex gap-3">
              {(['linkedin', 'twitter', 'instagram'] as const).map((kind) => (
                <a
                  key={kind}
                  href="#"
                  aria-label={kind}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-light hover:bg-[rgba(99,102,241,0.15)] hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
                >
                  <SocialIcon kind={kind} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Product" links={[{ label: 'For Individual', href: '#' }, { label: 'For Business', href: '#' }, { label: 'For Virtual Machine', href: '#' }, { label: 'Aaptor', href: '#' }, { label: 'Scholar Challenge', href: '#' }]} />
          <FooterCol title="Information" links={[{ label: 'FAQ', href: '#' }, { label: 'Blog', href: '#' }, { label: 'Support', href: '#' }, { label: 'Workshops', href: '#' }, { label: 'Careers', href: '#' }]} />
          <FooterCol title="Company" links={[{ label: 'About Us', href: '#' }, { label: 'Career', href: '#' }, { label: 'Hire from Us', href: '#' }, { label: 'Contact Us', href: '#' }]} />

          <div>
            <p className="mb-1 text-[13px] font-semibold uppercase tracking-wider text-white">Stay Updated</p>
            {!subscribed ? (
              <div className="max-w-[240px] space-y-2.5">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full rounded-xl px-4 py-3 text-[14px] text-white outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
                <button onClick={() => email && setSubscribed(true)} className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[14px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}>Subscribe<ArrowRight size={15} /></button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5 rounded-xl px-4 py-3" style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)' }}>
                <span className="text-[18px] text-teal-main">✓</span><span className="text-[13px] font-semibold text-teal-main">You&apos;re subscribed!</span>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-6 pb-8 lg:px-12">
          <div className="mb-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)' }} />
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="font-display text-[20px] font-black" style={{ color: 'rgba(255,255,255,0.1)' }}>Gisul</span>
              <span style={{ color: 'rgba(255,255,255,0.06)' }}>|</span>
              <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>© 2025 Kanonkode. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1">
              {['Terms', 'Privacy', 'Cookies'].map((item, i, arr) => (
                <span key={item} className="flex items-center">
                  <Link href="#" className="rounded-lg px-3 py-1 text-[12px] text-white/30 transition-all duration-150 hover:-translate-y-px hover:text-white/70">
                    {item}
                  </Link>
                  {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '10px' }}>·</span>}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Made with <span className="animate-pulse" style={{ color: '#14B8A6', fontSize: '14px' }}>♥</span> in Bengaluru
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
