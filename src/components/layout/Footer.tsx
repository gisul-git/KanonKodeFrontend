'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap-init'

function SocialIcon({ kind }: { kind: 'linkedin' | 'twitter' | 'instagram' }) {
  const common = { viewBox: '0 0 24 24', width: 16, height: 16, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }

  if (kind === 'linkedin') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M6.5 9.5V18M6.5 6.8v.2M10 18v-4.6c0-2.5 3.5-2.7 3.5 0V18M13.5 11.5c.6-1 1.7-1.7 3.1-1.7 2 0 3.4 1.4 3.4 4V18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }

  if (kind === 'twitter') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M7 17L17 7M9.5 7H17v7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (!footerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-top',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: 'footer', start: 'top 95%' },
        },
      )
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="w-full border-t border-white/6 bg-dark-hero pt-16 pb-8">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <div className="footer-top mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block leading-none">
              <p className="text-[1.5rem] font-bold text-white [font-family:var(--font-display)]">
                Kanon<span className="text-indigo-light">kode</span>
              </p>
              <p className="mt-1 text-[10px] tracking-widest text-white/40">Learn.Build.Earn</p>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-[1.65] text-white/50">
              Kanonkode builds career-ready professionals through live learning, structured execution, and outcome-focused programmes.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { kind: 'linkedin' as const, label: 'LinkedIn' },
                { kind: 'twitter' as const, label: 'Twitter/X' },
                { kind: 'instagram' as const, label: 'Instagram' },
              ].map(({ kind, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/50 transition-all duration-200 hover:border-indigo-light hover:bg-[rgba(99,102,241,0.12)] hover:text-white"
                >
                  <SocialIcon kind={kind} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold tracking-wider text-white">Product</p>
            <div className="space-y-3">
              {['For Individual', 'For Business', 'For Virtual Machine', 'Aaptor'].map((t) => (
                <Link key={t} href="#" className="block text-[14px] text-white/50 transition-colors duration-150 hover:text-white">
                  {t}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold tracking-wider text-white">Information</p>
            <div className="space-y-3">
              {['FAQ', 'Blog', 'Support'].map((t) => (
                <Link key={t} href="#" className="block text-[14px] text-white/50 transition-colors duration-150 hover:text-white">
                  {t}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold tracking-wider text-white">Company</p>
            <div className="space-y-3">
              {['About Us', 'Career', 'Hire from Us', 'Contact Us'].map((t) => (
                <Link key={t} href="#" className="block text-[14px] text-white/50 transition-colors duration-150 hover:text-white">
                  {t}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[13px] font-semibold tracking-wider text-white">Stay Updated</p>
              <p className="mt-1 text-[12px] text-white/40">Get programme updates and career tips.</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white placeholder:text-white/30 focus:border-indigo-light focus:outline-none"
              />
              <button className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-main py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-indigo-hover">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/6 pt-6">
          <div>
            <p className="text-[24px] font-bold text-white/15 [font-family:var(--font-display)]">Gisul</p>
            <p className="mt-1 text-[12px] text-white/30">© 2025 Kanonkode. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {['Terms', 'Privacy', 'Cookies'].map((t) => (
              <Link key={t} href="#" className="text-[12px] text-white/35 transition-colors duration-150 hover:text-white">
                {t}
              </Link>
            ))}
          </div>

          <p className="text-[12px] text-white/25">
            Made with <span className="text-teal-main">♥</span> in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  )
}
