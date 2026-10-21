import { PageMeta } from '../../components/layout/PageMeta'
import { CategoriesSection } from '../../sections/home/CategoriesSection'
import { FeaturedProducts } from '../../sections/home/FeaturedProducts'
import { Hero } from '../../sections/home/Hero'
import { CtaBanner } from '../../sections/shared/CtaBanner'
import { IndustriesSection } from '../../sections/shared/IndustriesSection'

// Reorder, add or remove home page sections here
export function HomePage() {
  return (
    <>
      <PageMeta description="Manufacturer & supplier of earthing, lightning protection, solar ACDB/DCDB, MC4 connectors and cable management products across India." />
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <IndustriesSection />
      <CtaBanner />
    </>
  )
}
