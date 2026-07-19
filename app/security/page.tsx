import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'

export const metadata: Metadata = genMeta({
  title: 'Security — Mentneo',
  description: 'Mentneo\'s security posture, compliance certifications, responsible disclosure program, and enterprise security features. SOC 2 Type II, GDPR, HIPAA-ready.',
  path: '/security',
  keywords: ['Mentneo security', 'SOC 2', 'GDPR compliance', 'AI security', 'enterprise security', 'responsible disclosure', 'bug bounty'],
})

const certifications = [
  { name: 'SOC 2 Type II', icon: '🔒', status: 'Certified', description: 'Annual third-party audit of security, availability, and confidentiality controls.' },
  { name: 'GDPR Compliant', icon: '🇪🇺', status: 'Certified', description: 'Full compliance with EU General Data Protection Regulation.' },
  { name: 'HIPAA Ready', icon: '🏥', status: 'Available', description: 'HIPAA-compliant deployment available for healthcare enterprise customers.' },
  { name: 'ISO 27001', icon: '📋', status: 'In Progress', description: 'ISO 27001 certification in progress, expected Q4 2026.' },
  { name: 'PCI DSS', icon: '💳', status: 'Available', description: 'PCI-compliant infrastructure for payment data handling.' },
]

const securityFeatures = [
  { icon: '🔐', title: 'TLS 1.3 Encryption', description: 'All data in transit is encrypted with TLS 1.3. We do not support deprecated TLS versions.' },
  { icon: '💽', title: 'AES-256 at Rest', description: 'All stored data is encrypted with AES-256 using hardware security modules (HSM).' },
  { icon: '🌐', title: 'Private VPC', description: 'Enterprise deployments can be isolated in dedicated VPCs with no shared infrastructure.' },
  { icon: '🔑', title: 'API Key Security', description: 'Signed JWT tokens, IP allowlisting, key rotation, and scoped permissions for API access.' },
  { icon: '📊', title: 'Audit Logs', description: 'Immutable audit logs for all API calls, admin actions, and data access on enterprise plans.' },
  { icon: '👤', title: 'RBAC', description: 'Role-Based Access Control with fine-grained permissions for team and enterprise accounts.' },
  { icon: '🛡️', title: 'DDoS Protection', description: 'Cloudflare-backed DDoS protection and rate limiting at the edge.' },
  { icon: '🔍', title: 'Penetration Testing', description: 'Quarterly third-party penetration testing by independent security firms.' },
]

export default function SecurityPage() {
  return (
    <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
      <section style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbNav items={[{ name: 'Security', url: '/security' }]} />
          <h1 className="section-headline" style={{ maxWidth: '640px', marginBottom: '1rem' }}>
            Security You Can <span className="gradient-text-blue">Trust</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '540px' }}>
            Enterprise-grade security is not optional at Mentneo. Every layer of our infrastructure is designed, audited, and continuously monitored to protect your data.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-labelledby="cert-heading">
        <div className="container-xl">
          <h2 id="cert-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: '#fff' }}>Certifications & Compliance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
            {certifications.map(cert => (
              <div key={cert.name} style={{ padding: '1.25rem', background: 'rgba(17,17,17,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem', lineHeight: 1 }} aria-hidden="true">{cert.icon}</span>
                  <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', background: cert.status === 'Certified' ? 'rgba(16,185,129,0.1)' : cert.status === 'Available' ? 'rgba(59,130,246,0.1)' : 'rgba(245,158,11,0.1)', color: cert.status === 'Certified' ? '#34d399' : cert.status === 'Available' ? '#60a5fa' : '#fbbf24', border: `1px solid ${cert.status === 'Certified' ? 'rgba(16,185,129,0.2)' : cert.status === 'Available' ? 'rgba(59,130,246,0.2)' : 'rgba(245,158,11,0.2)'}` }}>
                    {cert.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{cert.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-labelledby="security-features-heading">
        <div className="container-xl">
          <h2 id="security-features-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: '#fff' }}>Security Architecture</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
            {securityFeatures.map(f => (
              <div key={f.title} style={{ padding: '1.25rem', background: 'rgba(17,17,17,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.75rem', lineHeight: 1 }} aria-hidden="true">{f.icon}</span>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-xl" style={{ maxWidth: '640px' }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#fff' }}>Responsible Disclosure</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            If you discover a security vulnerability in Mentneo&apos;s systems, please report it responsibly to our security team. We commit to acknowledging reports within 24 hours, investigating all credible reports, and rewarding significant findings through our bug bounty program.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:security@mentneo.com" className="btn-primary" id="security-report">
              <span>Report Vulnerability</span>
            </a>
            <Link href="/contact" className="btn-secondary" id="security-contact">Security Contact</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
