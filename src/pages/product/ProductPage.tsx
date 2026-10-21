import { Link, useParams } from 'react-router'
import { PageMeta } from '../../components/layout/PageMeta'
import { Icon } from '../../components/ui/Icon'
import { getCategory, getProduct } from '../../data'
import { categoryHref } from '../../lib/links'
import type { Product } from '../../types'
import { NotFoundPage } from '../NotFoundPage'
import { ProductDetails } from './ProductDetails'
import { ProductGallery } from './ProductGallery'
import { ProductSummary } from './ProductSummary'
import { RelatedProducts } from './RelatedProducts'
import './ProductPage.css'

function share(product: Product) {
  const url = location.href
  if (navigator.share) navigator.share({ title: product.name, url }).catch(() => {})
  else navigator.clipboard?.writeText(url)
}

/** Route: /products/:id */
export function ProductPage() {
  const { id = '' } = useParams()
  const product = getProduct(id)
  if (!product) return <NotFoundPage title="Product not found" />

  const category = getCategory(product.category)

  return (
    <section className="pd" key={product.id}>
      <PageMeta title={product.name} description={product.description} />
      <div className="container">
        <div className="pd__bar">
          <Link to="/products" className="icon-btn" aria-label="Back to products">
            <Icon name="back" />
          </Link>
          <nav className="pd__crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link>
            {category && (
              <>
                {' '}
                / <Link to={categoryHref(category.id)}>{category.name}</Link>
              </>
            )}
            {' / '}
            <span aria-current="page">{product.name}</span>
          </nav>
          <span className="pd__bar-title">Product Details</span>
          <button className="icon-btn" aria-label="Share" onClick={() => share(product)}>
            <Icon name="share" />
          </button>
        </div>

        <div className="pd__grid">
          <ProductGallery key={product.id} product={product} />
          <div>
            <ProductSummary product={product} />
            <ProductDetails product={product} />
          </div>
        </div>

        <RelatedProducts product={product} />
      </div>
    </section>
  )
}
