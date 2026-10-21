import { Link } from 'react-router'
import { navLinks, site } from '../../config/site'
import { categories, products } from '../../data'
import { categoryHref, mailLink, productHref, telLink, waLink } from '../../lib/links'
import { Icon, WhatsAppIcon } from '../ui/Icon'
import { Logo } from '../ui/Logo'
import './Footer.css'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo light />
          <p className="footer__about">{site.about}</p>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          {navLinks
            .filter((l) => l.to !== '/')
            .map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
        </div>

        <div className="footer__col">
          <h4>Categories</h4>
          {categories.map((c) => (
            <Link key={c.id} to={categoryHref(c.id)}>
              {c.name}
            </Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Products</h4>
          {products.map((p) => (
            <Link key={p.id} to={productHref(p.id)}>
              {p.name}
            </Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href={telLink}>
            <Icon name="phone" size={16} /> {site.phone}
          </a>
          <a href={mailLink}>
            <Icon name="mail" size={16} /> {site.email}
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={16} /> WhatsApp Enquiry
          </a>
          <span>
            <Icon name="pin" size={16} /> {site.address}
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
