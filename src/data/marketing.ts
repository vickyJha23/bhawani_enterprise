import type { Highlight, Industry } from '../types'

// Hero feature icons. Items without `mobileLabel` are hidden on phones (as in the mockup).
export const highlights: Highlight[] = [
  { icon: 'factory', label: 'Manufacturer & Supplier' },
  { icon: 'shield', label: 'Quality Products', mobileLabel: 'Quality Products' },
  { icon: 'truck', label: 'Bulk Supply Pan India', mobileLabel: 'Pan India Delivery' },
  { icon: 'headset', label: 'Technical Support', mobileLabel: 'Technical Support' },
  { icon: 'gear', label: 'Custom Solutions' },
]

export const industries: Industry[] = [
  { name: 'Solar EPC', icon: 'sun' },
  { name: 'Manufacturing', icon: 'factory' },
  { name: 'Commercial Buildings', icon: 'building' },
  { name: 'Residential Projects', icon: 'home' },
  { name: 'Electrical Contractors', icon: 'tool' },
  { name: 'Infrastructure Projects', icon: 'bridge' },
  { name: 'Distributors & Dealers', icon: 'users' },
  { name: 'Industrial Plants', icon: 'plant' },
]
