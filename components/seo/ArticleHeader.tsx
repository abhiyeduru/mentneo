import Link from 'next/link'

interface ArticleHeaderProps {
  category: string
  categoryHref?: string
  title: string
  description?: string
  authorName: string
  authorRole?: string
  authorHref?: string
  datePublished: string
  readingTime?: string
  tags?: string[]
}

export default function ArticleHeader({
  category,
  categoryHref = '#',
  title,
  description,
  authorName,
  authorRole,
  authorHref = '#',
  datePublished,
  readingTime,
  tags = [],
}: ArticleHeaderProps) {
  const date = new Date(datePublished)
  const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header style={{ marginBottom: '3rem' }}>
      {/* Category */}
      <div style={{ marginBottom: '1rem' }}>
        <Link
          href={categoryHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: 'rgba(59,130,246,0.1)',
            color: '#60a5fa',
            border: '1px solid rgba(59,130,246,0.2)',
            textDecoration: 'none',
          }}
        >
          {category}
        </Link>
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#fff',
          marginBottom: '1rem',
        }}
      >
        {title}
      </h1>

      {/* Description */}
      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.75,
            marginBottom: '1.5rem',
            maxWidth: '680px',
          }}
        >
          {description}
        </p>
      )}

      {/* Author + Meta row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Author avatar placeholder */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#fff',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {authorName.charAt(0)}
          </div>
          <div>
            <Link
              href={authorHref}
              rel="author"
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
              }}
            >
              {authorName}
            </Link>
            {authorRole && (
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
                {authorRole}
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.35)',
            flexWrap: 'wrap',
          }}
        >
          <time dateTime={datePublished}>{formatted}</time>
          {readingTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{readingTime} read</span>
            </>
          )}
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </header>
  )
}
