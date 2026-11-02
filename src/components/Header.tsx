import { assets } from '../assets'

const nav = ['Todas Categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos']

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__topbar">
          <span className="header__perk">
            <img src={assets.shield} alt="" />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </span>
          <span className="header__perk">
            <img src={assets.truck} alt="" />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </span>
          <span className="header__perk">
            <img src={assets.card} alt="" />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </span>
        </div>

        <div className="header__main">
          <a href="/" className="header__logo" aria-label="Econverse">
            <img src={assets.logo} alt="Econverse" />
          </a>
          <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="O que você está buscando?" aria-label="Buscar" />
            <button type="submit" aria-label="Buscar">
              <img src={assets.search} alt="" />
            </button>
          </form>
          <div className="header__actions">
            <button aria-label="Pedidos">
              <img className="header__box" src={assets.boxIcon} alt="" />
            </button>
            <button aria-label="Favoritos">
              <img src={assets.heart} alt="" />
            </button>
            <button aria-label="Minha conta">
              <img src={assets.user} alt="" />
            </button>
            <button aria-label="Carrinho">
              <img src={assets.cart} alt="" />
            </button>
          </div>
        </div>

        <nav className="header__nav" aria-label="Principal">
          {nav.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
          <a href="#" className="is-highlight">
            Ofertas do dia
          </a>
          <a href="#" className="header__subscription">
            <img src={assets.crown} alt="" />
            Assinatura
          </a>
        </nav>
      </div>
    </header>
  )
}
