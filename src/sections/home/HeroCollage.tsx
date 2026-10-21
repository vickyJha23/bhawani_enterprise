import { images } from '../../data'
import './HeroCollage.css'

// Position/size of each tile lives in HeroCollage.css (.tile--<key>)
const tiles = [
  { key: 'acdb', src: images.acdb, alt: 'Solar ACDB DCDB combo box', caption: 'ACDB - DCDB Combo' },
  { key: 'rods', src: images.earthing, alt: 'Copper earthing rods and lightning arrester' },
  { key: 'pit', src: images.pit, alt: 'Earth pit cover' },
  { key: 'mc4', src: images.mc4, alt: 'MC4 connectors', caption: 'MC4 Connector' },
  { key: 'tray', src: images.tray, alt: 'PVC cable tray' },
]

export function HeroCollage() {
  return (
    <div className="collage">
      {tiles.map((t) => (
        <figure key={t.key} className={`tile tile--${t.key}`}>
          <img src={t.src} alt={t.alt} />
          {t.caption && <figcaption>{t.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}
