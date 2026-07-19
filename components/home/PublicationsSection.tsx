'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const papers = [
  {
    title: 'Scaling Reasoning in Large Language Models Through Chain-of-Thought Distillation',
    category: 'Research Paper',
    date: 'Jun 2025',
    authors: ['A. Reddy', 'K. Chen', 'M. Patel'],
    tags: ['LLMs', 'Reasoning', 'Distillation'],
    color: '#3b82f6',
    abstract: 'We present a novel method for distilling reasoning capabilities from frontier models into smaller, deployable LLMs with minimal performance degradation.',
  },
  {
    title: 'MentRAG: Retrieval-Augmented Generation with Dynamic Context Compression',
    category: 'Technical Report',
    date: 'May 2025',
    authors: ['S. Kumar', 'R. Walsh'],
    tags: ['RAG', 'Context', 'Compression'],
    color: '#8b5cf6',
    abstract: 'MentRAG introduces dynamic context compression to reduce token consumption by 62% while maintaining retrieval precision above 95%.',
  },
  {
    title: 'Agentic AI Safety: A Framework for Evaluating Autonomous Decision-Making',
    category: 'Whitepaper',
    date: 'Apr 2025',
    authors: ['L. Zhang', 'O. Mensah', 'A. Patel'],
    tags: ['AI Safety', 'Agents', 'Evaluation'],
    color: '#ef4444',
    abstract: 'We propose a comprehensive safety evaluation framework for autonomous AI agents operating in high-stakes environments.',
  },
  {
    title: 'Multimodal Alignment: Bridging Vision and Language at Scale',
    category: 'Research Paper',
    date: 'Mar 2025',
    authors: ['Y. Kim', 'F. Ahmed'],
    tags: ['Multimodal', 'Vision', 'Alignment'],
    color: '#ec4899',
    abstract: 'This work presents a scalable approach to vision-language alignment using cross-modal contrastive learning on 10B image-text pairs.',
  },
  {
    title: 'Edge Intelligence: Sub-1B Parameter Models for Real-Time Inference',
    category: 'Technical Report',
    date: 'Feb 2025',
    authors: ['B. Osei', 'T. Nakamura'],
    tags: ['Edge AI', 'Compression', 'Quantization'],
    color: '#06b6d4',
    abstract: 'We explore aggressive quantization and pruning strategies to deploy capable AI on edge hardware with <100ms latency.',
  },
  {
    title: 'KnowledgeGraph-LLM Fusion for Factual Grounding in Enterprise QA',
    category: 'Research Paper',
    date: 'Jan 2025',
    authors: ['M. Torres', 'S. Gupta', 'A. Lee'],
    tags: ['Knowledge Graphs', 'QA', 'Grounding'],
    color: '#a855f7',
    abstract: 'A hybrid architecture fusing structured knowledge graphs with LLMs to dramatically reduce hallucinations in enterprise question-answering.',
  },
]

export default function PublicationsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="publications" ref={ref} className="section" style={{ background: '#050505', position: 'relative' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Publications</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            Research That <span className="gradient-text-blue">Moves the Field</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Our work is published at top venues including NeurIPS, ICML, ICLR, ACL, and arXiv.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {papers.map((paper, i) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card"
              style={{ padding: '1.75rem', cursor: 'pointer' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${paper.color}25`
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Top bar */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <span style={{
                  fontSize: '0.65rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  background: `${paper.color}15`,
                  color: paper.color,
                  border: `1px solid ${paper.color}25`,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  {paper.category}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>{paper.date}</span>
              </div>

              <h3 style={{
                fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)',
                marginBottom: '0.625rem', lineHeight: 1.4, letterSpacing: '-0.01em',
              }}>
                {paper.title}
              </h3>

              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, marginBottom: '1rem' }}>
                {paper.abstract}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                {paper.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>
                  {paper.authors.join(', ')}
                </span>
                <a href="#" style={{
                  fontSize: '0.75rem',
                  color: paper.color,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}>
                  Read →
                </a>
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
          <a href="/research" className="btn-secondary" style={{ display: 'inline-flex' }}>
            <span>Browse All Publications</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
