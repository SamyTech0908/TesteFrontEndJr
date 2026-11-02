import { assets } from '../assets'

export default function Brands() {
  return (
    <section className="brands">
      <h2>Navegue por marcas</h2>
      <div className="brands__list">
        {[0, 1, 2, 3, 4].map((i) => (
          <a key={i} href="#" className="brands__item" aria-label="Marca">
            <img src={assets.brandLogo} alt="" />
          </a>
        ))}
      </div>
    </section>
  )
}
