'use client'

import Link from 'next/link'

const footerLinks = {
  Products: [
    { label: 'Mentneo LLM',    href: '/products' },
    { label: 'Mentneo Chat',   href: '/products' },
    { label: 'Mentneo Agents', href: '/products' },
    { label: 'Mentneo Voice',  href: '/products' },
    { label: 'Mentneo Search', href: '/products' },
    { label: 'Mentneo Cloud',  href: '/products' },
    { label: 'Mentneo APIs',   href: '/developers' },
  ],
  Research: [
    { label: 'Publications',     href: '#publications' },
    { label: 'AI Safety',        href: '/research/ai-safety' },
    { label: 'Language Models',  href: '/research/large-language-models' },
    { label: 'Agentic AI',       href: '/research/agentic-ai' },
    { label: 'Multimodal AI',    href: '/research' },
    { label: 'Benchmarks',       href: '/research' },
  ],
  Developers: [
    { label: 'API Docs',    href: '/developers' },
    { label: 'SDKs',        href: '/developers' },
    { label: 'Playground',  href: '/developers' },
    { label: 'Models',      href: '/developers' },
    { label: 'Community',   href: '/developers' },
    { label: 'GitHub',      href: 'https://github.com' },
  ],
  Enterprise: [
    { label: 'Healthcare',    href: '/enterprise/healthcare' },
    { label: 'Finance',       href: '/enterprise/finance' },
    { label: 'Government',    href: '/enterprise/government' },
    { label: 'Education',     href: '/enterprise' },
    { label: 'Legal',         href: '/enterprise' },
    { label: 'Contact Sales', href: '#contact' },
  ],
  Company: [
    { label: 'About',   href: '/about' },
    { label: 'Blog',    href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Labs',    href: '#labs' },
    { label: 'Press',   href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  {
    label: 'Twitter/X', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'LinkedIn', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'GitHub', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
  },
  {
    label: 'Discord', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.03.05a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Newsletter */}
        <div
          className="footer-newsletter"
          style={{
            padding: 'clamp(2.5rem, 6vw, 4rem) 0 clamp(1.5rem, 4vw, 3rem)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
              Stay at the frontier of AI
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
              Research updates, product launches, and industry insights.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', width: '100%', maxWidth: '400px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
              style={{
                flex: 1, minWidth: '160px',
                padding: '0.625rem 1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                color: '#fff', fontSize: '0.85rem',
                fontFamily: 'inherit', outline: 'none',
              }}
            />
            <button className="btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.85rem', borderRadius: '6px', flexShrink: 0 }}>
              <span>Subscribe</span>
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div
          className="footer-links-grid"
          style={{
            padding: 'clamp(2rem, 5vw, 3rem) 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '2rem 1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.875rem',
              }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            padding: 'clamp(1.25rem, 3vw, 1.75rem) 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Logo + copyright */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '22px', height: '22px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="12" height="12" viewBox="0 0 36 36" fill="none">
                  <path d="M6 18L18 6L30 18L18 30L6 18Z" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="18" cy="18" r="3" fill="white"/>
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff' }}>Mentneo</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem' }}>
              © {new Date().getFullYear()} Mentneo, Inc. All rights reserved.
            </span>
          </div>

          {/* Legal links */}
          <div className="footer-legal" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms',   href: '/terms' },
              { label: 'Security', href: '/security' },
              { label: 'Cookies', href: '#' },
            ].map(item => (
              <Link key={item.label} href={item.href} className="footer-link" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="footer-social" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="footer-social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.45);
          font-size: 0.82rem;
          text-decoration: none;
          transition: color 200ms ease;
          display: inline-block;
        }
        .footer-link:hover { color: rgba(255,255,255,0.9); }
        .footer-social-link {
          color: rgba(255,255,255,0.3);
          transition: color 200ms ease;
          display: flex;
          align-items: center;
          min-width: 32px;
          min-height: 32px;
          justify-content: center;
        }
        .footer-social-link:hover { color: rgba(255,255,255,0.8); }

        @media (max-width: 640px) {
          .footer-newsletter { flex-direction: column !important; }
          .footer-newsletter > div:last-child { width: 100% !important; max-width: 100% !important; }
          .footer-links-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 360px) {
          .footer-links-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
