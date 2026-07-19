'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const principles = [
  {
    icon: '🔬',
    title: 'Frontier Research',
    description: 'We push the boundaries of what AI can do — from fundamental research to applied systems, operating at the frontier of intelligence.',
  },
  {
    icon: '🤝',
    title: 'Responsible AI',
    description: 'Safety, alignment, and transparency are not afterthoughts — they are core to every model, system, and deployment we create.',
  },
  {
    icon: '⚡',
    title: 'Applied Intelligence',
    description: 'We bridge the gap between research and real-world impact — turning breakthrough models into production-ready enterprise solutions.',
  },
  {
    icon: '🌐',
    title: 'Open Innovation',
    description: 'We believe the future of AI must be built collaboratively. We publish research, release models, and engage with the global community.',
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section" style={{ background: '#050505', position: 'relative' }}>
      {/* Grid overlay */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      {/* Aurora */}
      <div className="aurora-glow" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        top: '0', right: '-100px',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Two-column: text + visual */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
          marginBottom: '6rem',
        }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge" style={{ marginBottom: '1.5rem' }}>About Mentneo</div>
            <h2 className="section-headline" style={{ marginBottom: '1.5rem' }}>
              We exist to build{' '}
              <span className="gradient-text-blue">intelligence</span>{' '}
              that matters
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.975rem' }}>
              Mentneo is an Artificial Intelligence Research & Development company founded with a singular mission:
              to advance AI in ways that are safe, scalable, and genuinely useful to humanity.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '2rem' }}>
              Our team of researchers, engineers, and scientists works across the full AI stack — from foundational
              large language models and reasoning systems to enterprise automation, education technology, and autonomous agents.
              We believe the next era of intelligence will be defined by those who invest in both the science and the responsibility of AI.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#research" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.625rem 1.5rem' }}>
                <span>Our Research</span>
              </a>
              <a href="/careers" className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.625rem 1.5rem' }}>
                <span>Join Us</span>
              </a>
            </div>
          </motion.div>

          {/* Visual: orbiting logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '380px' }}
          >
            {/* Outer ring */}
            <div className="orbit" style={{
              position: 'absolute',
              width: '320px', height: '320px',
              borderRadius: '50%',
              border: '1px solid rgba(59,130,246,0.15)',
            }}>
              <div style={{
                position: 'absolute',
                top: '10px', left: '50%',
                width: '8px', height: '8px',
                borderRadius: '50%',
                background: '#3b82f6',
                boxShadow: '0 0 10px #3b82f6',
                transform: 'translateX(-50%)',
              }} />
            </div>

            {/* Middle ring */}
            <div className="orbit-reverse" style={{
              position: 'absolute',
              width: '220px', height: '220px',
              borderRadius: '50%',
              border: '1px solid rgba(139,92,246,0.2)',
            }}>
              <div style={{
                position: 'absolute',
                top: '6px', left: '50%',
                width: '6px', height: '6px',
                borderRadius: '50%',
                background: '#8b5cf6',
                boxShadow: '0 0 8px #8b5cf6',
                transform: 'translateX(-50%)',
              }} />
            </div>

            {/* Inner ring */}
            <div className="orbit" style={{
              position: 'absolute',
              width: '140px', height: '140px',
              borderRadius: '50%',
              border: '1px solid rgba(6,182,212,0.2)',
              animationDuration: '8s',
            }}>
              <div style={{
                position: 'absolute',
                top: '4px', left: '50%',
                width: '5px', height: '5px',
                borderRadius: '50%',
                background: '#06b6d4',
                boxShadow: '0 0 6px #06b6d4',
                transform: 'translateX(-50%)',
              }} />
            </div>

            {/* Center logo */}
            <div style={{
              width: '80px', height: '80px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '1.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 60px rgba(59,130,246,0.3), 0 0 120px rgba(139,92,246,0.15)',
              position: 'relative', zIndex: 2,
            }}>
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                <path d="M6 18L18 6L30 18L18 30L6 18Z" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M12 18L18 12L24 18L18 24L12 18Z" fill="white" opacity="0.9"/>
                <circle cx="18" cy="18" r="3" fill="white"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Principles grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}>
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass-card"
              style={{ padding: '1.75rem' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.875rem' }}>{p.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
