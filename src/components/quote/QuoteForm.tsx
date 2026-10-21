import { useState, type ChangeEvent, type FormEvent } from 'react'
import { products } from '../../data'
import { waLink } from '../../lib/links'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/Icon'
import './QuoteForm.css'

type Form = { name: string; phone: string; product: string; qty: string; message: string }

const buildMessage = (f: Form) =>
  [
    'Bulk Quote Request',
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Product: ${f.product || 'General enquiry'}`,
    f.qty && `Quantity: ${f.qty}`,
    f.message && `Message: ${f.message}`,
  ]
    .filter(Boolean)
    .join('\n')

type Props = {
  /** Pre-selected product name */
  product?: string
  /** Called after the enquiry is sent */
  onSent?: () => void
}

/** Quote request fields; submitting opens WhatsApp with the enquiry pre-filled. */
export function QuoteForm({ product, onSent }: Props) {
  const [form, setForm] = useState<Form>({ name: '', phone: '', product: product ?? '', qty: '', message: '' })

  const field = (key: keyof Form) => ({
    value: form[key],
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value }),
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    window.open(waLink(buildMessage(form)), '_blank')
    onSent?.()
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="quote-form__row">
        <label>
          Name
          <input required placeholder="Your name" autoComplete="name" {...field('name')} />
        </label>
        <label>
          Phone
          <input required type="tel" placeholder="Mobile number" autoComplete="tel" {...field('phone')} />
        </label>
      </div>
      <div className="quote-form__row">
        <label>
          Product
          <select {...field('product')}>
            <option value="">General enquiry</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Quantity
          <input placeholder="e.g. 500 pieces" {...field('qty')} />
        </label>
      </div>
      <label>
        Message
        <textarea rows={3} placeholder="Project details (optional)" {...field('message')} />
      </label>

      <Button type="submit" block>
        <WhatsAppIcon size={16} /> Send via WhatsApp
      </Button>
    </form>
  )
}
