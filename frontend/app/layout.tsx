import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://corenextproject.vercel.app'),
  title: 'CoreNext Project - Final Year Projects, Journal Publishing & Hardware Projects',
  description:
    'Get ready-made final year project guidance, research paper publishing support, and hardware project implementation help. Expert assistance for AI/ML, Cloud, Web, IoT, and more.',
  keywords:
    'final year projects, journal publishing, hardware projects, IEEE papers, Scopus, Arduino, Raspberry Pi, AI ML projects, research paper support',
  openGraph: {
    title: 'CoreNext Project - Final Year Projects & Research Publishing',
    description:
      'Expert academic support for final year projects, research paper publishing, and hardware project implementation.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoreNext Project - Final Year Projects & Research Publishing',
    description: 'Expert academic support for your final year and research needs.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1f2937',
              color: '#fff',
              border: '1px solid #374151',
            },
            success: { iconTheme: { primary: '#818cf8', secondary: '#fff' } },
            error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
          }}
        />
      </body>
    </html>
  )
}
