'use client'

import { useState } from 'react'
import type { FAQItem } from '@/lib/schema'

interface FAQBlockProps {
  faqs: FAQItem[]
  title?: string
  className?: string
}

export default function FAQBlock({ faqs, title = 'Frequently Asked Questions', className = '' }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      className={className}
      aria-labelledby="faq-heading"
      style={{ width: '100%' }}
    >
      <h2
        id="faq-heading"
        style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '2rem',
          color: '#fff',
        }}
      >
        {title}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${openIndex === i ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.06)'}`,
              borderRadius: '0.75rem',
              overflow: 'hidden',
              transition: 'border-color 200ms ease',
            }}
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.1rem 1.25rem',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
              }}
            >
              <span>{faq.question}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                style={{
                  flexShrink: 0,
                  color: 'rgba(255,255,255,0.5)',
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 300ms ease',
                }}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              style={{
                maxHeight: openIndex === i ? '600px' : '0',
                overflow: 'hidden',
                transition: 'max-height 300ms ease',
              }}
            >
              <p
                style={{
                  padding: '0 1.25rem 1.1rem',
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
