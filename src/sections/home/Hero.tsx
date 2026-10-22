import { Button } from '../../components/ui/Button'
import { Icon } from '../../components/ui/Icon'
import { useQuote } from '../../context/quote-context'
import { heroBackdrop, highlights } from '../../data'
import { cx } from '../../lib/format'
import { HeroImage } from './HeroImage'
import './Hero.css'

export function Hero() {
  const { openQuote } = useQuote()

  return (
    <section className="hero">
      {/* Darkened solar-panel scene behind the whole hero */}
      <div className="hero__backdrop" style={{ backgroundImage: `url(${heroBackdrop})` }} aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">Manufacturer &amp; Supplier of</p>
          <h1>
            <span>Complete Earthing &amp;</span>
            <span>Electrical Protection</span>
            <span className="hero__accent">Solutions</span>
          </h1>
          <p className="hero__lead">Reliable Products for Solar, Industrial, Commercial and Infrastructure Projects.</p>

          <div className="hero__cta">
            <Button size="lg" to="/products">
              View Products <Icon name="arrow" size={18} />
            </Button>
            <Button variant="ghost" size="lg" onClick={() => openQuote()}>
              Get <span className="desktop-only">Bulk</span> Quote
            </Button>
          </div>

          <ul className="hero__highlights">
            {highlights.map((h) => (
              <li key={h.label} className={cx(!h.mobileLabel && 'desktop-only')}>
                <Icon name={h.icon} size={40} strokeWidth={1.3} />
                <span className="desktop-only">{h.label}</span>
                {h.mobileLabel && <span className="mobile-only">{h.mobileLabel}</span>}
              </li>
            ))}
          </ul>
        </div>

        <HeroImage />
      </div>
    </section>
  )
}
