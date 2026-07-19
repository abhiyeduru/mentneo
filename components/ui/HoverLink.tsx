'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'

interface HoverLinkProps {
  href: string
  className?: string
  style?: CSSProperties
  hoverStyle?: CSSProperties
  children: React.ReactNode
  id?: string
}

/**
 * A Link component that supports hover state changes.
 * Used to add interactive hover styles in Server Component pages.
 */
export function HoverLink({ href, className, style, hoverStyle, children, id }: HoverLinkProps) {
  return (
    <Link
      href={href}
      id={id}
      className={className}
      style={style}
      onMouseEnter={e => { if (hoverStyle) Object.assign(e.currentTarget.style, hoverStyle) }}
      onMouseLeave={e => { if (style) Object.assign(e.currentTarget.style, style) }}
    >
      {children}
    </Link>
  )
}

interface HoverCardProps {
  style?: CSSProperties
  hoverStyle?: CSSProperties
  children: React.ReactNode
  className?: string
  as?: 'div' | 'article' | 'section' | 'li'
}

/**
 * A div wrapper component that supports hover state changes.
 */
export function HoverCard({ style, hoverStyle, children, className, as: Tag = 'div' }: HoverCardProps) {
  return (
    <Tag
      className={className}
      style={style}
      onMouseEnter={e => { if (hoverStyle) Object.assign(e.currentTarget.style, hoverStyle) }}
      onMouseLeave={e => { if (style) Object.assign(e.currentTarget.style, style) }}
    >
      {children}
    </Tag>
  )
}
