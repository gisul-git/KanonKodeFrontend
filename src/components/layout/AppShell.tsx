'use client'

import AuthModal from '@/components/auth/AuthModal'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import TopBar from '@/components/layout/TopBar'
import { useAuthModal } from '@/context/AuthModalContext'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { isOpen, mode, closeModal } = useAuthModal()

  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <AuthModal isOpen={isOpen} onClose={closeModal} defaultMode={mode} />
    </>
  )
}
