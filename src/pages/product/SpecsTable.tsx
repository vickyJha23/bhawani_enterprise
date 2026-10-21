import type { Product } from '../../types'
import './SpecsTable.css'

export function SpecsTable({ specs }: { specs: Product['specs'] }) {
  return (
    <table className="specs">
      <tbody>
        {specs.map(([label, value]) => (
          <tr key={label}>
            <th>{label}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
