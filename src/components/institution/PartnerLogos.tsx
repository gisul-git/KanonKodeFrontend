'use client'

const institutions = [
  'NMIT Bengaluru',
  'RV College',
  'BMS College',
  'RNSIT',
  'Dayananda Sagar',
  'PESIT',
  'MVIT',
  'SJBIT',
  'New Horizon',
  'CMR Institute',
  'KLE Tech',
  'NIE Mysuru',
]

export default function PartnerLogos() {
  const items = [...institutions, ...institutions]
  const logoColors = ['4F46E5', '14B8A6', '8B5CF6', 'F59E0B', '0EA5E9', '10B981']

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-8">
        <p className="text-center text-[12px] font-semibold tracking-[0.15em] uppercase" style={{ color: '#94A3B8' }}>
          Trusted by institutions across India
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div
          className="flex items-center gap-12 w-max"
          style={{ animation: 'marqueeLeft 30s linear infinite' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = 'paused')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = 'running')}
        >
          {items.map((name, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0 px-2">
              <img
                src={`https://dummyimage.com/48x48/${logoColors[i % logoColors.length]}/ffffff.png&text=${encodeURIComponent(name[0])}`}
                alt={`${name} logo`}
                className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                loading="lazy"
              />
              <span className="font-body font-semibold text-[15px] whitespace-nowrap" style={{ color: '#475569' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
