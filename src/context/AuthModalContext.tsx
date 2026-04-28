'use client'

import { createContext, useContext, useMemo, useState } from 'react'

type AuthMode = 'login' | 'signup' | 'forgot'

interface AuthModalContextType {
  isOpen: boolean
  mode: AuthMode
  openModal: (mode?: 'login' | 'signup') => void
  closeModal: () => void
}

const AuthModalContext = createContext<AuthModalContextType>({
  isOpen: false,
  mode: 'login',
  openModal: () => {},
  closeModal: () => {},
})

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<AuthMode>('login')

  const openModal = (m: 'login' | 'signup' = 'login') => {
    setMode(m)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const value = useMemo(() => ({ isOpen, mode, openModal, closeModal }), [isOpen, mode])

  return <AuthModalContext.Provider value={value}>{children}</AuthModalContext.Provider>
}

export const useAuthModal = () => useContext(AuthModalContext)
