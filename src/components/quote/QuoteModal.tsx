import { useEffect } from 'react'
import { Icon } from '../ui/Icon'
import { QuoteForm } from './QuoteForm'
import './QuoteModal.css'

export function QuoteModal({ product, onClose }: { product?: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__card" role="dialog" aria-modal="true" aria-labelledby="quote-title" onClick={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <h3 id="quote-title">Get Bulk Quote</h3>
          <button type="button" className="icon-btn" aria-label="Close" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <p className="muted">Share your requirement and we'll respond with best bulk pricing.</p>
        <QuoteForm product={product} onSent={onClose} />
      </div>
    </div>
  )
}
