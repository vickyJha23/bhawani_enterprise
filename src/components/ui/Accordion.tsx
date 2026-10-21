import type { ReactNode } from 'react'
import { Icon } from './Icon'
import './Accordion.css'

export function Accordion({ title, open = false, children }: { title: string; open?: boolean; children: ReactNode }) {
  return (
    <details className="acc" open={open}>
      <summary>
        {title}
        <Icon name="chevron" size={18} />
      </summary>
      <div className="acc__body">{children}</div>
    </details>
  )
}
