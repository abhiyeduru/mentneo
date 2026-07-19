'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [show, setShow] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 18 + 5
      if (p >= 100) {
        p = 100
        clearInterval(interval)
        setTimeout(() => setShow(false), 500)
      }
      setProgress(Math.min(p, 100))
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background grid */}
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

          {/* Glow orbs */}
          <div className="aurora-glow" style={{
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
            top: '20%', left: '30%',
          }} />
          <div className="aurora-glow" style={{
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)',
            top: '50%', right: '25%',
            animationDelay: '2s',
          }} />

          <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '2.5rem' }}
            >
              {/* Animated logo mark */}
              <div style={{
                width: '72px',
                height: '72px',
                margin: '0 auto 1.25rem',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                borderRadius: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(59,130,246,0.4), 0 0 80px rgba(139,92,246,0.2)',
                position: 'relative',
              }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M6 18L18 6L30 18L18 30L6 18Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M12 18L18 12L24 18L18 24L12 18Z" fill="white" opacity="0.9"/>
                  <circle cx="18" cy="18" r="3" fill="white"/>
                </svg>

                {/* Orbiting ring */}
                <div style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '50%',
                  border: '1px solid rgba(59,130,246,0.3)',
                  animation: 'spin-slow 3s linear infinite',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-3px',
                    left: '50%',
                    width: '6px',
                    height: '6px',
                    background: '#3b82f6',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 8px #3b82f6',
                  }} />
                </div>
              </div>

              <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff' }}>
                Mentneo
              </div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: '0.3rem' }}>
                Artificial Intelligence Research
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ width: '200px', margin: '0 auto' }}
            >
              <div style={{
                height: '2px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '9999px',
                overflow: 'hidden',
              }}>
                <motion.div
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    borderRadius: '9999px',
                    boxShadow: '0 0 10px rgba(59,130,246,0.6)',
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.15 }}
                />
              </div>
              <div style={{
                marginTop: '0.75rem',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.08em',
                fontVariantNumeric: 'tabular-nums',
              }}>
                {Math.round(progress)}%
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
