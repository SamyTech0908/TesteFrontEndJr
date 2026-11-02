import { assets } from '../assets'

export default function Partners() {
  return (
    <section className="partners">
      {[0, 1].map((i) => (
        <article key={i} className="partners__banner">
          <img src={assets.partner} alt="" />
          <div className="partners__shade" />
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#">Confira</a>
        </article>
      ))}
    </section>
  )
}
