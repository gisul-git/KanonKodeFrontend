'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { Course } from '@/types'

export default function CoursePricing({ course }: { course: Course }) {
  const tiers = [
    {
      label: 'Standard',
      price: `₹${course.standardPrice.toLocaleString('en-IN')}`,
      sub: 'Full programme access',
      emi: course.emiPrice,
      cta: 'Apply at Standard Price',
      ctaHref: '/contact',
      featured: false,
      color: '#4F46E5',
      perks: [
        'All live sessions',
        'LMS + recordings access',
        'Projects and assignments',
        `${course.certification ?? 'Certificate of completion'}`,
        'Community access',
      ],
    },
    {
      label: 'Scholarship / Merit',
      price: course.scholarshipPrice,
      sub: 'Based on application merit',
      emi: course.emiPrice,
      cta: 'Apply for Scholarship',
      ctaHref: '/scholar-challenge',
      featured: true,
      color: '#14B8A6',
      perks: [
        'Everything in Standard',
        'Merit-evaluated scholarship',
        'Priority batch enrollment',
        'Placement support included',
        'Scholar Challenge pathway',
      ],
    },
    {
      label: 'Institution / Cohort',
      price: course.institutionPrice,
      sub: 'For colleges and groups',
      emi: 'Flexible payment terms',
      cta: 'Contact Our Team',
      ctaHref: '/for-institution',
      featured: false,
      color: '#8B5CF6',
      perks: [
        'Group / cohort pricing',
        'Campus delivery option',
        'Custom batch scheduling',
        'Institution MOU available',
        'Faculty training included',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-3">Pricing</p>
          <h2 className="font-display font-bold text-dark-hero mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Choose Your{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pricing Path
            </span>
          </h2>
          <p className="text-[15px] text-text-secondary max-w-lg mx-auto">
            Three transparent pricing tiers - no hidden fees, no upsells. Every tier includes full programme access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="relative rounded-2xl flex flex-col transition-all duration-300"
              style={{
                background: tier.featured ? '#0F172A' : 'white',
                border: tier.featured ? `2px solid ${tier.color}` : '1px solid rgba(99,102,241,0.12)',
                boxShadow: tier.featured ? `0 16px 48px ${tier.color}25` : '0 2px 16px rgba(99,102,241,0.06)',
                transform: tier.featured ? 'scale(1.03)' : 'none',
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[11px] font-bold"
                  style={{ background: tier.color }}
                >
                  Most Chosen
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <p className="text-[11px] font-bold tracking-wider uppercase mb-2" style={{ color: tier.featured ? 'rgba(255,255,255,0.5)' : '#94A3B8' }}>
                  {tier.label}
                </p>
                <p
                  className="font-display font-black leading-none mb-1"
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    color: tier.featured ? 'white' : '#0F172A',
                  }}
                >
                  {tier.price}
                </p>
                <p className="text-[12px] mb-1" style={{ color: tier.featured ? 'rgba(255,255,255,0.45)' : '#94A3B8' }}>
                  {tier.sub}
                </p>
                <p className="text-[12px] font-semibold mb-6" style={{ color: tier.color }}>
                  EMI: {tier.emi}
                </p>

                <div className="space-y-3 mb-8 flex-1">
                  {tier.perks.map((perk, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: tier.color }} />
                      <span className="text-[13px]" style={{ color: tier.featured ? 'rgba(255,255,255,0.65)' : '#475569' }}>
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={tier.ctaHref}
                  className="group w-full py-3.5 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: tier.featured ? `linear-gradient(135deg, ${tier.color}, ${tier.color}CC)` : 'white',
                    color: tier.featured ? 'white' : tier.color,
                    border: tier.featured ? 'none' : `1.5px solid ${tier.color}`,
                    boxShadow: tier.featured ? `0 4px 16px ${tier.color}35` : 'none',
                  }}
                >
                  {tier.cta}
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-text-sub mt-8">
          Secure payment · All prices in INR · No hidden fees · EMI options available on all tiers
        </p>
      </div>
    </section>
  )
}
