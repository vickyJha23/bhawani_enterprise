import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cx } from '../../lib/format'
import { Icon } from './Icon'
import './Section.css'

type Props = {
  id?: string
  title: string
  subtitle?: string
  /** Optional "View all" style link in the header */
  action?: { label: string; to: string }
  dark?: boolean
  /** Light grey background */
  soft?: boolean
  children: ReactNode
}

/** Page section with a standard heading row, inside a centred container. */
export function Section({ id, title, subtitle, action, dark = false, soft = false, children }: Props) {
  return (
    <section id={id} className={cx('section', dark && 'section--dark', soft && 'section--soft')}>
      <div className="container">
        <div className="section__head">
          <div>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          {action && (
            <Link className="section__link" to={action.to}>
              {action.label} <Icon name="arrow" size={16} />
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
