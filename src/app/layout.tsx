import type { Metadata, Viewport } from 'next'
import AppShell from '@/components/layout/AppShell'
import { AuthModalProvider } from '@/context/AuthModalContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kanonkode | Learn. Build. Earn.',
  description:
    'Kanonkode is a B2C EdTech platform helping students, graduates, professionals, and institutions learn in-demand skills and build real careers.',
  keywords: [
    'Kanonkode',
    'EdTech',
    'AI training',
    'career programs',
    'students',
    'graduates',
    'professionals',
    'institutions',
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        <AuthModalProvider>
          <AppShell>{children}</AppShell>
        </AuthModalProvider>
      </body>
    </html>
  )
}
