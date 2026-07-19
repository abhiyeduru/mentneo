import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { faqSchema, softwareApplicationSchema, webPageSchema } from '@/lib/schema'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import FAQBlock from '@/components/seo/FAQBlock'

export const metadata: Metadata = genMeta({
  title: 'AI Products — Mentneo Product Suite',
  description:
    'Explore the full Mentneo product suite: LLMs, conversational AI, voice, search, agents, cloud infrastructure, APIs, and enterprise AI — all in one platform.',
  path: '/products',
  keywords: ['Mentneo LLM', 'AI chat', 'voice AI', 'AI search', 'AI agents', 'enterprise AI platform', 'AI APIs', 'AI cloud'],
})

const products = [
  { slug: 'mentneo-llm', icon: '🧠', label: 'Foundation Model', title: 'Mentneo LLM', description: 'Our flagship foundation model — reasoning, coding, analysis, and instruction following at enterprise scale.', tags: ['NEW', 'Most Capable'], color: '#3b82f6', features: ['128K context window', 'Multilingual (50+ languages)', 'Function calling & tool use', 'JSON mode', 'Fine-tuning API'] },
  { slug: 'mentneo-chat', icon: '💬', label: 'Conversational AI', title: 'Mentneo Chat', description: 'AI assistant built for productivity, research, and enterprise workflows with memory and personalization.', tags: [], color: '#8b5cf6', features: ['Persistent memory', 'Web browsing', 'Code interpreter', 'Document upload', 'Team workspaces'] },
  { slug: 'mentneo-voice', icon: '🎙️', label: 'Speech & Voice', title: 'Mentneo Voice', description: 'Real-time voice AI for calls, meetings, and voice-enabled applications with sub-100ms latency.', tags: [], color: '#06b6d4', features: ['<100ms latency', 'Speaker diarization', '30+ languages', 'Custom wake words', 'Noise cancellation'] },
  { slug: 'mentneo-search', icon: '🔍', label: 'AI Search', title: 'Mentneo Search', description: 'Intelligent document and enterprise search powered by RAG, embeddings, and semantic understanding.', tags: [], color: '#10b981', features: ['Semantic + keyword hybrid', 'Source citations', 'Custom connectors', 'Access control', 'Analytics dashboard'] },
  { slug: 'mentneo-studio', icon: '🎨', label: 'Creative AI', title: 'Mentneo Studio', description: 'Generate images, videos, and creative content with multimodal models trained for enterprise use.', tags: [], color: '#ec4899', features: ['Image generation', 'Video synthesis', 'Style transfer', 'Brand guidelines', 'Batch processing'] },
  { slug: 'mentneo-agents', icon: '🤖', label: 'Autonomous AI', title: 'Mentneo Agents', description: 'Deploy autonomous AI agents that reason, plan, and execute complex multi-step tasks.', tags: ['Beta'], color: '#f59e0b', features: ['Multi-step planning', 'Tool use & web access', 'Code execution sandbox', 'Human-in-the-loop', 'Audit logs'] },
  { slug: 'mentneo-cloud', icon: '☁️', label: 'Infrastructure', title: 'Mentneo Cloud', description: 'Managed AI infrastructure with auto-scaling, global edge deployment, and 99.99% uptime SLA.', tags: [], color: '#64748b', features: ['Auto-scaling', 'Edge deployment (40+ regions)', '99.99% SLA', 'Private VPC', 'SOC2 certified'] },
  { slug: 'mentneo-apis', icon: '⚡', label: 'Developer Platform', title: 'Mentneo APIs', description: 'RESTful and streaming APIs for every Mentneo model — OpenAI-compatible for drop-in replacement.', tags: [], color: '#a855f7', features: ['OpenAI-compatible', 'Streaming support', 'Webhooks', 'SDK for 7 languages', '99.9% uptime'] },
  { slug: 'mentneo-enterprise-ai', icon: '🏢', label: 'Enterprise', title: 'Mentneo Enterprise AI', description: 'Full-stack AI platform with SSO, audit logs, compliance reporting, and dedicated support.', tags: [], color: '#0ea5e9', features: ['SSO (SAML/OIDC)', 'Audit logs', 'GDPR & SOC2', 'Dedicated SLA', 'Custom contracts'] },
  { slug: 'mentneo-research-platform', icon: '🔬', label: 'Research', title: 'Mentneo Research Platform', description: 'Internal platform for ML experiments, model evaluation, and dataset management — now available for teams.', tags: [], color: '#14b8a6', features: ['Experiment tracking', 'Model evaluation suite', 'Dataset versioning', 'Distributed training', 'Collaboration tools'] },
  { slug: 'mentneo-vision', icon: '👁️', label: 'Computer Vision', title: 'Mentneo Vision', description: 'State-of-the-art vision models for detection, OCR, visual reasoning, and multimodal understanding.', tags: [], color: '#f97316', features: ['Object detection', 'OCR & document parsing', 'Visual QA', 'Video understanding', 'Real-time inference'] },
  { slug: 'mentneo-docs-ai', icon: '📄', label: 'Document AI', title: 'Mentneo Docs AI', description: 'Extract, summarize, and query any document format with AI accuracy and structured output.', tags: [], color: '#84cc16', features: ['PDF, Word, Excel', 'Table extraction', 'Contract analysis', 'Multi-doc Q&A', 'Export to structured data'] },
  { slug: 'mentneo-analytics', icon: '📊', label: 'AI Analytics', title: 'Mentneo Analytics', description: 'Natural language analytics — query your data by asking questions in plain English.', tags: [], color: '#c084fc', features: ['SQL generation', 'Chart creation', 'Anomaly detection', 'Forecasting', 'Dashboard builder'] },
  { slug: 'mentneo-education', icon: '🎓', label: 'EdTech', title: 'Mentneo Education', description: 'AI-powered learning platform for courses, mentorship, certification, and AI literacy programs.', tags: [], color: '#fb923c', features: ['AI tutoring', 'Adaptive curriculum', 'Progress tracking', 'Live mentorship', 'Certifications'] },
]

const faqs = [
  { question: 'What products does Mentneo offer?', answer: 'Mentneo offers 14 AI products spanning foundation models (Mentneo LLM), conversational AI (Mentneo Chat), voice AI (Mentneo Voice), enterprise search (Mentneo Search), autonomous agents (Mentneo Agents), cloud infrastructure (Mentneo Cloud), developer APIs, and industry-specific enterprise solutions.' },
  { question: 'Is there a free tier?', answer: 'Yes. Mentneo offers a free tier with access to core API capabilities, including the Mentneo LLM and Chat. Free tier includes 10,000 tokens per day, Mentneo Chat access, and community support. No credit card required to get started.' },
  { question: 'Are Mentneo products OpenAI-compatible?', answer: 'Yes. Mentneo APIs are OpenAI-compatible, meaning you can replace your existing OpenAI integration with a single endpoint and API key change. This enables zero-migration deployment for teams currently using GPT-4 or similar models.' },
  { question: 'What enterprises use Mentneo products?', answer: 'Mentneo serves 500+ enterprise clients across healthcare, finance, government, retail, and manufacturing. Our products are used by Fortune 500 companies, government institutions, and fast-growing startups globally.' },
  { question: 'Does Mentneo offer custom model training?', answer: 'Yes. Mentneo provides fine-tuning APIs allowing enterprises to adapt our foundation models to proprietary data. We also offer custom model training engagements for organizations with specific requirements around performance, compliance, or data sovereignty.' },
]

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webPageSchema({ title: 'AI Products | Mentneo', description: 'Full Mentneo product suite.', url: '/products' }),
            faqSchema(faqs),
            ...products.slice(0, 4).map(p => softwareApplicationSchema({
              name: p.title,
              description: p.description,
              url: `/products/${p.slug}`,
              applicationCategory: 'BusinessApplication',
            })),
          ]),
        }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 3rem', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', top: '-50px', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            <BreadcrumbNav items={[{ name: 'Products', url: '/products' }]} />

            <div className="badge" style={{ marginBottom: '1.5rem' }}>Product Suite · 14 Products</div>

            <h1 className="section-headline" style={{ maxWidth: '700px', marginBottom: '1.25rem' }}>
              Every AI Capability,{' '}
              <span className="gradient-text-purple">One Platform</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '2rem' }}>
              From foundation models to enterprise automation — Mentneo&apos;s product suite covers the entire AI stack, unified under one API, one platform, one SLA.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/developers" className="btn-primary" id="products-get-api">
                <span>Get API Access</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/enterprise" className="btn-secondary" id="products-enterprise">Enterprise Solutions</Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section style={{ padding: '2rem 0 4rem' }} aria-labelledby="products-grid-heading">
          <div className="container-xl">
            <h2 id="products-grid-heading" className="sr-only">All Products</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '1rem',
            }}>
              {products.map(product => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  style={{
                    display: 'block',
                    padding: '1.5rem',
                    background: 'rgba(17,17,17,0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '0.875rem',
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.75rem', lineHeight: 1 }} aria-hidden="true">{product.icon}</span>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        {product.label}
                      </span>
                      {product.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.65rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    {product.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {product.description}
                  </p>

                  {/* Feature pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {product.features.slice(0, 3).map(f => (
                      <span key={f} style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem', borderRadius: '0.3rem', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {f}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span style={{ fontSize: '0.68rem', color: product.color }}>+{product.features.length - 3} more</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl" style={{ maxWidth: '800px' }}>
            <FAQBlock faqs={faqs} title="Product FAQ" />
          </div>
        </section>
      </main>
    </>
  )
}
