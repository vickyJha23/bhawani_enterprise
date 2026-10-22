import { Link } from 'react-router'
import { PageHeader } from '../../components/layout/PageHeader'
import { PageMeta } from '../../components/layout/PageMeta'
import { Button } from '../../components/ui/Button'
import { Icon } from '../../components/ui/Icon'
import { categories, getProductsByCategory } from '../../data'
import { categoryHref, productHref } from '../../lib/links'
import { cx, formatPrice } from '../../lib/format'
import { CtaBanner } from '../../sections/shared/CtaBanner'
import './SolutionsPage.css'

export function SolutionsPage() {
  return (
    <>
      <PageMeta title="Solutions" description="Complete earthing, lightning protection, solar protection and cable management solutions." />
      <PageHeader
        title="Solutions"
        subtitle="Everything you need to protect and connect solar, industrial, commercial and residential installations — from one supplier."
      />

      <section className="section">
        <div className="container solutions">
          {categories.map((c, i) => {
            const items = getProductsByCategory(c.id)
            return (
              <article key={c.id} id={c.id} className={cx('solution', i % 2 === 1 && 'solution--flip')}>
                <div className="solution__img">
                  <img src={c.image} alt={c.name} loading="lazy" />
                </div>
                <div className="solution__body">
                  {c.count && <span className="solution__count">{c.count}</span>}
                  <h2>{c.name}</h2>
                  <p>{c.description}</p>

                  {items.length > 0 && (
                    <ul className="solution__products">
                      {items.map((p) => (
                        <li key={p.id}>
                          <Link to={productHref(p.id)}>
                            <span>
                              <strong>{p.name}</strong> {p.subtitle}
                            </span>
                            <span className="solution__price">{formatPrice(p.price)}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Button to={categoryHref(c.id)} variant="blue">
                    View {c.name} <Icon name="arrow" size={16} />
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
