'use client'

import { motion } from 'framer-motion'

const techLogos = [
  { label: 'NVIDIA',        icon: '⬛' },
  { label: 'AWS',           icon: '☁️' },
  { label: 'Google Cloud',  icon: '🔵' },
  { label: 'Microsoft',     icon: '🟦' },
  { label: 'Hugging Face',  icon: '🤗' },
  { label: 'PyTorch',       icon: '🔥' },
  { label: 'JAX',           icon: '⚡' },
  { label: 'CUDA',          icon: '🖥️' },
  { label: 'Kubernetes',    icon: '☸️' },
  { label: 'Terraform',     icon: '🏗️' },
  { label: 'Ray',           icon: '🌊' },
  { label: 'Triton',        icon: '🔺' },
]

// Duplicated for infinite loop
const all = [...techLogos, ...techLogos, ...techLogos]

export default function MarqueeSection() {
  return (
    <section style={{
      background: '#050505',
      padding: '2.5rem 0',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '10%',
        background: 'linear-gradient(to right, #050505, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '10%',
        background: 'linear-gradient(to left, #050505, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>
          Built with and trusted by the world&apos;s leading technology stack
        </span>
      </div>

      <div className="marquee-track" style={{
        display: 'flex',
        gap: '3rem',
        width: 'max-content',
      }}>
        {all.map((tech, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            <span style={{ fontSize: '1rem' }}>{tech.icon}</span>
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
