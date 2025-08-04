import { useState } from 'react';
import { useRouter } from 'next/router';
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
            href="/minha-conta" 
            className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
          >
            Minha Conta
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

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Aqui você implementaria a lógica de autenticação
      // Por exemplo, uma chamada para sua API de autenticação
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      
      // if (!response.ok) {
      //   throw new Error('Credenciais inválidas');
      // }
      
      // Simulando um atraso para mostrar o estado de carregamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redireciona para a página de conta do usuário após o login
      router.push('/minha-conta');
      
    } catch (err) {
      setError('E-mail ou senha inválidos. Por favor, tente novamente.');
      console.error('Erro no login:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Login - Fraldas e Patas Assinatura</title>
        <meta name="description" content="Acesse sua conta Fraldas e Patas Assinatura" />
      </Head>

      <Header />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Acesse sua conta</h1>
                <p className="text-gray-600 mt-2">Entre para gerenciar sua assinatura</p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-red-50 text-red-700 text-sm rounded-md">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Senha
                    </label>
                    <Link href="/esqueci-senha" className="text-sm text-primary-600 hover:text-primary-500">
                      Esqueceu sua senha?
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Lembrar de mim
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou continue com</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Entrar com Google</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Entrar com Facebook</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Não tem uma conta?{' '}
                  <Link href="/cadastro" className="font-medium text-primary-600 hover:text-primary-500">
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
