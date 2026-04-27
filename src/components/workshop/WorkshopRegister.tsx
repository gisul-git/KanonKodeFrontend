'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const workshopOptions = [
  'AI Automation for Non-Coders — Jan 18',
  'Data Analytics with Python — Jan 25',
  'Cloud Fundamentals — Feb 1',
  'Cyber Security Essentials — Feb 8',
  'Full Stack Dev Sprint — Feb 15',
]

const inputStyle: React.CSSProperties = {
  background: '#F8FAFC',
  border: '1.5px solid rgba(99,102,241,0.15)',
  width: '100%',
  padding: '14px 18px',
  borderRadius: '12px',
  fontSize: '14px',
  color: '#0F172A',
  outline: 'none',
  transition: 'all 0.2s',
  fontFamily: 'var(--font-body)',
}

const focusStyle: Partial<CSSStyleDeclaration> = {
  borderColor: 'rgba(79,70,229,0.5)',
  background: '#EEF2FF',
  boxShadow: '0 0 0 3px rgba(79,70,229,0.08)',
}

const blurStyle: Partial<CSSStyleDeclaration> = {
  borderColor: 'rgba(99,102,241,0.15)',
  background: '#F8FAFC',
  boxShadow: 'none',
}

export default function WorkshopRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    workshop: '',
    phone: '',
    source: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.workshop) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputProps = (field: keyof typeof form) => ({
    value: form[field],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value })),
    style: inputStyle,
    onFocus: (e: React.FocusEvent<HTMLElement>) => Object.assign((e.target as HTMLElement).style, focusStyle),
    onBlur: (e: React.FocusEvent<HTMLElement>) => Object.assign((e.target as HTMLElement).style, blurStyle),
  })

  return (
    <section id="register" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Register</p>
            <h2 className="font-display font-bold text-dark-hero leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
              Reserve Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Seat
              </span>
            </h2>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-10 max-w-sm">
              Seats are limited per session. Register early to guarantee your spot and receive joining details via email.
            </p>

            <div className="space-y-4 mb-10">
              <p className="text-[12px] font-bold tracking-wider uppercase text-text-sub">What you get</p>
              {[
                'Confirmation email with session link',
                'Live interactive session on Kanonkode platform',
                'Session recording (24hr access)',
                'Certificate of participation',
                'Exclusive Scholar Challenge invite',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="flex-shrink-0" style={{ color: '#14B8A6' }} />
                  <p className="text-[14px] text-text-secondary">{item}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-4" style={{ background: '#F8FAFC', border: '1px solid rgba(99,102,241,0.1)' }}>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                🔒 Your details are private. We never share them. You can unsubscribe from workshop reminders anytime.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid rgba(99,102,241,0.12)', boxShadow: '0 16px 48px rgba(99,102,241,0.08)' }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'rgba(20,184,166,0.1)' }}>
                    <CheckCircle2 size={40} style={{ color: '#14B8A6' }} />
                  </div>
                  <h3 className="font-display font-bold text-[26px] text-dark-hero mb-3">You&apos;re Registered!</h3>
                  <p className="text-[15px] text-text-secondary leading-relaxed max-w-sm mx-auto">
                    Check your inbox for session details and the Kanonkode platform link. See you there!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Full Name *</label>
                    <input type="text" required placeholder="Enter your full name" {...inputProps('name')} />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Email Address *</label>
                    <input type="email" required placeholder="Enter your email address" {...inputProps('email')} />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Select Workshop *</label>
                    <select required {...inputProps('workshop')}>
                      <option value="">Choose a workshop...</option>
                      {workshopOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">
                      Phone Number
                      <span className="text-text-sub font-normal ml-1">(optional)</span>
                    </label>
                    <input type="tel" placeholder="+91 98765 43210" {...inputProps('phone')} />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">How did you hear about us?</label>
                    <select {...inputProps('source')}>
                      <option value="">Select one...</option>
                      {['Instagram', 'LinkedIn', 'Friend / Referral', 'College', 'Google Search', 'Other'].map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-[15px] text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed group"
                    style={{ background: 'linear-gradient(135deg, #14B8A6, #0D9488)', boxShadow: '0 6px 20px rgba(20,184,166,0.35)' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Registering...
                      </>
                    ) : (
                      <>
                        Reserve My Seat
                        <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
