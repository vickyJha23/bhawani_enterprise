import { ProductCard, ProductGrid } from '../../components/product/ProductCard'
import { Section } from '../../components/ui/Section'
import { products } from '../../data'

export function FeaturedProducts() {
  return (
    <Section
      id="products"
      dark
      title="Featured Products"
      subtitle="High quality products for solar, industrial and electrical applications."
      action={{ label: 'View All', to: '/products' }}
    >
      <ProductGrid>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ProductGrid>
    </Section>
  )
}
