import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { faqSchema, scholarlyArticleSchema } from '@/lib/schema'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import FAQBlock from '@/components/seo/FAQBlock'

const areaData: Record<string, {
  title: string
  subtitle: string
  description: string
  overview: string[]
  keyTopics: string[]
  applications: string[]
  icon: string
  faqs: { question: string; answer: string }[]
  relatedAreas: string[]
}> = {
  'large-language-models': {
    icon: '🧠',
    title: 'Large Language Models',
    subtitle: 'Foundation Models, Instruction Tuning & RLHF',
    description: 'Research into training, scaling, and deploying large language models that form the foundation of every Mentneo product.',
    overview: [
      'Large Language Models (LLMs) are the core of modern AI systems. At Mentneo, we research the full spectrum — from pretraining on massive corpora to instruction fine-tuning, preference optimization (RLHF/DPO), and efficient inference.',
      'Our LLM research spans architecture innovation (transformer variants, state space models), training stability at scale, and emergent capabilities. We publish both foundational and applied research to advance the field.',
    ],
    keyTopics: ['Transformer architectures', 'Pretraining at scale', 'Instruction fine-tuning', 'RLHF & DPO', 'Context length extension', 'Efficient inference (quantization, speculative decoding)', 'Emergent capabilities', 'Model evaluation & benchmarking'],
    applications: ['Mentneo LLM (flagship foundation model)', 'Mentneo Chat (conversational AI)', 'Code generation', 'Document understanding', 'Enterprise automation'],
    faqs: [
      { question: 'What is a Large Language Model (LLM)?', answer: 'A Large Language Model is a deep learning model trained on massive amounts of text data to understand and generate human language. LLMs learn statistical patterns across billions of tokens and can perform a wide variety of tasks — reasoning, coding, writing, summarization, question answering, and more — without task-specific training.' },
      { question: 'How does Mentneo train its LLMs?', answer: 'Mentneo trains LLMs using a multi-stage pipeline: (1) large-scale pretraining on diverse web and domain-specific corpora, (2) supervised fine-tuning on curated instruction datasets, (3) reinforcement learning from human feedback (RLHF) and direct preference optimization (DPO) to align the model with human values and intended behaviors.' },
      { question: 'What makes Mentneo LLM different from GPT or Claude?', answer: 'Mentneo LLM is optimized for enterprise and research use cases with a focus on factual accuracy, long-context understanding, multilingual capability, and efficient inference. We also provide fine-tuning APIs so enterprises can adapt the model to their specific domain data.' },
    ],
    relatedAreas: ['reasoning-models', 'agentic-ai', 'rag-systems', 'embeddings'],
  },
  'agentic-ai': {
    icon: '🤖',
    title: 'Agentic AI',
    subtitle: 'Autonomous Reasoning, Multi-Step Planning & Tool Use',
    description: 'Building AI agents that can plan, reason, use tools, and execute complex multi-step tasks autonomously.',
    overview: [
      'Agentic AI represents the next frontier of artificial intelligence — systems that not only understand instructions but autonomously plan and execute multi-step tasks, use external tools, browse the web, write and run code, and iteratively improve their outputs.',
      'Mentneo\'s agentic research focuses on reliable long-horizon task execution, safe tool use, multi-agent collaboration, and sandboxed code execution environments.',
    ],
    keyTopics: ['ReAct-style reasoning', 'Tool use & function calling', 'Multi-agent systems', 'Long-horizon planning', 'Sandboxed code execution', 'Memory & persistence', 'Agent evaluation frameworks', 'Self-correction'],
    applications: ['Mentneo Agents platform', 'Enterprise workflow automation', 'Research automation', 'Software engineering agents'],
    faqs: [
      { question: 'What is an AI agent?', answer: 'An AI agent is a system that perceives its environment, makes decisions, and takes actions to achieve goals — often across multiple steps. Unlike a simple chatbot, an AI agent can use tools (web search, code execution, APIs), remember past interactions, and autonomously plan sequences of actions to accomplish complex objectives.' },
      { question: 'How are Mentneo agents different from simple chatbots?', answer: 'Mentneo agents operate in autonomous loops: they break goals into sub-tasks, select and use appropriate tools, evaluate results, and iterate until the task is complete. They maintain working memory across steps and can coordinate with other specialized agents in multi-agent pipelines.' },
      { question: 'Are Mentneo agents safe to deploy in production?', answer: 'Yes. All Mentneo agents run in sandboxed environments with configurable permission scopes. We implement human-in-the-loop checkpoints for high-stakes actions, provide full audit logs, and enforce rate limiting. Our AI safety research team reviews all agentic capabilities before production release.' },
    ],
    relatedAreas: ['large-language-models', 'reasoning-models', 'ai-safety', 'autonomous-systems'],
  },
  'ai-safety': {
    icon: '🛡️',
    title: 'AI Safety',
    subtitle: 'Alignment, Interpretability & Adversarial Robustness',
    description: 'Ensuring AI systems behave reliably, safely, and in accordance with human values at scale.',
    overview: [
      'AI Safety is not an afterthought at Mentneo — it is a foundational research commitment. As AI systems become more capable, ensuring they remain aligned with human intentions, interpretable to human operators, and robust against adversarial inputs becomes critical.',
      'Our safety research spans technical alignment (RLHF, Constitutional AI, scalable oversight), mechanistic interpretability (understanding internal representations), red-teaming, and policy research on responsible AI deployment.',
    ],
    keyTopics: ['RLHF & preference learning', 'Constitutional AI', 'Mechanistic interpretability', 'Scalable oversight', 'Red-teaming & adversarial testing', 'Model cards & documentation', 'Dual-use risk assessment', 'Corrigibility'],
    applications: ['Safety evaluations in all Mentneo models', 'Enterprise compliance tooling', 'Responsible disclosure program'],
    faqs: [
      { question: 'What is AI alignment?', answer: 'AI alignment refers to the challenge of ensuring AI systems pursue goals and behave in ways that are consistent with human intentions and values. As models become more capable, ensuring they remain helpful, harmless, and honest — even in novel situations — requires dedicated research into how models represent and optimize for objectives.' },
      { question: 'How does Mentneo test models for safety before release?', answer: 'Every Mentneo model goes through a multi-stage safety evaluation: automated red-teaming with adversarial prompts, human expert evaluation for policy violations, capability evaluations for dangerous knowledge, and staged rollout with monitoring. We also publish model cards documenting known limitations and failure modes.' },
      { question: 'Does Mentneo conduct interpretability research?', answer: 'Yes. Mentneo\'s interpretability team uses mechanistic approaches to understand how models represent concepts, implement algorithms, and make decisions internally. This research helps us detect and prevent harmful behaviors before they manifest in production systems.' },
    ],
    relatedAreas: ['large-language-models', 'agentic-ai', 'future-research', 'autonomous-systems'],
  },
  'rag-systems': {
    icon: '📚',
    title: 'RAG Systems',
    subtitle: 'Retrieval-Augmented Generation & Knowledge-Grounded AI',
    description: 'Combining vector search, knowledge graphs, and LLMs for factual, grounded, up-to-date AI responses.',
    overview: [
      'Retrieval-Augmented Generation (RAG) addresses one of the fundamental limitations of LLMs — static knowledge cutoffs and hallucination. By coupling LLMs with retrieval systems that can fetch relevant, up-to-date information at inference time, RAG enables AI systems that are both generative and factually grounded.',
      'Mentneo\'s RAG research covers advanced indexing strategies, multi-step retrieval pipelines, cross-lingual retrieval, hybrid sparse-dense retrieval, and RAG evaluation frameworks.',
    ],
    keyTopics: ['Dense passage retrieval', 'Hybrid sparse-dense retrieval', 'Multi-step RAG pipelines', 'Knowledge graph augmentation', 'RAG evaluation (faithfulness, relevance)', 'Long-context RAG', 'Streaming RAG', 'Domain-specific RAG'],
    applications: ['Mentneo Search (RAG-powered enterprise search)', 'Mentneo Docs AI', 'Customer support automation', 'Research assistants'],
    faqs: [
      { question: 'What is RAG (Retrieval-Augmented Generation)?', answer: 'RAG is an AI architecture that combines a large language model with a retrieval system. When a query is received, the system first retrieves relevant documents or passages from a knowledge base, then provides them as context to the LLM, which generates a grounded response. This reduces hallucination and keeps responses factually accurate and up-to-date.' },
      { question: 'When should I use RAG vs. fine-tuning?', answer: 'RAG is ideal when your knowledge base changes frequently, when you need source citations, or when you have large amounts of proprietary data you cannot include in training. Fine-tuning is better for learning specific styles, formats, or behaviors. Many production systems use both: fine-tuning for behavior and RAG for knowledge.' },
      { question: 'How does Mentneo implement RAG in its products?', answer: 'Mentneo uses a multi-stage RAG pipeline: (1) document chunking with semantic boundaries, (2) hybrid sparse-dense indexing using both keyword (BM25) and embedding-based retrieval, (3) cross-encoder reranking, (4) context compression, and (5) grounded generation with citation tracking. This stack powers Mentneo Search and Docs AI.' },
    ],
    relatedAreas: ['embeddings', 'knowledge-graphs', 'large-language-models', 'ai-infrastructure'],
  },
}

// Generate metadata for known areas, fallback for unknowns
export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params
  const data = areaData[area]
  if (!data) return { title: 'Research Area | Mentneo' }

  return genMeta({
    title: `${data.title} Research — Mentneo AI`,
    description: data.description,
    path: `/research/${area}`,
    keywords: data.keyTopics,
    section: 'research',
  })
}

export default async function ResearchAreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params
  const data = areaData[area]

  if (!data) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(data.faqs),
            scholarlyArticleSchema({
              title: `${data.title} — Mentneo Research`,
              description: data.description,
              url: `/research/${area}`,
              datePublished: '2024-01-01',
              authorName: 'Mentneo Research Team',
              category: 'Artificial Intelligence',
            }),
          ]),
        }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Header */}
        <section style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 3rem', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            <BreadcrumbNav items={[
              { name: 'Research', url: '/research' },
              { name: data.title, url: `/research/${area}` },
            ]} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '3rem', lineHeight: 1 }} aria-hidden="true">{data.icon}</span>
              <div className="badge">{data.subtitle}</div>
            </div>

            <h1 className="section-headline" style={{ maxWidth: '700px', marginBottom: '1rem' }}>
              {data.title}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '620px' }}>
              {data.description}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#fff' }}>Overview</h2>
                {data.overview.map((p, i) => (
                  <p key={i} style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>{p}</p>
                ))}
              </div>

              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#fff' }}>Key Research Topics</h2>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {data.keyTopics.map(topic => (
                      <li key={topic} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} aria-hidden="true" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#fff' }}>Products Using This Research</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {data.applications.map(app => (
                      <span key={app} className="tag">{app}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl" style={{ maxWidth: '800px' }}>
            <FAQBlock faqs={data.faqs} title={`${data.title} — Common Questions`} />
          </div>
        </section>

        {/* Related Areas */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl">
            <h2 style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Related Research Areas</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {data.relatedAreas.map(slug => (
                <Link key={slug} href={`/research/${slug}`} className="related-area-link" style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                }}
                >

                  {slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

// Static params for known areas
export function generateStaticParams() {
  return Object.keys(areaData).map(area => ({ area }))
}
