import './App.css'

function App() {
  return (
    <div className="site">

      <header className="topo">

        <div className="logo">
          <img src="/logo.png" alt="Logo Griff Agency" />

          <div className="logo-texto">
            <h1>GRIFF AGENCY</h1>
            <span>Marketing • Sites • Design • Automação</span>
          </div>
        </div>

        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#escolher">Por que escolher</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="botoes-topo">

          <a
            href="https://instagram.com/griff_agency_oficial"
            target="_blank"
            className="botao-instagram"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/5585985974006"
            target="_blank"
            className="botao-topo"
          >
            WhatsApp
          </a>

        </div>

      </header>

      <section id="inicio" className="hero">

        <h2>
          Sua empresa merece uma presença digital profissional
        </h2>

        <p>
          Criamos sites, automações, chat bots,
          gestão de redes sociais, tráfego pago
          e designs profissionais para sua marca crescer.
        </p>

        <a
          href="https://wa.me/5585985974006?text=Olá!%20Vim%20pelo%20site%20da%20Griff%20Agency%20e%20quero%20um%20orçamento."
          target="_blank"
        >
          <button>Solicitar Orçamento</button>
        </a>

      </section>

      <section id="sobre" className="sobre">

        <div className="sobre-texto">

          <h2>Quem Somos</h2>

          <p>
            A Griff Agency é uma agência digital focada
            em transformar empresas comuns em marcas
            fortes no digital.
          </p>

          <p>
            Trabalhamos com soluções modernas para empresas
            que querem crescer online e atrair mais clientes.
          </p>

        </div>

        <div className="sobre-box">

          <div className="numero">
            <h1>100%</h1>
            <p>Foco em Resultado</p>
          </div>

          <div className="numero">
            <h1>24h</h1>
            <p>Atendimento no WhatsApp</p>
          </div>

        </div>

      </section>

      <section id="servicos" className="servicos">

        <h2>Serviços da Griff Agency</h2>

        <p className="subtitulo">
          Escolha o serviço ideal e solicite seu orçamento personalizado.
        </p>

        <div className="cards">

          <div className="card">

            <h3>Sites</h3>

            <p>
              Sites profissionais, modernos e responsivos preparados para
              apresentar sua empresa da melhor forma.
            </p>

            <a
              href="https://wa.me/5585985974006?text=Olá!%20Vim%20pelo%20site%20da%20Griff%20Agency%20e%20quero%20fazer%20um%20orçamento%20para%20criação%20de%20site."
              target="_blank"
            >
              <button>Solicitar Orçamento</button>
            </a>

          </div>

          <div className="card">

            <h3>Automações e Chat Bots</h3>

            <p>
              Atendimento automático, respostas rápidas,
              captação de clientes e sistemas inteligentes.
            </p>

            <a
              href="https://wa.me/5585985974006?text=Olá!%20Vim%20pelo%20site%20da%20Griff%20Agency%20e%20quero%20fazer%20um%20orçamento%20para%20automações%20e%20chat%20bots."
              target="_blank"
            >
              <button>Solicitar Orçamento</button>
            </a>

          </div>

          <div className="card">

            <h3>Gestão de Redes Sociais</h3>

            <p>
              Planejamento, criação de conteúdo
              e gerenciamento profissional do Instagram.
            </p>

            <a
              href="https://wa.me/5585985974006?text=Olá!%20Vim%20pelo%20site%20da%20Griff%20Agency%20e%20quero%20fazer%20um%20orçamento%20para%20gestão%20de%20redes%20sociais."
              target="_blank"
            >
              <button>Solicitar Orçamento</button>
            </a>

          </div>

          <div className="card">

            <h3>Tráfego Pago</h3>

            <p>
              Anúncios profissionais no Instagram,
              Facebook e Google para atrair clientes.
            </p>

            <a
              href="https://wa.me/5585985974006?text=Olá!%20Vim%20pelo%20site%20da%20Griff%20Agency%20e%20quero%20fazer%20um%20orçamento%20para%20tráfego%20pago."
              target="_blank"
            >
              <button>Solicitar Orçamento</button>
            </a>

          </div>

          <div className="card">

            <h3>Designs</h3>

            <p>
              Artes para Instagram, carrosséis,
              banners e identidade visual profissional.
            </p>

            <a
              href="https://wa.me/5585985974006?text=Olá!%20Vim%20pelo%20site%20da%20Griff%20Agency%20e%20quero%20fazer%20um%20orçamento%20para%20designs."
              target="_blank"
            >
              <button>Solicitar Orçamento</button>
            </a>

          </div>

        </div>

      </section>

      <section id="escolher" className="escolher">

        <h2>Por que escolher a Griff Agency?</h2>

        <p className="subtitulo">
          Sem presença digital, sua empresa pode perder oportunidades.
          Com a Griff Agency, sua marca ganha estratégia,
          visual profissional e mais chances de vender.
        </p>

        <div className="graficos">

          <div className="grafico-card queda">

            <h3>Sem a Griff Agency</h3>

            <p>
              Vendas caindo por falta de presença digital.
            </p>

            <div className="grafico">
              <div className="barra barra1"></div>
              <div className="barra barra2"></div>
              <div className="barra barra3"></div>
              <div className="barra barra4"></div>
              <div className="barra barra5"></div>
            </div>

            <span className="status ruim">
              Vendas em queda
            </span>

          </div>

          <div className="grafico-card subida">

            <h3>Com a Griff Agency</h3>

            <p>
              Mais visibilidade, mais confiança e mais oportunidades.
            </p>

            <div className="grafico">
              <div className="barra barra6"></div>
              <div className="barra barra7"></div>
              <div className="barra barra8"></div>
              <div className="barra barra9"></div>
              <div className="barra barra10"></div>
            </div>

            <span className="status bom">
              Vendas subindo
            </span>

          </div>

        </div>

      </section>

      <section id="contato" className="contato">

        <h2>Vamos criar sua presença digital?</h2>

        <p>
          Fale agora com a Griff Agency
          e solicite um orçamento personalizado.
        </p>

        <a
          href="https://wa.me/5585985974006?text=Olá!%20Vim%20pelo%20site%20da%20Griff%20Agency%20e%20quero%20um%20orçamento."
          target="_blank"
        >
          <button>Falar no WhatsApp</button>
        </a>

      </section>

      <footer className="rodape">

        <div className="rodape-container">

          <div className="rodape-logo">

            <img src="/logo.png" alt="Logo Griff Agency" />

            <h2>GRIFF AGENCY</h2>

            <p>
              Transformando empresas em marcas fortes no digital.
            </p>

          </div>

          <div className="rodape-links">

            <h3>Navegação</h3>

            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#escolher">Por que escolher</a>
            <a href="#contato">Contato</a>

          </div>

          <div className="rodape-contato">

            <h3>Contato</h3>

            <p>WhatsApp: (85) 98597-4006</p>

            <p>Instagram: @griff_agency_oficial</p>

            <a
              href="https://instagram.com/griff_agency_oficial"
              target="_blank"
            >
              <button>Instagram Oficial</button>
            </a>

          </div>

        </div>

        <div className="rodape-bottom">

          <p>
            © 2026 Griff Agency — Todos os direitos reservados.
          </p>

        </div>

      </footer>

      <a
        href="https://wa.me/5585985974006?text=Olá!%20Vim%20pelo%20site%20da%20Griff%20Agency."
        target="_blank"
        className="whatsapp-flutuante"
        aria-label="Falar no WhatsApp"
      >

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />

      </a>

    </div>
  )
}

export default App