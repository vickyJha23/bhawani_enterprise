import { PageHeader } from '../../components/layout/PageHeader'
import { PageMeta } from '../../components/layout/PageMeta'
import { CheckList } from '../../components/ui/CheckList'
import { Icon } from '../../components/ui/Icon'
import { Section } from '../../components/ui/Section'
import { site } from '../../config/site'
import { categories, highlights, images } from '../../data'
import { CtaBanner } from '../../sections/shared/CtaBanner'
import { IndustriesSection } from '../../sections/shared/IndustriesSection'
import './AboutPage.css'

// TODO: replace with the company's own story, founding year, facility details etc.
const reasons = [
  'Complete range — earthing, lightning, solar protection and cable management from one supplier',
  'Branded components such as Havells MCBs in our distribution boxes',
  'Bulk pricing for EPC companies, contractors and dealers',
  'Pan India dispatch for project sites',
  'Technical guidance on product selection',
  'Custom ACDB / DCDB configurations on request',
]

export function AboutPage() {
  return (
    <>
      <PageMeta title="About Us" description={site.about} />
      <PageHeader title="About Us" subtitle={site.about} />

      <section className="section">
        <div className="container about">
          <div className="about__text">
            <span className="about__eyebrow">Who we are</span>
            <h2>Reliable protection products for every project</h2>
            <p>
              {site.name} manufactures and supplies earthing, lightning protection, solar protection and cable management
              products. We work with solar EPC companies, electrical contractors, dealers and industries to deliver dependable
              products at project-friendly prices.
            </p>
            <p>
              Our range covers {categories.length} product categories — from copper bonded earthing kits and pit covers to
              pre-wired ACDB/DCDB combos, MC4 connectors and PVC cable trays.
            </p>
            <h3>Why choose us</h3>
            <CheckList items={reasons} />
          </div>
          <div className="about__media">
            <img src={images.acdb} alt="Solar ACDB and DCDB boxes" loading="lazy" />
            <img src={images.earthing} alt="Copper earthing rods and lightning arrester" loading="lazy" />
          </div>
        </div>
      </section>

      <Section soft title="What we offer">
        <div className="about__values">
          {highlights.map((h) => (
            <div key={h.label} className="about__value">
              <Icon name={h.icon} size={32} strokeWidth={1.5} />
              <strong>{h.label}</strong>
            </div>
          ))}
        </div>
      </Section>

      <IndustriesSection />
      <CtaBanner />
    </>
  )
}
