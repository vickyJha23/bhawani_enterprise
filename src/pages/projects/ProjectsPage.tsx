import { PageHeader } from '../../components/layout/PageHeader'
import { PageMeta } from '../../components/layout/PageMeta'
import { Icon, type IconName } from '../../components/ui/Icon'
import { Section } from '../../components/ui/Section'
import { CtaBanner } from '../../sections/shared/CtaBanner'
import { IndustriesSection } from '../../sections/shared/IndustriesSection'
import './ProjectsPage.css'

const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: 'quote', title: 'Share requirement', text: 'Send your BOQ, system size or product list on WhatsApp or through the quote form.' },
  { icon: 'headset', title: 'Technical check', text: 'We help match the right products — ratings, sizes and quantities — to your project.' },
  { icon: 'shield', title: 'Quote & confirm', text: 'Receive bulk pricing and delivery timeline. Confirm the order when ready.' },
  { icon: 'truck', title: 'Dispatch', text: 'Material is packed and dispatched to your site or warehouse, anywhere in India.' },
]

const scopes: { icon: IconName; title: string; text: string }[] = [
  { icon: 'sun', title: 'Rooftop & ground-mount solar', text: 'ACDB/DCDB, MC4 connectors, earthing kits and lightning arresters for every array size.' },
  { icon: 'factory', title: 'Industrial earthing', text: 'Earthing electrodes, pit covers and accessories for plants, panels and machinery.' },
  { icon: 'building', title: 'Commercial & residential', text: 'Lightning protection and earthing for buildings, complexes and housing projects.' },
  { icon: 'gear', title: 'Panel building', text: 'PVC cable trays and wiring accessories for control and distribution panels.' },
]

// TODO: add a gallery of completed project photos when available
export function ProjectsPage() {
  return (
    <>
      <PageMeta title="Projects" description="Product supply for solar, industrial, commercial and infrastructure projects across India." />
      <PageHeader
        title="Projects"
        subtitle="We supply complete earthing and electrical protection material for projects of every size — from single rooftops to large plants."
      />

      <Section title="Project scope we support" subtitle="Material supply for a wide range of installations.">
        <div className="scope-grid">
          {scopes.map((s) => (
            <div key={s.title} className="scope-card">
              <span className="scope-card__icon">
                <Icon name={s.icon} size={26} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section soft title="How we work" subtitle="A simple process from enquiry to delivery.">
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__num">{i + 1}</span>
              <Icon name={s.icon} size={28} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <IndustriesSection />
      <CtaBanner />
    </>
  )
}
