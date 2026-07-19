'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const teamMembers = [
  {
    name: 'Abhiram Yeduru',
    role: 'Founder & CEO',
    bio: 'AI researcher and entrepreneur. Former research lead at a top-5 AI lab. Passionate about building AI that is safe and beneficial.',
    avatar: '👤',
    links: { twitter: '#', linkedin: '#' },
    badge: 'Founder',
    color: '#3b82f6',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Research Officer',
    bio: 'PhD from MIT. 15+ years in NLP and foundation models. Published 80+ papers with 10,000+ citations.',
    avatar: '👩‍🔬',
    links: { linkedin: '#' },
    badge: 'Research',
    color: '#8b5cf6',
  },
  {
    name: 'Marcus Chen',
    role: 'Chief Technology Officer',
    bio: 'Former VP Engineering at a unicorn AI startup. Architect of distributed ML training systems at petabyte scale.',
    avatar: '👨‍💻',
    links: { linkedin: '#', github: '#' },
    badge: 'Engineering',
    color: '#06b6d4',
  },
  {
    name: 'Dr. Amara Osei',
    role: 'VP of AI Safety',
    bio: 'Pioneer in AI alignment research. Co-author of the Responsible AI Charter adopted by 40+ organizations.',
    avatar: '🧑‍🎓',
    links: { linkedin: '#' },
    badge: 'Safety',
    color: '#ef4444',
  },
  {
    name: 'Yuki Nakamura',
    role: 'Head of Products',
    bio: 'Previously led product at two AI companies through IPO. Expert in AI UX and enterprise product design.',
    avatar: '👩‍💼',
    links: { twitter: '#', linkedin: '#' },
    badge: 'Product',
    color: '#f59e0b',
  },
  {
    name: 'Prof. Dr. Klaus Weber',
    role: 'Strategic Advisor',
    bio: 'Director of AI Research at ETH Zürich. Advisor to governments and international AI policy bodies.',
    avatar: '👨‍🏫',
    links: { linkedin: '#' },
    badge: 'Advisor',
    color: '#10b981',
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" ref={ref} className="section" style={{ background: '#050505', position: 'relative' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Our Team</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            The Minds Behind <span className="gradient-text-blue">Mentneo</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            World-class researchers, engineers, and builders united by a common mission to advance AI responsibly.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card"
              style={{ padding: '1.75rem', cursor: 'pointer' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${member.color}25`
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Avatar + badge */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${member.color}30, ${member.color}10)`,
                  border: `2px solid ${member.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}>
                  {member.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: '0.2rem', letterSpacing: '-0.01em' }}>
                    {member.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
                    {member.role}
                  </div>
                </div>
                <span style={{
                  fontSize: '0.6rem', padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  background: `${member.color}15`,
                  color: member.color,
                  border: `1px solid ${member.color}20`,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  flexShrink: 0,
                }}>
                  {member.badge}
                </span>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: '1.125rem' }}>
                {member.bio}
              </p>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {member.links.twitter && (
                  <a href={member.links.twitter} style={{
                    display: 'flex', padding: '0.35rem',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.4)',
                    transition: 'all 200ms ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                )}
                {member.links.linkedin && (
                  <a href={member.links.linkedin} style={{
                    display: 'flex', padding: '0.35rem',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.4)',
                    transition: 'all 200ms ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
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
          <a href="/careers" className="btn-primary" style={{ display: 'inline-flex' }}>
            <span>Join Our Team</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
