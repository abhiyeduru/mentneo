'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-sm" style={{
      background: '#050505',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large glow behind */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Top border glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ textAlign: 'center', padding: '3rem 0' }}
        >
          {/* Badge */}
          <div className="badge" style={{ marginBottom: '1.5rem' }}>
            <div className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }} />
            Now Available
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
            color: '#fff',
          }}>
            Start building with{' '}
            <span className="gradient-text-blue">Mentneo AI</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75em' }}>
              today. For free.
            </span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '1rem',
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            Free tier. No credit card required. Access our latest models,
            APIs, and developer tools — and scale when you&apos;re ready.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link href="/developers" className="btn-primary" id="cta-start-free" style={{ padding: '0.875rem 2.5rem' }}>
              <span>Get Started Free</span>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="#contact" className="btn-secondary" id="cta-talk-sales" style={{ padding: '0.875rem 2rem' }}>
              <span>Talk to Sales</span>
            </Link>
          </div>

          {/* Proof bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '⚡', text: '< 1s avg. response time' },
              { icon: '🔒', text: 'SOC2 & GDPR compliant' },
              { icon: '🌐', text: '99.99% uptime SLA' },
              { icon: '🔑', text: 'Free API key, no credit card' },
            ].map(item => (
              <div key={item.text} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem',
              }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom border glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), rgba(59,130,246,0.2), transparent)',
      }} />
    </section>
  )
}
