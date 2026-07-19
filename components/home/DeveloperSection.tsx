'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const devFeatures = [
  {
    icon: '⚡',
    title: 'REST & Streaming APIs',
    desc: 'OpenAI-compatible REST endpoints with streaming support. Drop-in replacement for existing integrations.',
    code: `const response = await mentneo.chat({
  model: "mentneo-pro",
  messages: [{ role: "user", content: "Hello" }],
  stream: true,
})`,
  },
  {
    icon: '📦',
    title: 'SDKs for Every Language',
    desc: 'Official SDKs for Python, TypeScript, Java, Go, Rust, and more with first-class async support.',
    code: `from mentneo import Mentneo

client = Mentneo(api_key="...")
response = client.chat.complete(
    model="mentneo-pro",
    messages=[{"role": "user", "content": "Hello"}]
)`,
  },
  {
    icon: '🎮',
    title: 'Interactive Playground',
    desc: 'Experiment with models in real time. Test prompts, compare outputs, and tune parameters without writing code.',
    code: null,
  },
  {
    icon: '🗃️',
    title: 'Vector Database',
    desc: 'Built-in vector storage for semantic search and RAG. No third-party database required.',
    code: `await mentneo.vectors.upsert({
  collection: "docs",
  vectors: embeddings,
  metadata: { source: "file.pdf" }
})`,
  },
]

const tools = [
  { label: 'Python SDK',      icon: '🐍', href: '/developers' },
  { label: 'TypeScript SDK',  icon: '💙', href: '/developers' },
  { label: 'Playground',      icon: '🎮', href: '/developers' },
  { label: 'API Reference',   icon: '📚', href: '/developers' },
  { label: 'Fine-tuning',     icon: '🎯', href: '/developers' },
  { label: 'Embeddings',      icon: '🔢', href: '/developers' },
  { label: 'GitHub',          icon: '⭐', href: 'https://github.com' },
  { label: 'Discord',         icon: '💬', href: '#' },
]

export default function DeveloperSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="developers" ref={ref} className="section" style={{
      background: 'linear-gradient(180deg, #050505 0%, #070710 50%, #050505 100%)',
      position: 'relative',
    }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
      <div className="aurora-glow" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        bottom: '-100px', left: '-200px',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Developer Platform</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            Built for Developers,{' '}
            <span className="gradient-text-blue">Loved by Engineers</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Everything you need to integrate, build, and scale AI — with clean APIs, great docs, and a thriving community.
          </p>
        </motion.div>

        {/* Quick-access tools */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'center',
          marginBottom: '3.5rem',
        }}>
          {tools.map((tool, i) => (
            <motion.a
              key={tool.label}
              href={tool.href}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '9999px',
                color: 'rgba(255,255,255,0.65)',
                fontSize: '0.82rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
              }}
            >
              <span>{tool.icon}</span>
              <span>{tool.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Features grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {devFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card"
              style={{ padding: '1.75rem' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: '1rem' }}>
                {feature.desc}
              </p>

              {feature.code && (
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '0.5rem',
                  padding: '0.875rem',
                  overflow: 'auto',
                }}>
                  <pre style={{
                    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.65,
                    margin: 0,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}>
                    <code style={{ color: '#60a5fa' }}>{feature.code}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="/developers" className="btn-primary" style={{ display: 'inline-flex' }}>
            <span>Start Building</span>
          </a>
          <a href="/developers" className="btn-secondary" style={{ display: 'inline-flex' }}>
            <span>Read the Docs</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
