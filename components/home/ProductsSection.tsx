'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const products = [
  { name: 'Mentneo LLM',               icon: '🧠', tag: 'Foundation Model',  color: '#3b82f6', desc: 'Our flagship large language model — reasoning, code, instruction following.', badge: 'New' },
  { name: 'Mentneo Chat',              icon: '💬', tag: 'Conversational AI',  color: '#8b5cf6', desc: 'AI assistant built for productivity, research, and enterprise workflows.' },
  { name: 'Mentneo Voice',             icon: '🎙️', tag: 'Speech & Voice',     color: '#10b981', desc: 'Real-time voice AI for calls, meetings, and voice-enabled applications.' },
  { name: 'Mentneo Search',            icon: '🔍', tag: 'AI Search',          color: '#f59e0b', desc: 'Intelligent document and web search powered by RAG and embeddings.' },
  { name: 'Mentneo Studio',            icon: '🎨', tag: 'Creative AI',        color: '#ec4899', desc: 'Generate images, videos, and creative content with multimodal models.' },
  { name: 'Mentneo Agents',            icon: '🤖', tag: 'Autonomous AI',      color: '#06b6d4', desc: 'Deploy autonomous AI agents that reason, plan, and execute complex tasks.' },
  { name: 'Mentneo Cloud',             icon: '☁️', tag: 'Infrastructure',     color: '#a855f7', desc: 'Managed AI infrastructure with auto-scaling and global edge deployment.' },
  { name: 'Mentneo APIs',              icon: '⚡', tag: 'Developer Platform', color: '#3b82f6', desc: 'RESTful and streaming APIs for every Mentneo model and capability.' },
  { name: 'Mentneo Enterprise AI',     icon: '🏢', tag: 'Enterprise',         color: '#8b5cf6', desc: 'Full-stack AI platform with SSO, audit logs, compliance, and SLAs.' },
  { name: 'Mentneo Research Platform', icon: '🔬', tag: 'Research',           color: '#10b981', desc: 'Internal platform for ML experiments, evaluation, and dataset management.' },
  { name: 'Mentneo Vision',            icon: '👁️', tag: 'Computer Vision',    color: '#f59e0b', desc: 'State-of-the-art vision models for detection, OCR, and visual reasoning.' },
  { name: 'Mentneo Docs AI',           icon: '📄', tag: 'Document AI',        color: '#ec4899', desc: 'Extract, summarize, and query any document format with AI accuracy.' },
  { name: 'Mentneo Analytics',         icon: '📊', tag: 'AI Analytics',       color: '#06b6d4', desc: 'Natural language analytics — query your data by asking questions.' },
  { name: 'Mentneo Education',         icon: '🎓', tag: 'EdTech',             color: '#a855f7', desc: 'AI-powered learning platform for courses, mentorship, and certification.' },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" ref={ref} className="section" style={{ background: '#050505', position: 'relative' }}>
      <div className="grid-pattern-sm" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div className="aurora-glow" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        top: '-100px', left: '-100px',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Product Suite</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            Every AI Capability,{' '}
            <span className="gradient-text-purple">One Platform</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            From foundation models to enterprise automation — Mentneo's product suite covers the entire AI stack.
          </p>
        </motion.div>

        {/* Products grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '1.25rem',
        }}>
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div
                className="glass-card"
                style={{ padding: '1.75rem', height: '100%', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${product.color}35`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${product.color}10`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    borderRadius: '10px',
                    background: `linear-gradient(135deg, ${product.color}25, ${product.color}10)`,
                    border: `1px solid ${product.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem',
                  }}>
                    {product.icon}
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    {product.badge && (
                      <span style={{
                        fontSize: '0.6rem', padding: '0.15rem 0.5rem',
                        borderRadius: '9999px',
                        background: `${product.color}20`,
                        color: product.color,
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        border: `1px solid ${product.color}30`,
                      }}>{product.badge}</span>
                    )}
                    <span className="tag">{product.tag}</span>
                  </div>
                </div>

                {/* Name */}
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  {product.name}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
                  {product.desc}
                </p>

                {/* Arrow */}
                <div style={{
                  position: 'absolute', bottom: '1.5rem', right: '1.5rem',
                  color: `${product.color}60`,
                  transition: 'color 200ms ease, transform 200ms ease',
                }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <a href="/products" className="btn-primary" style={{ display: 'inline-flex' }}>
            <span>Explore All Products</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
