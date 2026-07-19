'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const industries = [
  { icon: '🏥', label: 'Healthcare',       color: '#10b981', desc: 'Clinical AI, medical imaging, drug discovery, patient care automation.' },
  { icon: '🎓', label: 'Education',         color: '#3b82f6', desc: 'Personalized learning, AI tutors, assessment automation.' },
  { icon: '💰', label: 'Finance',           color: '#f59e0b', desc: 'Risk models, fraud detection, algorithmic trading, compliance.' },
  { icon: '🏛️', label: 'Government',       color: '#8b5cf6', desc: 'Smart governance, document AI, public service automation.' },
  { icon: '🛍️', label: 'Retail',           color: '#ec4899', desc: 'Recommendation engines, demand forecasting, visual search.' },
  { icon: '🏭', label: 'Manufacturing',     color: '#06b6d4', desc: 'Predictive maintenance, quality control, production optimization.' },
  { icon: '⚖️', label: 'Legal',             color: '#a855f7', desc: 'Contract review, case research, regulatory compliance AI.' },
  { icon: '🏠', label: 'Real Estate',       color: '#10b981', desc: 'Property valuation, market analysis, AI-powered search.' },
  { icon: '👥', label: 'HR & Talent',       color: '#3b82f6', desc: 'Resume screening, culture fit, workforce intelligence.' },
  { icon: '🎯', label: 'Customer Support',  color: '#f59e0b', desc: '24/7 AI agents, ticket routing, sentiment analysis.' },
  { icon: '📣', label: 'Marketing',         color: '#ec4899', desc: 'Content generation, campaign optimization, personalization.' },
  { icon: '📈', label: 'Sales',             color: '#8b5cf6', desc: 'Lead scoring, outreach automation, CRM intelligence.' },
  { icon: '🚚', label: 'Logistics',         color: '#06b6d4', desc: 'Route optimization, demand forecasting, supply chain AI.' },
  { icon: '🏦', label: 'Banking',           color: '#a855f7', desc: 'Know Your Customer, credit scoring, anti-money laundering.' },
  { icon: '📋', label: 'Insurance',         color: '#10b981', desc: 'Claims processing, underwriting AI, risk assessment.' },
]

export default function EnterpriseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="enterprise" ref={ref} className="section" style={{
      background: 'linear-gradient(180deg, #050505 0%, #06060f 50%, #050505 100%)',
      position: 'relative',
    }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
      <div className="aurora-glow" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
        top: '10%', right: '-150px',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Enterprise Solutions</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            AI for Every <span className="gradient-text-blue">Industry</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Mentneo delivers purpose-built AI solutions across every major industry vertical,
            with enterprise-grade security, compliance, and support.
          </p>
        </motion.div>

        {/* Industries grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {industries.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass-card"
              style={{ padding: '1.5rem', cursor: 'pointer' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${industry.color}30`
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3), 0 0 30px ${industry.color}0A`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.75rem' }}>
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '8px',
                  background: `${industry.color}15`,
                  border: `1px solid ${industry.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}>
                  {industry.icon}
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', letterSpacing: '-0.01em' }}>
                  {industry.label}
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '1rem',
            padding: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
              Ready to transform your enterprise with AI?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>
              Talk to our enterprise team for a custom solution and deployment plan.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.625rem 1.5rem' }}>
              <span>Talk to Sales</span>
            </a>
            <a href="/enterprise" className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.625rem 1.5rem' }}>
              <span>Learn More</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
