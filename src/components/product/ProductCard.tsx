import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useQuote } from '../../context/quote-context'
import { cx, formatPrice } from '../../lib/format'
import { productEnquiry, productHref } from '../../lib/links'
import type { Product } from '../../types'
import { Button, WhatsAppButton } from '../ui/Button'
import './ProductCard.css'

type Props = {
  product: Product
  /** Show the Enquire Now / WhatsApp buttons */
  actions?: boolean
}

export function ProductCard({ product, actions = true }: Props) {
  const { openQuote } = useQuote()
  const href = productHref(product.id)

  return (
    <article className="prod-card">
      <Link to={href} className={cx('prod-card__img', product.category === 'lightning' && 'focus-top')}>
        <img src={product.images[0]} alt={product.name} loading="lazy" />
      </Link>
      <div className="prod-card__body">
        <Link to={href}>
          <h3>{product.name}</h3>
        </Link>
        <p>{product.subtitle}</p>
        <strong className="prod-card__price">{formatPrice(product.price)}</strong>
        {actions && (
          <div className="prod-card__actions">
            <Button size="sm" onClick={() => openQuote(product.name)}>
              Enquire Now
            </Button>
            <WhatsAppButton size="sm" square message={productEnquiry(product)} aria-label={`WhatsApp enquiry for ${product.name}`} />
          </div>
        )}
      </div>
    </article>
  )
}

export function ProductGrid({ columns = 6, children }: { columns?: 4 | 6; children: ReactNode }) {
  return <div className={cx('prod-grid', columns === 4 && 'prod-grid--4')}>{children}</div>
}
