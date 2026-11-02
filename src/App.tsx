import { useEffect, useState } from 'react'
import Brands from './components/Brands'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import ProductModal from './components/ProductModal'
import Showcase from './components/Showcase'
import type { Product, ProductsResponse } from './types'

const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

// The remote server sends no CORS headers, so browsers block this request from
// another origin. A snapshot of the same JSON is served locally as a fallback.
const FALLBACK_URL = `${import.meta.env.BASE_URL}produtos.json`

async function loadProducts(signal: AbortSignal): Promise<Product[]> {
  for (const url of [PRODUCTS_URL, FALLBACK_URL]) {
    try {
      const res = await fetch(url, { signal })
      const data = (await res.json()) as ProductsResponse
      if (data.success && data.products.length) return data.products
    } catch (e) {
      if ((e as Error).name === 'AbortError') throw e
    }
  }
  throw new Error('products unavailable')
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState<Product | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    loadProducts(controller.signal)
      .then(setProducts)
      .catch((e) => e.name !== 'AbortError' && setError(true))
    return () => controller.abort()
  }, [])

  const showcase = (props: { withTabs?: boolean; id?: string }) =>
    error ? (
      <p className="status">Não foi possível carregar os produtos.</p>
    ) : products.length === 0 ? (
      <p className="status">Carregando produtos...</p>
    ) : (
      <Showcase products={products} onSelect={setSelected} {...props} />
    )

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        {showcase({ withTabs: true, id: 'vitrine' })}
        <Partners />
        {showcase({})}
        <Partners />
        <Brands />
        {showcase({})}
      </main>
      <Footer />
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
