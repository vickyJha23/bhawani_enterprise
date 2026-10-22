import { ProductCard, ProductGrid } from '../../components/product/ProductCard'
import { Section } from '../../components/ui/Section'
import { featuredProducts } from '../../data'

export function FeaturedProducts() {
  return (
    <Section
      id="products"
      dark
      lightOnMobile
      title="Featured Products"
      subtitle="High quality products for solar, industrial and electrical applications."
      action={{ label: 'View All', shortLabel: 'View All', to: '/products' }}
    >
      <ProductGrid>
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ProductGrid>
    </Section>
  )
}
