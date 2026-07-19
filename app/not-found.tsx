import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Page Not Found — Mentneo',
  description: 'The page you are looking for does not exist.',
  path: '/404',
  noIndex: true,
})

export default function NotFound() {
  return (
    <main
      id="main-content"
      style={{
        background: '#050505',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: '6rem',
          fontWeight: 900,
          letterSpacing: '-0.08em',
          lineHeight: 1,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(59,130,246,0.4) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1.5rem',
        }}>
          404
        </div>

        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto 2rem' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to building with AI.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary" id="404-go-home">
            <span>Go Home</span>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="/research" className="btn-secondary" id="404-research">Explore Research</Link>
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Research', href: '/research' },
            { label: 'Products', href: '/products' },
            { label: 'Developers', href: '/developers' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="link-subtle">
              {link.label}
            </Link>
          ))}

        </div>
      </div>
    </main>
  )
}
