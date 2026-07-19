'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CommandItem {
  id: string
  label: string
  description?: string
  icon?: string
  href?: string
  action?: () => void
}

const commands: CommandItem[] = [
  { id: 'home',       label: 'Home',              description: 'Go to homepage',          icon: '🏠', href: '/' },
  { id: 'research',   label: 'Research',          description: 'AI research areas',        icon: '🔬', href: '/research' },
  { id: 'products',   label: 'Products',          description: 'Mentneo product suite',    icon: '📦', href: '/products' },
  { id: 'enterprise', label: 'Enterprise',        description: 'Enterprise AI solutions',  icon: '🏢', href: '/enterprise' },
  { id: 'developers', label: 'Developers',        description: 'APIs, SDKs, Docs',         icon: '⚡', href: '/developers' },
  { id: 'labs',       label: 'Labs',              description: 'Experimental AI projects', icon: '🧪', href: '/labs' },
  { id: 'education',  label: 'Education',         description: 'Learn AI with Mentneo',    icon: '🎓', href: '/education' },
  { id: 'blog',       label: 'Blog',              description: 'Latest news & research',   icon: '📝', href: '/blog' },
  { id: 'careers',    label: 'Careers',           description: 'Join the Mentneo team',    icon: '💼', href: '/careers' },
  { id: 'contact',    label: 'Contact',           description: 'Get in touch',             icon: '✉️', href: '#contact' },
  { id: 'llm',        label: 'Mentneo LLM',       description: 'Our language model',       icon: '🤖', href: '/products' },
  { id: 'chat',       label: 'Mentneo Chat',      description: 'AI chat interface',        icon: '💬', href: '/products' },
  { id: 'agents',     label: 'Mentneo Agents',    description: 'Autonomous AI agents',     icon: '🕹️', href: '/products' },
  { id: 'api',        label: 'API Reference',     description: 'Developer documentation',  icon: '📚', href: '/developers' },
]

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = query.trim()
    ? commands.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.description?.toLowerCase().includes(query.toLowerCase())
      )
    : commands

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[9999]"
            style={{ padding: '0 1rem' }}
          >
            <div className="glass-card overflow-hidden" style={{ borderColor: 'rgba(59,130,246,0.2)' }}>
              {/* Search input */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search commands, pages, products…"
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                  }}
                />
                <kbd style={{
                  fontSize: '0.65rem',
                  padding: '0.2rem 0.4rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.3)',
                }}>ESC</kbd>
              </div>

              {/* Results */}
              <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '0.5rem' }}>
                {filtered.length === 0 ? (
                  <div style={{ padding: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
                    No results found
                  </div>
                ) : (
                  filtered.map(item => (
                    <a
                      key={item.id}
                      href={item.href || '#'}
                      onClick={() => setOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        transition: 'background 150ms ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <span style={{ fontSize: '1.1rem', width: '20px', textAlign: 'center' }}>{item.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', fontWeight: 500 }}>{item.label}</div>
                        {item.description && (
                          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '0.1rem' }}>{item.description}</div>
                        )}
                      </div>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.2)" strokeWidth={2}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
