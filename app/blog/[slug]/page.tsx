import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { articleSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import ArticleHeader from '@/components/seo/ArticleHeader'
import FAQBlock from '@/components/seo/FAQBlock'

const posts: Record<string, {
  category: string
  categoryHref: string
  title: string
  description: string
  author: string
  authorRole: string
  date: string
  readTime: string
  tags: string[]
  content: string[]
  faqs: { question: string; answer: string }[]
}> = {
  'future-of-ai-2026': {
    category: 'Research',
    categoryHref: '/blog?category=research',
    title: 'The Future of AI in 2026: What to Expect from Foundation Models',
    description: 'A comprehensive look at where large language models are heading — reasoning breakthroughs, multimodal capabilities, and the shift toward agentic AI.',
    author: 'Dr. Arjun Sharma',
    authorRole: 'Chief Research Officer, Mentneo',
    date: '2026-07-10',
    readTime: '8 min',
    tags: ['LLMs', 'AGI', 'Research', 'Future'],
    content: [
      'The past twelve months have witnessed an unprecedented acceleration in foundation model capabilities. What seemed like distant research goals in 2023 — coherent multi-step reasoning, reliable tool use, long-context comprehension — have become baseline expectations.',
      'At Mentneo, we have been at the center of this transition, and we want to share our perspective on where the field is heading over the next twelve to eighteen months.',
      '## Reasoning Is the Defining Capability of 2026',
      'If 2024 was the year of scaling, 2025 was the year of instruction following, then 2026 is definitively the year of reasoning. The models we are building today are not merely pattern-matchers over training distributions — they are performing structured, multi-step inference that generalizes to novel problem domains.',
      'Chain-of-thought prompting pioneered this direction, but the frontier has moved far beyond. We are now seeing models that decompose complex problems, maintain working memory across reasoning steps, identify gaps in their own knowledge, and update their conclusions based on intermediate findings.',
      '## The Agentic Transition',
      'The shift from generative AI to agentic AI is the most consequential transition happening in the industry today. An agent is not a model — it is a system. It includes the model, a planning layer, memory modules, tool integrations, and feedback mechanisms.',
      'At Mentneo, our Agents platform has been deployed in production by over 200 enterprise customers. The patterns we observe are consistent: the value of agentic AI comes not from any single capability, but from the reliable composition of multiple capabilities over extended time horizons.',
      '## Multimodality Becomes Standard',
      'The vision capabilities that felt novel twelve months ago are now table stakes. Every production-grade foundation model in 2026 processes text, images, code, and audio natively. The interesting research frontier has moved from "can the model see?" to "how well does it reason about what it sees?"',
      'Mentneo Vision handles not just image description but visual reasoning tasks — understanding spatial relationships, interpreting technical diagrams, and drawing logical conclusions from visual evidence.',
      '## What to Expect Next',
      'Based on our research roadmap and the patterns we observe across the field, we anticipate three major developments in the next 18 months: continued scaling of context windows (toward 1M+ token contexts becoming practical), more capable and reliable agentic systems with lower hallucination rates, and the emergence of specialized frontier models optimized for specific domains rather than general-purpose generalism.',
      'The future of AI is not a single breakthrough — it is the steady compounding of capabilities, each enabling the next. We are proud to be building at this frontier, and we look forward to sharing more of our research as the year progresses.',
    ],
    faqs: [
      { question: 'What is the most important AI trend of 2026?', answer: 'The most important trend of 2026 is the emergence of reliable agentic AI — systems that can autonomously plan, reason across multiple steps, use tools, and execute complex tasks with minimal human intervention. This represents a fundamental shift from generative AI (producing outputs) to agentic AI (taking actions).' },
      { question: 'Will AI replace human jobs?', answer: 'AI is transforming how work is done rather than wholesale replacing workers. Current AI systems excel at automating specific tasks within workflows — document processing, code generation, data analysis, customer responses — while human judgment remains essential for strategy, ethics, creativity, and complex decision-making. The impact varies significantly by role and industry.' },
      { question: 'What are foundation models?', answer: 'Foundation models are large-scale AI models trained on broad data that can be adapted to a wide variety of tasks. Examples include GPT-4, Claude, Gemini, and Mentneo LLM. They are called "foundation" models because they serve as a base that can be fine-tuned or prompted for specific applications without requiring task-specific training from scratch.' },
    ],
  },
  'building-production-llms': {
    category: 'Engineering',
    categoryHref: '/blog?category=engineering',
    title: 'Building Production LLMs: Lessons from 18 Months of Deployment',
    description: 'Key engineering insights from deploying large language models at scale — latency optimization, cost reduction, and reliability patterns.',
    author: 'Priya Nair',
    authorRole: 'Head of ML Engineering, Mentneo',
    date: '2026-07-05',
    readTime: '12 min',
    tags: ['Engineering', 'Deployment', 'Performance'],
    content: [
      'Shipping a large language model demo is easy. Shipping one that serves millions of requests reliably, cost-effectively, and at low latency is a completely different engineering challenge.',
      'Over the past 18 months at Mentneo, we have learned hard lessons about production LLM deployment. This post documents the most important of those lessons.',
      '## Latency Is a Product Decision, Not Just an Engineering Metric',
      'We began by optimizing for throughput — maximizing tokens per second across our cluster. We quickly learned this was the wrong primary metric. Users feel latency, not throughput. The perceived quality of an AI response is heavily influenced by time-to-first-token (TTFT).',
      'Our current target for Mentneo Pro is P50 TTFT under 400ms and P99 under 1.5 seconds. Achieving this required speculative decoding, KV cache optimization, and aggressive model parallelism tuning.',
      '## Speculative Decoding Changed Everything',
      'The single highest-impact optimization we implemented was speculative decoding with a small draft model. By generating candidate tokens with a 1B parameter draft model and verifying them with our full model, we achieved 2.8x speedup on typical chat workloads with no degradation in output quality.',
      '## Cost Optimization Cannot Wait',
      'At scale, inference cost compounds quickly. Our cost optimization journey involved quantization (INT8 for non-critical paths), dynamic batching, and intelligent routing to smaller models for simple queries.',
      '## Reliability Engineering for LLMs',
      'LLMs fail in novel ways that traditional software engineering is not prepared for. We built a comprehensive reliability stack including semantic consistency monitors, output validation layers, fallback routing, and real-time anomaly detection on output distributions.',
    ],
    faqs: [
      { question: 'What is speculative decoding in LLMs?', answer: 'Speculative decoding is an inference acceleration technique where a smaller, faster "draft" model generates candidate tokens, and a larger "verifier" model evaluates them in parallel. Valid tokens are accepted, speeding up generation significantly (often 2-4x) without sacrificing output quality.' },
      { question: 'How do you reduce LLM inference costs?', answer: 'Key strategies include: model quantization (INT8/INT4), dynamic batching to maximize GPU utilization, intelligent request routing to smaller models for simple queries, speculative decoding to reduce the number of full model forward passes, and KV cache optimization to reduce memory bandwidth.' },
    ],
  },
  'agentic-ai-explained': {
    category: 'Research',
    categoryHref: '/blog?category=research',
    title: 'Agentic AI Explained: How Autonomous Systems Actually Work',
    description: 'A technical deep-dive into how agentic AI systems plan, reason, use tools, and execute long-horizon tasks — with real architecture diagrams.',
    author: 'Rahul Krishnamurthy',
    authorRole: 'Research Scientist, Mentneo',
    date: '2026-06-28',
    readTime: '15 min',
    tags: ['Agents', 'ReAct', 'Planning'],
    content: [
      'Agentic AI has become one of the most discussed topics in the field — but there is significant confusion about what agents actually are, how they work architecturally, and what they can and cannot reliably do.',
      'This post provides a technical, grounded explanation of agentic AI systems.',
      '## What Is an Agent?',
      'An AI agent is a system that perceives its environment, maintains a representation of state, takes actions to achieve goals, and updates its strategy based on feedback. This is distinct from a language model, which maps input tokens to output tokens without persistent state or goal-directed behavior.',
      '## The ReAct Architecture',
      'The dominant paradigm for LLM-based agents is ReAct (Reasoning + Acting), introduced by Yao et al. in 2022. In ReAct, the model alternates between reasoning steps (Thought) and action steps (Action/Observation) in an interleaved format.',
      'Each reasoning step allows the model to think through what it knows, what it needs to find out, and what action to take next. Each action step involves calling a tool — web search, code execution, API call, or file system operation — and receiving an observation.',
      '## Memory in Agentic Systems',
      'Long-horizon task execution requires memory beyond a single context window. Modern agent architectures implement multiple memory types: in-context working memory (current context), external episodic memory (vector database of past actions), and semantic memory (knowledge about the world and available tools).',
      '## Multi-Agent Systems',
      'The most capable deployments use networks of specialized agents rather than a single generalist agent. A coordinator agent decomposes complex goals into sub-tasks, dispatches them to specialized agents (researcher, coder, writer, evaluator), and synthesizes their outputs.',
    ],
    faqs: [
      { question: 'What is the difference between an AI chatbot and an AI agent?', answer: 'A chatbot produces responses to individual messages without taking persistent actions in the world. An AI agent can plan across multiple steps, use tools (like web search, code execution, and API calls), maintain memory between sessions, and take sequences of actions to achieve goals — often without requiring a human to direct each individual step.' },
      { question: 'What is ReAct in AI agents?', answer: 'ReAct (Reasoning + Acting) is an agent architecture where the language model alternates between Thought steps (reasoning about what to do) and Action steps (actually doing it, like calling a tool). This interleaved reasoning structure significantly improves reliability on complex multi-step tasks compared to acting without explicit reasoning.' },
    ],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Blog Post | Mentneo' }

  return genMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.tags,
    section: 'blog',
    publishedTime: post.date,
    authors: [post.author],
    tags: post.tags,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema({
              title: post.title,
              description: post.description,
              url: `/blog/${slug}`,
              datePublished: post.date,
              authorName: post.author,
              category: post.category,
            }),
            faqSchema(post.faqs),
          ]),
        }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        <div className="container-xl" style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 4rem', maxWidth: '780px', margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page" style={{ color: 'rgba(255,255,255,0.7)' }}>{post.title.slice(0, 40)}…</span>
            </div>
          </nav>

          <ArticleHeader
            category={post.category}
            categoryHref={post.categoryHref}
            title={post.title}
            description={post.description}
            authorName={post.author}
            authorRole={post.authorRole}
            datePublished={post.date}
            readingTime={post.readTime}
            tags={post.tags}
          />

          {/* Article body */}
          <article>
            {post.content.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
                    {block.replace('## ', '')}
                  </h2>
                )
              }
              return (
                <p key={i} style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                  {block}
                </p>
              )
            })}
          </article>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <FAQBlock faqs={post.faqs} title="Related Questions" />
          </div>

          {/* Back */}
          <div style={{ marginTop: '3rem' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#60a5fa', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="m19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}
