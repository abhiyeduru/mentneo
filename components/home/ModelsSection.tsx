'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const models = [
  {
    name: 'Mentneo-Ultra',
    tag: 'Flagship',
    size: '700B',
    speed: 'Standard',
    context: '256K tokens',
    languages: '120+',
    benchmark: '94.2',
    color: '#3b82f6',
    features: ['Reasoning', 'Code', 'Math', 'Vision', 'Agents'],
    api: true,
    open: false,
  },
  {
    name: 'Mentneo-Pro',
    tag: 'Balanced',
    size: '70B',
    speed: 'Fast',
    context: '128K tokens',
    languages: '80+',
    benchmark: '88.7',
    color: '#8b5cf6',
    features: ['Reasoning', 'Code', 'Vision', 'RAG'],
    api: true,
    open: false,
  },
  {
    name: 'Mentneo-Flash',
    tag: 'Speed-optimized',
    size: '7B',
    speed: 'Ultra-fast',
    context: '64K tokens',
    languages: '40+',
    benchmark: '79.3',
    color: '#06b6d4',
    features: ['Instruction', 'Chat', 'Summarization'],
    api: true,
    open: true,
  },
  {
    name: 'Mentneo-Vision',
    tag: 'Multimodal',
    size: '34B',
    speed: 'Fast',
    context: '32K tokens + Images',
    languages: '60+',
    benchmark: '85.1',
    color: '#ec4899',
    features: ['Vision', 'OCR', 'Captioning', 'VQA'],
    api: true,
    open: false,
  },
]

export default function ModelsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="models" ref={ref} className="section" style={{ background: '#050505', position: 'relative' }}>
      <div className="grid-pattern-sm" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>AI Models</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            Models Built for <span className="gradient-text-blue">Every Scale</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            From edge inference to frontier reasoning — Mentneo's model suite covers every latency and capability requirement.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${model.color}30`
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 40px ${model.color}12`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Color top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${model.color}, transparent)`,
              }} />

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                    {model.name}
                  </div>
                  <div style={{
                    display: 'inline-block',
                    fontSize: '0.65rem', padding: '0.15rem 0.6rem',
                    borderRadius: '9999px',
                    background: `${model.color}18`,
                    color: model.color,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: `1px solid ${model.color}25`,
                  }}>
                    {model.tag}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: model.color, letterSpacing: '-0.03em' }}>
                    {model.benchmark}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>MMLU Score</div>
                </div>
              </div>

              {/* Stats grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginBottom: '1.25rem',
                padding: '1rem',
                background: 'rgba(255,255,255,0.025)',
                borderRadius: '0.625rem',
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                {[
                  { label: 'Size',       value: model.size },
                  { label: 'Speed',      value: model.speed },
                  { label: 'Context',    value: model.context },
                  { label: 'Languages', value: model.languages },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                {model.features.map(f => (
                  <span key={f} className="tag">{f}</span>
                ))}
              </div>

              {/* Badges */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {model.api && (
                  <span style={{
                    fontSize: '0.65rem', padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    background: 'rgba(59,130,246,0.12)',
                    color: '#60a5fa',
                    border: '1px solid rgba(59,130,246,0.2)',
                    fontWeight: 500,
                  }}>API Access</span>
                )}
                {model.open && (
                  <span style={{
                    fontSize: '0.65rem', padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    background: 'rgba(16,185,129,0.12)',
                    color: '#34d399',
                    border: '1px solid rgba(16,185,129,0.2)',
                    fontWeight: 500,
                  }}>Open Weights</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <a href="/developers" className="btn-secondary" style={{ display: 'inline-flex' }}>
            <span>View All Models & Benchmarks</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
