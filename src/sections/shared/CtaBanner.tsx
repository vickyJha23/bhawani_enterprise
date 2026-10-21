import { Button, WhatsAppButton } from '../../components/ui/Button'
import { useQuote } from '../../context/quote-context'
import './CtaBanner.css'

export function CtaBanner() {
  const { openQuote } = useQuote()

  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>Need bulk supply for your next project?</h2>
          <p>Get the best pricing on earthing, solar protection and cable management products, delivered pan India.</p>
        </div>
        <div className="cta__actions">
          <Button size="lg" onClick={() => openQuote()}>
            Get Bulk Quote
          </Button>
          <WhatsAppButton size="lg">WhatsApp Us</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
