import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Icon } from '../ui/Icon'
import './PageHeader.css'

type Crumb = { label: string; to?: string }

type Props = {
  title: string
  subtitle?: string
  /** Breadcrumb trail after "Home"; the last item is the current page */
  crumbs?: Crumb[]
  children?: ReactNode
}

/** Dark banner at the top of inner pages, with breadcrumbs. */
export function PageHeader({ title, subtitle, crumbs = [{ label: title }], children }: Props) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <Icon name="chevron" size={12} className="breadcrumbs__sep" />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
