import { useState } from 'react'
import { products } from '../../data'
import { cx } from '../../lib/format'
import type { Product } from '../../types'
import './ProductGallery.css'

const MAX_THUMBS = 5

export function ProductGallery({ product }: { product: Product }) {
  // This product's photos first, then other product photos to fill the thumbnail row
  const photos = [...new Set([...product.images, ...products.flatMap((p) => p.images)])].slice(0, MAX_THUMBS)
  const [active, setActive] = useState(photos[0])

  return (
    <div>
      <div className="gallery__main">
        <img src={active} alt={product.name} />
      </div>
      <div className="gallery__thumbs">
        {photos.map((src) => (
          <button key={src} className={cx(src === active && 'active')} aria-label="Show image" onClick={() => setActive(src)}>
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
