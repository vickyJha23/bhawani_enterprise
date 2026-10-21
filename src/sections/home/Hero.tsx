import { Button } from '../../components/ui/Button'
import { Icon } from '../../components/ui/Icon'
import { useQuote } from '../../context/quote-context'
import { highlights } from '../../data'
import { cx } from '../../lib/format'
import { HeroImage } from './HeroImage'
import './Hero.css'

/** Number of highlight icons shown on small screens */
const MOBILE_HIGHLIGHTS = 3

export function Hero() {
  const { openQuote } = useQuote()

  return (
    <section className="hero">
      <div className="hero__panels" aria-hidden="true" />
      <div className="container hero__inner">
        <div>
          <p className="hero__eyebrow">Manufacturer & Supplier of</p>
          <h1>
            Complete <span className="nowrap">Earthing &amp;</span>
            <br />
            Electrical Protection
            <br />
            <span className="hero__accent">Solutions</span>
          </h1>
          <p className="hero__lead">Reliable Products for Solar, Industrial, Commercial and Infrastructure Projects.</p>

          <div className="hero__cta">
            <Button size="lg" to="/products">
              View Products <Icon name="arrow" size={18} />
            </Button>
            <Button variant="ghost" size="lg" onClick={() => openQuote()}>
              Get Bulk Quote
            </Button>
          </div>

          <ul className="hero__highlights">
            {highlights.map((h, i) => (
              <li key={h.label} className={cx(i >= MOBILE_HIGHLIGHTS && 'hide-sm')}>
                <Icon name={h.icon} size={30} strokeWidth={1.4} />
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <HeroImage />
      </div>
    </section>
  )
}
