import type { Category } from '../types'
import { categoryImages } from './images'

export const categories: Category[] = [
  {
    id: 'earthing',
    name: 'Earthing Solutions',
    shortName: 'Earthing',
    count: '20+ Products',
    image: categoryImages.earthing,
    description:
      'Copper bonded earthing rods, earthing kits, clamps, pit covers and backfill compound for safe, low resistance grounding.',
  },
  {
    id: 'solar',
    name: 'Solar Protection Equipment',
    shortName: 'Solar Protection',
    count: '15+ Products',
    image: categoryImages.solar,
    description:
      'Pre-wired ACDB and DCDB boxes with branded MCBs and surge protection devices to protect solar inverters and panels.',
  },
  {
    id: 'cable',
    name: 'Cable Management Solutions',
    shortName: 'Cable Management',
    count: '25+ Products',
    image: categoryImages.cable,
    description: 'PVC wiring ducts and cable trays for neat, organised and safe cable routing in panels and installations.',
  },
  {
    id: 'lightning',
    name: 'Lightning Protection',
    shortName: 'Lightning Protection',
    count: '10+ Products',
    image: categoryImages.lightning,
    description: 'Copper spike lightning arresters and accessories to protect buildings, rooftops and solar arrays from strikes.',
  },
  {
    id: 'accessories',
    name: 'Electrical Accessories',
    shortName: 'Electrical Accessories',
    count: '30+ Products',
    image: categoryImages.accessories,
    description: 'MC4 connectors and other solar and electrical accessories for reliable, weather resistant connections.',
  },
  {
    id: 'compound',
    name: 'Earthing Compound',
    shortName: 'Earthing Compound',
    image: categoryImages.compound,
    mobileOnly: true,
    description: 'Earthing backfill compound to lower and stabilise earth resistance around the electrode.',
  },
]

export const getCategory = (id: string | null | undefined) => categories.find((c) => c.id === id)

export const isCategoryId = (id: string | null | undefined): id is Category['id'] => !!getCategory(id)
