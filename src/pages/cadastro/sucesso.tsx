import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Componente de Header que já existe nas outras páginas
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/assets/logo.svg" 
              alt="Fraldas e Patas Assinatura" 
              width={180} 
              height={60} 
              className="mr-4"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-primary-600">Início</Link>
          <Link href="/produtos" className="text-gray-700 hover:text-primary-600">Produtos</Link>
          <Link href="/como-funciona" className="text-gray-700 hover:text-primary-600">Como Funciona</Link>
          <Link href="/contato" className="text-gray-700 hover:text-primary-600">Contato</Link>
        </div>
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
};

// Componente de Footer que já existe nas outras páginas
const Footer = () => {
  return (
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
};

export default function CadastroSucesso() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Cadastro Realizado com Sucesso - Fraldas e Patas</title>
        <meta name="description" content="Seu cadastro foi realizado com sucesso na Fraldas e Patas Assinatura" />
      </Head>

      <Header />

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Cadastro realizado com sucesso!</h1>
                <p className="mt-4 text-gray-600">
                  Seja bem-vindo(a) à Fraldas e Patas! Seu cadastro foi concluído com sucesso.
                </p>
                <p className="mt-2 text-gray-600">
                  Enviamos um e-mail de confirmação para o endereço fornecido. Por favor, verifique sua caixa de entrada e siga as instruções para ativar sua conta.
                </p>
                
                <div className="mt-8 bg-blue-50 p-4 rounded-lg text-left">
                  <h3 className="text-lg font-medium text-blue-800">Próximos passos:</h3>
                  <ol className="mt-2 text-blue-700 list-decimal list-inside space-y-2">
                    <li>Verifique seu e-mail e clique no link de confirmação</li>
                    <li>Faça login na sua nova conta</li>
                    <li>Explore nossos produtos e monte sua primeira assinatura</li>
                  </ol>
                </div>
                
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Fazer login
                  </Link>
                  <Link
                    href="/produtos"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Ver Produtos
                  </Link>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Não recebeu o e-mail? Verifique sua pasta de spam ou 
                    <Link href="/reenviar-confirmacao" className="ml-1 font-medium text-primary-600 hover:text-primary-500">
                      clique aqui para reenviar
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
