'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const posts = [
  {
    category: 'Research',
    title: 'Chain-of-Draft: Making LLMs Think More Efficiently',
    excerpt: 'We introduce a new prompting paradigm that reduces token usage by 70% while preserving reasoning quality across complex tasks.',
    date: 'Jul 10, 2025',
    readTime: '8 min',
    color: '#3b82f6',
    author: 'AI Research Team',
  },
  {
    category: 'Engineering',
    title: 'How We Serve 10M API Requests Per Day at 99.99% Uptime',
    excerpt: 'A deep dive into Mentneo\'s inference infrastructure — from autoscaling to latency optimization and cost-efficient serving.',
    date: 'Jul 5, 2025',
    readTime: '12 min',
    color: '#06b6d4',
    author: 'Platform Engineering',
  },
  {
    category: 'Case Study',
    title: 'How GlobalBank Reduced Fraud by 40% with Mentneo AI',
    excerpt: 'A Fortune 100 bank deployed Mentneo\'s fraud detection agent and saw a 40% reduction in fraud within 6 weeks.',
    date: 'Jun 28, 2025',
    readTime: '5 min',
    color: '#10b981',
    author: 'Enterprise Team',
  },
  {
    category: 'Announcement',
    title: 'Mentneo Flash 7B is Now Open Source',
    excerpt: 'We\'re releasing Mentneo-Flash-7B under Apache 2.0. Download weights, finetune, and deploy anywhere.',
    date: 'Jun 20, 2025',
    readTime: '3 min',
    color: '#f59e0b',
    author: 'Mentneo Team',
  },
  {
    category: 'Tutorial',
    title: 'Build a Production RAG Pipeline in 30 Minutes',
    excerpt: 'Step-by-step guide to building a retrieval-augmented generation system using Mentneo APIs and the vector database SDK.',
    date: 'Jun 15, 2025',
    readTime: '15 min',
    color: '#8b5cf6',
    author: 'Developer Relations',
  },
  {
    category: 'Research',
    title: 'Beyond RLHF: Reward-Free Alignment for Language Models',
    excerpt: 'We propose a new alignment technique that eliminates the need for explicit reward models, reducing training cost by 85%.',
    date: 'Jun 10, 2025',
    readTime: '10 min',
    color: '#ec4899',
    author: 'Alignment Research',
  },
]

export default function BlogSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" ref={ref} className="section" style={{
      background: 'linear-gradient(180deg, #050505 0%, #070810 50%, #050505 100%)',
      position: 'relative',
    }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <div className="badge" style={{ marginBottom: '1rem' }}>Blog</div>
            <h2 className="section-headline">
              Insights from the <span className="gradient-text-blue">Frontier</span>
            </h2>
          </div>
          <a href="/blog" className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem', flexShrink: 0 }}>
            <span>View All Posts</span>
          </a>
        </motion.div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card"
          style={{
            padding: '2.5rem',
            marginBottom: '1.25rem',
            cursor: 'pointer',
            borderColor: 'rgba(59,130,246,0.12)',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.04), rgba(17,17,17,0.8))',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.12)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{
              fontSize: '0.65rem', padding: '0.2rem 0.6rem', borderRadius: '4px',
              background: 'rgba(59,130,246,0.15)', color: '#60a5fa',
              border: '1px solid rgba(59,130,246,0.25)', fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>Featured · Research</span>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>Jul 10, 2025 · 8 min read</span>
          </div>
          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#fff',
            marginBottom: '0.75rem', letterSpacing: '-0.02em', lineHeight: 1.3,
          }}>
            {posts[0].title}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '600px' }}>
            {posts[0].excerpt}
          </p>
        </motion.div>

        {/* Grid posts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {posts.slice(1).map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className="glass-card"
              style={{ padding: '1.5rem', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${post.color}25`; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                <span style={{
                  fontSize: '0.62rem', padding: '0.15rem 0.5rem', borderRadius: '4px',
                  background: `${post.color}15`, color: post.color,
                  border: `1px solid ${post.color}20`, fontWeight: 600,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>{post.category}</span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{post.readTime} read</span>
              </div>

              <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '0.5rem', lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                {post.title}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>{post.date}</span>
                <a href="/blog" style={{ fontSize: '0.75rem', color: post.color, textDecoration: 'none' }}>Read →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
