'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 200,  suffix: '+', label: 'Research Publications', description: 'Peer-reviewed papers & technical reports' },
  { value: 50,   suffix: '+', label: 'AI Models Released',    description: 'Open & enterprise model variants' },
  { value: 500,  suffix: '+', label: 'Enterprise Clients',    description: 'Fortune 500 & global organizations' },
  { value: 40,   suffix: '+', label: 'Countries Served',      description: 'Global deployment footprint' },
  { value: 1000, suffix: '+', label: 'Researchers & Engineers', description: 'World-class team members' },
  { value: 99,   suffix: '%', label: 'Uptime SLA',            description: 'Enterprise reliability guarantee' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { start = target; clearInterval(timer) }
      setCount(Math.round(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="section-sm" style={{ background: '#050505', position: 'relative' }}>
      {/* Top separator */}
      <div className="separator" />

      <div className="container-xl" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>By the Numbers</div>
          <h2 className="section-headline" style={{ marginBottom: '0.75rem' }}>
            Impact at <span className="gradient-text-blue">Global Scale</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            Mentneo operates across six continents, powering the next era of artificial intelligence.
          </p>
        </motion.div>

        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: 'clamp(1.25rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem)',
                background: '#0b0b0b',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                transition: 'background 200ms ease',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#111')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0b0b0b')}
            >
              <div className="stat-number">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.78rem, 2vw, 0.875rem)' }}>
                {stat.label}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 'clamp(0.7rem, 1.5vw, 0.75rem)', lineHeight: 1.5 }}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="separator" />
    </section>
  )
}
