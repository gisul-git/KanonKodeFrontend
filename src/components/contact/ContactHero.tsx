'use client'

import { useEffect } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'

const quickContacts = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@kanonkode.com',
    sub: 'Replies within 24 hours',
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.15)',
    href: 'mailto:hello@kanonkode.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 9AM–6PM IST',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.15)',
    href: 'tel:+919876543210',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    sub: 'Fastest response',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.15)',
    href: 'https://wa.me/919876543210',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Bengaluru, India',
    sub: 'Karnataka — 560001',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.15)',
    href: '#',
  },
]

export default function ContactHero() {
  useEffect(() => {
    gsap.fromTo('.ch2-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.15 })
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingBottom: 0,
        backgroundImage: "url('/images/contactus.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            // background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.26) 65%, rgba(255,255,255,0.35) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.9) 42%, rgba(255,255,255,0.68) 56%, rgba(255,255,255,0.18) 66%, rgba(255,255,255,0) 76%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '54%',
            width: '28%',
            background: 'linear-gradient(105deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.32) 58%, rgba(255,255,255,0) 100%)',
            clipPath: 'polygon(0 0, 72% 0, 100% 100%, 0 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-40px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.1), transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.06), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 pt-[132px] pb-10">
        <div
          className="ch2-item inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
          style={{
            background: 'rgba(255,255,255,0.86)',
            border: '1px solid rgba(15,23,42,0.1)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-teal-main animate-pulse flex-shrink-0" />
          <span className="text-[12px] font-medium" style={{ color: 'rgba(15,23,42,0.72)' }}>
            We typically respond within 24 hours
          </span>
        </div>

        <h1 className="ch2-item font-display font-bold leading-[0.96] mb-4 max-w-[700px]" style={{ fontSize: 'clamp(2.7rem, 6vw, 5.3rem)', color: '#0F172A' }}>
          Let&apos;s Start a{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #818CF8 0%, #14B8A6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Conversation
          </span>
        </h1>

        <p className="ch2-item text-[17px] leading-relaxed mb-10 max-w-[510px]" style={{ color: 'rgba(15,23,42,0.7)' }}>
          Whether you&apos;re a student or institution — we&apos;re here to help. Pick the fastest way to reach us.
        </p>

        <div className="ch2-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[960px]">
          {quickContacts.map((c, i) => {
            const Icon = c.icon
            return (
              <a
                key={i}
                href={c.href}
                className="group rounded-2xl p-5 text-left flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 min-h-[130px]"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  border: '1px solid rgba(15,23,42,0.08)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 12px 34px rgba(15,23,42,0.08)',
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: c.bg }}>
                  <Icon size={18} style={{ color: c.color }} />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase mb-1" style={{ color: c.color }}>
                    {c.label}
                  </p>
                  <p className="font-semibold text-[14px] leading-tight mb-0.5 group-hover:underline" style={{ color: '#0F172A' }}>
                    {c.value}
                  </p>
                  <p className="text-[12px]" style={{ color: 'rgba(15,23,42,0.58)' }}>
                    {c.sub}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      <div className="h-16" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), #ffffff)' }} />
    </section>
  )
}
