// Real product photos (product page gallery)
import mc4 from '../assets/products/mc4-connector.jpg'
import acdb from '../assets/products/acdb-dcdb.jpg'
import tray from '../assets/products/pvc-cable-tray.jpg'
import pit from '../assets/products/pit-cover.jpg'
import earthing from '../assets/products/earthing-lightning.jpg'

// Card images: 3:2 crops of the product photos above
// (Earthing Compound category image is from the design mockup — no photo yet)
import cardPit from '../assets/products/cards/pit-cover.jpg'
import cardTray from '../assets/products/cards/pvc-cable-tray.jpg'
import cardMc4 from '../assets/products/cards/mc4-connector.jpg'
import cardAcdb from '../assets/products/cards/acdb-dcdb.jpg'
import cardKit4g from '../assets/products/cards/earthing-kit-4g.jpg'
import cardKit17 from '../assets/products/cards/earthing-kit-17mm.jpg'

import catEarthing from '../assets/categories/earthing.jpg'
import catSolar from '../assets/categories/solar.jpg'
import catCable from '../assets/categories/cable.jpg'
import catLightning from '../assets/categories/lightning.jpg'
import catAccessories from '../assets/categories/accessories.jpg'
import catCompound from '../assets/categories/compound.jpg'

import heroProducts from '../assets/hero/hero-products.jpg'
import heroPanels from '../assets/hero/hero-backdrop.jpg'

export const images = { mc4, acdb, tray, pit, earthing }

export const cardImages = {
  pit: cardPit,
  tray: cardTray,
  mc4: cardMc4,
  acdb: cardAcdb,
  kit4g: cardKit4g,
  kit17: cardKit17,
}

export const categoryImages = {
  earthing: catEarthing,
  solar: catSolar,
  cable: catCable,
  lightning: catLightning,
  accessories: catAccessories,
  compound: catCompound,
}

export const heroImage = heroProducts
export const heroBackdrop = heroPanels
