import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cx } from '../../lib/format'
import { Icon } from './Icon'
import './Section.css'

type Props = {
  id?: string
  title: string
  /** Title used on phones (defaults to `title`) */
  mobileTitle?: string
  subtitle?: string
  /** Optional "View all" style link in the header; `shortLabel` is used on phones */
  action?: { label: string; shortLabel?: string; to: string }
  dark?: boolean
  /** With `dark`: switch to a white background on phones (as in the mobile design) */
  lightOnMobile?: boolean
  /** Light grey background */
  soft?: boolean
  children: ReactNode
}

/** Page section with a standard heading row, inside a centred container. */
export function Section({ id, title, mobileTitle, subtitle, action, dark = false, lightOnMobile = false, soft = false, children }: Props) {
  return (
    <section id={id} className={cx('section', dark && 'section--dark', lightOnMobile && 'section--light-sm', soft && 'section--soft')}>
      <div className="container">
        <div className="section__head">
          <div>
            <h2>
              {mobileTitle ? (
                <>
                  <span className="desktop-only">{title}</span>
                  <span className="mobile-only">{mobileTitle}</span>
                </>
              ) : (
                title
              )}
            </h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          {action && (
            <Link className="section__link" to={action.to}>
              {action.shortLabel ? (
                <>
                  <span className="desktop-only">{action.label}</span>
                  <span className="mobile-only">{action.shortLabel}</span>
                </>
              ) : (
                action.label
              )}
              <Icon name="arrow" size={16} className="desktop-only" />
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
