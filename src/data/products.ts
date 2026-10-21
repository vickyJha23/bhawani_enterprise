import type { Product } from '../types'
import { images } from './images'

export const products: Product[] = [
  {
    id: 'pit-cover',
    name: 'Pit Cover',
    subtitle: '9" Inch - Round',
    price: 90,
    unit: 'piece',
    category: 'earthing',
    images: [images.pit],
    description:
      'Heavy duty polymer earth pit cover with a lockable lid and markings for pit number and test date. Protects the earthing electrode and makes inspection easy.',
    specs: [
      ['Type', 'Earth Pit Cover'],
      ['Shape', 'Round'],
      ['Size', '9 Inch'],
      ['Material', 'Polypropylene (PP)'],
      ['Lid Colour', 'Green'],
      ['Body Colour', 'Black'],
      ['Usage', 'Earthing Pit Chamber'],
    ],
    features: ['High load bearing', 'UV & weather resistant', 'Twist open / close lid', 'Pit no. & date marking'],
    applications: ['Solar plants', 'Industrial earthing', 'Residential earthing', 'Substations'],
  },
  {
    id: 'pvc-cable-tray',
    name: 'PVC Cable Tray',
    subtitle: '45 x 45 - 1 Mtr',
    price: 82,
    unit: 'piece',
    category: 'cable',
    images: [images.tray],
    description:
      'Slotted PVC wiring duct for neat routing of cables inside panels and distribution boards. Easy finger break-off slots and mounting holes.',
    specs: [
      ['Type', 'Slotted Wiring Duct'],
      ['Size', '45 mm x 45 mm'],
      ['Length', '1 Meter'],
      ['Material', 'Rigid PVC'],
      ['Colour', 'Grey'],
      ['Usage', 'Panel Wiring'],
    ],
    features: ['Flame retardant PVC', 'Pre-punched mounting holes', 'Clean, organised wiring', 'Lightweight & durable'],
    applications: ['Control panels', 'ACDB / DCDB boxes', 'Distribution boards', 'Automation panels'],
  },
  {
    id: 'mc4-connector',
    name: 'MC4 Connector',
    subtitle: 'Make - Sun Lite',
    price: 19,
    unit: 'piece',
    category: 'accessories',
    images: [images.mc4],
    description:
      'High quality MC4 connectors for solar PV installations. Ensures safe and reliable DC connections with weather resistant design.',
    specs: [
      ['Make', 'Sun Lite'],
      ['Type', 'MC4 Connector'],
      ['Application', 'Solar PV Systems'],
      ['Material', 'UV Resistant Plastic'],
      ['Current Rating', '30A'],
      ['Voltage Rating', '1000V DC'],
      ['Protection', 'IP67'],
      ['Colour', 'Black'],
      ['Suitable Cable Size', '4mm² / 6mm²'],
      ['Usage', 'Solar Panel to Cable Connection'],
    ],
    features: ['IP67 waterproof', 'UV resistant body', 'Low contact resistance', 'Tool-free snap lock'],
    applications: ['Rooftop solar', 'Solar farms', 'Solar pumps', 'Inverter string wiring'],
  },
  {
    id: 'acdb-dcdb-combo',
    name: 'ACDB-DCDB Combo',
    subtitle: 'MCB - Havells, SPD - Orbit',
    price: 1480,
    unit: 'set',
    category: 'solar',
    images: [images.acdb],
    description:
      'Ready-to-install single phase Solar ACDB and 1-in-1-out DCDB in transparent IP rated enclosures, pre-wired with Havells MCBs and Orbit surge protection devices.',
    specs: [
      ['MCB Make', 'Havells'],
      ['SPD Make', 'Orbit'],
      ['ACDB', 'Single Phase, C32 DP MCB'],
      ['DCDB', '1 In 1 Out, DC SPD'],
      ['Enclosure', 'Transparent Polycarbonate'],
      ['Voltage', '230V AC / 600V DC'],
      ['Usage', 'Solar Inverter Protection'],
    ],
    features: ['Pre-wired & tested', 'Surge protection on AC & DC', 'Danger labels included', 'Wall mounting box'],
    applications: ['Residential rooftop solar', 'Commercial solar', 'On-grid systems', 'Off-grid systems'],
  },
  {
    id: 'earthing-kit-4g',
    name: 'Earthing Kit 4G Clamp',
    subtitle: '17 mm (14mm x 1 Mtr)',
    price: 900,
    unit: 'kit',
    category: 'earthing',
    images: [images.earthing],
    description:
      'Copper bonded earthing electrode kit with 4G clamp for reliable, low resistance grounding in solar and electrical installations.',
    specs: [
      ['Type', 'Copper Bonded Earthing Rod'],
      ['Diameter', '14 mm (17 mm kit)'],
      ['Length', '1 Meter'],
      ['Clamp', '4G Clamp'],
      ['Material', 'Copper Bonded Steel'],
      ['Usage', 'Earthing / Grounding'],
    ],
    features: ['Corrosion resistant', 'Long service life', 'Low earth resistance', 'Easy installation'],
    applications: ['Solar plants', 'Industries', 'Buildings', 'Telecom towers'],
  },
  {
    id: 'lightning-arrester',
    name: 'Lightning Arrester',
    subtitle: 'Copper Multi-Spike',
    price: 880,
    unit: 'piece',
    category: 'lightning',
    images: [images.earthing],
    description:
      'Copper multi-spike lightning arrester with base, safely conducting lightning strikes to earth to protect structures and solar arrays.',
    specs: [
      ['Type', 'Conventional Spike Arrester'],
      ['Material', 'Copper'],
      ['Spikes', '5 Spike'],
      ['Base', 'Polymer Mounting Base'],
      ['Usage', 'Lightning Protection'],
    ],
    features: ['High conductivity copper', 'Weather resistant', 'Rooftop mountable', 'Pairs with earthing kit'],
    applications: ['Solar rooftops', 'Buildings', 'Industrial sheds', 'Towers'],
  },
]

export const getProduct = (id: string) => products.find((p) => p.id === id)

// Same-category products first, then the rest
export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, limit)

export const getProductsByCategory = (category: Product['category']) => products.filter((p) => p.category === category)
