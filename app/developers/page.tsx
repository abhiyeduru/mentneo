import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { faqSchema, webPageSchema, serviceSchema } from '@/lib/schema'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import FAQBlock from '@/components/seo/FAQBlock'

export const metadata: Metadata = genMeta({
  title: 'Developer Platform — Mentneo APIs, SDKs & Docs',
  description:
    'Build with Mentneo AI: OpenAI-compatible REST APIs, Python & TypeScript SDKs, streaming, embeddings, fine-tuning, and a free interactive playground. Get started in 60 seconds.',
  path: '/developers',
  keywords: ['Mentneo API', 'AI API', 'OpenAI compatible', 'LLM API', 'Python AI SDK', 'TypeScript AI SDK', 'AI developer tools', 'embeddings API', 'fine-tuning API'],
})

const faqs = [
  { question: 'How do I get an API key?', answer: 'Sign up at mentneo.com/signup to get a free API key instantly — no credit card required. Free tier includes 10,000 tokens per day. Paid plans start at $0.001 per 1K tokens.' },
  { question: 'Are Mentneo APIs compatible with the OpenAI SDK?', answer: 'Yes. Mentneo APIs are fully compatible with the OpenAI Python and TypeScript SDKs. Simply change the base_url to api.mentneo.com and your existing OpenAI integration will work without any other code changes.' },
  { question: 'What programming languages does Mentneo support?', answer: 'Mentneo provides official SDKs for Python, TypeScript/JavaScript, Java, Go, Rust, Ruby, and PHP. For other languages, you can use our REST API directly — any HTTP client will work.' },
  { question: 'Does Mentneo support streaming responses?', answer: 'Yes. All Mentneo APIs support server-sent event (SSE) streaming for real-time token delivery. Enable streaming with stream=True (Python) or stream: true (TypeScript).' },
  { question: 'What is the rate limit on the free tier?', answer: 'Free tier allows 10,000 tokens/day, 60 requests/minute, and 3 concurrent requests. Paid plans have significantly higher limits and can be customized for enterprise usage patterns.' },
]

const sdkExample = {
  python: `from mentneo import Mentneo

client = Mentneo(api_key="...")

response = client.chat.complete(
    model="mentneo-pro",
    messages=[{"role": "user", "content": "Hello"}],
    stream=True,
)

for chunk in response:
    print(chunk.choices[0].delta.content, end="")`,
  typescript: `import Mentneo from '@mentneo/sdk';

const client = new Mentneo({ apiKey: process.env.MENTNEO_API_KEY });

const stream = await client.chat.complete({
  model: 'mentneo-pro',
  messages: [{ role: 'user', content: 'Hello' }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? '');
}`,
  curl: `curl https://api.mentneo.com/v1/chat/completions \\
  -H "Authorization: Bearer $MENTNEO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "mentneo-pro",
    "messages": [{"role": "user", "content": "Hello"}],
    "stream": true
  }'`,
}

const tools = [
  { icon: '⚡', title: 'REST & Streaming APIs', description: 'OpenAI-compatible REST API with streaming, function calling, JSON mode, and vision support.', href: '/developers/api' },
  { icon: '📦', title: 'SDKs for 7 Languages', description: 'Official SDKs for Python, TypeScript, Java, Go, Rust, Ruby, and PHP with first-class async support.', href: '/developers/sdks' },
  { icon: '🎮', title: 'Interactive Playground', description: 'Test any model in your browser without writing code. Adjust parameters, compare outputs, export configs.', href: '/playground' },
  { icon: '📖', title: 'Full API Reference', description: 'Complete API documentation with request/response schemas, error codes, and live examples.', href: '/developers/api' },
  { icon: '🎯', title: 'Fine-tuning API', description: 'Customize Mentneo models on your data with our fine-tuning API. Start with as few as 10 examples.', href: '/developers/fine-tuning' },
  { icon: '🔗', title: 'Embeddings API', description: '1536-dimensional dense embeddings for semantic search, RAG, and clustering applications.', href: '/developers/embeddings' },
  { icon: '🗄️', title: 'Vector Database', description: 'Built-in vector store for semantic search — no external database required.', href: '/developers/vector-db' },
  { icon: '🔒', title: 'Secure by Default', description: 'TLS 1.3, signed JWT tokens, IP allowlisting, and audit logs on every enterprise plan.', href: '/security' },
]

export default function DevelopersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webPageSchema({ title: 'Developer Platform | Mentneo', description: 'Build with Mentneo APIs and SDKs.', url: '/developers' }),
            faqSchema(faqs),
          ]),
        }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 3rem', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', top: '-50px', left: '10%', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            <BreadcrumbNav items={[{ name: 'Developers', url: '/developers' }]} />
            <div className="badge" style={{ marginBottom: '1.5rem' }}>Developer Platform</div>

            <h1 className="section-headline" style={{ maxWidth: '700px', marginBottom: '1.25rem' }}>
              Built for Developers,{' '}
              <span className="gradient-text-purple">Loved by Engineers</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '2.5rem' }}>
              Everything you need to integrate, build, and scale AI — clean APIs, great docs, SDKs for every language, and a thriving developer community.
            </p>

            {/* Quick start */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link href="/signup" className="btn-primary" id="dev-get-api-key">
                <span>Get Free API Key</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/developers/api" className="btn-secondary" id="dev-view-docs">View API Docs</Link>
            </div>

            {/* Proof */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { value: '< 1s', label: 'Avg Response Time' },
                { value: '99.9%', label: 'API Uptime' },
                { value: '7', label: 'Official SDKs' },
                { value: '$0', label: 'To Get Started' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl">
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.5rem', color: '#fff' }}>Quickstart</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Get a streaming response in 60 seconds</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '1rem' }}>
              {Object.entries(sdkExample).map(([lang, code]) => (
                <div key={lang} style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', overflow: 'hidden' }}>
                  <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{lang}</span>
                    <span style={{ fontSize: '0.65rem', color: '#3b82f6', cursor: 'pointer' }}>Copy</span>
                  </div>
                  <pre style={{ padding: '1rem', fontSize: '0.78rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', overflowX: 'auto', margin: 0, fontFamily: 'JetBrains Mono, Fira Code, monospace' }}>
                    <code>{code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section style={{ padding: '3rem 0' }} aria-labelledby="dev-tools-heading">
          <div className="container-xl">
            <h2 id="dev-tools-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2rem', color: '#fff' }}>Platform Capabilities</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
              {tools.map(tool => (
                <Link key={tool.title} href={tool.href} style={{ display: 'block', padding: '1.4rem', background: 'rgba(17,17,17,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', textDecoration: 'none', transition: 'all 200ms ease' }}
                >
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.75rem', lineHeight: 1 }} aria-hidden="true">{tool.icon}</span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>{tool.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl" style={{ maxWidth: '800px' }}>
            <FAQBlock faqs={faqs} title="Developer FAQ" />
          </div>
        </section>
      </main>
    </>
  )
}
