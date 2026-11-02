import { useState, type CSSProperties } from 'react'
import { assets } from '../assets'

// Offsets (px) taken from the layout so each label sits exactly where designed.
const categories = [
  { name: 'Tecnologia', icon: assets.catTech, labelMl: 19 },
  { name: 'Supermercado', icon: assets.catMarket, labelMl: 3 },
  { name: 'Bebidas', icon: assets.catDrinks, itemW: 140, boxMl: 6, labelW: 140, center: true },
  { name: 'Ferramentas', icon: assets.catTools, labelMl: 11, labelW: 107, center: true },
  { name: 'Saúde', icon: assets.catHealth, labelMl: 41 },
  { name: 'Esportes e Fitness', icon: assets.catSports, labelMl: 1 },
  { name: 'Moda', icon: assets.catFashion, labelMl: 44 },
]

export default function Categories() {
  const [active, setActive] = useState(0)
  return (
    <section className="categories" aria-label="Compre por categoria">
      {categories.map((c, i) => (
        <button
          key={c.name}
          className={`categories__item${i === active ? ' is-active' : ''}`}
          style={
            {
              '--item-w': c.itemW && `${c.itemW}px`,
              '--box-ml': c.boxMl && `${c.boxMl}px`,
              '--label-ml': c.labelMl && `${c.labelMl}px`,
              '--label-w': c.labelW && `${c.labelW}px`,
              '--label-align': c.center ? 'center' : undefined,
            } as CSSProperties
          }
          onClick={() => setActive(i)}
        >
          <span className="categories__box">
            <img src={c.icon} alt="" />
          </span>
          <span className="categories__label">{c.name}</span>
        </button>
      ))}
    </section>
  )
}
