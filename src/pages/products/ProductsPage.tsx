import { useSearchParams } from 'react-router'
import { PageHeader } from '../../components/layout/PageHeader'
import { PageMeta } from '../../components/layout/PageMeta'
import { ProductCard, ProductGrid } from '../../components/product/ProductCard'
import { Button } from '../../components/ui/Button'
import { Icon } from '../../components/ui/Icon'
import { getCategory, products } from '../../data'
import { CategoryFilter } from './CategoryFilter'
import './ProductsPage.css'

const matches = (text: string, query: string) => text.toLowerCase().includes(query.toLowerCase())

export function ProductsPage() {
  const [params, setParams] = useSearchParams()
  const category = getCategory(params.get('category'))
  const query = params.get('q') ?? ''

  const update = (key: 'category' | 'q', value: string | undefined) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: key === 'q', preventScrollReset: true })
  }

  const list = products.filter(
    (p) =>
      (!category || p.category === category.id) &&
      (!query || matches(p.name, query) || matches(p.subtitle, query) || matches(p.description, query)),
  )

  return (
    <>
      <PageMeta
        title={category ? category.name : 'Products'}
        description={category?.description ?? 'Browse earthing, solar protection, lightning protection and cable management products.'}
      />
      <PageHeader
        title={category ? category.name : 'Our Products'}
        subtitle={category?.description ?? 'Quality earthing, solar protection and electrical products with bulk pricing for projects.'}
        crumbs={category ? [{ label: 'Products', to: '/products' }, { label: category.name }] : [{ label: 'Products' }]}
      />

      <section className="section section--soft">
        <div className="container">
          <div className="products__toolbar">
            <CategoryFilter active={category?.id} onChange={(id) => update('category', id)} />
            <label className="products__search">
              <Icon name="search" size={18} />
              <input
                type="search"
                placeholder="Search products"
                value={query}
                onChange={(e) => update('q', e.target.value)}
                aria-label="Search products"
              />
            </label>
          </div>

          <p className="products__count muted">
            Showing {list.length} {list.length === 1 ? 'product' : 'products'}
          </p>

          {list.length > 0 ? (
            <ProductGrid columns={4}>
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </ProductGrid>
          ) : (
            <div className="products__empty">
              <h3>No products found</h3>
              <p className="muted">Try another category or search term — or ask us, we may still supply it.</p>
              <Button variant="outline" onClick={() => setParams({})}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
