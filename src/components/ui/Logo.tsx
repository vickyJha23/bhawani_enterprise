import { cx } from '../../lib/format'
import './Logo.css'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={cx('logo', light && 'logo--light')}>
      <svg viewBox="0 0 64 40" width="52" height="32" aria-hidden="true">
        <text x="0" y="33" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="38" fontStyle="italic" fill="#1d5fd1">
          BE
        </text>
        <path d="M4 14h22M2 22h18" stroke="#fff" strokeWidth="3" />
      </svg>
      <span className="logo__text">
        <strong>BHAWANI</strong>
        <em>ENTERPRISE</em>
      </span>
    </span>
  )
}
