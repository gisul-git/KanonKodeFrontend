'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock, Star, Users } from 'lucide-react'

type Category = 'student' | 'institution' | 'partner' | 'press'

const categories: { id: Category; emoji: string; label: string }[] = [
  { id: 'student', emoji: '🎓', label: 'Student' },
  { id: 'institution', emoji: '🏢', label: 'Institution' },
  { id: 'partner', emoji: '💼', label: 'Partner' },
  { id: 'press', emoji: '📰', label: 'Press/Media' },
]

const courseOptions = [
  'AI Full Stack Developer',
  'AI Automation Operator',
  'AI Cyber Security & Ethical Hacker',
  'AI Cloud & DevOps Engineer',
  'AI Data Analyst',
  'Not sure yet — need guidance',
]

const partnerTypes = ['Hiring Partner', 'Content / Curriculum Partner', 'Technology Partner', 'Investment / Funding', 'Other']

const inputCls = `w-full px-4 py-3.5 rounded-xl text-[14px]
  text-dark-hero outline-none transition-all duration-200`

const inputStyle = {
  background: '#F8FAFC',
  border: '1.5px solid rgba(99,102,241,0.15)',
  fontFamily: 'var(--font-body)',
}

const focusStyle = {
  borderColor: 'rgba(79,70,229,0.5)',
  background: '#EEF2FF',
  boxShadow: '0 0 0 3px rgba(79,70,229,0.08)',
}

const blurStyle = {
  borderColor: 'rgba(99,102,241,0.15)',
  background: '#F8FAFC',
  boxShadow: 'none',
}

export default function ContactForm() {
  const [category, setCategory] = useState<Category>('student')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    course: '',
    institution: '',
    studentCount: '',
    company: '',
    partnerType: '',
    publication: '',
    story: '',
  })

  const set =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }))

  const fProps = (k: keyof typeof form) => ({
    value: form[k],
    onChange: set(k),
    style: inputStyle,
    onFocus: (e: React.FocusEvent<HTMLElement>) => Object.assign((e.target as HTMLElement).style, focusStyle),
    onBlur: (e: React.FocusEvent<HTMLElement>) => Object.assign((e.target as HTMLElement).style, blurStyle),
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1300))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 w-full">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Send a Message</p>
            <h2 className="font-display font-bold text-dark-hero leading-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              How Can We{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Help You?
              </span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 border"
                  style={{
                    background: category === c.id ? '#4F46E5' : 'white',
                    color: category === c.id ? 'white' : '#475569',
                    border: category === c.id ? '1.5px solid #4F46E5' : '1.5px solid rgba(99,102,241,0.2)',
                    boxShadow: category === c.id ? '0 4px 12px rgba(79,70,229,0.3)' : 'none',
                  }}
                >
                  <span>{c.emoji}</span>
                  {c.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="text-center py-16 rounded-2xl" style={{ background: '#F8FAFC', border: '1px solid rgba(99,102,241,0.1)' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'rgba(20,184,166,0.1)' }}>
                  <CheckCircle2 size={40} style={{ color: '#14B8A6' }} />
                </div>
                <h3 className="font-display font-bold text-[26px] text-dark-hero mb-3">Message Sent!</h3>
                <p className="text-[15px] text-text-secondary max-w-sm mx-auto leading-relaxed">
                  We&apos;ve received your message and will get back to you within 24 hours. Keep building!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Full Name *</label>
                    <input type="text" required placeholder="Your full name" className={inputCls} {...fProps('name')} />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Email Address *</label>
                    <input type="email" required placeholder="your@email.com" className={inputCls} {...fProps('email')} />
                  </div>
                </div>

                {category === 'student' && (
                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Interested In</label>
                    <select className={inputCls} {...fProps('course')}>
                      <option value="">Select a programme...</option>
                      {courseOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {category === 'institution' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-dark-hero mb-2">Institution Name *</label>
                      <input type="text" required placeholder="e.g. NMIT Bengaluru" className={inputCls} {...fProps('institution')} />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-dark-hero mb-2">No. of Students</label>
                      <input type="text" placeholder="e.g. 500+" className={inputCls} {...fProps('studentCount')} />
                    </div>
                  </div>
                )}

                {category === 'partner' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-dark-hero mb-2">Company Name *</label>
                      <input type="text" required placeholder="Your company" className={inputCls} {...fProps('company')} />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-dark-hero mb-2">Partnership Type</label>
                      <select className={inputCls} {...fProps('partnerType')}>
                        <option value="">Select type...</option>
                        {partnerTypes.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {category === 'press' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-dark-hero mb-2">Publication Name *</label>
                      <input type="text" required placeholder="e.g. TechCrunch, YourStory" className={inputCls} {...fProps('publication')} />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-dark-hero mb-2">Story Brief</label>
                      <input type="text" placeholder="One-line story angle" className={inputCls} {...fProps('story')} />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[13px] font-semibold text-dark-hero mb-2">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder={
                      category === 'student'
                        ? 'Tell us about your background and what you want to achieve...'
                        : category === 'institution'
                          ? 'Tell us about your students and what you need...'
                          : category === 'partner'
                            ? 'Describe the partnership opportunity...'
                            : 'Tell us about your story and deadline...'
                    }
                    className={`${inputCls} resize-none`}
                    {...fProps('message')}
                  />
                </div>

                <p className="text-[12px]" style={{ color: '#94A3B8' }}>
                  🔒 Your information is private and never shared with third parties.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-[15px] text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed group"
                  style={{
                    background: 'linear-gradient(135deg, #14B8A6, #0D9488)',
                    boxShadow: '0 6px 20px rgba(20,184,166,0.35)',
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="w-full lg:w-[340px] flex-shrink-0 lg:sticky lg:top-28 space-y-5">
            <div className="rounded-2xl p-6" style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-[11px] font-bold tracking-wider uppercase mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                What to expect
              </p>
              {[
                { icon: Clock, text: 'Reply within 24 hours', color: '#6366F1' },
                { icon: Users, text: 'Dedicated support person', color: '#14B8A6' },
                { icon: Star, text: 'No automated bot responses', color: '#F59E0B' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}18` }}>
                      <Icon size={15} style={{ color: item.color }} />
                    </div>
                    <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="rounded-2xl p-6" style={{ background: '#F8FAFC', border: '1px solid rgba(99,102,241,0.1)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {['#4F46E5', '#14B8A6', '#8B5CF6', '#F59E0B', '#EF4444'].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-[10px]"
                      style={{ backgroundColor: c }}
                    >
                      {['A', 'P', 'R', 'S', 'M'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-[14px] text-dark-hero">13,000+</p>
                  <p className="text-[11px] text-text-sub">learners helped</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-[16px]" style={{ color: '#F59E0B' }}>
                    ★
                  </span>
                ))}
                <span className="font-bold text-[15px] text-dark-hero ml-2">4.9</span>
              </div>
              <p className="text-[12px] text-text-sub">Average support satisfaction score</p>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: 'white',
                border: '1px solid rgba(99,102,241,0.1)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.06)',
              }}
            >
              <p className="text-[11px] font-bold tracking-wider uppercase mb-4 text-text-sub">Our Office</p>
              <p className="font-display font-bold text-[16px] text-dark-hero mb-1">Kanonkode HQ</p>
              <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
                Bengaluru, Karnataka — 560001
                <br />
                India
              </p>
              <div className="flex flex-col gap-2">
                <a href="mailto:hello@kanonkode.com" className="text-[13px] font-medium" style={{ color: '#4F46E5' }}>
                  hello@kanonkode.com
                </a>
                <a href="mailto:partnerships@kanonkode.com" className="text-[13px] font-medium" style={{ color: '#14B8A6' }}>
                  partnerships@kanonkode.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
