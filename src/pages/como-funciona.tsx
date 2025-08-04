import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Componentes fictícios que seriam implementados em arquivos separados
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/assets/logo.svg" 
            alt="Fraldas e Patas Assinatura" 
            width={180} 
            height={60} 
            className="mr-4"
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-primary-500">Início</Link>
          <Link href="/produtos" className="text-gray-600 hover:text-primary-500">Produtos</Link>
          <Link href="/como-funciona" className="text-primary-500 font-medium">Como Funciona</Link>
          <Link href="/contato" className="text-gray-600 hover:text-primary-500">Contato</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-gray-700 hover:text-primary-500">
            <span className="mr-1">Minha Conta</span>
          </Link>
          <Link href="/assinatura" className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition duration-300">
            Assinar Agora
          </Link>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-semibold text-xl mb-4">Fraldas e Patas Assinatura</h3>
            <p className="text-gray-300 mb-4">Cuidado recorrente para quem você ama</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Início</Link></li>
              <li><Link href="/produtos" className="text-gray-300 hover:text-white">Produtos</Link></li>
              <li><Link href="/como-funciona" className="text-gray-300 hover:text-white">Como Funciona</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-white">Sobre Nós</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-300 hover:text-white">Perguntas Frequentes</Link></li>
              <li><Link href="/contato" className="text-gray-300 hover:text-white">Contato</Link></li>
              <li><Link href="/politica-de-privacidade" className="text-gray-300 hover:text-white">Política de Privacidade</Link></li>
              <li><Link href="/termos-de-uso" className="text-gray-300 hover:text-white">Termos de Uso</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">contato@fraldasepatas.com.br</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">(11) 98765-4321</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Fraldas e Patas Assinatura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">Como Funciona Nossa Assinatura</h1>
            <p className="text-xl text-gray-600 mb-6">Entenda como o Fraldas e Patas Assinatura torna sua vida mais fácil com entregas recorrentes de produtos essenciais.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/produtos" className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition duration-300 text-center">
                Ver Produtos
              </Link>
              <Link href="/assinatura" className="bg-white text-primary-500 border border-primary-500 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition duration-300 text-center">
                Começar Agora
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                <span>Imagem ilustrativa do processo de assinatura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Escolha seus produtos',
      description: 'Selecione entre nossa variedade de fraldas geriátricas, absorventes e tapetes higiênicos para pets. Personalize tamanhos e quantidades conforme sua necessidade.',
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Defina a frequência',
      description: 'Escolha a periodicidade que melhor atende suas necessidades: mensal, trimestral, semestral ou anual. Quanto maior o período, maior o desconto.',
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cadastre-se e pague',
      description: 'Crie sua conta, informe seu endereço de entrega e escolha a forma de pagamento. Aceitamos cartão de crédito, boleto e PIX para sua comodidade.',
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Receba em casa',
      description: 'Seus produtos serão entregues pontualmente conforme a frequência escolhida. Acompanhe o status pelo seu painel e receba notificações por e-mail e WhatsApp.',
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Processo Simples em 4 Passos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nosso sistema de assinatura foi desenvolvido para ser intuitivo e prático, garantindo que você tenha sempre os produtos que precisa sem complicações.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div key={step.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-primary-50 p-4 rounded-full">
                  {step.icon}
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Economia de Tempo',
      description: 'Não perca mais tempo com idas frequentes ao mercado ou farmácia. Receba tudo em casa, na data programada.',
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Economia Financeira',
      description: 'Economize até 15% em comparação com compras avulsas. Quanto maior a frequência da assinatura, maiores os descontos.',
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Flexibilidade Total',
      description: 'Altere, pause ou cancele sua assinatura a qualquer momento. Ajuste quantidades e frequência conforme suas necessidades mudam.',
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: 'Produtos Premium',
      description: 'Trabalhamos apenas com produtos de alta qualidade, garantindo conforto e eficiência para idosos e pets.',
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Entrega Garantida',
      description: 'Entregas pontuais e seguras em todo o Brasil. Acompanhe o status do seu pedido em tempo real pelo nosso sistema.',
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
    {
      title: 'Suporte Personalizado',
      description: 'Atendimento via WhatsApp, e-mail e telefone para tirar dúvidas e resolver qualquer problema com agilidade.',
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Benefícios da Nossa Assinatura</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Descubra por que milhares de clientes escolhem o Fraldas e Patas para suas necessidades recorrentes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: 'Mensal',
      description: 'Ideal para quem está começando',
      discount: '0%',
      features: [
        'Entrega mensal',
        'Alteração a qualquer momento',
        'Frete grátis',
        'Suporte via WhatsApp'
      ]
    },
    {
      name: 'Trimestral',
      description: 'Nossa opção mais popular',
      discount: '5%',
      features: [
        'Entrega a cada 3 meses',
        'Economia de 5% em cada entrega',
        'Frete grátis',
        'Suporte prioritário',
        'Brindes exclusivos'
      ],
      highlighted: true
    },
    {
      name: 'Semestral',
      description: 'Para quem busca economia',
      discount: '10%',
      features: [
        'Entrega a cada 6 meses',
        'Economia de 10% em cada entrega',
        'Frete grátis',
        'Suporte prioritário',
        'Brindes exclusivos',
        'Presente surpresa'
      ]
    },
    {
      name: 'Anual',
      description: 'Máxima economia',
      discount: '15%',
      features: [
        'Entrega a cada 12 meses',
        'Economia de 15% em cada entrega',
        'Frete grátis',
        'Suporte VIP',
        'Brindes premium',
        'Presente surpresa',
        'Acesso a promoções exclusivas'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Planos de Assinatura</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Escolha a frequência que melhor se adapta às suas necessidades e economize.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-sm p-6 border ${plan.highlighted ? 'border-primary-500 ring-2 ring-primary-200' : 'border-gray-200'} hover:shadow-md transition duration-300 flex flex-col`}>
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="bg-primary-50 text-primary-700 text-2xl font-bold py-2 px-4 rounded-lg inline-block">
                  {plan.discount} OFF
                </div>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                href="/assinatura" 
                className={`w-full text-center py-3 rounded-lg font-medium transition duration-300 ${plan.highlighted ? 'bg-primary-500 text-white hover:bg-primary-600' : 'bg-white border border-primary-500 text-primary-500 hover:bg-primary-50'}`}
              >
                Escolher Plano
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'Como funciona a entrega dos produtos?',
      answer: 'Realizamos entregas em todo o Brasil através de transportadoras parceiras. O prazo de entrega varia conforme a região, mas geralmente é de 3 a 7 dias úteis. Você receberá um código de rastreamento assim que seu pedido for despachado e poderá acompanhar todo o processo pelo seu painel de cliente.'
    },
    {
      question: 'Posso alterar minha assinatura depois de criada?',
      answer: 'Sim! Você pode alterar produtos, quantidades, endereço de entrega e frequência a qualquer momento através do seu painel de cliente. As alterações feitas até 3 dias antes da data de processamento serão aplicadas no próximo ciclo.'
    },
    {
      question: 'Como funciona o pagamento recorrente?',
      answer: 'Para assinaturas com cartão de crédito, realizamos a cobrança automaticamente a cada ciclo. Para pagamentos via boleto ou PIX, enviamos o código com antecedência para que você possa efetuar o pagamento. Sua assinatura só será processada após a confirmação do pagamento.'
    },
    {
      question: 'Posso cancelar minha assinatura quando quiser?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem multa ou taxas adicionais. Basta acessar seu painel de cliente e solicitar o cancelamento. Se o cancelamento for feito após o processamento do ciclo atual, você ainda receberá a última entrega.'
    },
    {
      question: 'Quais produtos estão disponíveis para assinatura?',
      answer: 'Oferecemos uma ampla variedade de fraldas geriátricas em diferentes tamanhos e níveis de absorção, absorventes femininos e tapetes higiênicos para pets em diversos tamanhos. Você pode visualizar todo nosso catálogo na página de produtos.'
    },
    {
      question: 'Existe um valor mínimo para assinatura?',
      answer: 'Sim, o valor mínimo para criar uma assinatura é de R$ 100,00. Este valor garante que possamos oferecer frete grátis e manter a qualidade do nosso serviço.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tire suas dúvidas sobre o funcionamento da nossa assinatura.</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
          <Link href="/contato" className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition duration-300 inline-block">
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cuidadora de idosos',
      content: 'A assinatura de fraldas geriátricas facilitou muito meu trabalho como cuidadora. Não preciso mais me preocupar em ir às compras e sempre tenho produtos de qualidade à disposição. O sistema de entrega é pontual e o atendimento é excelente!',
      avatar: ''
    },
    {
      name: 'Carlos Oliveira',
      role: 'Tutor de pets',
      content: 'Tenho dois cachorros em treinamento e os tapetes higiênicos são essenciais. Com a assinatura, economizo tempo e dinheiro, além de nunca ficar sem estoque em casa. Recomendo para todos os tutores de pets!',
      avatar: ''
    },
    {
      name: 'Ana Pereira',
      role: 'Cliente desde 2022',
      content: 'Cuido da minha mãe que tem mobilidade reduzida e a assinatura de fraldas tem sido uma mão na roda. A qualidade dos produtos é superior aos que encontrava no mercado e a comodidade de receber em casa não tem preço.',
      avatar: ''
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Veja como nossa assinatura tem transformado a vida de nossos clientes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-400">
                  {testimonial.avatar ? (
                    <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" />
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ComoFunciona() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Como Funciona - Fraldas e Patas Assinatura</title>
        <meta name="description" content="Entenda como funciona nossa assinatura de fraldas geriátricas e produtos para pets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StepsSection />
        <BenefitsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}