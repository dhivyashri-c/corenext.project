import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { SITE, SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    'final year projects chennai',
    'final year project center in chennai',
    'final year project with source code',
    'journal publication support',
    'scopus journal publication chennai',
    'IEEE paper publication',
    'UGC care journal publication',
    'conference paper publication',
    'hardware projects chennai',
    'arduino projects',
    'raspberry pi projects',
    'IoT projects for engineering students',
    'AI ML final year projects',
    'BE BTech MCA final year projects',
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'Education',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  ...(SITE.googleVerification && { verification: { google: SITE.googleVerification } }),
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Chennai, Tamil Nadu, India',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'EducationalOrganization'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE.name,
      url: SITE_URL,
      logo: `${SITE_URL}/apple-icon`,
      image: `${SITE_URL}/opengraph-image`,
      description: SITE.description,
      telephone: SITE.phone,
      email: SITE.email,
      address: { '@type': 'PostalAddress', ...SITE.address },
      areaServed: [
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'State', name: 'Tamil Nadu' },
        { '@type': 'Country', name: 'India' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        email: SITE.email,
        contactType: 'customer support',
        availableLanguage: ['English', 'Tamil'],
      },
      knowsAbout: [
        'Final year projects',
        'Journal publication',
        'Conference paper publication',
        'Hardware projects',
        'Machine learning',
        'Internet of Things',
      ],
      ...(SITE.socials.length > 0 && { sameAs: SITE.socials }),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
