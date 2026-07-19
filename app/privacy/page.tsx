import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy — Mentneo',
  description: 'Read Mentneo\'s Privacy Policy. How we collect, use, and protect your personal data in compliance with GDPR, CCPA, and global privacy regulations.',
  path: '/privacy',
  keywords: ['privacy policy', 'GDPR', 'CCPA', 'data protection', 'Mentneo privacy'],
})

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly (account details, contact forms, API usage), information generated automatically (usage logs, IP addresses, device information), and information from third parties (OAuth providers, analytics). We collect only what is necessary to provide and improve our services.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use your information to: provide, maintain, and improve our AI services; authenticate your identity and manage your account; send service notifications and updates; respond to support requests; detect and prevent fraud and abuse; comply with legal obligations; and conduct research to improve our models (only with explicit consent for model training).',
  },
  {
    title: '3. We Do Not Train on Customer Data',
    content: 'By default, Mentneo does not use your API requests, queries, or outputs to train, fine-tune, or improve our AI models. Enterprise customers have this guarantee contractually. If you choose to participate in our model improvement program, you will opt in explicitly and can withdraw at any time.',
  },
  {
    title: '4. Data Sharing & Third Parties',
    content: 'We do not sell your personal data. We share data only with: service providers who process data on our behalf (subject to strict data processing agreements); law enforcement when legally required; and in connection with business transfers (mergers, acquisitions). All third-party providers are GDPR-compliant.',
  },
  {
    title: '5. Your Rights (GDPR & CCPA)',
    content: 'You have the right to: access the personal data we hold about you; correct inaccurate data; request deletion of your data ("right to be forgotten"); object to or restrict processing; data portability; and lodge a complaint with a supervisory authority. To exercise these rights, email privacy@mentneo.com.',
  },
  {
    title: '6. Data Retention',
    content: 'We retain personal data for as long as necessary to provide services or comply with legal obligations. Account data is retained until account deletion. API logs are retained for 90 days. Billing records are retained for 7 years per tax law requirements.',
  },
  {
    title: '7. Security',
    content: 'We implement industry-standard security measures including TLS 1.3 encryption in transit, AES-256 encryption at rest, SOC 2 Type II compliance, regular penetration testing, and strict access controls. No transmission over the internet is 100% secure, but we take reasonable precautions.',
  },
  {
    title: '8. International Transfers',
    content: 'Mentneo operates globally. Data may be transferred to and processed in countries other than your country of residence. We use Standard Contractual Clauses (SCCs) and other approved mechanisms for data transfers from the EU/EEA.',
  },
  {
    title: '9. Cookie Policy',
    content: 'We use essential cookies (required for the service to function), analytics cookies (to understand usage), and preference cookies (to remember your settings). You can control non-essential cookies through our Cookie Preferences panel. We do not use advertising or tracking cookies.',
  },
  {
    title: '10. Contact',
    content: 'For privacy questions, data subject requests, or to reach our Data Protection Officer, email privacy@mentneo.com or write to: Mentneo Privacy Team, Hyderabad, India.',
  },
]

export default function PrivacyPage() {
  return (
    <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
      <div className="container-xl" style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 4rem', maxWidth: '780px', margin: '0 auto' }}>
        <BreadcrumbNav items={[{ name: 'Privacy Policy', url: '/privacy' }]} />

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', marginBottom: '0.5rem' }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Last updated: July 1, 2026 · Effective: July 1, 2026
        </p>

        <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
          Mentneo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect information about you when you use our services, website, and APIs.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {sections.map(section => (
            <div key={section.title}>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                {section.title}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.9rem' }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/terms" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.875rem' }}>Terms of Service</Link>
          <Link href="/security" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.875rem' }}>Security</Link>
          <Link href="/contact" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.875rem' }}>Contact Us</Link>
        </div>
      </div>
    </main>
  )
}
