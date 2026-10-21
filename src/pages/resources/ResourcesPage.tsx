import { Link } from 'react-router'
import { PageHeader } from '../../components/layout/PageHeader'
import { PageMeta } from '../../components/layout/PageMeta'
import { Accordion } from '../../components/ui/Accordion'
import { WhatsAppButton } from '../../components/ui/Button'
import { Icon } from '../../components/ui/Icon'
import { Section } from '../../components/ui/Section'
import { faqs, getCategory, products } from '../../data'
import { productHref } from '../../lib/links'
import './ResourcesPage.css'

export function ResourcesPage() {
  return (
    <>
      <PageMeta title="Resources" description="Product datasheets and answers to common questions about earthing, solar protection and MC4 connectors." />
      <PageHeader title="Resources" subtitle="Datasheets, technical information and answers to common questions." />

      <Section title="Product Datasheets" subtitle="Request the datasheet for any product — we'll send it on WhatsApp.">
        <div className="datasheets">
          {products.map((p) => (
            <div key={p.id} className="datasheet">
              <span className="datasheet__icon">
                <Icon name="quote" size={22} />
              </span>
              <div className="datasheet__info">
                <Link to={productHref(p.id)}>
                  <strong>{p.name}</strong>
                </Link>
                <span>
                  {p.subtitle} · {getCategory(p.category)?.name}
                </span>
              </div>
              <WhatsAppButton size="sm" message={`Please share the datasheet for ${p.name} (${p.subtitle}).`}>
                Request
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </Section>

      <Section soft title="Frequently Asked Questions">
        <div className="faqs">
          {faqs.map((f, i) => (
            <Accordion key={f.q} title={f.q} open={i === 0}>
              <p>{f.a}</p>
            </Accordion>
          ))}
        </div>
      </Section>
    </>
  )
}
