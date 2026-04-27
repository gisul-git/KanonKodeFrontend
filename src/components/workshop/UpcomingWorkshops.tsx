'use client'
import { useEffect, useRef } from 'react'
import { Clock, Monitor, Users, ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import { ScrollTrigger } from '@/lib/gsap-init'

const workshops = [
  {
    id: 'w1',
    day: '18',
    month: 'JAN',
    time: '11:00 AM – 1:00 PM IST',
    topic: 'AI Automation for Non-Coders',
    tags: ['AI', 'No-Code', 'Automation'],
    instructor: 'Kanonkode Faculty',
    platform: 'Kanonkode Platform',
    seats: '120 seats',
    price: 'FREE',
    priceColor: '#14B8A6',
    priceBg: 'rgba(20,184,166,0.1)',
    accentColor: '#4F46E5',
    featured: true,
  },
  {
    id: 'w2',
    day: '25',
    month: 'JAN',
    time: '3:00 PM – 5:30 PM IST',
    topic: 'Data Analytics with Python — Crash Course',
    tags: ['Data', 'Python', 'Analytics'],
    instructor: 'Kanonkode Faculty',
    platform: 'Kanonkode Platform',
    seats: '80 seats',
    price: '₹199',
    priceColor: '#8B5CF6',
    priceBg: 'rgba(139,92,246,0.1)',
    accentColor: '#14B8A6',
    featured: false,
  },
  {
    id: 'w3',
    day: '01',
    month: 'FEB',
    time: '11:00 AM – 1:00 PM IST',
    topic: 'Cloud Fundamentals — AWS & Azure in 2 Hours',
    tags: ['Cloud', 'AWS', 'Azure'],
    instructor: 'Kanonkode Faculty',
    platform: 'Kanonkode Platform',
    seats: '100 seats',
    price: 'FREE',
    priceColor: '#14B8A6',
    priceBg: 'rgba(20,184,166,0.1)',
    accentColor: '#8B5CF6',
    featured: false,
  },
  {
    id: 'w4',
    day: '08',
    month: 'FEB',
    time: '4:00 PM – 6:00 PM IST',
    topic: 'Cyber Security Essentials for Developers',
    tags: ['Security', 'DevSec', 'Ethical Hacking'],
    instructor: 'Kanonkode Faculty',
    platform: 'Kanonkode Platform',
    seats: '60 seats',
    price: '₹299',
    priceColor: '#F59E0B',
    priceBg: 'rgba(245,158,11,0.1)',
    accentColor: '#F59E0B',
    featured: false,
  },
  {
    id: 'w5',
    day: '15',
    month: 'FEB',
    time: '11:00 AM – 2:00 PM IST',
    topic: 'Full Stack Dev Sprint — Build in 3 Hours',
    tags: ['Full Stack', 'React', 'Node'],
    instructor: 'Kanonkode Faculty',
    platform: 'Kanonkode Platform',
    seats: '75 seats',
    price: '₹199',
    priceColor: '#8B5CF6',
    priceBg: 'rgba(139,92,246,0.1)',
    accentColor: '#4F46E5',
    featured: false,
  },
]

export default function UpcomingWorkshops() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.fromTo(
      '.uw-row',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.uw-list', start: 'top 82%' } },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={ref} id="upcoming" className="py-24 lg:py-32" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Upcoming</p>
            <h2 className="font-display font-bold text-dark-hero leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
              Workshop{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Schedule
              </span>
            </h2>
          </div>
          <a
            href="#register"
            className="inline-flex items-center gap-2 font-semibold text-[14px] px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0"
            style={{ border: '1.5px solid rgba(79,70,229,0.3)', color: '#4F46E5', background: 'white' }}
          >
            Register for Any →
          </a>
        </div>

        <div className="uw-list space-y-4">
          {workshops.map((w) => (
            <div
              key={w.id}
              className={`uw-row group relative rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover ${w.featured ? 'ring-2 ring-indigo-main' : ''}`}
              style={{
                background: 'white',
                border: '1px solid rgba(99,102,241,0.1)',
                boxShadow: w.featured ? '0 4px 24px rgba(79,70,229,0.1)' : '0 2px 12px rgba(99,102,241,0.05)',
              }}
            >
              {w.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-white text-[10px] font-bold" style={{ background: '#4F46E5' }}>
                  ⚡ Next Up
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
                  style={{ background: `${w.accentColor}12`, border: `1.5px solid ${w.accentColor}25` }}
                >
                  <span className="font-display font-black text-[22px] leading-none" style={{ color: w.accentColor }}>
                    {w.day}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase mt-0.5" style={{ color: `${w.accentColor}80` }}>
                    {w.month}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-[17px] text-dark-hero leading-snug mb-2">{w.topic}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-[12px] text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} style={{ color: w.accentColor }} />
                      {w.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Monitor size={13} style={{ color: w.accentColor }} />
                      {w.platform}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={13} style={{ color: w.accentColor }} />
                      {w.seats}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {w.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                        style={{ background: `${w.accentColor}10`, color: w.accentColor, border: `1px solid ${w.accentColor}20` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 flex-shrink-0">
                  <span className="px-4 py-1.5 rounded-full text-[13px] font-bold" style={{ background: w.priceBg, color: w.priceColor, border: `1px solid ${w.priceColor}25` }}>
                    {w.price}
                  </span>
                  <a
                    href="#register"
                    className="group/btn inline-flex items-center gap-2 font-bold text-[13px] text-white px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: w.accentColor, boxShadow: `0 4px 12px ${w.accentColor}35` }}
                  >
                    Register
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
