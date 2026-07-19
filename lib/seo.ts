import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mentneo.com'

interface PageSEO {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

/**
 * Factory function to generate consistent Metadata for any page.
 * Use in every page.tsx as:
 *   export const metadata = generateMetadata({ title: '...', ... })
 */
export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/og-image.png',
  noIndex = false,
  publishedTime,
  modifiedTime,
  authors = ['Mentneo Research'],
  section,
  tags = [],
}: PageSEO): Metadata {
  const url = `${BASE_URL}${path}`
  const fullTitle = title.includes('Mentneo') ? title : `${title} | Mentneo`

  return {
    title,
    description,
    keywords: [
      'Mentneo', 'artificial intelligence', 'AI research', ...keywords,
    ],
    authors: authors.map(name => ({ name, url: BASE_URL })),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: section === 'blog' ? 'article' : 'website',
      url,
      title: fullTitle,
      description,
      siteName: 'Mentneo',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors.length > 0 && { authors }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@mentneo',
      creator: '@mentneo',
      title: fullTitle,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  }
}

/** Build a canonical URL for a given path */
export function canonicalUrl(path: string): string {
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/** Build an OG image URL (for dynamic OG images later) */
export function ogImageUrl(params: Record<string, string>): string {
  const search = new URLSearchParams(params).toString()
  return `${BASE_URL}/api/og?${search}`
}
