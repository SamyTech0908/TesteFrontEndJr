import { assets } from '../assets'

const columns = [
  { title: 'Institucional', items: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'], alt: false },
  { title: 'Ajuda', items: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'], alt: false },
  { title: 'Termos', items: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'], alt: true },
]

export default function Footer() {
  return (
    <footer>
      <section className="newsletter">
        <div className="newsletter__inner">
          <div className="newsletter__text">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Digite seu nome" aria-label="Nome" />
            <input type="email" placeholder="Digite seu e-mail" aria-label="E-mail" />
            <button type="submit">INSCREVER</button>
            <label>
              <input type="checkbox" />
              Aceito os termos e condições
            </label>
          </form>
        </div>
      </section>

      <div className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={assets.footerLogo} alt="Econverse" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__social">
              <img src={assets.instagram} alt="Instagram" />
              <img src={assets.facebook} alt="Facebook" />
              <img src={assets.linkedin} alt="LinkedIn" />
            </div>
          </div>
          <img className="footer__divider" src={assets.lineFooter} alt="" />
          <div className="footer__columns">
            {columns.map((c) => (
              <div key={c.title} className={`footer__col${c.alt ? ' footer__col--poppins' : ''}`}>
                <h4>{c.title}</h4>
                {c.items.map((item) => (
                  <a key={item} href="#">
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </footer>
  )
}
