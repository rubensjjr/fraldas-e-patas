import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Componente de Header
const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/assets/logo.svg" 
            alt="Fraldas e Patas" 
            width={180} 
            height={60} 
            className="mr-4"
          />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-gray-700 hover:text-primary-600">Início</Link>
        <Link href="/produtos" className="text-gray-700 hover:text-primary-600">Produtos</Link>
        <Link href="/como-funciona" className="text-gray-700 hover:text-primary-600">Como Funciona</Link>
        <Link href="/contato" className="text-gray-700 hover:text-primary-600">Contato</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link 
          href="/login" 
          className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
        >
          Entrar
        </Link>
      </div>
    </div>
  </header>
);

// Componente de Footer
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Fraldas e Patas</h3>
          <p className="text-gray-400">Cuidando de quem você ama com produtos de qualidade e entrega no conforto do seu lar.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Institucional</h4>
          <ul className="space-y-2">
            <li><Link href="/sobre" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
            <li><Link href="/termos" className="text-gray-400 hover:text-white">Termos de Uso</Link></li>
            <li><Link href="/privacidade" className="text-gray-400 hover:text-white">Política de Privacidade</Link></li>
            <li><Link href="/trocas" className="text-gray-400 hover:text-white">Trocas e Devoluções</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
          <ul className="space-y-2">
            <li><Link href="/contato" className="text-gray-400 hover:text-white">Fale Conosco</Link></li>
            <li><Link href="/ajuda" className="text-gray-400 hover:text-white">Central de Ajuda</Link></li>
            <li><Link href="/faq" className="text-gray-400 hover:text-white">Perguntas Frequentes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Formas de Pagamento</h4>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white p-2 rounded">
              <Image src="/assets/visa.png" alt="Visa" width={40} height={25} className="mx-auto" />
            </div>
            <div className="bg-white p-2 rounded">
              <Image src="/assets/mastercard.png" alt="Mastercard" width={40} height={25} className="mx-auto" />
            </div>
            <div className="bg-white p-2 rounded">
              <Image src="/assets/boleto.png" alt="Boleto" width={40} height={25} className="mx-auto" />
            </div>
            <div className="bg-white p-2 rounded">
              <Image src="/assets/pix.png" alt="Pix" width={40} height={25} className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Fraldas e Patas. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default function TermosDeUso() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Termos de Uso - Fraldas e Patas</title>
        <meta name="description" content="Termos de Uso da Fraldas e Patas Assinatura" />
      </Head>

      <Header />

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Termos de Uso</h1>
              <p className="text-sm text-gray-500 mb-8">Última atualização: 31 de julho de 2025</p>
              
              <div className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">1. Introdução</h2>
                  <p className="mb-4">
                    Bem-vindo(a) aos Termos de Uso da Fraldas e Patas Assinatura. Ao acessar e utilizar nosso site e serviços, você concorda em cumprir estes Termos de Uso. Recomendamos que você leia atentamente todo o conteúdo antes de realizar qualquer cadastro ou compra.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">2. Definições</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Plataforma:</strong> Refere-se ao site e aplicativo da Fraldas e Patas Assinatura.</li>
                    <li><strong>Usuário:</strong> Pessoa física que acessa ou utiliza a Plataforma.</li>
                    <li><strong>Cliente:</strong> Usuário que realiza cadastro e contrata os serviços.</li>
                    <li><strong>Assinatura:</strong> Serviço de fornecimento contínuo de produtos conforme periodicidade escolhida.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">3. Cadastro e Conta</h2>
                  <p className="mb-4">
                    3.1. Para realizar compras e assinaturas, é necessário realizar um cadastro informando dados completos e atualizados.
                  </p>
                  <p className="mb-4">
                    3.2. O usuário é responsável por manter a confidencialidade de seus dados de acesso.
                  </p>
                  <p className="mb-4">
                    3.3. Menores de 18 anos devem estar representados por seus responsáveis legais.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">4. Produtos e Assinaturas</h2>
                  <p className="mb-4">
                    4.1. As imagens dos produtos são meramente ilustrativas.
                  </p>
                  <p className="mb-4">
                    4.2. Os preços e condições de pagamento são válidos apenas para compras online.
                  </p>
                  <p className="mb-4">
                    4.3. As assinaturas têm renovação automática, podendo ser canceladas a qualquer momento.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">5. Pagamentos</h2>
                  <p className="mb-4">
                    5.1. Aceitamos as formas de pagamento: cartões de crédito, débito, boleto bancário e PIX.
                  </p>
                  <p className="mb-4">
                    5.2. Os preços podem ser alterados a qualquer momento, sem aviso prévio.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">6. Trocas e Devoluções</h2>
                  <p className="mb-4">
                    6.1. As trocas e devoluções seguem as diretrizes do Código de Defesa do Consumidor.
                  </p>
                  <p className="mb-4">
                    6.2. Produtos com defeito de fabricação podem ser trocados em até 7 dias após o recebimento.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">7. Propriedade Intelectual</h2>
                  <p className="mb-4">
                    Todo o conteúdo da Plataforma, incluindo textos, imagens, logotipos e softwares, é de propriedade da Fraldas e Patas ou de seus licenciadores, estando protegido por leis de direitos autorais e propriedade intelectual.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">8. Limitação de Responsabilidade</h2>
                  <p className="mb-4">
                    A Fraldas e Patas não se responsabiliza por danos diretos ou indiretos decorrentes do uso da Plataforma ou da impossibilidade de uso, incluindo, mas não se limitando a, perda de lucros, interrupção de negócios ou perda de informações.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">9. Disposições Gerais</h2>
                  <p className="mb-4">
                    9.1. Estes Termos de Uso estão sujeitos a alterações a qualquer momento.
                  </p>
                  <p className="mb-4">
                    9.2. O uso contínuo da Plataforma após alterações constitui aceitação dos novos termos.
                  </p>
                  <p className="mb-4">
                    9.3. Estes Termos são regidos pelas leis brasileiras.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">10. Contato</h2>
                  <p>
                    Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco através da nossa <Link href="/contato" className="text-primary-600 hover:underline">página de contato</Link>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
