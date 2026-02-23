// ============================================
// MONTA AÍ - React Components (JavaScript Puro)
// ============================================

var ce = React.createElement;

// ---- EmailJS Config ----
var EMAILJS_KEY = 'zTfuMpzoqfSApaxRZ';
var EMAILJS_SERVICE = 'service_jsirphl';
var EMAILJS_TEMPLATE = 'template_oi4u5jl';

// Inicializa EmailJS
emailjs.init(EMAILJS_KEY);

// SVG do ícone WhatsApp (imagem real)
var WPP_SVG = 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>');

// Helper: cria img do WhatsApp
function wppIcon(extraClass) {
  return ce('img', { src: WPP_SVG, alt: 'WhatsApp', className: 'wpp-icon' + (extraClass ? ' ' + extraClass : '') });
}

// Componente Header
function Header() {
  var _s1 = React.useState(false);
  var scrolled = _s1[0]; var setScrolled = _s1[1];
  var _s2 = React.useState(false);
  var menuOpen = _s2[0]; var setMenuOpen = _s2[1];

  React.useEffect(function() {
    var handleScroll = function() { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return function() { window.removeEventListener('scroll', handleScroll); };
  }, []);

  var links = [
    { href: '#inicio', label: 'Início' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#planos', label: 'Planos' },
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];

  return ce('header', { className: 'header ' + (scrolled ? 'scrolled' : '') },
    ce('nav', { className: 'nav' },
      ce('a', { href: '#inicio', className: 'nav-logo' },
        ce('span', null, 'Monta'), ' Aí!'
      ),
      ce('div', { className: 'nav-links ' + (menuOpen ? 'active' : '') },
        links.map(function(link) {
          return ce('a', { key: link.href, href: link.href, onClick: function() { setMenuOpen(false); } }, link.label);
        }),
        ce('a', { href: '#contato', className: 'nav-cta', onClick: function() { setMenuOpen(false); } }, 'Quero Montar!')
      ),
      ce('button', { className: 'hamburger', onClick: function() { setMenuOpen(!menuOpen); }, 'aria-label': 'Menu' },
        ce('span'), ce('span'), ce('span')
      )
    )
  );
}

// Componente Hero com logo redesenhada (hexágono escuro + circuitos + MA)
function Hero() {
  return ce('section', { className: 'hero', id: 'inicio' },
    ce('div', { className: 'container hero-content' },
      ce('div', { className: 'hero-text' },
        ce('h1', null,
          'Monte seu PC dos sonhos com quem ',
          ce('span', { className: 'highlight' }, 'entende do assunto')
        ),
        ce('p', null, 'Consultoria especializada para você escolher as melhores peças, com o melhor custo-benefício e sem dor de cabeça na montagem.'),
        ce('div', { className: 'hero-buttons' },
          ce('a', { href: '#planos', className: 'btn btn-primary' }, 'Ver Planos'),
          ce('a', { href: '#como-funciona', className: 'btn btn-secondary' }, 'Como Funciona?')
        ),
        ce('div', { className: 'hero-stats' },
          ce('div', { className: 'hero-stat' },
            ce('div', { className: 'number' }, '500+'),
            ce('div', { className: 'label' }, 'PCs Montados')
          ),
          ce('div', { className: 'hero-stat' },
            ce('div', { className: 'number' }, '98%'),
            ce('div', { className: 'label' }, 'Satisfação')
          ),
          ce('div', { className: 'hero-stat' },
            ce('div', { className: 'number' }, '30%'),
            ce('div', { className: 'label' }, 'Economia Média')
          )
        )
      ),
      ce('div', { className: 'hero-visual' },
        ce('div', { className: 'hero-hex' },
          ce('svg', { viewBox: '0 0 400 460', xmlns: 'http://www.w3.org/2000/svg' },
            ce('defs', null,
              ce('linearGradient', { id: 'hexGrad', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
                ce('stop', { offset: '0%', stopColor: '#2A2A3D' }),
                ce('stop', { offset: '100%', stopColor: '#1A1A2E' })
              ),
              ce('filter', { id: 'glow' },
                ce('feGaussianBlur', { stdDeviation: '3', result: 'coloredBlur' }),
                ce('feMerge', null,
                  ce('feMergeNode', { 'in': 'coloredBlur' }),
                  ce('feMergeNode', { 'in': 'SourceGraphic' })
                )
              )
            ),

            // Hexágono principal (escuro como na logo)
            ce('polygon', { points: '200,30 350,117 350,290 200,377 50,290 50,117', fill: 'url(#hexGrad)', stroke: '#3A3A50', strokeWidth: '2' }),

            // --- Circuitos superiores (canto superior direito) ---
            // Trilha horizontal superior
            ce('line', { x1: '220', y1: '70', x2: '310', y2: '70', stroke: '#9B59D0', strokeWidth: '1.5', opacity: '0.6' }),
            ce('line', { x1: '310', y1: '70', x2: '310', y2: '100', stroke: '#9B59D0', strokeWidth: '1.5', opacity: '0.6' }),
            // Nós (bolinhas nos cruzamentos)
            ce('circle', { cx: '220', cy: '70', r: '3', fill: '#9B59D0', opacity: '0.9' }),
            ce('circle', { cx: '270', cy: '70', r: '2.5', fill: '#9B59D0', opacity: '0.7' }),
            ce('circle', { cx: '310', cy: '70', r: '3', fill: '#9B59D0', opacity: '0.9' }),
            ce('circle', { cx: '310', cy: '100', r: '2.5', fill: '#9B59D0', opacity: '0.7' }),

            // Trilha diagonal superior
            ce('line', { x1: '250', y1: '85', x2: '290', y2: '85', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.4' }),
            ce('line', { x1: '290', y1: '85', x2: '320', y2: '115', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.4' }),
            ce('circle', { cx: '250', cy: '85', r: '2', fill: '#9B59D0', opacity: '0.6' }),
            ce('circle', { cx: '290', cy: '85', r: '2', fill: '#9B59D0', opacity: '0.6' }),

            // Trilha superior mais longa
            ce('line', { x1: '200', y1: '55', x2: '280', y2: '55', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.35' }),
            ce('line', { x1: '280', y1: '55', x2: '280', y2: '70', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.35' }),
            ce('circle', { cx: '200', cy: '55', r: '2', fill: '#9B59D0', opacity: '0.5' }),
            ce('circle', { cx: '240', cy: '55', r: '1.5', fill: '#9B59D0', opacity: '0.4' }),
            ce('circle', { cx: '280', cy: '55', r: '2', fill: '#9B59D0', opacity: '0.5' }),

            // Trilha vertical direita
            ce('line', { x1: '330', y1: '130', x2: '330', y2: '170', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.3' }),
            ce('circle', { cx: '330', cy: '130', r: '2', fill: '#9B59D0', opacity: '0.5' }),
            ce('circle', { cx: '330', cy: '170', r: '2', fill: '#9B59D0', opacity: '0.4' }),

            // Trilha com ramificação
            ce('line', { x1: '270', y1: '100', x2: '310', y2: '100', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.35' }),
            ce('line', { x1: '270', y1: '100', x2: '270', y2: '120', stroke: '#9B59D0', strokeWidth: '1', opacity: '0.3' }),
            ce('circle', { cx: '270', cy: '100', r: '2', fill: '#9B59D0', opacity: '0.5' }),
            ce('circle', { cx: '270', cy: '120', r: '1.5', fill: '#9B59D0', opacity: '0.4' }),

            // --- Texto MA estilizado ---
            // M
            ce('path', {
              d: 'M 130 260 L 130 170 L 165 220 L 200 170 L 200 260',
              fill: 'none', stroke: 'white', strokeWidth: '8', strokeLinecap: 'round', strokeLinejoin: 'round'
            }),
            // A
            ce('path', {
              d: 'M 220 260 L 250 170 L 280 260',
              fill: 'none', stroke: 'white', strokeWidth: '8', strokeLinecap: 'round', strokeLinejoin: 'round'
            }),
            // A barra horizontal
            ce('line', { x1: '232', y1: '230', x2: '268', y2: '230', stroke: 'white', strokeWidth: '6', strokeLinecap: 'round' }),

            // --- Texto "MONTA AÍ!" abaixo ---
            ce('text', { x: '200', y: '420', textAnchor: 'middle', fill: 'white', fontSize: '36', fontWeight: '800', fontFamily: 'Inter, sans-serif', letterSpacing: '3' }, 'MONTA AÍ!')
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

  return ce('section', { className: 'section about', id: 'como-funciona' },
    ce('div', { className: 'container' },
      ce('div', { className: 'section-header fade-in' },
        ce('span', { className: 'tag' }, 'Como Funciona'),
        ce('h2', null, 'Simples, rápido e sem complicação'),
        ce('p', null, 'Em 3 passos você sai do zero ao PC montado e funcionando')
      ),
      ce('div', { className: 'steps-grid' },
        steps.map(function(step, i) {
          return ce('div', { className: 'step-card fade-in', key: i, style: { transitionDelay: (i * 0.1) + 's' } },
            ce('div', { className: 'step-number' }, step.num),
            ce('h3', null, step.title),
            ce('p', null, step.desc)
          );
        })
      )
    )
  );
}

// Componente Planos (R$199 no Completo)
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
      icon: '🚀', name: 'Monta Aí Completo', price: 'R$ 199', period: '/projeto',
      desc: 'Serviço completo: a gente escolhe, compra e monta o PC inteiro pra você.',
      features: ['Tudo dos planos anteriores', 'Compra assistida das peças', 'Montagem completa do PC', 'Instalação do sistema operacional', 'Benchmark e testes de stress', 'Garantia de 30 dias no serviço'],
      featured: false
    }
  ];

  return ce('section', { className: 'section', id: 'planos' },
    ce('div', { className: 'container' },
      ce('div', { className: 'section-header fade-in' },
        ce('span', { className: 'tag' }, 'Nossos Planos'),
        ce('h2', null, 'Escolha o plano ideal para você'),
        ce('p', null, 'Do iniciante ao avançado, temos a solução perfeita para cada necessidade')
      ),
      ce('div', { className: 'plans-grid' },
        plans.map(function(plan, i) {
          return ce('div', { className: 'plan-card fade-in ' + (plan.featured ? 'featured' : ''), key: i, style: { transitionDelay: (i * 0.1) + 's' } },
            ce('div', { className: 'plan-icon' }, plan.icon),
            ce('h3', null, plan.name),
            ce('div', { className: 'plan-price' }, plan.price, ' ', ce('small', null, plan.period)),
            ce('p', { className: 'plan-desc' }, plan.desc),
            ce('ul', { className: 'plan-features' },
              plan.features.map(function(f, j) { return ce('li', { key: j }, f); })
            ),
            ce('a', { href: '#contato', className: 'btn ' + (plan.featured ? 'btn-primary' : 'btn-secondary') }, 'Quero esse plano')
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

  return ce('section', { className: 'section benefits', id: 'beneficios' },
    ce('div', { className: 'container' },
      ce('div', { className: 'section-header fade-in' },
        ce('span', { className: 'tag' }, 'Benefícios'),
        ce('h2', null, 'Por que escolher a Monta Aí?'),
        ce('p', null, 'Mais do que montar PCs, entregamos confiança e resultado')
      ),
      ce('div', { className: 'benefits-grid' },
        items.map(function(item, i) {
          return ce('div', { className: 'benefit-card fade-in', key: i, style: { transitionDelay: (i * 0.05) + 's' } },
            ce('div', { className: 'benefit-icon' }, item.icon),
            ce('h4', null, item.title),
            ce('p', null, item.desc)
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

  return ce('section', { className: 'section', id: 'depoimentos' },
    ce('div', { className: 'container' },
      ce('div', { className: 'section-header fade-in' },
        ce('span', { className: 'tag' }, 'Depoimentos'),
        ce('h2', null, 'O que nossos clientes dizem'),
        ce('p', null, 'Centenas de PCs montados com sucesso e clientes satisfeitos')
      ),
      ce('div', { className: 'testimonials-grid' },
        testimonials.map(function(t, i) {
          return ce('div', { className: 'testimonial-card fade-in', key: i, style: { transitionDelay: (i * 0.1) + 's' } },
            ce('div', { className: 'testimonial-stars' }, '★★★★★'),
            ce('p', { className: 'testimonial-text' }, '"' + t.text + '"'),
            ce('div', { className: 'testimonial-author' },
              ce('div', { className: 'testimonial-avatar' }, t.initials),
              ce('div', { className: 'testimonial-info' },
                ce('strong', null, t.name),
                ce('span', null, t.role)
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
  var _s = React.useState(null);
  var active = _s[0]; var setActive = _s[1];

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

  return ce('section', { className: 'section faq', id: 'faq' },
    ce('div', { className: 'container' },
      ce('div', { className: 'section-header fade-in' },
        ce('span', { className: 'tag' }, 'FAQ'),
        ce('h2', null, 'Perguntas Frequentes'),
        ce('p', null, 'Tire suas dúvidas sobre nossos serviços')
      ),
      ce('div', { className: 'faq-list' },
        faqs.map(function(faq, i) {
          return ce('div', { className: 'faq-item ' + (active === i ? 'active' : ''), key: i },
            ce('button', { className: 'faq-question', onClick: function() { setActive(active === i ? null : i); } },
              faq.q,
              ce('span', { className: 'faq-arrow' }, '▼')
            ),
            ce('div', { className: 'faq-answer' },
              ce('p', null, faq.a)
            )
          );
        })
      )
    )
  );
}

// Componente CTA Banner
function CTABanner() {
  return ce('section', { className: 'cta-banner' },
    ce('div', { className: 'container' },
      ce('h2', null, 'Pronto para montar seu PC dos sonhos?'),
      ce('p', null, 'Fale com a nossa equipe agora e comece a transformar seu setup. É rápido, fácil e sem compromisso!'),
      ce('div', { className: 'cta-buttons' },
        ce('a', { href: '#contato', className: 'btn btn-white' }, 'Falar com Especialista'),
        ce('a', { href: 'https://wa.me/5534992279573', target: '_blank', rel: 'noopener noreferrer', className: 'btn btn-whatsapp' },
          wppIcon(), ' WhatsApp'
        )
      )
    )
  );
}

// Componente Contato com EmailJS
function Contato() {
  var _s = React.useState(null);
  var status = _s[0]; var setStatus = _s[1];
  var _s2 = React.useState(false);
  var sending = _s2[0]; var setSending = _s2[1];

  function handleSubmit(ev) {
    ev.preventDefault();
    setSending(true);
    setStatus(null);

    var form = ev.target;
    var data = new FormData(form);

    var templateParams = {
      name: data.get('nome'),
      email: data.get('email'),
      phone: data.get('telefone'),
      plan: data.get('plano'),
      message: data.get('mensagem')
    };

    emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, templateParams)
      .then(function() {
        setSending(false);
        setStatus('success');
        form.reset();
        setTimeout(function() { setStatus(null); }, 6000);
      })
      .catch(function(err) {
        console.error('EmailJS Error:', err);
        setSending(false);
        setStatus('error');
        setTimeout(function() { setStatus(null); }, 6000);
      });
  }

  return ce('section', { className: 'section contact', id: 'contato' },
    ce('div', { className: 'container' },
      ce('div', { className: 'section-header fade-in' },
        ce('span', { className: 'tag' }, 'Contato'),
        ce('h2', null, 'Vamos conversar?'),
        ce('p', null, 'Entre em contato e comece a montar seu PC ideal')
      ),
      ce('div', { className: 'contact-grid' },
        // Info lado esquerdo
        ce('div', { className: 'contact-info fade-in' },
          ce('h3', null, 'Fale com a gente'),
          ce('p', null, 'Estamos prontos para te ajudar a escolher o melhor setup. Escolha o canal que preferir!'),
          ce('div', { className: 'contact-methods' },
            ce('div', { className: 'contact-method' },
              ce('div', { className: 'contact-method-icon' }, '📧'),
              ce('div', { className: 'contact-method-text' },
                ce('strong', null, 'E-mail'),
                ce('span', null, 'montaaipc@gmail.com')
              )
            ),
            ce('div', { className: 'contact-method' },
              ce('div', { className: 'contact-method-icon' },
                ce('img', { src: WPP_SVG, alt: 'WhatsApp', style: { width: '24px', height: '24px', filter: 'brightness(0) invert(0.6)' } })
              ),
              ce('div', { className: 'contact-method-text' },
                ce('strong', null, 'WhatsApp'),
                ce('span', null, 'Clique no botão verde para falar conosco')
              )
            ),
            ce('div', { className: 'contact-method' },
              ce('div', { className: 'contact-method-icon' }, '⏰'),
              ce('div', { className: 'contact-method-text' },
                ce('strong', null, 'Horário de Atendimento'),
                ce('span', null, 'Seg a Sex: 9h às 20h | Sáb: 10h às 16h')
              )
            )
          ),
          ce('a', { href: 'https://wa.me/5534992279573', target: '_blank', rel: 'noopener noreferrer', className: 'btn btn-whatsapp', style: { width: 'fit-content' } },
            wppIcon(), ' Chamar no WhatsApp'
          )
        ),
        // Formulário lado direito
        ce('form', { className: 'contact-form fade-in', onSubmit: handleSubmit },
          ce('h3', null, 'Envie sua mensagem'),
          ce('div', { className: 'form-row' },
            ce('div', { className: 'form-group' },
              ce('label', { htmlFor: 'nome' }, 'Nome'),
              ce('input', { type: 'text', id: 'nome', name: 'nome', placeholder: 'Seu nome', required: true })
            ),
            ce('div', { className: 'form-group' },
              ce('label', { htmlFor: 'email' }, 'E-mail'),
              ce('input', { type: 'email', id: 'email', name: 'email', placeholder: 'seu@email.com', required: true })
            )
          ),
          ce('div', { className: 'form-row' },
            ce('div', { className: 'form-group' },
              ce('label', { htmlFor: 'telefone' }, 'Telefone'),
              ce('input', { type: 'tel', id: 'telefone', name: 'telefone', placeholder: '(00) 00000-0000' })
            ),
            ce('div', { className: 'form-group' },
              ce('label', { htmlFor: 'plano' }, 'Plano de Interesse'),
              ce('select', { id: 'plano', name: 'plano', required: true },
                ce('option', { value: '' }, 'Selecione...'),
                ce('option', { value: 'Consultoria de Peças' }, 'Consultoria de Peças - R$79'),
                ce('option', { value: 'Ajuda na Montagem' }, 'Ajuda na Montagem - R$149'),
                ce('option', { value: 'Monta Aí Completo' }, 'Monta Aí Completo - R$199')
              )
            )
          ),
          ce('div', { className: 'form-group' },
            ce('label', { htmlFor: 'mensagem' }, 'Mensagem'),
            ce('textarea', { id: 'mensagem', name: 'mensagem', placeholder: 'Conte sobre seu projeto: uso, orçamento, dúvidas...', required: true })
          ),
          ce('button', { type: 'submit', className: 'btn btn-primary', style: { width: '100%' }, disabled: sending },
            sending ? 'Enviando...' : 'Enviar Mensagem'
          ),
          status === 'success' ? ce('div', { className: 'form-status success' }, '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.') : null,
          status === 'error' ? ce('div', { className: 'form-status error' }, '✕ Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.') : null
        )
      )
    )
  );
}

// Componente Footer (só Instagram @montaai_pc)
function Footer() {
  return ce('footer', { className: 'footer' },
    ce('div', { className: 'container' },
      ce('div', { className: 'footer-grid' },
        ce('div', { className: 'footer-brand' },
          ce('div', { className: 'nav-logo', style: { fontSize: '1.5rem' } },
            ce('span', null, 'Monta'), ' Aí!'
          ),
          ce('p', null, 'Consultoria especializada para você montar o PC perfeito, sem dor de cabeça e com economia real.'),
          ce('div', { className: 'footer-social' },
            ce('a', { href: 'https://instagram.com/montaai_pc', target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Instagram' },
              ce('svg', { width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                ce('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5' }),
                ce('circle', { cx: '12', cy: '12', r: '5' }),
                ce('line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5' })
              )
            )
          )
        ),
        ce('div', { className: 'footer-col' },
          ce('h4', null, 'Links Rápidos'),
          ce('a', { href: '#inicio' }, 'Início'),
          ce('a', { href: '#como-funciona' }, 'Como Funciona'),
          ce('a', { href: '#planos' }, 'Planos'),
          ce('a', { href: '#faq' }, 'FAQ')
        ),
        ce('div', { className: 'footer-col' },
          ce('h4', null, 'Planos'),
          ce('a', { href: '#planos' }, 'Consultoria de Peças'),
          ce('a', { href: '#planos' }, 'Ajuda na Montagem'),
          ce('a', { href: '#planos' }, 'Monta Aí Completo')
        ),
        ce('div', { className: 'footer-col' },
          ce('h4', null, 'Contato'),
          ce('a', { href: 'mailto:montaaipc@gmail.com' }, 'montaaipc@gmail.com'),
          ce('a', { href: 'https://wa.me/5534992279573', target: '_blank', rel: 'noopener noreferrer' }, 'WhatsApp'),
          ce('a', { href: 'https://instagram.com/montaai_pc', target: '_blank', rel: 'noopener noreferrer' }, '@montaai_pc')
        )
      ),
      ce('div', { className: 'footer-bottom' },
        ce('span', null, '© 2026 Monta Aí! Todos os direitos reservados.'),
        ce('span', null, 'Feito com 💜 para quem ama tecnologia')
      )
    )
  );
}

// Componente WhatsApp Flutuante
function WhatsAppFloat() {
  return ce('a', { href: 'https://wa.me/5534992279573', target: '_blank', rel: 'noopener noreferrer', className: 'whatsapp-float', title: 'Fale conosco no WhatsApp' },
    ce('img', { src: WPP_SVG, alt: 'WhatsApp', style: { width: '32px', height: '32px' } })
  );
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

  return ce(React.Fragment, null,
    ce(Header),
    ce(Hero),
    ce(ComoFunciona),
    ce(Planos),
    ce(Beneficios),
    ce(Depoimentos),
    ce(FAQ),
    ce(CTABanner),
    ce(Contato),
    ce(Footer),
    ce(WhatsAppFloat)
  );
}

// Render
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ce(App));
