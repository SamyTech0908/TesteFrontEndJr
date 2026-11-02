import { useEffect, useState } from 'react'
import { assets } from '../assets'
import type { Product } from '../types'
import ProductCard from './ProductCard'
import SectionTitle from './SectionTitle'

const tabs = ['celular', 'acessórios', 'tablets', 'NOTEBOOKS', 'TVs', 'Ver todos']
const VISIBLE = 4

interface Props {
  products: Product[]
  withTabs?: boolean
  id?: string
  onSelect: (product: Product) => void
}

export default function Showcase({ products, withTabs, id, onSelect }: Props) {
  const [tab, setTab] = useState(0)
  const [index, setIndex] = useState(0)
  const max = Math.max(0, products.length - VISIBLE)

  useEffect(() => setIndex((i) => Math.min(i, max)), [max])

  return (
    <section className="showcase" id={id}>
      <SectionTitle>Produtos relacionados</SectionTitle>
      {withTabs ? (
        <div className="showcase__tabs" role="tablist">
          {tabs.map((t, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={i === tab}
              className={i === tab ? 'is-active' : ''}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>
      ) : (
        <a href="#" className="showcase__all">
          Ver todos
        </a>
      )}

      <div className="showcase__carousel">
        <button
          className="showcase__arrow showcase__arrow--prev"
          aria-label="Anterior"
          onClick={() => setIndex((i) => (i === 0 ? max : i - 1))}
        >
          <img src={assets.arrowLeft} alt="" />
        </button>
        <div className="showcase__viewport">
          <div className="showcase__track" style={{ transform: `translateX(calc(${index} * -1 * (var(--card-w) + var(--card-gap))))` }}>
            {products.map((p, i) => (
              <ProductCard key={`${p.productName}-${i}`} product={p} onSelect={onSelect} />
            ))}
          </div>
        </div>
        <button
          className="showcase__arrow showcase__arrow--next"
          aria-label="Próximo"
          onClick={() => setIndex((i) => (i === max ? 0 : i + 1))}
        >
          <img src={assets.arrowRight} alt="" />
        </button>
      </div>
    </section>
  )
}
