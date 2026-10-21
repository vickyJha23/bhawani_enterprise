import { Button, WhatsAppButton } from '../../components/ui/Button'
import { Icon } from '../../components/ui/Icon'
import { useQuote } from '../../context/quote-context'
import { formatPrice } from '../../lib/format'
import { productEnquiry } from '../../lib/links'
import type { Product } from '../../types'
import './ProductSummary.css'

export function ProductSummary({ product }: { product: Product }) {
  const { openQuote } = useQuote()

  return (
    <div className="summary">
      <div className="summary__title">
        <div>
          <h1>{product.name}</h1>
          <p className="summary__sub">{product.subtitle}</p>
        </div>
        <span className="summary__badge">In Stock</span>
      </div>

      <p className="summary__price">
        {formatPrice(product.price)} <small>/ {product.unit}</small>
      </p>
      <p className="muted small">*Bulk pricing available</p>
      <p className="summary__desc">{product.description}</p>

      <div className="summary__cta">
        <Button variant="blue" size="lg" block onClick={() => openQuote(product.name)}>
          <Icon name="quote" size={18} /> Get Bulk Quote
        </Button>
        <WhatsAppButton size="lg" block message={productEnquiry(product)}>
          WhatsApp Enquiry
        </WhatsAppButton>
      </div>
    </div>
  )
}
