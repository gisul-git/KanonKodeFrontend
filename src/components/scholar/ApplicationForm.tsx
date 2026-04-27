'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: '', email: '', portfolio: '', intent: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.intent) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="apply" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 items-start">
          <div className="w-full lg:w-[42%] flex-shrink-0">
            <p className="text-teal-main font-semibold text-[11px] tracking-[0.15em] uppercase mb-4">Initiate Application</p>
            <h2 className="font-display font-bold text-dark-hero leading-[1.1] mb-5" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.8rem)' }}>
              This Is Your Moment{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                of Execution.
              </span>
            </h2>
            <p className="text-[14px] sm:text-[15px] text-text-secondary leading-relaxed mb-8 max-w-sm">
              Complete the form with precision. Fields marked with an asterisk are required for the entry.
            </p>

            <div
              className="rounded-2xl p-5 sm:p-6 mb-10"
              style={{
                background: '#EEF2FF',
                border: '1px solid rgba(99,102,241,0.12)',
                borderLeft: '4px solid #4F46E5',
              }}
            >
              <p className="font-display font-bold text-[16px] sm:text-[17px] text-dark-hero leading-snug">
                &quot;Execution is the only thing that matters. Show us what you&apos;ve built, not what you&apos;ve thought about building.&quot;
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-[12px] font-bold tracking-wider uppercase text-text-sub mb-3">What happens next</p>
              {[
                'You receive a confirmation email',
                'We review your application in 5 days',
                'Shortlisted? You get the challenge brief',
                'Complete it in 48 hours and submit',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                    style={{ background: '#4F46E5' }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-[14px] text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div
              className="rounded-2xl p-5 sm:p-8"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(99,102,241,0.12)',
                boxShadow: '0 16px 48px rgba(99,102,241,0.08)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'rgba(20,184,166,0.1)' }}>
                    <CheckCircle2 size={40} style={{ color: '#14B8A6' }} />
                  </div>
                  <h3 className="font-display font-bold text-[22px] sm:text-[26px] text-dark-hero mb-3">Application Received!</h3>
                  <p className="text-[15px] text-text-secondary leading-relaxed max-w-sm mx-auto">
                    We&apos;ll review your submission and get back to you within 5 business days. Keep building.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3.5 rounded-xl text-[14px] text-dark-hero outline-none transition-all duration-200"
                      style={{ background: '#F8FAFC', border: '1.5px solid rgba(99,102,241,0.15)' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(79,70,229,0.5)'
                        e.target.style.background = '#EEF2FF'
                        e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.08)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(99,102,241,0.15)'
                        e.target.style.background = '#F8FAFC'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3.5 rounded-xl text-[14px] text-dark-hero outline-none transition-all duration-200"
                      style={{ background: '#F8FAFC', border: '1.5px solid rgba(99,102,241,0.15)' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(79,70,229,0.5)'
                        e.target.style.background = '#EEF2FF'
                        e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.08)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(99,102,241,0.15)'
                        e.target.style.background = '#F8FAFC'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Portfolio / GitHub URL</label>
                    <input
                      type="url"
                      value={form.portfolio}
                      onChange={(e) => setForm((f) => ({ ...f, portfolio: e.target.value }))}
                      placeholder="https://github.com/your-username"
                      className="w-full px-4 py-3.5 rounded-xl text-[14px] text-dark-hero outline-none transition-all duration-200"
                      style={{ background: '#F8FAFC', border: '1.5px solid rgba(99,102,241,0.15)' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(79,70,229,0.5)'
                        e.target.style.background = '#EEF2FF'
                        e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.08)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(99,102,241,0.15)'
                        e.target.style.background = '#F8FAFC'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-dark-hero mb-2">Intent Statement *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.intent}
                      onChange={(e) => setForm((f) => ({ ...f, intent: e.target.value }))}
                      placeholder="Briefly describe why you are focused on execution. What have you built? What do you want to build?"
                      className="w-full px-4 py-3.5 rounded-xl text-[14px] text-dark-hero outline-none transition-all duration-200 resize-none"
                      style={{ background: '#F8FAFC', border: '1.5px solid rgba(99,102,241,0.15)' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(79,70,229,0.5)'
                        e.target.style.background = '#EEF2FF'
                        e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.08)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(99,102,241,0.15)'
                        e.target.style.background = '#F8FAFC'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <p className="text-[12px]" style={{ color: '#94A3B8' }}>
                    🔒 Your data is private. We never share it with third parties.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-[15px] text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed group"
                    style={{ background: 'linear-gradient(135deg, #14B8A6, #0D9488)', boxShadow: '0 6px 20px rgba(20,184,166,0.35)' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Apply Now
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
