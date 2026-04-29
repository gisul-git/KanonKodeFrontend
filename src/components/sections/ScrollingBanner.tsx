'use client'

const phrases = [
  { text: 'Work in ', highlight: 'AI', rest: ' without deep coding' },
  { text: '', highlight: 'Live', rest: ' cohort-based learning' },
  { text: 'Build real projects from ', highlight: 'Day 1', rest: '' },
  { text: '', highlight: 'Scholar Challenge', rest: ': Earn your opportunity' },
  { text: '', highlight: 'Career-focused', rest: ' structured pathways' },
  { text: 'KanonKode × ', highlight: 'Industry-ready', rest: ' skills' },
]

export default function ScrollingBanner() {
  const items = [...phrases, ...phrases]

  return (
    <div className="flex h-11 w-full items-center overflow-hidden bg-dark-hero">
      <div className="flex w-max items-center whitespace-nowrap" style={{ animation: 'ticker 35s linear infinite' }}>
        {items.map((phrase, i) => (
          <span key={`${phrase.highlight}-${i}`} className="flex items-center">
            <span className="text-[13px] font-medium tracking-[0.04em] text-text-sub">
              {phrase.text}
              <span className="font-semibold text-white">{phrase.highlight}</span>
              {phrase.rest}
            </span>
            <span className="mx-6 text-[10px] text-teal-main">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
