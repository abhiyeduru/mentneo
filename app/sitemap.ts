import { MetadataRoute } from 'next'

const BASE_URL = 'https://mentneo.com'

const researchAreas = [
  'large-language-models', 'agentic-ai', 'rag-systems', 'reasoning-models',
  'multimodal-ai', 'computer-vision', 'speech-ai', 'voice-intelligence',
  'ai-safety', 'ai-infrastructure', 'embeddings', 'knowledge-graphs',
  'autonomous-systems', 'machine-learning', 'deep-learning',
  'reinforcement-learning', 'edge-ai', 'generative-ai', 'future-research',
]

const products = [
  'mentneo-llm', 'mentneo-chat', 'mentneo-voice', 'mentneo-search',
  'mentneo-studio', 'mentneo-agents', 'mentneo-cloud', 'mentneo-apis',
  'mentneo-enterprise-ai', 'mentneo-research-platform', 'mentneo-vision',
  'mentneo-docs-ai', 'mentneo-analytics', 'mentneo-education',
]

const industries = [
  'healthcare', 'education', 'finance', 'government', 'retail',
  'manufacturing', 'legal', 'real-estate', 'hr-talent', 'customer-support',
  'marketing', 'sales', 'logistics', 'banking', 'insurance',
]

const blogSlugs = [
  'future-of-ai-2026', 'building-production-llms', 'agentic-ai-explained',
  'enterprise-ai-adoption', 'multimodal-models-deep-dive',
  'ai-safety-research-mentneo',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/research`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/enterprise`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/developers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/developers/api`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/labs`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/education`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/security`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  // Research area pages
  const researchPages: MetadataRoute.Sitemap = researchAreas.map(area => ({
    url: `${BASE_URL}/research/${area}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Product pages
  const productPages: MetadataRoute.Sitemap = products.map(slug => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Enterprise industry pages
  const industryPages: MetadataRoute.Sitemap = industries.map(industry => ({
    url: `${BASE_URL}/enterprise/${industry}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...corePages,
    ...researchPages,
    ...productPages,
    ...industryPages,
    ...blogPages,
  ]
}
