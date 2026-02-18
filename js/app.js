// ============================================
// MONTA AÍ - React Components (JavaScript Puro)
// ============================================

const e = React.createElement;

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

  return e('header', { className: 'header ' + (scrolled ? 'scrolled' : '') },
    e('nav', { className: 'nav' },
      e('a', { href: '#inicio', className: 'nav-logo' },
        e('span', null, 'Monta'), ' Aí!'
      ),
      e('div', { className: 'nav-links ' + (menuOpen ? 'active' : '') },
        links.map(function(link) {
          return e('a', { key: link.href, href: link.href, onClick: function() { setMenuOpen(false); } }, link.label);
        }),
        e('a', { href: '#contato', className: 'nav-cta', onClick: function() { setMenuOpen(false); } }, 'Quero Montar!')
      ),
      e('button', { className: 'hamburger', onClick: function() { setMenuOpen(!menuOpen); }, 'aria-label': 'Menu' },
        e('span'), e('span'), e('span')
      )
    )
  );
}

// Componente Hero
function Hero() {
  return e('section', { className: 'hero', id: 'inicio' },
    e('div', { className: 'container hero-content' },
      e('div', { className: 'hero-text' },
        e('h1', null,
          'Monte seu PC dos sonhos com quem ',
          e('span', { className: 'highlight' }, 'entende do assunto')
        ),
        e('p', null, 'Consultoria especializada para você escolher as melhores peças, com o melhor custo-benefício e sem dor de cabeça na montagem.'),
        e('div', { className: 'hero-buttons' },
          e('a', { href: '#planos', className: 'btn btn-primary' }, 'Ver Planos'),
          e('a', { href: '#como-funciona', className: 'btn btn-secondary' }, 'Como Funciona?')
        ),
        e('div', { className: 'hero-stats' },
          e('div', { className: 'hero-stat' },
            e('div', { className: 'number' }, '500+'),
            e('div', { className: 'label' }, 'PCs Montados')
          ),
          e('div', { className: 'hero-stat' },
            e('div', { className: 'number' }, '98%'),
            e('div', { className: 'label' }, 'Satisfação')
          ),
          e('div', { className: 'hero-stat' },
            e('div', { className: 'number' }, '30%'),
            e('div', { className: 'label' }, 'Economia Média')
          )
        )
      ),
      e('div', { className: 'hero-visual' },
        e('div', { className: 'hero-hex' },
          e('svg', { viewBox: '0 0 400 400', xmlns: 'http://www.w3.org/2000/svg' },
            e('defs', null,
              e('linearGradient', { id: 'hexGrad', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
                e('stop', { offset: '0%', stopColor: '#7B2FBE' }),
                e('stop', { offset: '100%', stopColor: '#1A1A2E' })
              )
            ),
            e('polygon', { points: '200,30 350,110 350,270 200,350 50,270 50,110', fill: 'url(#hexGrad)', stroke: '#7B2FBE', strokeWidth: '2' }),
            e('circle', { cx: '150', cy: '140', r: '3', fill: '#9B59D0', opacity: '0.8' }),
            e('circle', { cx: '250', cy: '140', r: '3', fill: '#9B59D0', opacity: '0.8' }),
            e('circle', { cx: '200', cy: '260', r: '3', fill: '#9B59D0', opacity: '0.8' }),
            e('line', { x1: '150', y1: '140', x2: '200', y2: '140', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.5' }),
            e('line', { x1: '200', y1: '140', x2: '250', y2: '140', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.5' }),
            e('line', { x1: '200', y1: '140', x2: '200', y2: '260', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.5' }),
            e('circle', { cx: '170', cy: '200', r: '2', fill: '#9B59D0', opacity: '0.6' }),
            e('circle', { cx: '230', cy: '200', r: '2', fill: '#9B59D0', opacity: '0.6' }),
            e('line', { x1: '170', y1: '200', x2: '200', y2: '200', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.4' }),
            e('line', { x1: '200', y1: '200', x2: '230', y2: '200', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.4' }),
            e('text', { x: '200', y: '210', textAnchor: 'middle', fill: 'white', fontSize: '72', fontWeight: '800', fontFamily: 'Inter, sans-serif' }, 'MA')
          )
        )
      )
    )
  );
}

// Componente Como Funciona
function ComoFunciona() {
  var steps = [
    { num: '1', title: 'Nos conte seu objetivo', desc: 'Trabalho, jogos, edição de vídeo? Nos diga como pretende usar seu PC e qual seu orçamento.' },
    { num: '2', title: 'Receba sua consultoria', desc: 'Nossa equipe monta a lista ideal de peças compatíveis e com o melhor custo-benefício do mercado.' },
    { num: '3', title: 'Monte com confiança', desc: 'Com nosso guia ou ajuda presencial, você monta seu PC sem medo. Damos suporte do início ao fim.' }
  ];

  return e('section', { className: 'section about', id: 'como-funciona' },
    e('div', { className: 'container' },
      e('div', { className: 'section-header fade-in' },
        e('span', { className: 'tag' }, 'Como Funciona'),
        e('h2', null, 'Simples, rápido e sem complicação'),
        e('p', null, 'Em 3 passos você sai do zero ao PC montado e funcionando')
      ),
      e('div', { className: 'steps-grid' },
        steps.map(function(step, i) {
          return e('div', { className: 'step-card fade-in', key: i, style: { transitionDelay: (i * 0.1) + 's' } },
            e('div', { className: 'step-number' }, step.num),
            e('h3', null, step.title),
            e('p', null, step.desc)
          );
        })
      )
    )
  );
}

// Componente Planos
function Planos() {
  var plans = [
    {
      icon: '🔍', name: 'Consultoria de Peças', price: 'R$ 79', period: '/consulta',
      desc: 'Ideal para quem já sabe montar mas precisa de ajuda para escolher as peças certas.',
      features: ['Análise do seu orçamento', 'Lista completa de peças compatíveis', 'Comparativo de custo-benefício', 'Indicação das melhores lojas', 'Suporte por 7 dias via WhatsApp'],
      featured: false
    },
    {
      icon: '🔧', name: 'Ajuda na Montagem', price: 'R$ 149', period: '/sessão',
      desc: 'Consultoria + acompanhamento ao vivo da montagem do seu PC, passo a passo.',
      features: ['Tudo do plano Consultoria', 'Videochamada durante a montagem', 'Verificação de compatibilidade', 'Teste de componentes ao vivo', 'Ajuda com BIOS e drivers', 'Suporte por 15 dias via WhatsApp'],
      featured: true
    },
    {
      icon: '🚀', name: 'Monta Aí Completo', price: 'R$ 299', period: '/projeto',
      desc: 'Serviço completo: a gente escolhe, compra e monta o PC inteiro pra você.',
      features: ['Tudo dos planos anteriores', 'Compra assistida das peças', 'Montagem completa do PC', 'Instalação do sistema operacional', 'Benchmark e testes de stress', 'Garantia de 30 dias no serviço'],
      featured: false
    }
  ];

  return e('section', { className: 'section', id: 'planos' },
    e('div', { className: 'container' },
      e('div', { className: 'section-header fade-in' },
        e('span', { className: 'tag' }, 'Nossos Planos'),
        e('h2', null, 'Escolha o plano ideal para você'),
        e('p', null, 'Do iniciante ao avançado, temos a solução perfeita para cada necessidade')
      ),
      e('div', { className: 'plans-grid' },
        plans.map(function(plan, i) {
          return e('div', { className: 'plan-card fade-in ' + (plan.featured ? 'featured' : ''), key: i, style: { transitionDelay: (i * 0.1) + 's' } },
            e('div', { className: 'plan-icon' }, plan.icon),
            e('h3', null, plan.name),
            e('div', { className: 'plan-price' }, plan.price, ' ', e('small', null, plan.period)),
            e('p', { className: 'plan-desc' }, plan.desc),
            e('ul', { className: 'plan-features' },
              plan.features.map(function(f, j) { return e('li', { key: j }, f); })
            ),
            e('a', { href: '#contato', className: 'btn ' + (plan.featured ? 'btn-primary' : 'btn-secondary') }, 'Quero esse plano')
          );
        })
      )
    )
  );
}

// Componente Benefícios
function Beneficios() {
  var items = [
    { icon: '💰', title: 'Economia Real', desc: 'Evite compras erradas e economize até 30% escolhendo peças com melhor custo-benefício.' },
    { icon: '🛡️', title: 'Sem Incompatibilidade', desc: 'Garantimos que todas as peças são 100% compatíveis entre si. Zero dor de cabeça.' },
    { icon: '⚡', title: 'Performance Máxima', desc: 'Montamos builds otimizados para extrair o máximo de performance do seu orçamento.' },
    { icon: '🤝', title: 'Suporte Humano', desc: 'Atendimento real e personalizado. Nada de robôs — você fala direto com especialistas.' },
    { icon: '📦', title: 'Melhores Lojas', desc: 'Indicamos onde comprar com segurança, garantia e os melhores preços do mercado.' },
    { icon: '🎮', title: 'Foco no seu Uso', desc: 'Gamer, streamer, editor ou trabalho? Montamos o PC ideal para o SEU perfil.' },
    { icon: '🔄', title: 'Upgrade Futuro', desc: 'Pensamos no futuro: builds com espaço para upgrade sem precisar trocar tudo.' },
    { icon: '✅', title: 'Garantia no Serviço', desc: 'Se algo der errado na montagem, a gente resolve. Sem custo extra.' }
  ];

  return e('section', { className: 'section benefits', id: 'beneficios' },
    e('div', { className: 'container' },
      e('div', { className: 'section-header fade-in' },
        e('span', { className: 'tag' }, 'Benefícios'),
        e('h2', null, 'Por que escolher a Monta Aí?'),
        e('p', null, 'Mais do que montar PCs, entregamos confiança e resultado')
      ),
      e('div', { className: 'benefits-grid' },
        items.map(function(item, i) {
          return e('div', { className: 'benefit-card fade-in', key: i, style: { transitionDelay: (i * 0.05) + 's' } },
            e('div', { className: 'benefit-icon' }, item.icon),
            e('h4', null, item.title),
            e('p', null, item.desc)
          );
        })
      )
    )
  );
}

// Componente Depoimentos
function Depoimentos() {
  var testimonials = [
    { text: 'Eu não entendia nada de PC e a Monta Aí me ajudou do zero. Economizei quase R$800 em peças e meu PC roda tudo!', name: 'Lucas M.', role: 'Gamer', initials: 'LM' },
    { text: 'Precisava de um PC para edição de vídeo 4K e o build que montaram ficou perfeito. Suporte incrível durante todo o processo.', name: 'Amanda S.', role: 'Editora de Vídeo', initials: 'AS' },
    { text: 'Montei meu primeiro PC com a ajuda deles por videochamada. Foi muito mais fácil do que eu imaginava. Super recomendo!', name: 'Rafael T.', role: 'Programador', initials: 'RT' }
  ];

  return e('section', { className: 'section', id: 'depoimentos' },
    e('div', { className: 'container' },
      e('div', { className: 'section-header fade-in' },
        e('span', { className: 'tag' }, 'Depoimentos'),
        e('h2', null, 'O que nossos clientes dizem'),
        e('p', null, 'Centenas de PCs montados com sucesso e clientes satisfeitos')
      ),
      e('div', { className: 'testimonials-grid' },
        testimonials.map(function(t, i) {
          return e('div', { className: 'testimonial-card fade-in', key: i, style: { transitionDelay: (i * 0.1) + 's' } },
            e('div', { className: 'testimonial-stars' }, '★★★★★'),
            e('p', { className: 'testimonial-text' }, '"' + t.text + '"'),
            e('div', { className: 'testimonial-author' },
              e('div', { className: 'testimonial-avatar' }, t.initials),
              e('div', { className: 'testimonial-info' },
                e('strong', null, t.name),
                e('span', null, t.role)
              )
            )
          );
        })
      )
    )
  );
}

// Componente FAQ
function FAQ() {
  var _React$useState = React.useState(null);
  var active = _React$useState[0];
  var setActive = _React$useState[1];

  var faqs = [
    { q: 'Vocês vendem peças de computador?', a: 'Não! A Monta Aí é uma consultoria. Nós ajudamos você a escolher as melhores peças, indicamos onde comprar com segurança e pelo melhor preço, mas não vendemos hardware diretamente.' },
    { q: 'Como funciona a consultoria online?', a: 'Você nos conta seu objetivo (jogos, trabalho, edição, etc.) e seu orçamento. Nossa equipe analisa e monta uma lista completa de peças compatíveis e otimizadas. Tudo é enviado via WhatsApp ou e-mail com links diretos para compra.' },
    { q: 'E se eu não souber montar o PC sozinho?', a: 'Sem problemas! No plano "Ajuda na Montagem", acompanhamos você por videochamada, passo a passo. E no plano "Monta Aí Completo", a gente faz toda a montagem para você.' },
    { q: 'Vocês atendem presencialmente?', a: 'No plano "Monta Aí Completo" podemos atender presencialmente dependendo da sua localização. Para consultoria e ajuda na montagem, o atendimento é 100% online — o que permite atender clientes de todo o Brasil!' },
    { q: 'Qual o prazo de entrega da consultoria?', a: 'A lista de peças é entregue em até 48 horas após o pagamento. Em casos urgentes, temos opção de entrega expressa em até 12 horas.' },
    { q: 'Posso parcelar o pagamento?', a: 'Sim! Aceitamos PIX, cartão de crédito e débito. No cartão, é possível parcelar em até 3x sem juros.' },
    { q: 'E se as peças que vocês indicarem estiverem em falta?', a: 'Sempre indicamos alternativas equivalentes. Caso alguma peça fique indisponível, atualizamos a lista sem custo adicional dentro do período de suporte do seu plano.' },
    { q: 'Vocês dão garantia no serviço de montagem?', a: 'Sim! O plano "Monta Aí Completo" inclui 30 dias de garantia no serviço de montagem. Se algo der problema por conta da montagem, resolvemos sem custo.' }
  ];

  return e('section', { className: 'section faq', id: 'faq' },
    e('div', { className: 'container' },
      e('div', { className: 'section-header fade-in' },
        e('span', { className: 'tag' }, 'FAQ'),
        e('h2', null, 'Perguntas Frequentes'),
        e('p', null, 'Tire suas dúvidas sobre nossos serviços')
      ),
      e('div', { className: 'faq-list' },
        faqs.map(function(faq, i) {
          return e('div', { className: 'faq-item fade-in ' + (active === i ? 'active' : ''), key: i },
            e('button', { className: 'faq-question', onClick: function() { setActive(active === i ? null : i); } },
              faq.q,
              e('span', { className: 'faq-arrow' }, '▼')
            ),
            e('div', { className: 'faq-answer' },
              e('p', null, faq.a)
            )
          );
        })
      )
    )
  );
}

// Componente CTA Banner
function CTABanner() {
  return e('section', { className: 'cta-banner' },
    e('div', { className: 'container' },
      e('h2', null, 'Pronto para montar seu PC dos sonhos?'),
      e('p', null, 'Fale com a nossa equipe agora e comece a transformar seu setup. É rápido, fácil e sem compromisso!'),
      e('div', { className: 'cta-buttons' },
        e('a', { href: '#contato', className: 'btn btn-white' }, 'Falar com Especialista'),
        e('a', { href: 'https://wa.me/5534992279573', target: '_blank', rel: 'noopener noreferrer', className: 'btn btn-whatsapp' }, '📱 WhatsApp')
      )
    )
  );
}

// Componente Contato
function Contato() {
  var _s = React.useState(null);
  var status = _s[0]; var setStatus = _s[1];
  var _s2 = React.useState(false);
  var sending = _s2[0]; var setSending = _s2[1];

  function handleSubmit(ev) {
    ev.preventDefault();
    setSending(true);

    var form = ev.target;
    var data = new FormData(form);

    var nome = data.get('nome');
    var email = data.get('email');
    var telefone = data.get('telefone');
    var plano = data.get('plano');
    var mensagem = data.get('mensagem');

    var subject = encodeURIComponent('[Monta Aí] Nova consulta - ' + nome);
    var body = encodeURIComponent(
      'Nome: ' + nome + '\nE-mail: ' + email + '\nTelefone: ' + telefone + '\nPlano de interesse: ' + plano + '\n\nMensagem:\n' + mensagem
    );

    window.location.href = 'mailto:montaaipc@gmail.com?subject=' + subject + '&body=' + body;

    setSending(false);
    setStatus('success');
    form.reset();
    setTimeout(function() { setStatus(null); }, 5000);
  }

  return e('section', { className: 'section contact', id: 'contato' },
    e('div', { className: 'container' },
      e('div', { className: 'section-header fade-in' },
        e('span', { className: 'tag' }, 'Contato'),
        e('h2', null, 'Vamos conversar?'),
        e('p', null, 'Entre em contato e comece a montar seu PC ideal')
      ),
      e('div', { className: 'contact-grid' },
        // Info lado esquerdo
        e('div', { className: 'contact-info fade-in' },
          e('h3', null, 'Fale com a gente'),
          e('p', null, 'Estamos prontos para te ajudar a escolher o melhor setup. Escolha o canal que preferir!'),
          e('div', { className: 'contact-methods' },
            e('div', { className: 'contact-method' },
              e('div', { className: 'contact-method-icon' }, '📧'),
              e('div', { className: 'contact-method-text' },
                e('strong', null, 'E-mail'),
                e('span', null, 'montaaipc@gmail.com')
              )
            ),
            e('div', { className: 'contact-method' },
              e('div', { className: 'contact-method-icon' }, '📱'),
              e('div', { className: 'contact-method-text' },
                e('strong', null, 'WhatsApp'),
                e('span', null, 'Clique no botão verde para falar conosco')
              )
            ),
            e('div', { className: 'contact-method' },
              e('div', { className: 'contact-method-icon' }, '⏰'),
              e('div', { className: 'contact-method-text' },
                e('strong', null, 'Horário de Atendimento'),
                e('span', null, 'Seg a Sex: 9h às 20h | Sáb: 10h às 16h')
              )
            )
          ),
          e('a', { href: 'https://wa.me/5534992279573', target: '_blank', rel: 'noopener noreferrer', className: 'btn btn-whatsapp', style: { width: 'fit-content' } }, '📱 Chamar no WhatsApp')
        ),
        // Formulário lado direito
        e('form', { className: 'contact-form fade-in', onSubmit: handleSubmit },
          e('h3', null, 'Envie sua mensagem'),
          e('div', { className: 'form-row' },
            e('div', { className: 'form-group' },
              e('label', { htmlFor: 'nome' }, 'Nome'),
              e('input', { type: 'text', id: 'nome', name: 'nome', placeholder: 'Seu nome', required: true })
            ),
            e('div', { className: 'form-group' },
              e('label', { htmlFor: 'email' }, 'E-mail'),
              e('input', { type: 'email', id: 'email', name: 'email', placeholder: 'seu@email.com', required: true })
            )
          ),
          e('div', { className: 'form-row' },
            e('div', { className: 'form-group' },
              e('label', { htmlFor: 'telefone' }, 'Telefone'),
              e('input', { type: 'tel', id: 'telefone', name: 'telefone', placeholder: '(00) 00000-0000' })
            ),
            e('div', { className: 'form-group' },
              e('label', { htmlFor: 'plano' }, 'Plano de Interesse'),
              e('select', { id: 'plano', name: 'plano', required: true },
                e('option', { value: '' }, 'Selecione...'),
                e('option', { value: 'Consultoria de Peças' }, 'Consultoria de Peças - R$79'),
                e('option', { value: 'Ajuda na Montagem' }, 'Ajuda na Montagem - R$149'),
                e('option', { value: 'Monta Aí Completo' }, 'Monta Aí Completo - R$299')
              )
            )
          ),
          e('div', { className: 'form-group' },
            e('label', { htmlFor: 'mensagem' }, 'Mensagem'),
            e('textarea', { id: 'mensagem', name: 'mensagem', placeholder: 'Conte sobre seu projeto: uso, orçamento, dúvidas...', required: true })
          ),
          e('button', { type: 'submit', className: 'btn btn-primary', style: { width: '100%' }, disabled: sending },
            sending ? 'Enviando...' : 'Enviar Mensagem'
          ),
          status === 'success' ? e('div', { className: 'form-status success' }, '✓ Mensagem preparada! Seu cliente de e-mail foi aberto com os dados preenchidos.') : null
        )
      )
    )
  );
}

// Componente Footer
function Footer() {
  return e('footer', { className: 'footer' },
    e('div', { className: 'container' },
      e('div', { className: 'footer-grid' },
        e('div', { className: 'footer-brand' },
          e('div', { className: 'nav-logo', style: { fontSize: '1.5rem' } },
            e('span', null, 'Monta'), ' Aí!'
          ),
          e('p', null, 'Consultoria especializada para você montar o PC perfeito, sem dor de cabeça e com economia real.'),
          e('div', { className: 'footer-social' },
            e('a', { href: '#', 'aria-label': 'Instagram' }, '📷'),
            e('a', { href: '#', 'aria-label': 'YouTube' }, '🎬'),
            e('a', { href: '#', 'aria-label': 'Twitter' }, '🐦')
          )
        ),
        e('div', { className: 'footer-col' },
          e('h4', null, 'Links Rápidos'),
          e('a', { href: '#inicio' }, 'Início'),
          e('a', { href: '#como-funciona' }, 'Como Funciona'),
          e('a', { href: '#planos' }, 'Planos'),
          e('a', { href: '#faq' }, 'FAQ')
        ),
        e('div', { className: 'footer-col' },
          e('h4', null, 'Planos'),
          e('a', { href: '#planos' }, 'Consultoria de Peças'),
          e('a', { href: '#planos' }, 'Ajuda na Montagem'),
          e('a', { href: '#planos' }, 'Monta Aí Completo')
        ),
        e('div', { className: 'footer-col' },
          e('h4', null, 'Contato'),
          e('a', { href: 'mailto:montaaipc@gmail.com' }, 'montaaipc@gmail.com'),
          e('a', { href: 'https://wa.me/5534992279573', target: '_blank', rel: 'noopener noreferrer' }, 'WhatsApp'),
          e('a', { href: '#contato' }, 'Formulário')
        )
      ),
      e('div', { className: 'footer-bottom' },
        e('span', null, '© 2026 Monta Aí! Todos os direitos reservados.'),
        e('span', null, 'Feito com 💜 para quem ama tecnologia')
      )
    )
  );
}

// Componente WhatsApp Flutuante
function WhatsAppFloat() {
  return e('a', { href: 'https://wa.me/5534992279573', target: '_blank', rel: 'noopener noreferrer', className: 'whatsapp-float', title: 'Fale conosco no WhatsApp' }, '💬');
}

// App Principal
function App() {
  React.useEffect(function() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });

    return function() { observer.disconnect(); };
  }, []);

  return e(React.Fragment, null,
    e(Header),
    e(Hero),
    e(ComoFunciona),
    e(Planos),
    e(Beneficios),
    e(Depoimentos),
    e(FAQ),
    e(CTABanner),
    e(Contato),
    e(Footer),
    e(WhatsAppFloat)
  );
}

// Render
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
