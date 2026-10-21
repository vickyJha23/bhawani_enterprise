import { site } from '../../config/site'

/** Sets the document title and description (React hoists these into <head>). */
export function PageMeta({ title, description }: { title?: string; description?: string }) {
  return (
    <>
      <title>{title ? `${title} | ${site.name}` : `${site.name} | Earthing & Electrical Protection Solutions`}</title>
      {description && <meta name="description" content={description} />}
    </>
  )
}
