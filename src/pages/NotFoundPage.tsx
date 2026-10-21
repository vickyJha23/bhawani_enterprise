import { PageMeta } from '../components/layout/PageMeta'
import { Button } from '../components/ui/Button'
import './NotFoundPage.css'

export function NotFoundPage({ title = 'Page not found' }: { title?: string }) {
  return (
    <section className="section">
      <PageMeta title={title} />
      <div className="container not-found">
        <span className="not-found__code">404</span>
        <h1>{title}</h1>
        <p className="muted">The page you are looking for may have been moved or removed.</p>
        <div className="not-found__actions">
          <Button to="/products">Browse Products</Button>
          <Button to="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </section>
  )
}
