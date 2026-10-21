import { ProductCard, ProductGrid } from '../../components/product/ProductCard'
import { getRelatedProducts } from '../../data'
import type { Product } from '../../types'

export function RelatedProducts({ product }: { product: Product }) {
  return (
    <>
      <h2 className="pd__related-title">You may also need</h2>
      <ProductGrid columns={4}>
        {getRelatedProducts(product).map((p) => (
          <ProductCard key={p.id} product={p} actions={false} />
        ))}
      </ProductGrid>
    </>
  )
}
