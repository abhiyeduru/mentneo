import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { faqSchema, webPageSchema, articleSchema } from '@/lib/schema'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import FAQBlock from '@/components/seo/FAQBlock'

export const metadata: Metadata = genMeta({
  title: 'Mentneo Blog — AI Research, Insights & Engineering',
  description:
    'Read the latest from Mentneo: AI research breakthroughs, engineering deep-dives, product announcements, and perspectives on the future of artificial intelligence.',
  path: '/blog',
  keywords: ['AI blog', 'AI research news', 'LLM engineering', 'machine learning blog', 'AI insights', 'Mentneo news'],
})

const posts = [
  {
    slug: 'future-of-ai-2026',
    category: 'Research',
    title: 'The Future of AI in 2026: What to Expect from Foundation Models',
    description: 'A comprehensive look at where large language models are heading — reasoning breakthroughs, multimodal capabilities, and the shift toward agentic AI.',
    author: 'Dr. Arjun Sharma',
    authorRole: 'Chief Research Officer',
    date: '2026-07-10',
    readTime: '8 min',
    tags: ['LLMs', 'AGI', 'Research', 'Future'],
    featured: true,
  },
  {
    slug: 'building-production-llms',
    category: 'Engineering',
    title: 'Building Production LLMs: Lessons from 18 Months of Deployment',
    description: 'Key engineering insights from deploying large language models at scale — latency optimization, cost reduction, and reliability patterns.',
    author: 'Priya Nair',
    authorRole: 'Head of ML Engineering',
    date: '2026-07-05',
    readTime: '12 min',
    tags: ['Engineering', 'Deployment', 'Performance'],
    featured: false,
  },
  {
    slug: 'agentic-ai-explained',
    category: 'Research',
    title: 'Agentic AI Explained: How Autonomous Systems Actually Work',
    description: 'A technical deep-dive into how agentic AI systems plan, reason, use tools, and execute long-horizon tasks — with real architecture diagrams.',
    author: 'Rahul Krishnamurthy',
    authorRole: 'Research Scientist',
    date: '2026-06-28',
    readTime: '15 min',
    tags: ['Agents', 'ReAct', 'Planning'],
    featured: false,
  },
  {
    slug: 'enterprise-ai-adoption',
    category: 'Enterprise',
    title: 'Enterprise AI Adoption: What Fortune 500s Are Actually Building',
    description: 'Insights from 500+ enterprise AI deployments — the use cases that deliver ROI, the failure modes to avoid, and how leading companies structure their AI teams.',
    author: 'Kavitha Menon',
    authorRole: 'VP Enterprise Solutions',
    date: '2026-06-20',
    readTime: '10 min',
    tags: ['Enterprise', 'Strategy', 'ROI'],
    featured: false,
  },
  {
    slug: 'multimodal-models-deep-dive',
    category: 'Research',
    title: 'Multimodal AI Deep Dive: How Vision-Language Models See the World',
    description: 'How do models like Mentneo Vision understand images? A technical tour of cross-attention, visual tokens, and emerging multimodal architectures.',
    author: 'Ananya Bose',
    authorRole: 'Research Scientist',
    date: '2026-06-15',
    readTime: '14 min',
    tags: ['Multimodal', 'Vision', 'Research'],
    featured: false,
  },
  {
    slug: 'ai-safety-research-mentneo',
    category: 'AI Safety',
    title: 'Our Approach to AI Safety: Alignment, Interpretability & Red-teaming',
    description: 'A transparent look at how Mentneo approaches safety in model development — from preference learning to mechanistic interpretability and staged rollouts.',
    author: 'Dr. Sunita Rao',
    authorRole: 'Head of AI Safety',
    date: '2026-06-08',
    readTime: '11 min',
    tags: ['Safety', 'Alignment', 'Research'],
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  Research: '#3b82f6',
  Engineering: '#8b5cf6',
  Enterprise: '#10b981',
  'AI Safety': '#ef4444',
}

const faqs = [
  { question: 'How often does Mentneo publish blog posts?', answer: 'Mentneo publishes research deep-dives, engineering tutorials, and product updates weekly. Subscribe to our newsletter to get new posts delivered to your inbox.' },
  { question: 'Who writes the Mentneo blog?', answer: 'Posts are authored by Mentneo researchers, engineers, and product leaders. All technical content is peer-reviewed before publication. We also occasionally publish guest posts from academic collaborators.' },
]

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webPageSchema({ title: 'Blog | Mentneo', description: 'AI research, engineering, and product insights from Mentneo.', url: '/blog' }),
            faqSchema(faqs),
            articleSchema({ title: featured.title, description: featured.description, url: `/blog/${featured.slug}`, datePublished: featured.date, authorName: featured.author }),
          ]),
        }}
      />

      <main id="main-content" style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(6rem, 10vw, 9rem) 0 3rem', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            <BreadcrumbNav items={[{ name: 'Blog', url: '/blog' }]} />
            <h1 className="section-headline" style={{ maxWidth: '600px', marginBottom: '1rem' }}>
              Research, Engineering &{' '}
              <span className="gradient-text-blue">Insights</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.75, maxWidth: '500px' }}>
              Deep-dives, research notes, and perspectives from the Mentneo team.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section style={{ padding: '2rem 0' }}>
          <div className="container-xl">
            <Link href={`/blog/${featured.slug}`} style={{ display: 'block', padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'rgba(17,17,17,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', textDecoration: 'none', transition: 'all 200ms ease' }}
            >
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.65rem', borderRadius: '9999px', background: `rgba(${featured.category === 'Research' ? '59,130,246' : '139,92,246'},0.15)`, color: featured.category === 'Research' ? '#60a5fa' : '#a78bfa', border: `1px solid rgba(${featured.category === 'Research' ? '59,130,246' : '139,92,246'},0.2)`, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {featured.category}
                </span>
                <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'rgba(59,130,246,0.08)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.15)', fontWeight: 500 }}>Featured</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', letterSpacing: '-0.03em', lineHeight: 1.2 }}>{featured.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '700px' }}>{featured.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{featured.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={featured.date}>{new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime} read</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Post Grid */}
        <section style={{ padding: '2rem 0 4rem' }} aria-labelledby="blog-posts-heading">
          <div className="container-xl">
            <h2 id="blog-posts-heading" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>All Posts</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1rem' }}>
              {rest.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'flex', flexDirection: 'column', padding: '1.4rem', background: 'rgba(17,17,17,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', textDecoration: 'none', transition: 'all 200ms ease', height: '100%' }}
                >
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: `${categoryColors[post.category] ?? '#3b82f6'}18`, color: categoryColors[post.category] ?? '#60a5fa', border: `1px solid ${categoryColors[post.category] ?? '#3b82f6'}30`, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {post.category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: '0.5rem', flex: 1 }}>{post.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '1rem' }}>{post.description}</p>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="container-xl" style={{ maxWidth: '800px' }}>
            <FAQBlock faqs={faqs} />
          </div>
        </section>
      </main>
    </>
  )
}
