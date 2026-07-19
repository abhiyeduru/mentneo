import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mentneo.com'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
    { media: '(prefers-color-scheme: light)', color: '#050505' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Mentneo — AI Research & Technology Company',
    template: '%s | Mentneo',
  },
  description:
    'Mentneo is a leading Artificial Intelligence Research & Development company building frontier AI systems, large language models, AI agents, enterprise automation, and future technologies.',
  keywords: [
    'Mentneo', 'AI research company', 'artificial intelligence', 'LLM',
    'large language models', 'AI agents', 'enterprise AI', 'machine learning',
    'deep learning', 'AI company India', 'generative AI', 'AI safety',
    'RAG systems', 'multimodal AI', 'agentic AI', 'AI automation',
    'AI research lab', 'foundation models',
  ],
  authors: [{ name: 'Mentneo Research', url: BASE_URL }],
  creator: 'Mentneo',
  publisher: 'Mentneo',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Mentneo',
    title: 'Mentneo — Building the Future of Artificial Intelligence',
    description:
      'We research, build, and deploy intelligent systems that empower businesses, developers, and institutions worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mentneo — AI Research & Technology',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@mentneo',
    creator: '@mentneo',
    title: 'Mentneo — AI Research & Technology Company',
    description:
      'Frontier AI: LLMs, agents, enterprise automation, and future intelligence platforms.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },

  manifest: '/manifest.json',

  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
    },
  },

  category: 'technology',
  classification: 'Artificial Intelligence Research',

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? '',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {GA_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          </>
        )}

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${BASE_URL}/#organization`,
              name: 'Mentneo',
              alternateName: ['Mentneo AI', 'Mentneo Research'],
              url: BASE_URL,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/icons/icon-512x512.png`,
                width: 512,
                height: 512,
              },
              description:
                'Mentneo is an Artificial Intelligence Research & Technology company building frontier AI systems, large language models, AI agents, and enterprise automation solutions.',
              foundingDate: '2021',
              numberOfEmployees: { '@type': 'QuantitativeValue', value: 1000 },
              knowsAbout: [
                'Artificial Intelligence', 'Machine Learning', 'Large Language Models',
                'Natural Language Processing', 'Computer Vision', 'AI Safety',
                'Enterprise AI', 'Generative AI', 'Agentic AI',
              ],
              sameAs: [
                'https://twitter.com/mentneo',
                'https://linkedin.com/company/mentneo',
                'https://github.com/mentneo',
                'https://huggingface.co/mentneo',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer support',
                  email: 'support@mentneo.com',
                  availableLanguage: 'English',
                },
                {
                  '@type': 'ContactPoint',
                  contactType: 'sales',
                  email: 'enterprise@mentneo.com',
                  availableLanguage: 'English',
                },
              ],
            }),
          }}
        />

        {/* WebSite JSON-LD with sitelinks search box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${BASE_URL}/#website`,
              url: BASE_URL,
              name: 'Mentneo',
              description: 'AI Research & Technology Company',
              publisher: { '@id': `${BASE_URL}/#organization` },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>

      <body style={{ background: '#050505', color: '#ffffff' }}>
        {/* Skip to main content — WCAG 2.4.1 */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* ARIA live region for dynamic announcements */}
        <div
          id="aria-live-region"
          aria-live="polite"
          aria-atomic="true"
          style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}
        />

        {children}

        {/* Google Analytics — defer load */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
