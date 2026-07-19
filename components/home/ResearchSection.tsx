'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const areas = [
  { icon: '🧠', label: 'Large Language Models',   color: '#3b82f6', description: 'Foundation models, instruction tuning, RLHF' },
  { icon: '🤖', label: 'Agentic AI',              color: '#8b5cf6', description: 'Autonomous reasoning and multi-step agents' },
  { icon: '🗄️', label: 'RAG Systems',             color: '#06b6d4', description: 'Retrieval-augmented generation pipelines' },
  { icon: '💡', label: 'Reasoning Models',         color: '#f59e0b', description: 'Chain-of-thought and symbolic reasoning' },
  { icon: '👁️', label: 'Multimodal AI',           color: '#ec4899', description: 'Vision-language and cross-modal learning' },
  { icon: '📷', label: 'Computer Vision',          color: '#10b981', description: 'Object detection, segmentation, generation' },
  { icon: '🎙️', label: 'Speech AI',               color: '#3b82f6', description: 'ASR, TTS, speaker diarization' },
  { icon: '🔊', label: 'Voice Intelligence',        color: '#8b5cf6', description: 'Real-time voice agents & conversational AI' },
  { icon: '🛡️', label: 'AI Safety',               color: '#ef4444', description: 'Alignment, interpretability, adversarial robustness' },
  { icon: '⚙️', label: 'AI Infrastructure',        color: '#06b6d4', description: 'Training clusters, inference optimization' },
  { icon: '🔢', label: 'Embeddings',               color: '#f59e0b', description: 'Semantic representations and dense retrieval' },
  { icon: '🕸️', label: 'Knowledge Graphs',         color: '#a855f7', description: 'Structured knowledge and entity reasoning' },
  { icon: '🚀', label: 'Autonomous Systems',        color: '#10b981', description: 'Self-improving and self-directing AI' },
  { icon: '📊', label: 'Machine Learning',          color: '#3b82f6', description: 'Classical ML, feature engineering, ensembles' },
  { icon: '🔬', label: 'Deep Learning',             color: '#8b5cf6', description: 'Neural architectures and optimization research' },
  { icon: '🎮', label: 'Reinforcement Learning',    color: '#f59e0b', description: 'RLHF, reward modeling, game environments' },
  { icon: '📱', label: 'Edge AI',                   color: '#06b6d4', description: 'On-device inference and model compression' },
  { icon: '🎨', label: 'Generative AI',             color: '#ec4899', description: 'Image, video, audio, and code generation' },
  { icon: '🌌', label: 'Future Research',            color: '#a855f7', description: 'AGI alignment, consciousness, and emergence' },
]

export default function ResearchSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="research" ref={ref} className="section" style={{
      background: 'linear-gradient(180deg, #050505 0%, #080812 50%, #050505 100%)',
      position: 'relative',
    }}>
      {/* Background decorations */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div className="aurora-glow" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        bottom: '-100px', right: '-100px',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Research Areas</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            Advancing the <span className="gradient-text-blue">Science of Intelligence</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Our research spans every dimension of artificial intelligence — from fundamental theory to applied systems.
          </p>
        </motion.div>

        {/* Research grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '1rem',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          {areas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{
                padding: '1.5rem',
                background: '#0b0b0b',
                cursor: 'pointer',
                transition: 'background 250ms ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#111'
                const glow = e.currentTarget.querySelector('.area-glow') as HTMLElement
                if (glow) glow.style.opacity = '1'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#0b0b0b'
                const glow = e.currentTarget.querySelector('.area-glow') as HTMLElement
                if (glow) glow.style.opacity = '0'
              }}
            >
              {/* Hover glow */}
              <div className="area-glow" style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at top left, ${area.color}0A, transparent 60%)`,
                opacity: 0,
                transition: 'opacity 300ms ease',
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <div style={{
                  width: '38px', height: '38px',
                  borderRadius: '8px',
                  background: `${area.color}15`,
                  border: `1px solid ${area.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}>
                  {area.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#fff', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>
                    {area.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                    {area.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <a href="/research" className="btn-secondary" style={{ display: 'inline-flex' }}>
            <span>View All Research</span>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
