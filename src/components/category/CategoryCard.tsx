import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cx } from '../../lib/format'
import { categoryHref } from '../../lib/links'
import type { Category } from '../../types'
import { Icon } from '../ui/Icon'
import './CategoryCard.css'

export function CategoryCard({ category, to = categoryHref(category.id) }: { category: Category; to?: string }) {
  return (
    <Link className={cx('cat-card', category.mobileOnly && 'mobile-only')} to={to}>
      <div className="cat-card__img">
        <img src={category.image} alt="" loading="lazy" />
      </div>
      <div className="cat-card__body">
        <div>
          <h3>
            <span className="desktop-only">{category.name}</span>
            <span className="mobile-only">{category.shortName}</span>
          </h3>
          {category.count && <span className="cat-card__count">{category.count}</span>}
        </div>
        <span className="cat-card__arrow">
          <Icon name="arrow" size={16} />
        </span>
      </div>
    </Link>
  )
}

export function CategoryGrid({ children }: { children: ReactNode }) {
  return <div className="cat-grid">{children}</div>
}
