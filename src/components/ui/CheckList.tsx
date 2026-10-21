import { Icon } from './Icon'
import './CheckList.css'

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" size={16} /> {item}
        </li>
      ))}
    </ul>
  )
}
