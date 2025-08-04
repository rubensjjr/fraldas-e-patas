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
          <Link href="/como-funciona" className="text-gray-600 hover:text-primary-500">Como Funciona</Link>
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

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

// Componente para exibir um membro da equipe
const TeamMember = ({ name, role, image, description }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary-100">
        <Image 
          src={image} 
          alt={name} 
          width={160} 
          height={160} 
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-heading font-semibold text-xl text-gray-800">{name}</h3>
      <p className="text-primary-600 font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Componente para exibir um valor da empresa
const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="font-heading font-semibold text-xl mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function Sobre() {
  // Dados fictícios para a equipe
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Fundadora e CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "Com mais de 15 anos de experiência no mercado de cuidados para idosos e pets, Ana fundou a Fraldas e Patas com a missão de facilitar a vida dos cuidadores."
    },
    {
      name: "Carlos Mendes",
      role: "Diretor de Operações",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Especialista em logística e cadeia de suprimentos, Carlos garante que todas as assinaturas sejam entregues no prazo e com qualidade."
    },
    {
      name: "Juliana Costa",
      role: "Gerente de Produto",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "Responsável por selecionar os melhores produtos para nosso catálogo, garantindo conforto e qualidade para idosos e pets."
    },
    {
      name: "Roberto Alves",
      role: "Desenvolvedor Chefe",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "Lidera a equipe de tecnologia, criando uma plataforma intuitiva e segura para gerenciar assinaturas e entregas."
    }
  ];

  return (
    <>
      <Head>
        <title>Sobre Nós | Fraldas e Patas Assinatura</title>
        <meta name="description" content="Conheça a história, missão e valores da Fraldas e Patas Assinatura. Saiba como surgimos e por que estamos comprometidos em facilitar o cuidado de idosos e pets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">Nossa História</h1>
                <p className="text-xl text-gray-600 mb-6">Nascemos da necessidade de simplificar a vida de quem cuida de idosos e pets, oferecendo uma solução prática e econômica para um problema recorrente.</p>
                <p className="text-gray-600 mb-6">A Fraldas e Patas Assinatura surgiu em 2023, quando nossa fundadora Ana Silva, que cuidava simultaneamente de sua mãe idosa e de dois cães idosos, percebeu o desafio de manter um estoque adequado de fraldas geriátricas e tapetes higiênicos.</p>
                <p className="text-gray-600">Após compartilhar essa dificuldade com amigos em situação semelhante, Ana identificou uma oportunidade de mercado e decidiu criar um serviço de assinatura que entregasse esses produtos essenciais diretamente na casa dos clientes, com regularidade e sem complicações.</p>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/images/about-hero.jpg" 
                    alt="Equipe da Fraldas e Patas" 
                    width={600} 
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Missão, Visão e Valores */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Missão, Visão e Valores</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nossos princípios fundamentais guiam tudo o que fazemos.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Nossa Missão</h3>
                <p className="text-gray-700">Facilitar a vida de cuidadores de idosos e tutores de pets através de um serviço de assinatura confiável, conveniente e econômico, entregando produtos de qualidade com regularidade e sem complicações.</p>
              </div>
              <div className="bg-secondary-50 rounded-xl p-8">
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Nossa Visão</h3>
                <p className="text-gray-700">Ser reconhecida como a principal plataforma de assinatura de produtos para cuidados de idosos e pets no Brasil, conhecida pela excelência no atendimento, qualidade dos produtos e impacto positivo na vida dos nossos clientes.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-8 text-center">Nossos Valores</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ValueCard 
                icon={<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>}
                title="Cuidado e Empatia"
                description="Entendemos os desafios de nossos clientes e trabalhamos com empatia para oferecer soluções que realmente facilitem seu dia a dia."
              />
              <ValueCard 
                icon={<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                title="Qualidade e Confiabilidade"
                description="Selecionamos cuidadosamente cada produto em nosso catálogo e garantimos entregas pontuais para que nossos clientes nunca fiquem desabastecidos."
              />
              <ValueCard 
                icon={<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>}
                title="Comunidade e Suporte"
                description="Criamos uma comunidade de apoio para cuidadores e tutores, oferecendo não apenas produtos, mas também informações, dicas e suporte emocional."
              />
            </div>
          </div>
        </section>
        
        {/* Diferenciais */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Por Que Escolher a Fraldas e Patas?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nossos diferenciais que tornam nossa assinatura a melhor escolha para você.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Economia de Tempo</h3>
                <p className="text-gray-600">Sem mais idas frequentes ao supermercado ou farmácia. Receba seus produtos diretamente em casa.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Economia Financeira</h3>
                <p className="text-gray-600">Preços mais baixos que o varejo e descontos progressivos para assinaturas de maior duração.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Produtos de Qualidade</h3>
                <p className="text-gray-600">Selecionamos apenas os melhores produtos, testados e aprovados por especialistas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Flexibilidade Total</h3>
                <p className="text-gray-600">Altere, pause ou cancele sua assinatura a qualquer momento, sem multas ou burocracia.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nossa Equipe */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Conheça Nossa Equipe</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Pessoas apaixonadas por facilitar a vida de cuidadores e tutores de pets.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  description={member.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Depoimentos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Histórias reais de pessoas que transformaram sua rotina com nossa assinatura.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                      alt="Cliente" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">Mariana Santos</h4>
                    <p className="text-gray-600 text-sm">Cuidadora de mãe idosa</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"A assinatura da Fraldas e Patas mudou minha rotina completamente. Não preciso mais me preocupar em ficar sem fraldas para minha mãe, e o melhor: economizo tempo e dinheiro!"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                      alt="Cliente" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">João Oliveira</h4>
                    <p className="text-gray-600 text-sm">Tutor de 3 cães</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Com três cães em casa, os tapetes higiênicos acabavam muito rápido. A assinatura me permite receber a quantidade exata que preciso todo mês, sem precisar estocar em casa."</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                      alt="Cliente" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">Fernanda Lima</h4>
                    <p className="text-gray-600 text-sm">Cuidadora profissional</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Como cuidadora profissional, recomendo a Fraldas e Patas para todas as famílias. O atendimento é excelente, os produtos são de alta qualidade e o sistema de assinatura é muito prático."</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Pronto para simplificar sua rotina?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Junte-se a milhares de cuidadores e tutores que já transformaram sua rotina com nossa assinatura.</p>
            <Link href="/assinatura" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition duration-300 inline-block">
              Começar Minha Assinatura
            </Link>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}