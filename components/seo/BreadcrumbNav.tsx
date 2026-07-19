import Link from 'next/link'
import type { BreadcrumbItem } from '@/lib/schema'
import { breadcrumbSchema } from '@/lib/schema'

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mentneo.com'

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const allItems = [
    { name: 'Home', url: '/' },
    ...items,
  ]

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(
            allItems.map(i => ({ name: i.name, url: i.url.startsWith('http') ? i.url : `${BASE_URL}${i.url}` }))
          )),
        }}
      />

      {/* Visual breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
        <ol
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.25rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.8rem',
          }}
        >
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1
            return (
              <li
                key={i}
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                {isLast ? (
                  <span
                    aria-current="page"
                    style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.url}
                      className="breadcrumb-link"
                    >
                      {item.name}
                    </Link>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
