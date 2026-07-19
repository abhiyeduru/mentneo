/**
 * Mentneo — JSON-LD Schema Generators
 * Covers: Organization, WebPage, Article, FAQ, Product, Service,
 *         Course, Person, BreadcrumbList, ScholarlyArticle, SoftwareApplication
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mentneo.com'

// ── Types ──────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ArticleData {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName: string
  authorUrl?: string
  category?: string
}

export interface ProductData {
  name: string
  description: string
  url: string
  image?: string
  applicationCategory?: string
  operatingSystem?: string
  offers?: {
    price?: string
    priceCurrency?: string
    availability?: string
  }
}

export interface PersonData {
  name: string
  jobTitle: string
  url?: string
  image?: string
  description?: string
  sameAs?: string[]
}

export interface CourseData {
  name: string
  description: string
  url: string
  provider?: string
  duration?: string
  level?: string
}

export interface ServiceData {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
  serviceType?: string
}

// ── Schema Generators ──────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Mentneo',
    url: BASE_URL,
    logo: `${BASE_URL}/icons/icon-512x512.png`,
    description: 'Mentneo is an AI Research & Technology company building frontier AI systems, LLMs, and intelligent products.',
    foundingDate: '2021',
    sameAs: [
      'https://twitter.com/mentneo',
      'https://linkedin.com/company/mentneo',
      'https://github.com/mentneo',
    ],
  }
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function articleSchema(data: ArticleData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    url: data.url.startsWith('http') ? data.url : `${BASE_URL}${data.url}`,
    image: data.image ?? `${BASE_URL}/og-image.png`,
    datePublished: data.datePublished,
    dateModified: data.dateModified ?? data.datePublished,
    author: {
      '@type': 'Person',
      name: data.authorName,
      url: data.authorUrl ?? BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mentneo',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icons/icon-512x512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url.startsWith('http') ? data.url : `${BASE_URL}${data.url}`,
    },
  }
}

export function softwareApplicationSchema(data: ProductData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: data.name,
    description: data.description,
    url: data.url.startsWith('http') ? data.url : `${BASE_URL}${data.url}`,
    image: data.image ?? `${BASE_URL}/og-image.png`,
    applicationCategory: data.applicationCategory ?? 'BusinessApplication',
    operatingSystem: data.operatingSystem ?? 'Web',
    offers: data.offers
      ? {
          '@type': 'Offer',
          price: data.offers.price ?? '0',
          priceCurrency: data.offers.priceCurrency ?? 'USD',
          availability: data.offers.availability ?? 'https://schema.org/InStock',
        }
      : undefined,
    author: { '@id': `${BASE_URL}/#organization` },
  }
}

export function serviceSchema(data: ServiceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    url: data.url.startsWith('http') ? data.url : `${BASE_URL}${data.url}`,
    provider: {
      '@type': 'Organization',
      name: data.provider ?? 'Mentneo',
      url: BASE_URL,
    },
    areaServed: data.areaServed ?? 'Worldwide',
    serviceType: data.serviceType ?? 'AI Services',
  }
}

export function personSchema(data: PersonData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.jobTitle,
    url: data.url ?? BASE_URL,
    image: data.image,
    description: data.description,
    worksFor: { '@id': `${BASE_URL}/#organization` },
    sameAs: data.sameAs ?? [],
  }
}

export function courseSchema(data: CourseData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: data.name,
    description: data.description,
    url: data.url.startsWith('http') ? data.url : `${BASE_URL}${data.url}`,
    provider: {
      '@type': 'Organization',
      name: data.provider ?? 'Mentneo',
      url: BASE_URL,
    },
    educationalLevel: data.level ?? 'Beginner to Advanced',
    timeRequired: data.duration,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
    },
  }
}

export function scholarlyArticleSchema(data: ArticleData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: data.title,
    description: data.description,
    url: data.url.startsWith('http') ? data.url : `${BASE_URL}${data.url}`,
    image: data.image ?? `${BASE_URL}/og-image.png`,
    datePublished: data.datePublished,
    dateModified: data.dateModified ?? data.datePublished,
    author: {
      '@type': 'Person',
      name: data.authorName,
      url: data.authorUrl ?? BASE_URL,
      affiliation: { '@id': `${BASE_URL}/#organization` },
    },
    publisher: { '@id': `${BASE_URL}/#organization` },
    about: data.category ?? 'Artificial Intelligence',
  }
}

export function webPageSchema({
  title, description, url, dateModified,
}: { title: string; description: string; url: string; dateModified?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url.startsWith('http') ? url : `${BASE_URL}${url}`,
    name: title,
    description,
    url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#organization` },
    dateModified: dateModified ?? new Date().toISOString(),
  }
}
