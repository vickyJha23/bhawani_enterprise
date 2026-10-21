import { createContext, useContext } from 'react'

export type QuoteContextValue = {
  /** Open the bulk quote form, optionally pre-selecting a product by name */
  openQuote: (product?: string) => void
}

export const QuoteContext = createContext<QuoteContextValue | null>(null)

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote must be used inside <QuoteProvider>')
  return ctx
}
