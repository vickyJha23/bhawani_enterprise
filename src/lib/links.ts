import { site } from '../config/site'
import type { Product } from '../types'

export const DEFAULT_ENQUIRY = 'Hello, I would like to enquire about your products.'

export const waLink = (text = DEFAULT_ENQUIRY) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const telLink = `tel:${site.phone.replace(/\s/g, '')}`

export const mailLink = `mailto:${site.email}`

export const productHref = (id: string) => `/products/${id}`

export const categoryHref = (id: string) => `/products?category=${id}`

export const productEnquiry = (product: Pick<Product, 'name'> & Partial<Pick<Product, 'subtitle'>>) =>
  `Hello, I would like to enquire about ${product.name}${product.subtitle ? ` (${product.subtitle})` : ''}.`
