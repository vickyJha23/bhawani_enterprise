import { useState } from 'react'
import { Link, NavLink, useMatch } from 'react-router'
import { navLinks, type NavLink as NavItem } from '../../config/site'
import { useQuote } from '../../context/quote-context'
import { categories } from '../../data'
import { cx } from '../../lib/format'
import { categoryHref } from '../../lib/links'
import { Button, WhatsAppButton } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'
import './Header.css'

const menuHref = (menu: NonNullable<NavItem['categoryMenu']>, id: string) =>
  menu === 'products' ? categoryHref(id) : `/solutions#${id}`

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { openQuote } = useQuote()
  const close = () => setMenuOpen(false)
  // Product pages use their own app-style top bar on phones (as in the design)
  const onProductPage = useMatch('/products/:id') !== null

  return (
    <header className={cx('header', onProductPage && 'header--product')}>
      <div className="container header__inner">
        <Link to="/" aria-label="Bhawani Enterprise home" onClick={close}>
          <Logo />
        </Link>

        <nav className={cx('nav', menuOpen && 'nav--open')}>
          {navLinks.map((link) => (
            <div key={link.to} className="nav__item">
              <NavLink to={link.to} end={link.to === '/'} className="nav__link" onClick={close}>
                {link.label}
                {link.categoryMenu && <Icon name="chevron" size={14} />}
              </NavLink>
              {link.categoryMenu && (
                <div className="nav__menu">
                  {categories.map((c) => (
                    <Link key={c.id} to={menuHref(link.categoryMenu!, c.id)} onClick={close}>
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header__actions">
          <Link to="/products" className="icon-btn hide-sm" aria-label="Search products">
            <Icon name="search" size={24} strokeWidth={2.2} />
          </Link>
          <Button variant="blue" className="hide-sm" aria-label="Get Quote" onClick={() => openQuote()}>
            <Icon name="quote" size={18} /> <span className="header__quote-label">Get Quote</span>
          </Button>
          <WhatsAppButton className="hide-sm" aria-label="WhatsApp">
            <span className="header__wa-label">WhatsApp</span>
          </WhatsAppButton>
          <button className="icon-btn show-sm" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
