import { useState } from 'react'
import { Link, NavLink } from 'react-router'
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

  return (
    <header className="header">
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
          <Button variant="outline" square className="hide-sm" to="/products" aria-label="Search products">
            <Icon name="search" size={18} />
          </Button>
          <Button variant="blue" size="sm" className="hide-sm" onClick={() => openQuote()}>
            <Icon name="quote" size={16} /> Get Quote
          </Button>
          <WhatsAppButton size="sm" className="hide-sm">
            WhatsApp
          </WhatsAppButton>
          <button className="icon-btn show-sm" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
