import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clarity Hub | Andres Ramirez',
  description: 'Clarity Systems for High-Agency People. A curated ecosystem for thought, protocols, and intellectual growth.',
  keywords: ['clarity', 'systems thinking', 'personal development', 'protocols', 'essays', 'intellectual growth'],
  authors: [{ name: 'Andres Ramirez' }],
  creator: 'Andres Ramirez',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Clarity Hub | Andres Ramirez',
    description: 'Clarity Systems for High-Agency People',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarity Hub | Andres Ramirez',
    description: 'Clarity Systems for High-Agency People',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0F1113',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrumentSans.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
