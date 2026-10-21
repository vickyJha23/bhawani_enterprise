import { CategoryCard, CategoryGrid } from '../../components/category/CategoryCard'
import { Section } from '../../components/ui/Section'
import { categories } from '../../data'

export function CategoriesSection() {
  return (
    <Section
      id="categories"
      title="Our Product Categories"
      subtitle="Wide range of electrical, solar and earthing products for all your project needs."
      action={{ label: 'View All Products', to: '/products' }}
    >
      <CategoryGrid>
        {categories.map((c) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </CategoryGrid>
    </Section>
  )
}
