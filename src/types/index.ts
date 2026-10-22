import type { IconName } from '../components/ui/Icon'

export type CategoryId = 'earthing' | 'solar' | 'cable' | 'lightning' | 'accessories' | 'compound'

export type Category = {
  id: CategoryId
  name: string
  /** Shorter label used on small screens */
  shortName: string
  count?: string
  image: string
  description: string
  /** Shown in the home page category grid on phones only (as in the mockup) */
  mobileOnly?: boolean
}

export type Product = {
  id: string
  name: string
  subtitle: string
  price: number
  unit: string
  category: CategoryId
  /** Image used on product cards */
  cardImage: string
  /** Photos for the product page gallery */
  images: string[]
  /** Show in the home page "Featured Products" section */
  featured?: boolean
  description: string
  specs: [label: string, value: string][]
  features: string[]
  applications: string[]
}

export type Industry = { name: string; icon: IconName }

export type Highlight = {
  label: string
  icon: IconName
  /** Label on phones; omit to hide the item on phones */
  mobileLabel?: string
}

export type Faq = { q: string; a: string }
