// ============================================
// MONTA AÍ - React Components (JSX)
// ============================================

// Componente Header
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#planos', label: 'Planos' },
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#inicio" className="nav-logo">
          <span>Monta</span> Aí!
        </a>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Quero Montar!
          </a>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}

// Componente Hero
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Monte seu PC dos sonhos com quem <span className="highlight">entende do assunto</span>
          </h1>
          <p>
            Consultoria especializada para você escolher as melhores peças,
            com o melhor custo-benefício e sem dor de cabeça na montagem.
          </p>
          <div className="hero-buttons">
            <a href="#planos" className="btn btn-primary">Ver Planos</a>
            <a href="#como-funciona" className="btn btn-secondary">Como Funciona?</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number">500+</div>
              <div className="label">PCs Montados</div>
            </div>
            <div className="hero-stat">
              <div className="number">98%</div>
              <div className="label">Satisfação</div>
            </div>
            <div className="hero-stat">
              <div className="number">30%</div>
              <div className="label">Economia Média</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-hex">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7B2FBE" />
                  <stop offset="100%" stopColor="#1A1A2E" />
                </linearGradient>
              </defs>
              <polygon points="200,30 350,110 350,270 200,350 50,270 50,110"
                       fill="url(#hexGrad)" stroke="#7B2FBE" strokeWidth="2" />
              {/* Circuitos decorativos */}
              <circle cx="150" cy="140" r="3" fill="#9B59D0" opacity="0.8" />
              <circle cx="250" cy="140" r="3" fill="#9B59D0" opacity="0.8" />
              <circle cx="200" cy="260" r="3" fill="#9B59D0" opacity="0.8" />
              <line x1="150" y1="140" x2="200" y2="140" stroke="#9B59D0" strokeWidth="1" opacity="0.5" />
              <line x1="200" y1="140" x2="250" y2="140" stroke="#9B59D0" strokeWidth="1" opacity="0.5" />
              <line x1="200" y1="140" x2="200" y2="260" stroke="#9B59D0" strokeWidth="1" opacity="0.5" />
              <circle cx="170" cy="200" r="2" fill="#9B59D0" opacity="0.6" />
              <circle cx="230" cy="200" r="2" fill="#9B59D0" opacity="0.6" />
              <line x1="170" y1="200" x2="200" y2="200" stroke="#9B59D0" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="230" y2="200" stroke="#9B59D0" strokeWidth="1" opacity="0.4" />
              {/* MA Text */}
              <text x="200" y="210" textAnchor="middle" fill="white" fontSize="72" fontWeight="800" fontFamily="Inter, sans-serif">
                MA
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente Como Funciona
function ComoFunciona() {
  const steps = [
    {
      num: '1',
      title: 'Nos conte seu objetivo',
      desc: 'Trabalho, jogos, edição de vídeo? Nos diga como pretende usar seu PC e qual seu orçamento.'
    },
    {
      num: '2',
      title: 'Receba sua consultoria',
      desc: 'Nossa equipe monta a lista ideal de peças compatíveis e com o melhor custo-benefício do mercado.'
    },
    {
      num: '3',
      title: 'Monte com confiança',
      desc: 'Com nosso guia ou ajuda presencial, você monta seu PC sem medo. Damos suporte do início ao fim.'
    }
  ];

  return (
    <section className="section about" id="como-funciona">
      <div className="container">
        <div className="section-header fade-in">
          <span className="tag">Como Funciona</span>
          <h2>Simples, rápido e sem complicação</h2>
          <p>Em 3 passos você sai do zero ao PC montado e funcionando</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Planos
function Planos() {
  const plans = [
    {
      icon: '🔍',
      name: 'Consultoria de Peças',
      price: 'R$ 79',
      period: '/consulta',
      desc: 'Ideal para quem já sabe montar mas precisa de ajuda para escolher as peças certas.',
      features: [
        'Análise do seu orçamento',
        'Lista completa de peças compatíveis',
        'Comparativo de custo-benefício',
        'Indicação das melhores lojas',
        'Suporte por 7 dias via WhatsApp',
      ],
      featured: false,
    },
    {
      icon: '🔧',
      name: 'Ajuda na Montagem',
      price: 'R$ 149',
      period: '/sessão',
      desc: 'Consultoria + acompanhamento ao vivo da montagem do seu PC, passo a passo.',
      features: [
        'Tudo do plano Consultoria',
        'Videochamada durante a montagem',
        'Verificação de compatibilidade',
        'Teste de componentes ao vivo',
        'Ajuda com BIOS e drivers',
        'Suporte por 15 dias via WhatsApp',
      ],
      featured: true,
    },
    {
      icon: '🚀',
      name: 'Monta Aí Completo',
      price: 'R$ 299',
      period: '/projeto',
      desc: 'Serviço completo: a gente escolhe, compra e monta o PC inteiro pra você.',
      features: [
        'Tudo dos planos anteriores',
        'Compra assistida das peças',
        'Montagem completa do PC',
        'Instalação do sistema operacional',
        'Benchmark e testes de stress',
        'Garantia de 30 dias no serviço',
      ],
      featured: false,
    },
  ];

  return (
    <section className="section" id="planos">
      <div className="container">
        <div className="section-header fade-in">
          <span className="tag">Nossos Planos</span>
          <h2>Escolha o plano ideal para você</h2>
          <p>Do iniciante ao avançado, temos a solução perfeita para cada necessidade</p>
        </div>
        <div className="plans-grid">
          {plans.map((plan, i) => (
            <div className={`plan-card fade-in ${plan.featured ? 'featured' : ''}`} key={i}
                 style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="plan-icon">{plan.icon}</div>
              <h3>{plan.name}</h3>
              <div className="plan-price">{plan.price} <small>{plan.period}</small></div>
              <p className="plan-desc">{plan.desc}</p>
              <ul className="plan-features">
                {plan.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a href="#contato" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                Quero esse plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Benefícios
function Beneficios() {
  const items = [
    { icon: '💰', title: 'Economia Real', desc: 'Evite compras erradas e economize até 30% escolhendo peças com melhor custo-benefício.' },
    { icon: '🛡️', title: 'Sem Incompatibilidade', desc: 'Garantimos que todas as peças são 100% compatíveis entre si. Zero dor de cabeça.' },
    { icon: '⚡', title: 'Performance Máxima', desc: 'Montamos builds otimizados para extrair o máximo de performance do seu orçamento.' },
    { icon: '🤝', title: 'Suporte Humano', desc: 'Atendimento real e personalizado. Nada de robôs — você fala direto com especialistas.' },
    { icon: '📦', title: 'Melhores Lojas', desc: 'Indicamos onde comprar com segurança, garantia e os melhores preços do mercado.' },
    { icon: '🎮', title: 'Foco no seu Uso', desc: 'Gamer, streamer, editor ou trabalho? Montamos o PC ideal para o SEU perfil.' },
    { icon: '🔄', title: 'Upgrade Futuro', desc: 'Pensamos no futuro: builds com espaço para upgrade sem precisar trocar tudo.' },
    { icon: '✅', title: 'Garantia no Serviço', desc: 'Se algo der errado na montagem, a gente resolve. Sem custo extra.' },
  ];

  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <div className="section-header fade-in">
          <span className="tag">Benefícios</span>
          <h2>Por que escolher a Monta Aí?</h2>
          <p>Mais do que montar PCs, entregamos confiança e resultado</p>
        </div>
        <div className="benefits-grid">
          {items.map((item, i) => (
            <div className="benefit-card fade-in" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="benefit-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Depoimentos
function Depoimentos() {
  const testimonials = [
    {
      text: 'Eu não entendia nada de PC e a Monta Aí me ajudou do zero. Economizei quase R$800 em peças e meu PC roda tudo!',
      name: 'Lucas M.',
      role: 'Gamer',
      initials: 'LM',
    },
    {
      text: 'Precisava de um PC para edição de vídeo 4K e o build que montaram ficou perfeito. Suporte incrível durante todo o processo.',
      name: 'Amanda S.',
      role: 'Editora de Vídeo',
      initials: 'AS',
    },
    {
      text: 'Montei meu primeiro PC com a ajuda deles por videochamada. Foi muito mais fácil do que eu imaginava. Super recomendo!',
      name: 'Rafael T.',
      role: 'Programador',
      initials: 'RT',
    },
  ];

  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <div className="section-header fade-in">
          <span className="tag">Depoimentos</span>
          <h2>O que nossos clientes dizem</h2>
          <p>Centenas de PCs montados com sucesso e clientes satisfeitos</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente FAQ
function FAQ() {
  const [active, setActive] = React.useState(null);

  const faqs = [
    {
      q: 'Vocês vendem peças de computador?',
      a: 'Não! A Monta Aí é uma consultoria. Nós ajudamos você a escolher as melhores peças, indicamos onde comprar com segurança e pelo melhor preço, mas não vendemos hardware diretamente.',
    },
    {
      q: 'Como funciona a consultoria online?',
      a: 'Você nos conta seu objetivo (jogos, trabalho, edição, etc.) e seu orçamento. Nossa equipe analisa e monta uma lista completa de peças compatíveis e otimizadas. Tudo é enviado via WhatsApp ou e-mail com links diretos para compra.',
    },
    {
      q: 'E se eu não souber montar o PC sozinho?',
      a: 'Sem problemas! No plano "Ajuda na Montagem", acompanhamos você por videochamada, passo a passo. E no plano "Monta Aí Completo", a gente faz toda a montagem para você.',
    },
    {
      q: 'Vocês atendem presencialmente?',
      a: 'No plano "Monta Aí Completo" podemos atender presencialmente dependendo da sua localização. Para consultoria e ajuda na montagem, o atendimento é 100% online — o que permite atender clientes de todo o Brasil!',
    },
    {
      q: 'Qual o prazo de entrega da consultoria?',
      a: 'A lista de peças é entregue em até 48 horas após o pagamento. Em casos urgentes, temos opção de entrega expressa em até 12 horas.',
    },
    {
      q: 'Posso parcelar o pagamento?',
      a: 'Sim! Aceitamos PIX, cartão de crédito e débito. No cartão, é possível parcelar em até 3x sem juros.',
    },
    {
      q: 'E se as peças que vocês indicarem estiverem em falta?',
      a: 'Sempre indicamos alternativas equivalentes. Caso alguma peça fique indisponível, atualizamos a lista sem custo adicional dentro do período de suporte do seu plano.',
    },
    {
      q: 'Vocês dão garantia no serviço de montagem?',
      a: 'Sim! O plano "Monta Aí Completo" inclui 30 dias de garantia no serviço de montagem. Se algo der problema por conta da montagem, resolvemos sem custo.',
    },
  ];

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-header fade-in">
          <span className="tag">FAQ</span>
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre nossos serviços</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item fade-in ${active === i ? 'active' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setActive(active === i ? null : i)}>
                {faq.q}
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente CTA Banner
function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Pronto para montar seu PC dos sonhos?</h2>
        <p>Fale com a nossa equipe agora e comece a transformar seu setup. É rápido, fácil e sem compromisso!</p>
        <div className="cta-buttons">
          <a href="#contato" className="btn btn-white">Falar com Especialista</a>
          <a href="https://wa.me/5534992279573" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            📱 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// Componente Contato
function Contato() {
  const [status, setStatus] = React.useState(null);
  const [sending, setSending] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.target;
    const data = new FormData(form);

    // Monta o corpo do email
    const nome = data.get('nome');
    const email = data.get('email');
    const telefone = data.get('telefone');
    const plano = data.get('plano');
    const mensagem = data.get('mensagem');

    const subject = encodeURIComponent(`[Monta Aí] Nova consulta - ${nome}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nPlano de interesse: ${plano}\n\nMensagem:\n${mensagem}`
    );

    // Abre o cliente de email com os dados preenchidos
    window.location.href = `mailto:montaaipc@gmail.com?subject=${subject}&body=${body}`;

    setSending(false);
    setStatus('success');
    form.reset();

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="section contact" id="contato">
      <div className="container">
        <div className="section-header fade-in">
          <span className="tag">Contato</span>
          <h2>Vamos conversar?</h2>
          <p>Entre em contato e comece a montar seu PC ideal</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <h3>Fale com a gente</h3>
            <p>Estamos prontos para te ajudar a escolher o melhor setup. Escolha o canal que preferir!</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">📧</div>
                <div className="contact-method-text">
                  <strong>E-mail</strong>
                  <span>montaaipc@gmail.com</span>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">📱</div>
                <div className="contact-method-text">
                  <strong>WhatsApp</strong>
                  <span>Clique no botão verde para falar conosco</span>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">⏰</div>
                <div className="contact-method-text">
                  <strong>Horário de Atendimento</strong>
                  <span>Seg a Sex: 9h às 20h | Sáb: 10h às 16h</span>
                </div>
              </div>
            </div>
            <a href="https://wa.me/5534992279573" target="_blank" rel="noopener noreferrer"
               className="btn btn-whatsapp" style={{ width: 'fit-content' }}>
              📱 Chamar no WhatsApp
            </a>
          </div>
          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <h3>Envie sua mensagem</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="seu@email.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" />
              </div>
              <div className="form-group">
                <label htmlFor="plano">Plano de Interesse</label>
                <select id="plano" name="plano" required>
                  <option value="">Selecione...</option>
                  <option value="Consultoria de Peças">Consultoria de Peças - R$79</option>
                  <option value="Ajuda na Montagem">Ajuda na Montagem - R$149</option>
                  <option value="Monta Aí Completo">Monta Aí Completo - R$299</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem"
                        placeholder="Conte sobre seu projeto: uso, orçamento, dúvidas..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={sending}>
              {sending ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {status === 'success' && (
              <div className="form-status success">
                ✓ Mensagem preparada! Seu cliente de e-mail foi aberto com os dados preenchidos.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ fontSize: '1.5rem' }}>
              <span>Monta</span> Aí!
            </div>
            <p>Consultoria especializada para você montar o PC perfeito, sem dor de cabeça e com economia real.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">🎬</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Links Rápidos</h4>
            <a href="#inicio">Início</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#planos">Planos</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h4>Planos</h4>
            <a href="#planos">Consultoria de Peças</a>
            <a href="#planos">Ajuda na Montagem</a>
            <a href="#planos">Monta Aí Completo</a>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <a href="mailto:montaaipc@gmail.com">montaaipc@gmail.com</a>
            <a href="https://wa.me/5534992279573" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="#contato">Formulário</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Monta Aí! Todos os direitos reservados.</span>
          <span>Feito com 💜 para quem ama tecnologia</span>
        </div>
      </div>
    </footer>
  );
}

// Componente WhatsApp Flutuante
function WhatsAppFloat() {
  return (
    <a href="https://wa.me/5534992279573" target="_blank" rel="noopener noreferrer"
       className="whatsapp-float" title="Fale conosco no WhatsApp">
      💬
    </a>
  );
}

// App Principal
function App() {
  React.useEffect(() => {
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <ComoFunciona />
      <Planos />
      <Beneficios />
      <Depoimentos />
      <FAQ />
      <CTABanner />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </React.Fragment>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
