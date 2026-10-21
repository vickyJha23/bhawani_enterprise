import type { ReactNode } from 'react'
import { PageHeader } from '../../components/layout/PageHeader'
import { PageMeta } from '../../components/layout/PageMeta'
import { QuoteForm } from '../../components/quote/QuoteForm'
import { Icon, WhatsAppIcon } from '../../components/ui/Icon'
import { site } from '../../config/site'
import { mailLink, telLink, waLink } from '../../lib/links'
import './ContactPage.css'

type ContactItem = { icon: ReactNode; label: string; value: string; href?: string; external?: boolean }

const contacts: ContactItem[] = [
  { icon: <Icon name="phone" />, label: 'Call us', value: site.phone, href: telLink },
  { icon: <WhatsAppIcon />, label: 'WhatsApp', value: 'Chat with our sales team', href: waLink(), external: true },
  { icon: <Icon name="mail" />, label: 'Email', value: site.email, href: mailLink },
  { icon: <Icon name="pin" />, label: 'Address', value: site.address },
  { icon: <Icon name="headset" />, label: 'Business hours', value: site.hours },
]

export function ContactPage() {
  return (
    <>
      <PageMeta title="Contact Us" description={`Contact ${site.name} for bulk pricing on earthing and electrical protection products.`} />
      <PageHeader title="Contact Us" subtitle="Tell us what you need — we'll get back with the best bulk pricing and delivery timeline." />

      <section className="section section--soft">
        <div className="container contact">
          <div className="contact__list">
            {contacts.map((c) => {
              const body = (
                <>
                  <span className="contact__icon">{c.icon}</span>
                  <span>
                    <small>{c.label}</small>
                    <strong>{c.value}</strong>
                  </span>
                </>
              )
              return c.href ? (
                <a key={c.label} className="contact__item" href={c.href} {...(c.external && { target: '_blank', rel: 'noreferrer' })}>
                  {body}
                </a>
              ) : (
                <div key={c.label} className="contact__item">
                  {body}
                </div>
              )
            })}
          </div>

          <div className="contact__form">
            <h2>Request a Bulk Quote</h2>
            <p className="muted">Fill in your details and send the enquiry directly on WhatsApp.</p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
