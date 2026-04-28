'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, EyeOff, Lock, Mail, User, X } from 'lucide-react'
import Image from 'next/image'

type Mode = 'login' | 'signup' | 'forgot'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: Mode
}

const inputBase = `
  w-full px-4 py-3.5 rounded-xl text-[14px] text-dark-hero
  outline-none transition-all duration-200
  bg-[#F8FAFC] border-[1.5px] border-[rgba(99,102,241,0.15)]
  placeholder:text-[#94A3B8]
  focus:border-[rgba(79,70,229,0.5)]
  focus:bg-[#EEF2FF]
  focus:shadow-[0_0_0_3px_rgba(79,70,229,0.08)]
`

function GoogleButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border-[1.5px] font-semibold text-[14px] text-dark-hero transition-all duration-200 hover:bg-[#F8FAFC] hover:border-[rgba(99,102,241,0.3)] active:scale-[0.98]"
      style={{ borderColor: 'rgba(99,102,241,0.2)' }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18">
        <path
          fill="#4285F4"
          d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
        />
        <path
          fill="#34A853"
          d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.859-3.048.859-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        />
        <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" />
        <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 6.294C4.672 4.167 6.656 3.58 9 3.58z" />
      </svg>
      {label}
    </button>
  )
}

function OrDivider() {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="flex-1 h-px bg-[rgba(99,102,241,0.1)]" />
      <span className="text-[12px] font-medium text-text-sub">or continue with email</span>
      <div className="flex-1 h-px bg-[rgba(99,102,241,0.1)]" />
    </div>
  )
}

function PasswordInput({
  placeholder,
  value,
  onChange,
  name,
}: {
  placeholder: string
  value: string
  onChange: (v: string) => void
  name: string
}) {
  const [show, setShow] = useState(false)
  return (
    <div className="relative">
      <input
        type={show ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputBase}
        style={{ paddingRight: '48px' }}
      />
      <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-sub hover:text-dark-hero transition-colors">
        {show ? <EyeOff size={17} /> : <Eye size={17} />}
      </button>
    </div>
  )
}

export default function AuthModal({ isOpen, onClose, defaultMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<Mode>(defaultMode)
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    setDone(false)
    setLoading(false)
    setMode(defaultMode)
    setTimeout(() => firstInputRef.current?.focus(), 200)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, defaultMode, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setDone(true)
  }

  const leftContent = {
    login: {
      heading: 'Welcome back.',
      sub: 'Sign in to continue your learning journey.',
      stats: [
        { num: '13K+', label: 'Active Learners' },
        { num: '4.9★', label: 'Avg Rating' },
        { num: '90%', label: 'Placement Rate' },
      ],
      badges: [
        { text: 'Live Cohorts', color: '#4F46E5' },
        { text: 'Career Support', color: '#14B8A6' },
        { text: 'Real Projects', color: '#8B5CF6' },
      ],
    },
    signup: {
      heading: 'Start your journey.',
      sub: 'Join 13,000+ learners building real skills.',
      stats: [
        { num: '500+', label: 'Students Placed' },
        { num: 'Free', label: 'to Join' },
        { num: '2025', label: 'Cohorts Open' },
      ],
      badges: [
        { text: 'Scholar Challenge', color: '#4F46E5' },
        { text: 'Live Learning', color: '#14B8A6' },
        { text: 'Certification', color: '#F59E0B' },
      ],
    },
    forgot: {
      heading: 'Reset password.',
      sub: "We'll send a reset link to your email.",
      stats: [],
      badges: [],
    },
  }

  const left = leftContent[mode]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="auth-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 z-[300]"
            style={{
              background: 'rgba(15,23,42,0.65)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          />

          <motion.div
            key="auth-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[301] flex items-center justify-center p-4"
          >
            <div onClick={(e) => e.stopPropagation()} className="relative w-full flex overflow-hidden rounded-3xl" style={{ maxWidth: '860px', maxHeight: '90vh', boxShadow: '0 32px 80px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.12)' }}>
              <div
                className="hidden lg:flex flex-col justify-between w-[42%] flex-shrink-0 p-10 relative overflow-hidden"
                style={{ background: 'linear-gradient(145deg, #0F172A 0%, #1E1B4B 60%, #0F172A 100%)' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    left: '-40px',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(79,70,229,0.25), transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-40px',
                    right: '-40px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(20,184,166,0.2), transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                  }}
                />
                <div>
                  <div className="mb-10">
                    <Image src="/KanonKode%20Light%20Theme.svg" alt="Kanonkode logo" width={170} height={44} className="h-9 w-auto" priority />
                  </div>
                  <h2 className="font-display font-bold text-white text-[28px] leading-tight mb-3">{left.heading}</h2>
                  <p className="text-[14px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {left.sub}
                  </p>
                  {left.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {left.badges.map((b, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-[11px] font-bold"
                          style={{ background: `${b.color}25`, border: `1px solid ${b.color}40`, color: b.color }}
                        >
                          {b.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {left.stats.length > 0 && (
                  <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="grid grid-cols-3 gap-4">
                      {left.stats.map((s, i) => (
                        <div key={i} className="text-center">
                          <p
                            className="font-display font-black text-[20px] leading-none mb-1"
                            style={{
                              background: 'linear-gradient(135deg, #818CF8, #14B8A6)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            {s.num}
                          </p>
                          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 bg-white flex flex-col overflow-y-auto" style={{ maxHeight: '90vh' }}>
                <div className="flex items-center justify-between px-8 pt-7 pb-0 flex-shrink-0">
                  {mode !== 'login' ? (
                    <button onClick={() => setMode('login')} className="flex items-center gap-1.5 text-[13px] font-medium text-text-secondary hover:text-dark-hero transition-colors">
                      <ArrowLeft size={16} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <button onClick={onClose} className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-150 hover:bg-[#F1F5F9] text-text-secondary hover:text-dark-hero">
                    <X size={19} />
                  </button>
                </div>

                <div className="flex-1 px-8 py-6">
                  {done ? (
                    <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(20,184,166,0.1)' }}>
                        <CheckCircle2 size={40} style={{ color: '#14B8A6' }} />
                      </div>
                      <h3 className="font-display font-bold text-[24px] text-dark-hero mb-2">
                        {mode === 'forgot' ? 'Reset Email Sent!' : mode === 'signup' ? 'Account Created!' : 'Signed In!'}
                      </h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed max-w-xs">
                        {mode === 'forgot'
                          ? 'Check your inbox for the password reset link.'
                          : mode === 'signup'
                            ? 'Welcome to Kanonkode. Your journey begins now.'
                            : 'Welcome back! Redirecting you to your dashboard.'}
                      </p>
                    </div>
                  ) : mode === 'login' ? (
                    <>
                      <h2 className="font-display font-bold text-[26px] text-dark-hero mb-1">Welcome back</h2>
                      <p className="text-[14px] text-text-secondary mb-6">Sign in to your account</p>
                      <GoogleButton label="Continue with Google" />
                      <OrDivider />
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-dark-hero mb-2">Email</label>
                          <div className="relative">
                            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-sub" />
                            <input
                              ref={firstInputRef}
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@example.com"
                              className={inputBase}
                              style={{ paddingLeft: '42px' }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-[13px] font-semibold text-dark-hero">Password</label>
                            <button type="button" onClick={() => setMode('forgot')} className="text-[12px] font-semibold transition-colors hover:underline" style={{ color: '#4F46E5' }}>
                              Forgot password?
                            </button>
                          </div>
                          <PasswordInput name="password" placeholder="Enter your password" value={password} onChange={setPassword} />
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 rounded-xl font-bold text-[15px] text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 mt-2 group"
                          style={{ background: 'linear-gradient(135deg, #4F46E5, #6366F1)', boxShadow: '0 6px 20px rgba(79,70,229,0.35)' }}
                        >
                          {loading ? (
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          ) : (
                            <>
                              Sign in
                              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </form>
                      <p className="text-center text-[13px] text-text-secondary mt-6">
                        Don&apos;t have an account?{' '}
                        <button onClick={() => setMode('signup')} className="font-bold transition-colors hover:underline" style={{ color: '#4F46E5' }}>
                          Sign up
                        </button>
                      </p>
                    </>
                  ) : mode === 'signup' ? (
                    <>
                      <h2 className="font-display font-bold text-[26px] text-dark-hero mb-1">Create an account</h2>
                      <p className="text-[14px] text-text-secondary mb-6">Sign up to get started</p>
                      <GoogleButton label="Continue with Google" />
                      <OrDivider />
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-dark-hero mb-2">Full Name *</label>
                          <div className="relative">
                            <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-sub" />
                            <input
                              ref={firstInputRef}
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              className={inputBase}
                              style={{ paddingLeft: '42px' }}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark-hero mb-2">Email *</label>
                          <div className="relative">
                            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-sub" />
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@example.com"
                              className={inputBase}
                              style={{ paddingLeft: '42px' }}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark-hero mb-2">Password *</label>
                          <PasswordInput name="password" placeholder="Create a password" value={password} onChange={setPassword} />
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark-hero mb-2">Confirm Password *</label>
                          <PasswordInput name="confirm" placeholder="Repeat your password" value={confirm} onChange={setConfirm} />
                        </div>
                        {confirm && password !== confirm && <p className="text-[12px]" style={{ color: '#EF4444' }}>Passwords do not match</p>}
                        <button
                          type="submit"
                          disabled={loading || (!!confirm && password !== confirm)}
                          className="w-full py-3.5 rounded-xl font-bold text-[15px] text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 mt-2 group"
                          style={{ background: 'linear-gradient(135deg, #4F46E5, #6366F1)', boxShadow: '0 6px 20px rgba(79,70,229,0.35)' }}
                        >
                          {loading ? (
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          ) : (
                            <>
                              Create account
                              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </form>
                      <p className="text-center text-[13px] text-text-secondary mt-6">
                        Already have an account?{' '}
                        <button onClick={() => setMode('login')} className="font-bold transition-colors hover:underline" style={{ color: '#4F46E5' }}>
                          Sign in
                        </button>
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="font-display font-bold text-[26px] text-dark-hero mb-1">Forgot password?</h2>
                      <p className="text-[14px] text-text-secondary mb-8">Enter your email and we&apos;ll send you a reset link.</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-dark-hero mb-2">Email Address *</label>
                          <div className="relative">
                            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-sub" />
                            <input
                              ref={firstInputRef}
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@example.com"
                              className={inputBase}
                              style={{ paddingLeft: '42px' }}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 rounded-xl font-bold text-[15px] text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 group"
                          style={{ background: 'linear-gradient(135deg, #14B8A6, #0D9488)', boxShadow: '0 6px 20px rgba(20,184,166,0.35)' }}
                        >
                          {loading ? (
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          ) : (
                            <>
                              Send Reset Link
                              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
                {!done && (
                  <p className="text-center text-[11px] text-text-sub px-8 pb-6 flex-shrink-0 flex items-center justify-center gap-1.5">
                    <Lock size={12} />
                    <span>
                      By continuing, you agree to Kanonkode&apos;s <a href="/terms" className="underline hover:text-dark-hero">Terms</a> and{' '}
                      <a href="/privacy" className="underline hover:text-dark-hero">Privacy Policy</a>
                    </span>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
