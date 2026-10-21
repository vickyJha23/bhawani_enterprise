import heroProducts from '../../assets/hero/hero-products.jpg'
import './HeroImage.css'

/** Product showcase on the right of the hero (from the approved design mockup). */
export function HeroImage() {
  return (
    <div className="hero-image">
      <img
        src={heroProducts}
        alt="ACDB-DCDB combo box, copper earthing rods, earthing kit, MC4 connectors and cable tray in front of solar panels"
        width={904}
        height={740}
        fetchPriority="high"
      />
    </div>
  )
}
