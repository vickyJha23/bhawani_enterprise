import { Icon } from '../../components/ui/Icon'
import { Section } from '../../components/ui/Section'
import { industries } from '../../data'
import './IndustriesSection.css'

export function IndustriesSection() {
  return (
    <Section soft title="Industries We Serve" subtitle="Supplying reliable solutions across multiple industries.">
      <div className="ind-grid">
        {industries.map((ind) => (
          <div key={ind.name} className="ind-card">
            <Icon name={ind.icon} size={32} />
            <span>{ind.name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
