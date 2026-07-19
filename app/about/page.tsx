import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { faqSchema, webPageSchema } from '@/lib/schema'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import FAQBlock from '@/components/seo/FAQBlock'

export const metadata: Metadata = genMeta({
  title: 'About Mentneo — Our Mission, Team & Story',
  description:
    'Learn about Mentneo — our mission to build safe and beneficial AI, our research philosophy, leadership team, and company timeline since founding in 2021.',
  path: '/about',
  keywords: ['about Mentneo', 'Mentneo mission', 'Mentneo team', 'AI research company', 'Mentneo history', 'Mentneo leadership'],
})

const values = [
  { icon: '🔬', title: 'Research First', description: 'Every product we ship is grounded in rigorous scientific research. We publish openly and contribute to the global AI community.' },
  { icon: '🛡️', title: 'Safety by Design', description: 'AI safety is not a checkbox — it is embedded in every model, product, and decision we make as a company.' },
  { icon: '🌍', title: 'Global Impact', description: 'We build for the world — accessible, multilingual, and designed to empower developers, enterprises, and institutions globally.' },
  { icon: '🤝', title: 'Open Collaboration', description: 'We believe AI advances fastest when researchers collaborate. We open-source models, share datasets, and partner with academia.' },
  { icon: '⚡', title: 'Engineering Excellence', description: 'We obsess over performance, reliability, and developer experience. Our APIs are crafted to a standard that engineers love.' },
  { icon: '🎯', title: 'Mission Clarity', description: 'Our mission is singular: develop AI that is intelligent, safe, and genuinely useful for humanity. Everything else serves this goal.' },
]

const milestones = [
  { year: '2021', title: 'Founded', description: 'Mentneo founded with a team of 12 researchers and engineers focused on LLM pre-training.' },
  { year: '2022', title: 'First Models', description: 'Released Mentneo-Base-7B, our first open-weight model. 50,000 downloads in the first month.' },
  { year: '2023', title: 'Enterprise Launch', description: 'Launched enterprise API, onboarded first 100 enterprise customers, raised Series A funding.' },
  { year: '2024', title: 'Mentneo Pro', description: 'Released Mentneo-Pro with reasoning capabilities. 500+ enterprise clients. Opened research lab in Singapore.' },
  { year: '2025', title: 'Global Expansion', description: 'Launched Mentneo Agents, expanded to 40 countries, announced partnerships with leading cloud providers.' },
  { year: '2026', title: 'Today', description: '1,000+ researchers and engineers. 200+ published papers. Building the future of AI — one breakthrough at a time.' },
]

const faqs = [
  { question: 'When was Mentneo founded?', answer: 'Mentneo was founded in 2021 by a team of AI researchers and engineers with backgrounds at leading AI labs and technology companies. The company was incorporated with a mission to build safe, beneficial, and genuinely useful AI systems.' },
  { question: 'Where is Mentneo headquartered?', answer: 'Mentneo is headquartered in Hyderabad, India, with research labs in Singapore and remote teams across 15 countries. We are a globally distributed company with a strong presence in Asia, North America, and Europe.' },
  { question: 'What is Mentneo\'s mission?', answer: 'Mentneo\'s mission is to develop artificial intelligence that is intelligent, safe, and genuinely useful for humanity. We believe AI should empower individuals, enable businesses, and improve lives — not just automate tasks.' },
  { question: 'Is Mentneo for-profit or a non-profit?', answer: 'Mentneo is a for-profit company with a long-term safety commitment embedded in its governance structure. Revenue from our products and APIs funds our research, and we invest significantly in AI safety research alongside commercial development.' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webPageSchema({ title: 'About Mentneo | AI Research & Technology', description: 'Mentneo\'s mission, team, and story.', url: '/about' }),
            faqSchema(faqs),
          ]),
        }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            <BreadcrumbNav items={[{ name: 'About', url: '/about' }]} />
            <h1 className="section-headline" style={{ maxWidth: '720px', marginBottom: '1.25rem' }}>
              Building AI that is{' '}
              <span className="gradient-text-blue">Intelligent, Safe & Useful</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.8, maxWidth: '640px' }}>
              Mentneo is an AI Research & Technology company founded in 2021. We conduct frontier AI research and build production-ready AI products that power thousands of businesses and developers worldwide.
            </p>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-labelledby="values-heading">
          <div className="container-xl">
            <h2 id="values-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2rem', color: '#fff' }}>Our Values</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
              {values.map(v => (
                <div key={v.title} style={{ padding: '1.5rem', background: 'rgba(17,17,17,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.75rem', lineHeight: 1 }} aria-hidden="true">{v.icon}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-labelledby="history-heading">
          <div className="container-xl">
            <h2 id="history-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2rem', color: '#fff' }}>Our Journey</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
              {milestones.map((m, i) => (
                <div key={m.year} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px' }}>
                    <div style={{ padding: '0.4rem 0.75rem', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, color: '#60a5fa', whiteSpace: 'nowrap' }}>{m.year}</div>
                    {i < milestones.length - 1 && <div style={{ width: '1px', flex: 1, background: 'linear-gradient(to bottom, rgba(59,130,246,0.3), rgba(139,92,246,0.1))', marginTop: '0.5rem', minHeight: '40px' }} />}
                  </div>
                  <div style={{ paddingBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{m.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl" style={{ maxWidth: '800px' }}>
            <FAQBlock faqs={faqs} title="About Mentneo — Common Questions" />
          </div>
        </section>
      </main>
    </>
  )
}
