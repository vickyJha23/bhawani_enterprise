import { useMatch } from 'react-router'
import { useQuote } from '../../context/quote-context'
import { getProduct } from '../../data'
import { productEnquiry, telLink } from '../../lib/links'
import { Button, WhatsAppButton } from '../ui/Button'
import { Icon } from '../ui/Icon'
import './MobileBar.css'

/** Sticky Call / WhatsApp / Quote bar shown on small screens. On a product page it enquires about that product. */
export function MobileBar() {
  const { openQuote } = useQuote()
  const match = useMatch('/products/:id')
  const product = match?.params.id ? getProduct(match.params.id) : undefined

  return (
    <div className="mobile-bar">
      <Button variant="blue" href={telLink}>
        <Icon name="phone" size={16} /> {product ? 'Call' : 'Call Now'}
      </Button>
      <WhatsAppButton message={product ? productEnquiry(product) : undefined}>WhatsApp</WhatsAppButton>
      <Button onClick={() => openQuote(product?.name)}>Get Quote</Button>
    </div>
  )
}
