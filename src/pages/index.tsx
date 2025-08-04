import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
          <Link href="/" className="text-gray-800 font-medium hover:text-primary-500">Início</Link>
          <Link href="/produtos" className="text-gray-600 hover:text-primary-500">Produtos</Link>
          <Link href="/como-funciona" className="text-gray-600 hover:text-primary-500">Como Funciona</Link>
          <Link href="/contato" className="text-gray-600 hover:text-primary-500">Contato</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link 
            href="/login" 
            className="bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition duration-300"
          >
            Entrar
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

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 relative">
            {/* Placeholder para imagem real */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <span>Imagem Hero</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
            Cuidado recorrente para quem você ama
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Receba fraldas geriátricas e produtos para pets em casa, com economia e sem preocupações.
          </p>
          <Link 
            href="/produtos" 
            className="bg-secondary-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary-600 transition duration-300 inline-block"
          >
            Comece sua assinatura
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition duration-300">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${icon === '💰' ? 'bg-primary-100' : icon === '🚚' ? 'bg-secondary-100' : 'bg-accent-yellow-100'}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-gray-800 mb-12 text-center">
          Por que escolher nossa assinatura?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="💰" 
            title="Economia garantida" 
            description="Até 25% de desconto em relação às compras avulsas. Quanto maior o plano, maior a economia."
          />
          <FeatureCard 
            icon="🚚" 
            title="Entrega pontual" 
            description="Receba seus produtos sempre antes de acabar. Sem preocupações com estoque."
          />
          <FeatureCard 
            icon="🔄" 
            title="Flexibilidade total" 
            description="Altere, pause ou cancele quando quiser. Você tem controle total da sua assinatura."
          />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ image, title, subtitle, price }: { image: string, title: string, subtitle: string, price: string }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition duration-300">
      <div className="h-48 bg-gray-200 relative">
        {/* Placeholder para imagem real */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <span>{image}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        <p className="text-secondary-500 font-heading font-semibold text-lg">{price}</p>
        <Link 
          href="/produtos" 
          className="mt-4 inline-block w-full text-center bg-primary-500 text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition duration-300"
        >
          Ver opções
        </Link>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4 text-center">
          Nossos Produtos
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Escolha entre nossa variedade de produtos de alta qualidade para cuidar de quem você ama.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            image="Imagem Fraldas" 
            title="Fraldas Geriátricas" 
            subtitle="Para cuidadores de idosos" 
            price="A partir de R$ 89,90/mês"
          />
          <ProductCard 
            image="Imagem Absorventes" 
            title="Absorventes" 
            subtitle="Para necessidades específicas" 
            price="A partir de R$ 49,90/mês"
          />
          <ProductCard 
            image="Imagem Tapetes" 
            title="Tapetes Higiênicos" 
            subtitle="Para tutores de pets" 
            price="A partir de R$ 59,90/mês"
          />
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/produtos" 
            className="inline-block border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-medium hover:bg-primary-50 transition duration-300"
          >
            Ver todos os produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

const Step = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-gray-800 mb-12 text-center">
          Como Funciona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Step 
            number={1} 
            title="Escolha seus produtos" 
            description="Selecione os itens, tamanhos e quantidades"
          />
          <Step 
            number={2} 
            title="Defina a frequência" 
            description="Mensal, trimestral, semestral ou anual"
          />
          <Step 
            number={3} 
            title="Pague com facilidade" 
            description="Cartão, boleto ou PIX recorrente"
          />
          <Step 
            number={4} 
            title="Receba em casa" 
            description="Entrega pontual e sem preocupações"
          />
          <Step 
            number={5} 
            title="Gerencie online" 
            description="Altere, pause ou cancele quando quiser"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text }: { name: string, role: string, text: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h4 className="font-heading font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">"{text}"</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-gray-800 mb-12 text-center">
          O que dizem nossos clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            name="Maria S." 
            role="Cuidadora de idosos" 
            text="Economizo tempo e dinheiro com a assinatura. As fraldas chegam sempre antes de acabar e não preciso mais me preocupar em ir até a farmácia com frequência."
          />
          <TestimonialCard 
            name="Carlos P." 
            role="Tutor de 3 cães" 
            text="Os tapetes higiênicos são de ótima qualidade e nunca mais precisei me preocupar em comprar. Chega na minha casa todo mês, sem falhas. Recomendo muito!"
          />
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 bg-primary-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-6">
          Pronto para começar sua assinatura?
        </h2>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de clientes satisfeitos e comece a economizar tempo e dinheiro hoje mesmo.
        </p>
        <Link 
          href="/produtos" 
          className="bg-white text-primary-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition duration-300 inline-block"
        >
          Começar agora
        </Link>
      </div>
    </section>
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Fraldas e Patas Assinatura | Cuidado recorrente para quem você ama</title>
        <meta name="description" content="Assinatura de fraldas geriátricas e produtos para pets com entrega recorrente. Economize tempo e dinheiro com nossa assinatura personalizada." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Features />
        <Products />
        <HowItWorks />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}