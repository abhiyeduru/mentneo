import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { faqSchema, webPageSchema } from '@/lib/schema'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import FAQBlock from '@/components/seo/FAQBlock'

export const metadata: Metadata = genMeta({
  title: 'AI Research — Frontier Intelligence at Mentneo',
  description:
    'Explore Mentneo\'s research across 19 AI disciplines: large language models, agentic AI, reasoning, RAG systems, multimodal AI, AI safety, and more.',
  path: '/research',
  keywords: [
    'AI research', 'LLM research', 'machine learning research', 'agentic AI',
    'AI safety research', 'multimodal AI', 'RAG systems', 'foundation models',
  ],
})

const researchAreas = [
  { slug: 'large-language-models', icon: '🧠', title: 'Large Language Models', description: 'Foundation models, instruction tuning, RLHF, and next-generation LLM architectures powering every Mentneo product.', papers: 48, color: '#3b82f6' },
  { slug: 'agentic-ai', icon: '🤖', title: 'Agentic AI', description: 'Autonomous reasoning, multi-step planning, tool use, and self-improving AI agents that act in the world.', papers: 31, color: '#8b5cf6' },
  { slug: 'rag-systems', icon: '📚', title: 'RAG Systems', description: 'Retrieval-augmented generation pipelines combining vector search, knowledge graphs, and LLMs for factual, up-to-date answers.', papers: 26, color: '#06b6d4' },
  { slug: 'reasoning-models', icon: '💡', title: 'Reasoning Models', description: 'Chain-of-thought, symbolic reasoning, and systematic problem-solving in AI systems.', papers: 22, color: '#f59e0b' },
  { slug: 'multimodal-ai', icon: '👁️', title: 'Multimodal AI', description: 'Vision-language models, audio-text fusion, and cross-modal learning architectures.', papers: 35, color: '#10b981' },
  { slug: 'computer-vision', icon: '📷', title: 'Computer Vision', description: 'Object detection, segmentation, OCR, visual reasoning, and generative image models.', papers: 29, color: '#ec4899' },
  { slug: 'speech-ai', icon: '🎙️', title: 'Speech AI', description: 'Automatic speech recognition (ASR), text-to-speech synthesis, and speaker diarization.', papers: 18, color: '#f97316' },
  { slug: 'ai-safety', icon: '🛡️', title: 'AI Safety', description: 'Alignment research, interpretability, adversarial robustness, and safe deployment of powerful AI systems.', papers: 41, color: '#ef4444' },
  { slug: 'ai-infrastructure', icon: '⚙️', title: 'AI Infrastructure', description: 'Training clusters, distributed computing, inference optimization, and model compression.', papers: 17, color: '#64748b' },
  { slug: 'embeddings', icon: '🔗', title: 'Embeddings', description: 'Semantic vector representations, dense retrieval, and embedding alignment across modalities.', papers: 23, color: '#6366f1' },
  { slug: 'knowledge-graphs', icon: '🕸️', title: 'Knowledge Graphs', description: 'Structured knowledge representation, entity reasoning, and graph-augmented language models.', papers: 15, color: '#0ea5e9' },
  { slug: 'autonomous-systems', icon: '🚀', title: 'Autonomous Systems', description: 'Self-improving, self-directing AI systems capable of long-horizon planning and execution.', papers: 12, color: '#a855f7' },
  { slug: 'machine-learning', icon: '📊', title: 'Machine Learning', description: 'Classical ML, feature engineering, gradient boosting, and ensemble methods.', papers: 33, color: '#14b8a6' },
  { slug: 'deep-learning', icon: '🔬', title: 'Deep Learning', description: 'Neural architectures, optimization research, training dynamics, and theoretical foundations.', papers: 44, color: '#f43f5e' },
  { slug: 'reinforcement-learning', icon: '🎮', title: 'Reinforcement Learning', description: 'RLHF, reward modeling, game environments, and real-world RL deployment.', papers: 19, color: '#84cc16' },
  { slug: 'edge-ai', icon: '📱', title: 'Edge AI', description: 'On-device inference, model compression, quantization, and deployment on constrained hardware.', papers: 14, color: '#fb923c' },
  { slug: 'generative-ai', icon: '✨', title: 'Generative AI', description: 'Image, video, audio, and code generation using diffusion models, GANs, and autoregressive LLMs.', papers: 38, color: '#c084fc' },
  { slug: 'voice-intelligence', icon: '🎵', title: 'Voice Intelligence', description: 'Real-time voice agents, conversational AI, and voice-enabled applications.', papers: 11, color: '#38bdf8' },
  { slug: 'future-research', icon: '🌐', title: 'Future Research', description: 'AGI alignment, consciousness modeling, emergence, and long-term AI research directions.', papers: 9, color: '#4ade80' },
]

const faqs = [
  { question: 'What kind of AI research does Mentneo focus on?', answer: 'Mentneo conducts research across 19 AI disciplines including large language models, agentic AI, RAG systems, multimodal AI, computer vision, AI safety, and frontier future research areas. Our research informs every product we ship.' },
  { question: 'Are Mentneo\'s research papers publicly available?', answer: 'Yes. Mentneo publishes peer-reviewed papers on arXiv and in major ML conferences including NeurIPS, ICML, ICLR, ACL, and EMNLP. Select papers are available on our publications page.' },
  { question: 'How does Mentneo approach AI safety in its research?', answer: 'AI safety is a dedicated research track at Mentneo. We study alignment, interpretability, adversarial robustness, and safe deployment practices. Safety research is integrated into all our model development pipelines.' },
  { question: 'Can external researchers collaborate with Mentneo?', answer: 'Mentneo actively collaborates with academic institutions, government research labs, and independent researchers. Contact our research team at research@mentneo.com to explore collaboration opportunities.' },
  { question: 'Does Mentneo open-source its research?', answer: 'Mentneo releases models, datasets, and code under open licenses where possible. We also maintain a Hugging Face organization where you can access our open-weight models and research artifacts.' },
]

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          webPageSchema({ title: 'AI Research | Mentneo', description: 'Explore Mentneo\'s research across 19 AI disciplines.', url: '/research' }),
          faqSchema(faqs),
        ]) }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{
          padding: 'clamp(6rem, 12vw, 10rem) 0 clamp(3rem, 6vw, 5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Glow */}
          <div style={{
            position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
            width: '700px', height: '500px',
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }} />
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            <BreadcrumbNav items={[{ name: 'Research', url: '/research' }]} />

            <div className="badge" style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', animation: 'pulse-dot 2s ease-in-out infinite' }} />
              19 Active Research Tracks
            </div>

            <h1 className="section-headline" style={{ maxWidth: '700px', marginBottom: '1.25rem' }}>
              Advancing the Science of{' '}
              <span className="gradient-text-blue">Intelligence</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '2.5rem' }}>
              Mentneo conducts frontier research across 19 AI disciplines — from foundation model theory to real-world deployment. Every product we ship is grounded in rigorous scientific research.
            </p>

            {/* Key stats */}
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { value: '200+', label: 'Research Papers' },
                { value: '50+', label: 'AI Models Released' },
                { value: '19', label: 'Research Tracks' },
                { value: '1,000+', label: 'Researchers' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.04em', color: '#60a5fa' }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas Grid */}
        <section style={{ padding: '4rem 0' }} aria-labelledby="research-areas-heading">
          <div className="container-xl">
            <h2 id="research-areas-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2rem', color: '#fff' }}>
              Research Areas
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '1rem',
              overflow: 'hidden',
            }}>
              {researchAreas.map(area => (
                <Link
                  key={area.slug}
                  href={`/research/${area.slug}`}
                  className="research-area-link"
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{area.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                        {area.title}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                        {area.description}
                      </p>
                      <span style={{ fontSize: '0.72rem', color: area.color, fontWeight: 500 }}>
                        {area.papers} papers →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl" style={{ maxWidth: '800px' }}>
            <FAQBlock faqs={faqs} title="Research FAQ" />
          </div>
        </section>
      </main>
    </>
  )
}
