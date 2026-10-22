import { cx } from '../../lib/format'
import './Logo.css'

/** "BE" mark — italic blue letters with a lightning bolt through the B — plus the company name. */
export function LogoMark({ size = 56 }: { size?: number }) {
  return (
    <svg className="logo__mark" viewBox="6 12 54 36" height={size} aria-hidden="true">
      <g transform="skewX(-12) translate(6 0)">
        <path
          fill="#1d5fd1"
          fillRule="evenodd"
          d="M12 14h13.5a7.8 7.8 0 0 1 5.2 13.9A8.4 8.4 0 0 1 26 46H12Z M19.5 20.5v5.5h5.2a2.75 2.75 0 0 0 0-5.5Z M19.5 32.5v7h6a3.5 3.5 0 0 0 0-7Z"
        />
        <path fill="#1d5fd1" d="M38.5 14h17v6.5h-10v6H54V33h-8.5v6.5h10V46h-17Z" />
      </g>
      {/* Lightning bolt cut through the B's stem */}
      <path fill="#fff" d="M17 13h7l-5.2 12.5h5.6L10 47l5.4-16.5H10Z" />
      <path fill="#1d5fd1" d="M18.6 15h3.6l-5.2 12.3h5L13.4 41l3.2-11.8h-4.3Z" />
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={cx('logo', light && 'logo--light')}>
      <LogoMark />
      <span className="logo__text">
        <strong>BHAWANI</strong>
        <em>ENTERPRISE</em>
      </span>
    </span>
  )
}
