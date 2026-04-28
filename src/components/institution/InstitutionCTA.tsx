'use client'

import { useState } from 'react'
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react'

export default function InstitutionCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.institution) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const fieldStyle = {
    background: '#F8FAFC',
    border: '1.5px solid rgba(99,102,241,0.15)',
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    fontSize: '14px',
    color: '#0F172A',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'all 0.2s',
  }

  return (
    <section id="partner" className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #F5F8FF 0%, #FFFFFF 55%, #F2FCF8 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(79,70,229,0.4) 30%, rgba(20,184,166,0.35) 70%, transparent)' }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-60px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.12), transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-40px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.1), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-[42%] flex-shrink-0">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Start the Conversation</p>
            <h2 className="font-display font-bold text-dark-hero leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
              Ready to Partner{' '}
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                With Kanonkode?
              </span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10 max-w-sm text-text-secondary">
              Fill in the form and our institutional partnerships team will reach out within 2 business days to discuss how we can work together.
            </p>

            {[
              'Custom programme design for your students',
              'Flexible MOU — semester or annual',
              'Dedicated faculty and support team',
              'Detailed progress and placement reports',
              'Scholar Challenge exclusively for your campus',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <CheckCircle2 size={16} className="flex-shrink-0" style={{ color: '#14B8A6' }} />
                <p className="text-[14px] text-text-secondary">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-1 w-full">
            <div
              className="rounded-2xl p-8"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(99,102,241,0.12)',
                boxShadow: '0 8px 30px rgba(79,70,229,0.08)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'rgba(20,184,166,0.15)' }}>
                    <CheckCircle2 size={40} style={{ color: '#14B8A6' }} />
                  </div>
                  <h3 className="font-display font-bold text-[24px] text-dark-hero mb-3">Request Received!</h3>
                  <p className="text-[15px] leading-relaxed max-w-sm mx-auto text-text-secondary">
                    Our team will reach out within 2 business days. We look forward to partnering with you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: 'Your Name *', field: 'name' as const, type: 'text', placeholder: 'Enter your full name', required: true },
                    { label: 'Email Address *', field: 'email' as const, type: 'email', placeholder: 'Enter your email', required: true },
                    { label: 'Institution Name *', field: 'institution' as const, type: 'text', placeholder: 'e.g. NMIT Bengaluru', required: true },
                    { label: 'Your Role', field: 'role' as const, type: 'text', placeholder: 'e.g. Principal, HOD, Placement Officer', required: false },
                  ].map((f) => (
                    <div key={f.field}>
                      <label className="block text-[13px] font-semibold text-dark-hero mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        value={form[f.field]}
                        onChange={(e) => setForm((p) => ({ ...p, [f.field]: e.target.value }))}
                        style={fieldStyle}
                        onFocus={(e) => {
                          Object.assign(e.target.style, {
                            borderColor: 'rgba(99,102,241,0.5)',
                            background: 'rgba(99,102,241,0.08)',
                            boxShadow: '0 0 0 3px rgba(99,102,241,0.08)',
                          })
                        }}
                        onBlur={(e) => {
                          Object.assign(e.target.style, {
                            borderColor: 'rgba(99,102,241,0.15)',
                            background: '#F8FAFC',
                            boxShadow: 'none',
                          })
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Tell us about your students</label>
                    <textarea
                      rows={4}
                      placeholder="How many students? What domain? Any specific goals?"
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      style={{ ...fieldStyle, resize: 'none' }}
                      onFocus={(e) => {
                        Object.assign(e.target.style, {
                          borderColor: 'rgba(99,102,241,0.5)',
                          background: 'rgba(99,102,241,0.08)',
                          boxShadow: '0 0 0 3px rgba(99,102,241,0.08)',
                        })
                      }}
                      onBlur={(e) => {
                        Object.assign(e.target.style, {
                          borderColor: 'rgba(99,102,241,0.15)',
                          background: '#F8FAFC',
                          boxShadow: 'none',
                        })
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-[15px] text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed group"
                    style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
                      boxShadow: '0 6px 20px rgba(79,70,229,0.3)',
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Building2 size={17} />
                        Send Partnership Request
                        <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
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
