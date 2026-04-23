import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          main: '#4F46E5',
          hover: '#4338CA',
          light: '#6366F1',
        },
        teal: {
          main: '#14B8A6',
          hover: '#0D9488',
          soft: '#5EEAD4',
        },
        dark: {
          hero: '#0F172A',
          card: '#1E293B',
        },
        bg: {
          soft: '#F8FAFC',
          tinted: '#EEF2FF',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          sub: '#94A3B8',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-lg': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
        section: ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      boxShadow: {
        card: '0 4px 24px rgba(79, 70, 229, 0.08)',
        'card-hover': '0 12px 40px rgba(79, 70, 229, 0.18)',
        teal: '0 4px 20px rgba(20, 184, 166, 0.3)',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
    },
  },
  plugins: [],
}

export default config
