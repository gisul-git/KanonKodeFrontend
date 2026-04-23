import type { Metadata, Viewport } from 'next'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import TopBar from '@/components/layout/TopBar'
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
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
