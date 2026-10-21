import { Accordion } from '../../components/ui/Accordion'
import { CheckList } from '../../components/ui/CheckList'
import { waLink } from '../../lib/links'
import type { Product } from '../../types'
import { SpecsTable } from './SpecsTable'

export function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      <Accordion title="Product Specifications" open>
        <SpecsTable specs={product.specs} />
      </Accordion>
      <Accordion title="Features & Benefits">
        <CheckList items={product.features} />
      </Accordion>
      <Accordion title="Applications">
        <CheckList items={product.applications} />
      </Accordion>
      <Accordion title="Download Datasheet">
        <p className="muted">
          Datasheet available on request.{' '}
          <a href={waLink(`Please share the datasheet for ${product.name}.`)} target="_blank" rel="noreferrer">
            Request on WhatsApp
          </a>
        </p>
      </Accordion>
    </>
  )
}
