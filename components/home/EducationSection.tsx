'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const programs = [
  { icon: '📚', title: 'AI Foundations',        type: 'Course',       duration: '8 weeks',  level: 'Beginner',      color: '#3b82f6' },
  { icon: '🧠', title: 'LLM Engineering',        type: 'Bootcamp',     duration: '12 weeks', level: 'Intermediate',  color: '#8b5cf6' },
  { icon: '🤖', title: 'Agentic AI Systems',     type: 'Course',       duration: '6 weeks',  level: 'Advanced',      color: '#06b6d4' },
  { icon: '🏆', title: 'AI Engineer Cert.',      type: 'Certification',duration: '16 weeks', level: 'Professional',  color: '#f59e0b' },
  { icon: '🔬', title: 'Research Fellowship',    type: 'Fellowship',   duration: '6 months', level: 'PhD / PostDoc', color: '#10b981' },
  { icon: '💻', title: 'AI Hackathon',           type: 'Hackathon',    duration: '48 hours', level: 'All Levels',    color: '#ec4899' },
  { icon: '🎯', title: 'Industry Mentorship',    type: 'Mentorship',   duration: '3 months', level: 'All Levels',    color: '#a855f7' },
  { icon: '🌐', title: 'Global AI Internship',   type: 'Internship',   duration: '3-6 months', level: 'Students',   color: '#3b82f6' },
]

const levelColors: Record<string, string> = {
  'Beginner': '#10b981',
  'Intermediate': '#3b82f6',
  'Advanced': '#8b5cf6',
  'Professional': '#f59e0b',
  'PhD / PostDoc': '#ec4899',
  'All Levels': '#06b6d4',
  'Students': '#a855f7',
}

export default function EducationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} className="section" style={{
      background: 'linear-gradient(180deg, #050505 0%, #070a0f 50%, #050505 100%)',
      position: 'relative',
    }}>
      <div className="grid-pattern-sm" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
      <div className="aurora-glow" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        bottom: '-100px', right: '10%',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Education</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            Learn AI with the{' '}
            <span className="gradient-text-blue">People Who Build It</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            From beginner courses to research fellowships — Mentneo Education puts world-class AI knowledge in reach for everyone.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card"
              style={{ padding: '1.5rem', cursor: 'pointer' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${prog.color}30`
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{prog.icon}</span>
                <span style={{
                  fontSize: '0.62rem', padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  background: `${levelColors[prog.level] || prog.color}15`,
                  color: levelColors[prog.level] || prog.color,
                  border: `1px solid ${levelColors[prog.level] || prog.color}25`,
                  fontWeight: 600,
                }}>
                  {prog.level}
                </span>
              </div>

              <h3 style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                {prog.title}
              </h3>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="tag">{prog.type}</span>
                <span className="tag">⏱ {prog.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.07), rgba(139,92,246,0.07))',
            border: '1px solid rgba(59,130,246,0.12)',
            borderRadius: '1rem',
            padding: '2.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>🚀</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Start your AI journey today
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
            Free starter courses available. No experience required. Learn from world-class AI researchers.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/education" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.625rem 1.5rem' }}>
              <span>Start Learning Free</span>
            </a>
            <a href="/education" className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.625rem 1.5rem' }}>
              <span>View Curriculum</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
