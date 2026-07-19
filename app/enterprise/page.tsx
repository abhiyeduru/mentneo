import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { faqSchema, serviceSchema, webPageSchema } from '@/lib/schema'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import FAQBlock from '@/components/seo/FAQBlock'

export const metadata: Metadata = genMeta({
  title: 'Enterprise AI Solutions — Mentneo for Business',
  description:
    'Mentneo delivers purpose-built AI solutions for enterprise across healthcare, finance, government, retail, manufacturing, and 11 more industries — with enterprise-grade security, compliance, and support.',
  path: '/enterprise',
  keywords: ['enterprise AI', 'AI for business', 'B2B AI', 'AI compliance', 'SOC2 AI', 'GDPR AI', 'AI healthcare', 'AI finance', 'AI government'],
})

const industries = [
  { slug: 'healthcare', icon: '🏥', title: 'Healthcare', description: 'Clinical AI, medical imaging, drug discovery, patient care automation, and clinical NLP.', useCases: ['Clinical documentation', 'Medical imaging analysis', 'Drug discovery acceleration', 'Patient risk stratification', 'Regulatory compliance automation'] },
  { slug: 'finance', icon: '💰', title: 'Finance', description: 'Risk modeling, fraud detection, algorithmic trading, compliance automation, and financial NLP.', useCases: ['Fraud detection in real-time', 'Credit risk modeling', 'AML compliance automation', 'Market sentiment analysis', 'Portfolio optimization'] },
  { slug: 'government', icon: '🏛️', title: 'Government', description: 'Smart governance, document AI, public service automation, and secure AI for regulated environments.', useCases: ['Document processing at scale', 'Citizen service chatbots', 'Policy analysis & summarization', 'Security clearance document review', 'Public records management'] },
  { slug: 'education', icon: '🎓', title: 'Education', description: 'Personalized learning, AI tutors, assessment automation, and institutional AI platforms.', useCases: ['Adaptive learning paths', 'Automated grading', 'Student support AI', 'Research assistance', 'Plagiarism detection'] },
  { slug: 'retail', icon: '🛍️', title: 'Retail', description: 'Recommendation engines, demand forecasting, visual search, and customer experience AI.', useCases: ['Product recommendations', 'Demand forecasting', 'Visual search', 'Customer sentiment analysis', 'Inventory optimization'] },
  { slug: 'manufacturing', icon: '🏭', title: 'Manufacturing', description: 'Predictive maintenance, quality control, production optimization, and supply chain AI.', useCases: ['Predictive maintenance', 'Quality control vision AI', 'Production scheduling', 'Supply chain optimization', 'Safety monitoring'] },
  { slug: 'legal', icon: '⚖️', title: 'Legal', description: 'Contract review, case research, regulatory compliance AI, and legal document automation.', useCases: ['Contract analysis & review', 'Legal research automation', 'Regulatory change monitoring', 'Due diligence acceleration', 'eDiscovery processing'] },
  { slug: 'banking', icon: '🏦', title: 'Banking', description: 'KYC automation, credit scoring, anti-money laundering, and personalized banking AI.', useCases: ['KYC document verification', 'Credit scoring models', 'AML transaction monitoring', 'Personalized financial advice', 'Customer onboarding automation'] },
  { slug: 'insurance', icon: '🛡️', title: 'Insurance', description: 'Claims processing, underwriting AI, risk assessment, and fraud detection for insurers.', useCases: ['Automated claims processing', 'Underwriting automation', 'Risk assessment models', 'Fraud detection', 'Customer churn prediction'] },
  { slug: 'logistics', icon: '🚚', title: 'Logistics', description: 'Route optimization, demand forecasting, supply chain AI, and delivery intelligence.', useCases: ['Route optimization', 'Demand forecasting', 'Warehouse automation', 'Last-mile delivery AI', 'Fleet management'] },
  { slug: 'hr-talent', icon: '👥', title: 'HR & Talent', description: 'Resume screening, culture fit analysis, workforce intelligence, and employee experience AI.', useCases: ['Resume screening & ranking', 'Culture fit analysis', 'Employee churn prediction', 'Performance analytics', 'Learning recommendations'] },
  { slug: 'customer-support', icon: '🎧', title: 'Customer Support', description: '24/7 AI agents, ticket routing, sentiment analysis, and support intelligence platforms.', useCases: ['24/7 AI support agents', 'Ticket classification & routing', 'Sentiment analysis', 'Agent assist tools', 'Self-service knowledge bases'] },
  { slug: 'marketing', icon: '📈', title: 'Marketing', description: 'Content generation, campaign optimization, personalization, and marketing analytics AI.', useCases: ['Content generation at scale', 'Campaign A/B optimization', 'Customer segmentation', 'Ad copy generation', 'SEO content automation'] },
  { slug: 'sales', icon: '💼', title: 'Sales', description: 'Lead scoring, outreach automation, CRM intelligence, and revenue forecast AI.', useCases: ['Lead scoring & prioritization', 'Outreach personalization', 'CRM data enrichment', 'Revenue forecasting', 'Win/loss analysis'] },
  { slug: 'real-estate', icon: '🏠', title: 'Real Estate', description: 'Property valuation, market analysis, AI-powered property search, and document automation.', useCases: ['Automated property valuation', 'Market trend analysis', 'AI-powered property search', 'Lease document analysis', 'Investment opportunity scoring'] },
]

const faqs = [
  { question: 'How does Mentneo ensure enterprise-grade security and compliance?', answer: 'Mentneo is SOC 2 Type II certified and GDPR compliant. We offer dedicated VPC deployment, end-to-end encryption, audit logs, role-based access control, and data residency options. All enterprise contracts include a Data Processing Agreement (DPA).' },
  { question: 'Does Mentneo train on my company\'s data?', answer: 'No. Mentneo does not train on customer data by default. Your data is never used to improve our models without explicit opt-in consent. Enterprise customers can request on-premises or private cloud deployments for complete data sovereignty.' },
  { question: 'What SLA does Mentneo offer enterprise customers?', answer: 'Enterprise customers receive a 99.99% uptime SLA with 24/7 dedicated support, a named account manager, and guaranteed response times of under 1 hour for critical incidents. We offer custom SLAs for mission-critical deployments.' },
  { question: 'Can Mentneo\'s AI be customized for my industry?', answer: 'Yes. Mentneo offers industry-specific model fine-tuning, custom knowledge base integration, and domain-adapted AI solutions. We have pre-built solutions for healthcare, finance, legal, and government with compliance frameworks already embedded.' },
  { question: 'How long does enterprise implementation take?', answer: 'Standard enterprise implementations take 2–4 weeks. Complex integrations with custom model training, SSO setup, and multi-system connectors typically take 6–12 weeks. Our solutions engineering team provides dedicated implementation support throughout.' },
]

export default function EnterprisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webPageSchema({ title: 'Enterprise AI | Mentneo', description: 'Purpose-built AI for every industry.', url: '/enterprise' }),
            faqSchema(faqs),
            serviceSchema({ name: 'Mentneo Enterprise AI', description: 'Full-stack enterprise AI platform with security, compliance, and 24/7 support.', url: '/enterprise', areaServed: 'Worldwide', serviceType: 'Enterprise AI Services' }),
          ]),
        }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 3rem', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            <BreadcrumbNav items={[{ name: 'Enterprise', url: '/enterprise' }]} />

            <div className="badge" style={{ marginBottom: '1.5rem' }}>Enterprise Solutions · 15 Industries</div>

            <h1 className="section-headline" style={{ maxWidth: '680px', marginBottom: '1.25rem' }}>
              AI for Every{' '}
              <span className="gradient-text-blue">Industry</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '2rem' }}>
              Mentneo delivers purpose-built AI solutions across every major industry vertical, with enterprise-grade security, compliance frameworks, and 24/7 dedicated support.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {['SOC 2 Type II', 'GDPR Compliant', 'HIPAA Ready', 'ISO 27001', '99.99% Uptime SLA'].map(badge => (
                <span key={badge} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399', fontWeight: 500 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                  {badge}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" id="enterprise-talk-sales">
                <span>Talk to Sales</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/products" className="btn-secondary" id="enterprise-view-products">View Products</Link>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section style={{ padding: '2rem 0 4rem' }} aria-labelledby="industries-heading">
          <div className="container-xl">
            <h2 id="industries-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2rem', color: '#fff' }}>
              Industry Solutions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
              {industries.map(industry => (
                <Link
                  key={industry.slug}
                  href={`/enterprise/${industry.slug}`}
                  style={{ display: 'block', padding: '1.4rem', background: 'rgba(17,17,17,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', textDecoration: 'none', transition: 'all 200ms ease' }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', lineHeight: 1 }} aria-hidden="true">{industry.icon}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>{industry.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{industry.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {industry.useCases.slice(0, 2).map(uc => (
                      <span key={uc} style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} aria-hidden="true" />
                        {uc}
                      </span>
                    ))}
                    {industry.useCases.length > 2 && (
                      <span style={{ fontSize: '0.72rem', color: '#60a5fa', marginTop: '0.25rem' }}>+{industry.useCases.length - 2} more use cases →</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl" style={{ maxWidth: '800px' }}>
            <FAQBlock faqs={faqs} title="Enterprise FAQ" />
          </div>
        </section>

        {/* CTA bar */}
        <section style={{ padding: '3rem 0', background: 'rgba(59,130,246,0.04)', borderTop: '1px solid rgba(59,130,246,0.1)', borderBottom: '1px solid rgba(59,130,246,0.1)' }}>
          <div className="container-xl" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', marginBottom: '0.25rem' }}>Ready to transform your enterprise with AI?</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem' }}>Talk to our enterprise team for a custom solution and deployment plan.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" id="enterprise-cta-sales">Talk to Sales</Link>
              <Link href="/products" className="btn-secondary" id="enterprise-cta-products">View Products</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
