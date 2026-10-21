// Central business details — update these before going live.
export const site = {
  name: 'Bhawani Enterprise',
  phone: '+91 98765 43210', // TODO: real phone number
  whatsapp: '919876543210', // TODO: real WhatsApp number (country code, digits only)
  email: 'sales@bhawanienterprise.in', // TODO: real email
  address: 'India', // TODO: full business address
  hours: 'Mon – Sat, 9:30 AM – 7:00 PM', // TODO: confirm business hours
  about:
    'Manufacturer & supplier of complete earthing, lightning protection, solar protection and cable management solutions for projects across India.',
}

export type NavLink = {
  label: string
  to: string
  /** Show the product categories as a dropdown under this link */
  categoryMenu?: 'products' | 'solutions'
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products', categoryMenu: 'products' },
  { label: 'Solutions', to: '/solutions', categoryMenu: 'solutions' },
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]
