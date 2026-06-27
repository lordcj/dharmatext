/**
 * SchemaScript — Renders JSON-LD structured data
 * 
 * Server Component that outputs <script type="application/ld+json"> tags.
 * Accepts an array of schema objects for multi-schema pages.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

interface SchemaScriptProps {
  schemas: (Record<string, any> | null | undefined)[];
}

export default function SchemaScript({ schemas }: SchemaScriptProps) {
  const validSchemas = schemas.filter(Boolean);

  if (validSchemas.length === 0) return null;

  return (
    <>
      {validSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
