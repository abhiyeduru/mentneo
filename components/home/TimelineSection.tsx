'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  { year: '2021', label: 'Founded',          desc: 'Mentneo founded with a team of 8 AI researchers and a $2M seed round.', color: '#3b82f6' },
  { year: '2022', label: 'First Model',       desc: 'Released Mentneo-v1, a 7B parameter language model achieving SOTA on 3 benchmarks.', color: '#8b5cf6' },
  { year: '2023', label: 'Series A',          desc: '$40M Series A. Expanded research team to 120. Launched Mentneo Enterprise.', color: '#06b6d4' },
  { year: '2023', label: 'Mentneo Chat',      desc: 'Launched public chat interface — 1M users in 90 days.', color: '#10b981' },
  { year: '2024', label: 'Agentic Platform',  desc: 'Released Mentneo Agents — first production autonomous AI agent framework.', color: '#f59e0b' },
  { year: '2024', label: 'Series B',          desc: '$150M Series B. 500 enterprise clients. Offices in 8 countries.', color: '#ec4899' },
  { year: '2025', label: 'Mentneo Ultra',     desc: 'Frontier 700B parameter model — top-5 on all major LLM benchmarks globally.', color: '#a855f7' },
  { year: '2025', label: 'Global Scale',      desc: '1,000+ team members. 40+ countries. AI infrastructure on 6 continents.', color: '#3b82f6' },
  { year: '2026', label: 'The Future →',      desc: 'Building toward AGI-safe systems that empower every person on Earth.', color: '#8b5cf6', future: true },
]

export default function TimelineSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="timeline" ref={ref} className="section" style={{
      background: 'linear-gradient(180deg, #050505 0%, #07070f 50%, #050505 100%)',
      position: 'relative',
    }}>
      <div className="grid-pattern-sm" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Our Journey</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            From Research Lab to{' '}
            <span className="gradient-text-blue">Global AI Company</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)',
            transform: 'translateX(-50%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={`${m.year}-${m.label}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    position: 'relative',
                  }}
                >
                  {/* Center dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '10px', height: '10px',
                    borderRadius: '50%',
                    background: m.color,
                    boxShadow: `0 0 12px ${m.color}80`,
                    zIndex: 2,
                    border: '2px solid #050505',
                  }} />

                  {/* Card */}
                  <div
                    className="glass-card"
                    style={{
                      width: 'calc(50% - 2rem)',
                      padding: '1.25rem 1.5rem',
                      borderColor: m.future ? `${m.color}30` : 'rgba(255,255,255,0.07)',
                      opacity: m.future ? 0.7 : 1,
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{
                        fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: `${m.color}18`,
                        color: m.color,
                        border: `1px solid ${m.color}25`,
                        letterSpacing: '0.04em',
                      }}>
                        {m.year}
                      </span>
                      <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#fff' }}>
                        {m.label}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-card { width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
