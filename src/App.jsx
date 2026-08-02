import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img src="/logo.png" alt="ANAPEF Logo" />
            <div className="logo-text">
              <h1>ANAPEF</h1>
              <p>Associação Navegantina de<br/>Pessoas com Fibromialgia</p>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="#home">Início</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#direitos">Direitos</a>
            <a href="#noticias">Notícias</a>
            <a href="#contato">Contato</a>
            <button className="donate-btn">
              <span>❤️</span>
              <span>Doe Agora</span>
            </button>
          </nav>
          <button className="mobile-menu-btn">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Você não está sozinho na luta contra a fibromialgia.</h2>
            <p>A ANAPEF existe para acolher, informar, apoiar e lutar por mais qualidade de vida para todos.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Saiba Mais →</button>
              <button className="btn-secondary">Seja Sócio</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-bg"></div>
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop" alt="Grupo de apoio" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="sobre">
        <div className="section-content">
          <div className="section-header">
            <h2>Sobre Nós</h2>
            <p>Conheça a história da ANAPEF - Navegantes</p>
          </div>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Nossa Missão</h3>
              <p>Acolher, informar, apoiar e lutar por mais qualidade de vida para pessoas com fibromialgia em Navegantes.</p>
            </div>
            <div className="card">
              <div className="card-icon">❤️</div>
              <h3>Nossos Valores</h3>
              <p>Empatia, solidariedade, transparência e compromisso com a transformação social.</p>
            </div>
            <div className="card">
              <div className="card-icon">👥</div>
              <h3>Nossa Comunidade</h3>
              <p>Uma rede de apoio formada por pessoas com fibromialgia, familiares e profissionais.</p>
            </div>
          </div>

          <div className="history-box">
            <h3>Nossa História</h3>
            <p>A ANAPEF - Associação Navegantina de Pessoas com Fibromialgia foi criada com o objetivo de unir, apoiar e dar voz às pessoas que vivem com fibromialgia em Navegantes, Santa Catarina.</p>
            <p>Somos uma associação sem fins lucrativos, comprometida em promover informação, apoio emocional e lutar pelos direitos e qualidade de vida de todos os nossos associados.</p>
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="rights" id="direitos">
        <div className="section-content">
          <div className="section-header">
            <h2>Nossos Direitos</h2>
            <p>Conheça os direitos garantidos por lei para pessoas com fibromialgia</p>
          </div>

          <div className="rights-grid">
            <div className="rights-card">
              <div className="rights-card-icon">⚖️</div>
              <h3>Reconhecimento Legal</h3>
              <p>A fibromialgia é reconhecida pela OMS e pelo INSS como doença incapacitante.</p>
            </div>
            <div className="rights-card">
              <div className="rights-card-icon">💼</div>
              <h3>Benefício por Incapacidade</h3>
              <p>Pessoas com fibromialgia grave podem solicitar auxílio-doença ou aposentadoria.</p>
            </div>
            <div className="rights-card">
              <div className="rights-card-icon">🏥</div>
              <h3>Atendimento Prioritário</h3>
              <p>Direito a atendimento prioritário em órgãos públicos e instituições de saúde.</p>
            </div>
            <div className="rights-card">
              <div className="rights-card-icon">💊</div>
              <h3>Acesso a Medicamentos</h3>
              <p>Acesso a medicamentos específicos através do SUS e programas de assistência.</p>
            </div>
            <div className="rights-card">
              <div className="rights-card-icon">📋</div>
              <h3>Isenção de Impostos</h3>
              <p>Possibilidade de isenção de ICMS na compra de medicamentos e equipamentos.</p>
            </div>
            <div className="rights-card">
              <div className="rights-card-icon">👥</div>
              <h3>Direito ao Trabalho</h3>
              <p>Proteção contra discriminação no ambiente de trabalho e direito a adaptações.</p>
            </div>
          </div>

          <div className="cta-box">
            <h3>Saiba Mais Sobre Seus Direitos</h3>
            <p>Entre em contato conosco para receber orientações personalizadas sobre seus direitos.</p>
            <div className="cta-buttons">
              <button className="btn-white">Fale Conosco</button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news" id="noticias">
        <div className="section-content">
          <div className="section-header">
            <h2>Notícias e Atualizações</h2>
            <p>Fique por dentro das novidades da ANAPEF</p>
          </div>

          <div className="news-grid">
            <div className="news-card">
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop" alt="Maio Roxo" />
              <div className="news-card-content">
                <div className="news-date">12 de maio</div>
                <h3>Maio Roxo: Mês de Conscientização da Fibromialgia</h3>
                <p>Confira nossa programação especial para o mês de conscientização da fibromialgia.</p>
                <a href="#">Leia mais →</a>
              </div>
            </div>
            <div className="news-card">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Roda de Conversa" />
              <div className="news-card-content">
                <div className="news-date">25 de abril</div>
                <h3>Roda de Conversa: um espaço de escuta e acolhimento</h3>
                <p>Próxima roda de conversa acontece no próximo sábado com profissionais.</p>
                <a href="#">Leia mais →</a>
              </div>
            </div>
            <div className="news-card">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Caminhada" />
              <div className="news-card-content">
                <div className="news-date">10 de abril</div>
                <h3>1ª Caminhada em prol das pessoas com fibromialgia</h3>
                <p>Um momento de união, empatia e visibilidade para a causa que merece ser ouvida.</p>
                <a href="#">Leia mais →</a>
              </div>
            </div>
          </div>

          <div className="news-buttons">
            <button className="btn-secondary">Ver Todas as Notícias</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-icon">❤️</div>
          <h2>Juntos Somos Mais Fortes!</h2>
          <p>Associe-se à ANAPEF e faça parte dessa rede de apoio e transformação. Juntos, podemos conquistar mais qualidade de vida e visibilidade para a fibromialgia.</p>
          <div className="cta-buttons">
            <button className="btn-white">Seja Sócio</button>
            <button className="btn-outline-white">Saiba Mais</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>ANAPEF</h4>
              <p>Associação Navegantina de Pessoas com Fibromialgia. Acolhendo, informando e lutando por qualidade de vida.</p>
            </div>
            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#direitos">Nossos Direitos</a></li>
                <li><a href="#noticias">Notícias</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📞 (47) 9752-0167</p>
              <p>📧 contato@anapef.org.br</p>
              <p>📍 Navegantes, SC</p>
            </div>
            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                <a href="#" className="social-link">f</a>
                <a href="#" className="social-link">𝕏</a>
                <a href="#" className="social-link">📷</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 ANAPEF - Navegantes. Todos os direitos reservados.</p>
            <div className="footer-links">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
