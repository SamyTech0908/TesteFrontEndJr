import { assets } from '../assets'

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__bg" src={assets.hero} alt="" />
      <div className="hero__shade" />
      <div className="hero__content">
        <h1>Venha conhecer nossas promoções</h1>
        <p>
          <strong>50% Off </strong>nos produtos
        </p>
        <a href="#vitrine" className="hero__cta">
          Ver produto
        </a>
      </div>
    </section>
  )
}
