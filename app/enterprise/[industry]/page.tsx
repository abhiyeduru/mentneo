import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { faqSchema, serviceSchema } from '@/lib/schema'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import FAQBlock from '@/components/seo/FAQBlock'

const industryData: Record<string, {
  icon: string
  title: string
  subtitle: string
  description: string
  stats: { value: string; label: string }[]
  useCases: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}> = {
  healthcare: {
    icon: '🏥',
    title: 'Healthcare',
    subtitle: 'AI for Clinical Excellence & Patient Outcomes',
    description: 'Mentneo delivers HIPAA-ready AI solutions for healthcare — from clinical documentation automation to medical imaging, drug discovery, and patient care intelligence.',
    stats: [
      { value: '70%', label: 'Reduction in documentation time' },
      { value: '40%', label: 'Faster diagnosis support' },
      { value: '99.9%', label: 'Uptime for clinical systems' },
      { value: '100%', label: 'HIPAA compliance' },
    ],
    useCases: [
      { title: 'Clinical Documentation', description: 'Automate clinical notes, discharge summaries, and structured data capture from physician dictation — reducing documentation burden by up to 70%.' },
      { title: 'Medical Imaging AI', description: 'AI-assisted radiology, pathology, and ophthalmology — detecting anomalies with radiologist-level accuracy and flagging urgent cases for prioritized review.' },
      { title: 'Drug Discovery', description: 'Accelerate drug discovery pipelines with AI models trained on molecular structures, genomic data, and clinical trial outcomes.' },
      { title: 'Patient Risk Stratification', description: 'Identify high-risk patients before deterioration using multivariate AI models trained on EHR data and clinical outcomes.' },
    ],
    faqs: [
      { question: 'Is Mentneo HIPAA compliant?', answer: 'Yes. Mentneo offers HIPAA-ready deployment configurations for healthcare customers. We sign Business Associate Agreements (BAA), store PHI in HIPAA-compliant infrastructure, implement required access controls and audit logging, and undergo regular security assessments. Contact our enterprise team to discuss your specific compliance requirements.' },
      { question: 'Does Mentneo integrate with existing EHR systems?', answer: 'Yes. Mentneo provides integration connectors for major EHR platforms including Epic, Cerner, Meditech, and Allscripts via HL7 FHIR APIs. Custom integration support is available for enterprise healthcare customers.' },
    ],
  },
  finance: {
    icon: '💰',
    title: 'Finance',
    subtitle: 'AI-Powered Financial Intelligence & Risk Management',
    description: 'Mentneo delivers AI solutions for financial institutions — from real-time fraud detection to credit risk modeling, AML compliance automation, and market intelligence.',
    stats: [
      { value: '98%', label: 'Fraud detection accuracy' },
      { value: '60%', label: 'Reduction in compliance costs' },
      { value: '<5ms', label: 'Transaction screening latency' },
      { value: 'SOC2', label: 'Type II Certified' },
    ],
    useCases: [
      { title: 'Fraud Detection', description: 'Real-time fraud detection for payments, account takeover, and identity fraud using anomaly detection and behavior modeling at millisecond latency.' },
      { title: 'Credit Risk Modeling', description: 'Alternative data credit scoring models that improve loan approval rates while reducing default risk — using NLP on unstructured data sources.' },
      { title: 'AML Compliance', description: 'Automated anti-money laundering transaction monitoring with explainable AI decisions that satisfy regulatory requirements for model transparency.' },
      { title: 'Market Intelligence', description: 'Real-time sentiment analysis of news, earnings calls, and social media for trading signal generation and portfolio risk assessment.' },
    ],
    faqs: [
      { question: 'Can Mentneo help with regulatory reporting?', answer: 'Yes. Mentneo\'s document AI can automate regulatory report generation, data extraction for FINRA, SEC, and Basel III reporting, and audit trail documentation. Our explainable AI ensures compliance with model risk management requirements (SR 11-7).' },
      { question: 'Is Mentneo suitable for high-frequency trading applications?', answer: 'Mentneo\'s inference infrastructure is optimized for low-latency applications with P99 latencies under 50ms for standard models. For ultra-low-latency HFT requirements (sub-millisecond), we recommend discussing custom deployment options with our enterprise team.' },
    ],
  },
  government: {
    icon: '🏛️',
    title: 'Government',
    subtitle: 'Secure AI for Public Sector & Government Institutions',
    description: 'Mentneo provides secure, compliant AI solutions for government agencies — enabling smarter public services, efficient document processing, and data-driven policy making.',
    stats: [
      { value: '10x', label: 'Document processing speed' },
      { value: '50%', label: 'Reduction in processing costs' },
      { value: 'Air-gapped', label: 'Deployment available' },
      { value: 'FedRAMP', label: 'Authorization pathway' },
    ],
    useCases: [
      { title: 'Document Processing at Scale', description: 'Process millions of forms, permits, applications, and records with AI accuracy — eliminating backlogs and reducing processing time from weeks to hours.' },
      { title: 'Citizen Service Chatbots', description: '24/7 AI-powered citizen service assistants that handle inquiries, guide applications, and route complex cases to the appropriate department.' },
      { title: 'Policy Analysis', description: 'AI-assisted analysis of legislative proposals, policy documents, and regulatory texts — summarizing implications and identifying potential conflicts.' },
      { title: 'Public Records Management', description: 'Intelligent classification, extraction, and management of public records with automated retention policies and FOIA response assistance.' },
    ],
    faqs: [
      { question: 'Does Mentneo support air-gapped or on-premises deployment?', answer: 'Yes. Mentneo supports fully on-premises deployment for government customers with strict data sovereignty requirements. We provide deployment packages, installation support, and ongoing maintenance for self-hosted environments. Air-gapped deployments are available upon request.' },
      { question: 'Is Mentneo pursuing FedRAMP authorization?', answer: 'Mentneo is actively pursuing FedRAMP Moderate authorization. We have engaged a 3PAO and are following the FedRAMP authorization roadmap. In the interim, we can work with agencies under existing Authority to Operate (ATO) processes.' },
    ],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params
  const data = industryData[industry]
  if (!data) return { title: 'Enterprise Solutions | Mentneo' }

  return genMeta({
    title: `AI for ${data.title} — Mentneo Enterprise`,
    description: data.description,
    path: `/enterprise/${industry}`,
    keywords: [data.title.toLowerCase(), 'enterprise AI', 'AI solutions', `AI for ${data.title.toLowerCase()}`],
  })
}

export default async function EnterpriseIndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params
  const data = industryData[industry]

  if (!data) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(data.faqs),
            serviceSchema({ name: `Mentneo ${data.title} AI`, description: data.description, url: `/enterprise/${industry}`, areaServed: 'Worldwide', serviceType: `${data.title} AI Solutions` }),
          ]),
        }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        <section style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 3rem', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            <BreadcrumbNav items={[
              { name: 'Enterprise', url: '/enterprise' },
              { name: data.title, url: `/enterprise/${industry}` },
            ]} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '3rem', lineHeight: 1 }} aria-hidden="true">{data.icon}</span>
              <div className="badge">{data.subtitle}</div>
            </div>
            <h1 className="section-headline" style={{ maxWidth: '680px', marginBottom: '1rem' }}>
              AI for <span className="gradient-text-blue">{data.title}</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '2rem' }}>
              {data.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" id={`${industry}-talk-sales`}>
                <span>Talk to Sales</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/enterprise" className="btn-secondary" id={`${industry}-all-industries`}>All Industries</Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))', gap: '1.5rem' }}>
              {data.stats.map(stat => (
                <div key={stat.label} style={{ padding: '1.25rem', background: 'rgba(17,17,17,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#60a5fa', letterSpacing: '-0.04em', marginBottom: '0.35rem' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-labelledby="usecases-heading">
          <div className="container-xl">
            <h2 id="usecases-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: '#fff' }}>Key Use Cases</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1rem' }}>
              {data.useCases.map(uc => (
                <div key={uc.title} style={{ padding: '1.4rem', background: 'rgba(17,17,17,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{uc.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl" style={{ maxWidth: '800px' }}>
            <FAQBlock faqs={data.faqs} title={`${data.title} AI — Common Questions`} />
          </div>
        </section>
      </main>
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(industryData).map(industry => ({ industry }))
}
