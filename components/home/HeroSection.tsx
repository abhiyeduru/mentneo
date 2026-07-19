'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NeuralBackground from '@/components/ui/NeuralBackground'

const words = ['Intelligence', 'Automation', 'Reasoning', 'Agents', 'Innovation']

export default function HeroSection() {
  const wordRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!wordRef.current) return
    let idx = 0
    const el = wordRef.current

    const cycle = () => {
      // Fade out
      el.style.opacity = '0'
      el.style.transform = 'translateY(8px)'

      setTimeout(() => {
        idx = (idx + 1) % words.length
        el.textContent = words[idx]
        el.style.transition = 'opacity 500ms ease, transform 500ms ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 400)
    }

    el.style.transition = 'opacity 500ms ease, transform 500ms ease'
    const timer = setInterval(cycle, 2500)
    return () => clearInterval(timer)
  }, [])

  const fadeUpVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: (delay: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const, delay }
    }),
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#050505',
      }}
    >
      {/* Neural network canvas background */}
      <NeuralBackground />

      {/* Animated grid */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Aurora orbs */}
      <div className="aurora-glow" style={{
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        top: '-200px', left: '-150px',
      }} />
      <div className="aurora-glow" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        top: '30%', right: '-200px',
        animationDelay: '3s',
      }} />
      <div className="aurora-glow" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        bottom: '10%', left: '40%',
        animationDelay: '5s',
      }} />

      {/* Radial vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.8) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="container-xl" style={{ position: 'relative', zIndex: 2, paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '860px' }}>
          {/* Badge */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            style={{ marginBottom: '2rem' }}
          >
            <div className="badge" style={{ display: 'inline-flex' }}>
              <div className="pulse-dot" style={{
                width: '6px', height: '6px',
                borderRadius: '50%', background: '#3b82f6',
              }} />
              AI Research & Technology Company
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-headline"
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            style={{ marginBottom: '1.25rem' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.95)' }}>Building the Future of</span>
            <br />
            <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.25em', flexWrap: 'wrap' }}>
              <span className="gradient-text-blue">Artificial</span>
              <span
                ref={wordRef}
                style={{
                  display: 'inline-block',
                  minWidth: 'min(14ch, 100%)',
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 1,
                  transition: 'opacity 500ms ease, transform 500ms ease',
                }}
              >
                Intelligence
              </span>
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              maxWidth: '640px',
              marginBottom: '2.5rem',
              fontWeight: 400,
            }}
          >
            We research, build, and deploy intelligent systems that empower businesses,
            developers, institutions, and the next generation of innovation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.65}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem', alignItems: 'center' }}
          >
            <Link href="#research" className="btn-primary" id="hero-explore-research" style={{ flex: '0 0 auto' }}>
              <span>Explore Research</span>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="#products" className="btn-secondary" id="hero-view-products" style={{ flex: '0 0 auto' }}>
              <span>View Products</span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, auto)',
              gap: '1.25rem 2rem',
            }}
            className="hero-trust-grid"
          >
            {[
              { label: 'Research Papers', value: '200+' },
              { label: 'AI Models',       value: '50+' },
              { label: 'Enterprise Clients', value: '500+' },
              { label: 'Countries',       value: '40+' },
            ].map(stat => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: 0 }}>
                <span style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.72rem)', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
          <style>{`
            @media (max-width: 480px) {
              .hero-trust-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
            }
          `}</style>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div style={{
            width: '1px', height: '48px',
            background: 'linear-gradient(to bottom, rgba(59,130,246,0.6), transparent)',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }} />
        </motion.div>
      </div>
    </section>
  )
}
