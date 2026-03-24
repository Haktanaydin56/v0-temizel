import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Temizel İnşaat | Güvenle inşa eder, huzurla yaşatır',
  description: 'Temizel İnşaat, modern mimari, sağlam altyapı ve estetik yaşam alanlarıyla geleceğinizi inşa eder. Kocaeli Başiskele\'de güvenilir inşaat ve gayrimenkul geliştirme.',
  keywords: ['inşaat', 'gayrimenkul', 'Kocaeli', 'Başiskele', 'daire', 'konut', 'Temizel İnşaat', 'Bitinya Evleri'],
  authors: [{ name: 'Temizel İnşaat' }],
  openGraph: {
    title: 'Temizel İnşaat | Güvenle inşa eder, huzurla yaşatır',
    description: 'Modern mimari, sağlam altyapı ve estetik yaşam alanlarıyla geleceğinizi inşa eder.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
