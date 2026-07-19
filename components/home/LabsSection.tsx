'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const labProjects = [
  {
    icon: '🤖',
    title: 'Project Atlas',
    status: 'Active',
    desc: 'A fully autonomous AI research assistant that reads papers, forms hypotheses, and designs experiments.',
    tags: ['Agents', 'Research AI'],
    color: '#3b82f6',
  },
  {
    icon: '🦾',
    title: 'Mentneo Robotics',
    status: 'R&D',
    desc: 'Embodied AI research — teaching physical robots to reason, navigate, and manipulate using LLM-based world models.',
    tags: ['Robotics', 'Embodied AI'],
    color: '#8b5cf6',
  },
  {
    icon: '🌐',
    title: 'MindWeb',
    status: 'Prototype',
    desc: 'An AI-native browser that understands the web semantically — searching, summarizing, and acting on your behalf.',
    tags: ['Agents', 'Browser'],
    color: '#06b6d4',
  },
  {
    icon: '🎙️',
    title: 'VoiceOS',
    status: 'Beta',
    desc: 'A voice-first operating system paradigm — control your entire digital workspace through natural language.',
    tags: ['Voice', 'Interface'],
    color: '#10b981',
  },
  {
    icon: '🧬',
    title: 'BioMentneo',
    status: 'Research',
    desc: 'AI for biology — protein folding, drug interaction prediction, and genomic analysis at scale.',
    tags: ['Biology', 'Science'],
    color: '#f59e0b',
  },
  {
    icon: '🌌',
    title: 'Project Horizon',
    status: 'Classified',
    desc: 'Our long-horizon research into the fundamental nature of intelligence, reasoning, and safe AGI.',
    tags: ['AGI', 'Alignment'],
    color: '#a855f7',
  },
]

const statusColors: Record<string, string> = {
  Active: '#10b981',
  Beta: '#3b82f6',
  Prototype: '#f59e0b',
  'R&D': '#8b5cf6',
  Research: '#06b6d4',
  Classified: '#ef4444',
}

export default function LabsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="labs" ref={ref} className="section" style={{ background: '#050505', position: 'relative' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div className="aurora-glow" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
        top: '0', right: '-100px',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Mentneo Labs</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            Experiments at the{' '}
            <span className="gradient-text-purple">Edge of Possible</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Our Labs division explores wild ideas, dangerous hypotheses, and technologies that won't ship for years — but should.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {labProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card"
              style={{ padding: '1.75rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${project.color}30`
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Background glow on hover */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '120px', height: '120px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${project.color}08, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.75rem' }}>{project.icon}</div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.65rem', padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  background: `${statusColors[project.status]}15`,
                  color: statusColors[project.status],
                  border: `1px solid ${statusColors[project.status]}25`,
                  fontWeight: 600,
                }}>
                  <div style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    background: statusColors[project.status],
                  }} />
                  {project.status}
                </div>
              </div>

              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: '1rem' }}>
                {project.desc}
              </p>

              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <a href="/labs" className="btn-secondary" style={{ display: 'inline-flex' }}>
            <span>Visit Mentneo Labs</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
