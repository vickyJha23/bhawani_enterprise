import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import { cx } from '../../lib/format'
import { waLink } from '../../lib/links'
import { WhatsAppIcon } from './Icon'
import './Button.css'

type Variant = 'orange' | 'blue' | 'green' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

type StyleProps = {
  variant?: Variant
  size?: Size
  block?: boolean
  /** Icon-only square button */
  square?: boolean
  className?: string
  children: ReactNode
}

type AnchorAttrs = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>

type ButtonProps = StyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { to?: never; href?: never }
/** Internal page link */
type RouteProps = StyleProps & AnchorAttrs & { to: string; href?: never }
/** External / tel: / mailto: link */
type LinkProps = StyleProps & AnchorAttrs & { href: string; to?: never; external?: boolean }

/** Renders a router <Link> for `to`, an <a> for `href`, otherwise a <button>. */
export function Button(props: ButtonProps | RouteProps | LinkProps) {
  const { variant = 'orange', size = 'md', block, square, className, children, ...rest } = props
  const cls = cx('btn', `btn--${variant}`, size !== 'md' && `btn--${size}`, block && 'btn--block', square && 'btn--square', className)

  if (rest.to !== undefined) {
    const { to, ...anchor } = rest as Omit<RouteProps, keyof StyleProps>
    return (
      <Link to={to} className={cls} {...anchor}>
        {children}
      </Link>
    )
  }

  if (rest.href !== undefined) {
    const { external, ...anchor } = rest as Omit<LinkProps, keyof StyleProps>
    return (
      <a className={cls} {...(external && { target: '_blank', rel: 'noreferrer' })} {...anchor}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...(rest as Omit<ButtonProps, keyof StyleProps>)}>
      {children}
    </button>
  )
}

type WhatsAppButtonProps = Omit<StyleProps, 'variant' | 'children'> & {
  /** Pre-filled WhatsApp message */
  message?: string
  children?: ReactNode
  'aria-label'?: string
}

/** Green button that opens a WhatsApp chat with a pre-filled message. */
export function WhatsAppButton({ message, children, size = 'md', ...rest }: WhatsAppButtonProps) {
  return (
    <Button variant="green" size={size} href={waLink(message)} external {...rest}>
      <WhatsAppIcon size={size === 'lg' ? 18 : 16} />
      {children}
    </Button>
  )
}
