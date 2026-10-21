import type { IconName } from '../components/ui/Icon'

export type CategoryId = 'earthing' | 'solar' | 'cable' | 'lightning' | 'accessories'

export type Category = {
  id: CategoryId
  name: string
  count: string
  image: string
  description: string
  /** Crop the image from the top-left instead of the centre */
  focusTop?: boolean
}

export type Product = {
  id: string
  name: string
  subtitle: string
  price: number
  unit: string
  category: CategoryId
  images: string[]
  description: string
  specs: [label: string, value: string][]
  features: string[]
  applications: string[]
}

export type Industry = { name: string; icon: IconName }

export type Highlight = { label: string; icon: IconName }

export type Faq = { q: string; a: string }
