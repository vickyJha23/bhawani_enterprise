import type { Category, CategoryId } from '../types'
import { images } from './images'

export const categories: Category[] = [
  {
    id: 'earthing',
    name: 'Earthing Solutions',
    count: '20+ Products',
    image: images.earthing,
    description:
      'Copper bonded earthing rods, earthing kits, clamps, pit covers and backfill compound for safe, low resistance grounding.',
  },
  {
    id: 'solar',
    name: 'Solar Protection Equipment',
    count: '15+ Products',
    image: images.acdb,
    description:
      'Pre-wired ACDB and DCDB boxes with branded MCBs and surge protection devices to protect solar inverters and panels.',
  },
  {
    id: 'cable',
    name: 'Cable Management Solutions',
    count: '25+ Products',
    image: images.tray,
    description: 'PVC wiring ducts and cable trays for neat, organised and safe cable routing in panels and installations.',
  },
  {
    id: 'lightning',
    name: 'Lightning Protection',
    count: '10+ Products',
    image: images.earthing,
    focusTop: true,
    description: 'Copper spike lightning arresters and accessories to protect buildings, rooftops and solar arrays from strikes.',
  },
  {
    id: 'accessories',
    name: 'Electrical Accessories',
    count: '30+ Products',
    image: images.mc4,
    description: 'MC4 connectors and other solar and electrical accessories for reliable, weather resistant connections.',
  },
]

export const getCategory = (id: string | null | undefined) => categories.find((c) => c.id === id)

export const isCategoryId = (id: string | null | undefined): id is CategoryId => !!getCategory(id)
