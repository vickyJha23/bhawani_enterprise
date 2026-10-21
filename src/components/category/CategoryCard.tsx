import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cx } from '../../lib/format'
import { categoryHref } from '../../lib/links'
import type { Category } from '../../types'
import { Icon } from '../ui/Icon'
import './CategoryCard.css'

export function CategoryCard({ category, to = categoryHref(category.id) }: { category: Category; to?: string }) {
  return (
    <Link className="cat-card" to={to}>
      <div className={cx('cat-card__img', category.focusTop && 'focus-top')}>
        <img src={category.image} alt="" loading="lazy" />
      </div>
      <div className="cat-card__body">
        <div>
          <h3>{category.name}</h3>
          <span className="cat-card__count">{category.count}</span>
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
