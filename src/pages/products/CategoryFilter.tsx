import { categories } from '../../data'
import { cx } from '../../lib/format'
import type { CategoryId } from '../../types'

type Props = {
  active?: CategoryId
  onChange: (id: CategoryId | undefined) => void
}

export function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="chips" role="group" aria-label="Filter by category">
      <button className={cx('chip', !active && 'chip--active')} aria-pressed={!active} onClick={() => onChange(undefined)}>
        All
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          className={cx('chip', active === c.id && 'chip--active')}
          aria-pressed={active === c.id}
          onClick={() => onChange(c.id)}
        >
          {c.name}
        </button>
      ))}
    </div>
  )
}
