'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Research',   href: '/research' },
  { label: 'Products',   href: '/products' },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Developers', href: '/developers' },
  { label: 'Blog',       href: '/blog' },
  { label: 'About',      href: '/about' },
]

const mobileLinks = [
  ...navLinks,
  { label: 'Education', href: '#education' },
  { label: 'Labs',      href: '#labs' },
  { label: 'Careers',   href: '/careers' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar({ onCommandOpen }: { onCommandOpen?: () => void }) {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change or ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          transition: 'padding 300ms ease, background 300ms ease',
          padding: scrolled ? '0.625rem 0' : '1rem 0',
          background: scrolled || mobileOpen ? 'rgba(5,5,5,0.95)' : 'transparent',
          backdropFilter: scrolled || mobileOpen ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container-xl" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobile}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}
            aria-label="Mentneo Home"
          >
            <div style={{
              width: '30px', height: '30px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px rgba(59,130,246,0.3)',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
                <path d="M6 18L18 6L30 18L18 30L6 18Z" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="18" cy="18" r="3" fill="white"/>
              </svg>
            </div>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
              Mentneo
            </span>
          </Link>

          {/* Desktop nav links */}
          <div
            className="hide-mobile"
            style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', flex: 1, overflow: 'hidden' }}
          >
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link animated-underline"
                style={{ padding: '0.4rem 0.65rem', whiteSpace: 'nowrap', fontSize: '0.82rem' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginLeft: 'auto', flexShrink: 0 }}>
            {/* Search / command — hidden on very small screens */}
            <button
              onClick={onCommandOpen}
              className="nav-search hide-mobile"
              aria-label="Open search"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                fontFamily: 'inherit',
                minHeight: '32px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
            >
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <span>Search</span>
              <kbd style={{ fontSize: '0.58rem', padding: '0.1rem 0.3rem', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}>⌘K</kbd>
            </button>

            {/* Get Started — hidden on mobile, replaced by menu */}
            <Link
              href="#contact"
              className="btn-primary hide-mobile"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.78rem', borderRadius: '6px', minHeight: '34px' }}
            >
              <span>Get Started</span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="show-mobile"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.375rem',
                color: 'rgba(255,255,255,0.8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '6px',
                minWidth: '40px', minHeight: '40px',
                transition: 'background 200ms ease',
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                {mobileOpen
                  ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" d="M4 6h16M4 12h12M4 18h16"/>
                }
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobile}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 998,
              backdropFilter: 'blur(4px)',
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0,
              width: 'min(320px, 85vw)',
              background: '#090909',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Menu header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.1rem 1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <Link
                href="/"
                onClick={closeMobile}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
              >
                <div style={{
                  width: '26px', height: '26px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  borderRadius: '7px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="14" height="14" viewBox="0 0 36 36" fill="none">
                    <path d="M6 18L18 6L30 18L18 30L6 18Z" stroke="white" strokeWidth="1.5" fill="none"/>
                    <circle cx="18" cy="18" r="3" fill="white"/>
                  </svg>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Mentneo</span>
              </Link>
              <button
                onClick={closeMobile}
                aria-label="Close menu"
                style={{
                  background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer',
                  width: '34px', height: '34px', borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav style={{ flex: 1, overflowY: 'auto', padding: '0.5rem 0' }}>
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '0.875rem 1.25rem',
                      color: 'rgba(255,255,255,0.75)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 150ms ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    {link.label}
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer CTAs */}
            <div style={{
              padding: '1rem 1.25rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', flexDirection: 'column', gap: '0.625rem',
            }}>
              <Link
                href="#contact"
                onClick={closeMobile}
                className="btn-primary"
                style={{ justifyContent: 'center', padding: '0.75rem', fontSize: '0.875rem' }}
              >
                <span>Get Started</span>
              </Link>
              <button
                onClick={() => { onCommandOpen?.(); closeMobile() }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.65rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '0.5rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                Search
                <kbd style={{ fontSize: '0.6rem', padding: '0.1rem 0.3rem', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}>⌘K</kbd>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
