interface SchemaScriptProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

/** Drop-in JSON-LD injector for any page */
export default function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
