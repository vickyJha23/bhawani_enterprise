import { Outlet, ScrollRestoration } from 'react-router'
import { QuoteProvider } from '../../context/QuoteProvider'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileBar } from './MobileBar'

/** Root route layout shared by every page. */
export function Layout() {
  return (
    <QuoteProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
      <ScrollRestoration />
    </QuoteProvider>
  )
}
