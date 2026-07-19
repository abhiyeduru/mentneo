'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const contactTypes = [
  { id: 'general',    label: 'General',     icon: '✉️' },
  { id: 'enterprise', label: 'Enterprise',  icon: '🏢' },
  { id: 'research',   label: 'Research',    icon: '🔬' },
  { id: 'press',      label: 'Press',       icon: '📰' },
  { id: 'support',    label: 'Support',     icon: '🛟' },
]

const offices = [
  { city: 'San Francisco',  country: 'United States', icon: '🇺🇸', address: 'AI Hub, Mission District' },
  { city: 'London',         country: 'United Kingdom', icon: '🇬🇧', address: 'Tech City, EC2A' },
  { city: 'Singapore',      country: 'Singapore',      icon: '🇸🇬', address: 'One-North Research Hub' },
  { city: 'Hyderabad',      country: 'India',          icon: '🇮🇳', address: 'HITEC City, Gachibowli' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeType, setActiveType] = useState('general')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" ref={ref} className="section" style={{ background: '#050505', position: 'relative' }}>
      <div className="grid-pattern-sm" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
      <div className="aurora-glow" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        top: '10%', left: '-200px',
      }} />
      <div className="aurora-glow" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        bottom: '0', right: '-100px',
        animationDelay: '3s',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem' }}>Contact</div>
          <h2 className="section-headline" style={{ marginBottom: '1rem' }}>
            Let&apos;s Build the Future <span className="gradient-text-blue">Together</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Whether you&apos;re an enterprise, researcher, developer, or just curious — we&apos;d love to hear from you.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Contact type selector */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {contactTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.4rem 0.875rem',
                    borderRadius: '9999px',
                    border: `1px solid ${activeType === type.id ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.08)'}`,
                    background: activeType === type.id ? 'rgba(59,130,246,0.12)' : 'transparent',
                    color: activeType === type.id ? '#60a5fa' : 'rgba(255,255,255,0.5)',
                    fontSize: '0.8rem', fontWeight: 500,
                    cursor: 'pointer', transition: 'all 200ms ease',
                    fontFamily: 'inherit',
                  }}
                >
                  <span>{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {[
                { id: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'Your name' },
                { id: 'email',   label: 'Email Address', type: 'email', placeholder: 'you@company.com' },
                { id: 'company', label: 'Company',       type: 'text',  placeholder: 'Company name (optional)' },
              ].map(field => (
                <div key={field.id} style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%', padding: '0.75rem 1rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      borderRadius: '0.5rem',
                      color: '#fff', fontSize: '0.875rem',
                      fontFamily: 'inherit', outline: 'none',
                      transition: 'border-color 200ms ease',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.09)'}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Message
                </label>
                <textarea
                  placeholder="How can Mentneo help you?"
                  rows={4}
                  style={{
                    width: '100%', padding: '0.75rem 1rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: '0.5rem',
                    color: '#fff', fontSize: '0.875rem',
                    fontFamily: 'inherit', outline: 'none', resize: 'vertical',
                    transition: 'border-color 200ms ease',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.09)'}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{submitted ? '✓ Message Sent!' : 'Send Message'}</span>
                {!submitted && (
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Quick contacts */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>Quick Contact</h4>
              {[
                { label: 'General Inquiries',  value: 'hello@mentneo.com',          icon: '✉️' },
                { label: 'Enterprise Sales',    value: 'enterprise@mentneo.com',     icon: '🤝' },
                { label: 'Research',            value: 'research@mentneo.com',       icon: '🔬' },
                { label: 'Press & Media',       value: 'press@mentneo.com',          icon: '📰' },
                { label: 'Developer Support',   value: 'support@mentneo.com',        icon: '🛟' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.625rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span>{item.icon}</span>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                  </div>
                  <a href={`mailto:${item.value}`} style={{ fontSize: '0.78rem', color: '#60a5fa', textDecoration: 'none' }}>
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Offices */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>Global Offices</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {offices.map(office => (
                  <div key={office.city} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem' }}>{office.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                        {office.city}, {office.country}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
                        {office.address}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
