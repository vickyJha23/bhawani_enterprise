import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from './components/layout/Layout'
import { AboutPage } from './pages/about/AboutPage'
import { ContactPage } from './pages/contact/ContactPage'
import { HomePage } from './pages/home/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/product/ProductPage'
import { ProductsPage } from './pages/products/ProductsPage'
import { ProjectsPage } from './pages/projects/ProjectsPage'
import { ResourcesPage } from './pages/resources/ResourcesPage'
import { SolutionsPage } from './pages/solutions/SolutionsPage'

// Add new pages here (and in config/site.ts navLinks to show them in the menu)
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:id', element: <ProductPage /> },
      { path: '/solutions', element: <SolutionsPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/resources', element: <ResourcesPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
