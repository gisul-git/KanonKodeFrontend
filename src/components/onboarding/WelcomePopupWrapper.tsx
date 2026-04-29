'use client'

import dynamic from 'next/dynamic'

const WelcomePopup = dynamic(() => import('./WelcomePopup'), { ssr: false })

export default function WelcomePopupWrapper() {
  return <WelcomePopup />
}
