import { useState, type ReactNode } from 'react'
import { QuoteModal } from '../components/quote/QuoteModal'
import { QuoteContext } from './quote-context'

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quote, setQuote] = useState<{ product?: string } | null>(null)

  return (
    <QuoteContext value={{ openQuote: (product) => setQuote({ product }) }}>
      {children}
      {quote && <QuoteModal product={quote.product} onClose={() => setQuote(null)} />}
    </QuoteContext>
  )
}
