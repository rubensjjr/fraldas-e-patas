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

export default function Cadastro() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    receiveNews: true
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }
    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    if (!formData.acceptTerms) {
      setError('Você deve aceitar os termos de uso e política de privacidade');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      // Aqui você implementaria a lógica de cadastro
      // Por exemplo, uma chamada para sua API de autenticação
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     email: formData.email,
      //     phone: formData.phone,
      //     cpf: formData.cpf,
      //     password: formData.password,
      //     receiveNews: formData.receiveNews
      //   })
      // });
      
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Erro ao cadastrar');
      // }
      
      // Simulando um atraso para mostrar o estado de carregamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redireciona para a página de confirmação de cadastro
      router.push('/cadastro/sucesso');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao cadastrar. Tente novamente.');
      console.error('Erro no cadastro:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Criar Conta - Fraldas e Patas Assinatura</title>
        <meta name="description" content="Crie sua conta na Fraldas e Patas Assinatura" />
      </Head>

      <Header />

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                {/* Imagem lateral */}
                <div className="hidden md:block md:w-1/3 bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white">
                  <div className="h-full flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Bem-vindo(a) à Fraldas e Patas</h2>
                    <p className="mb-6">Junte-se a milhares de clientes que já desfrutam da comodidade de receber produtos de qualidade em casa.</p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-200 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Frete grátis em todas as assinaturas</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-200 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Descontos exclusivos para assinantes</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-200 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Facilidade no gerenciamento da sua assinatura</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Formulário */}
                <div className="p-8 md:w-2/3">
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Criar uma conta</h1>
                    <p className="text-gray-600 mt-2">Preencha os campos abaixo para se cadastrar</p>
                  </div>

                  {error && (
                    <div className="mb-6 p-3 bg-red-50 text-red-700 text-sm rounded-md">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome completo *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                          placeholder="seu@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                          CPF *
                        </label>
                        <input
                          id="cpf"
                          name="cpf"
                          type="text"
                          required
                          value={formData.cpf}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                          placeholder="000.000.000-00"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                          Senha *
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirmar Senha *
                        </label>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="acceptTerms"
                            name="acceptTerms"
                            type="checkbox"
                            required
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="acceptTerms" className="font-medium text-gray-700">
                            Eu li e concordo com os <Link href="/termos" className="text-primary-600 hover:underline">Termos de Uso</Link> e <Link href="/privacidade" className="text-primary-600 hover:underline">Política de Privacidade</Link> *
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="receiveNews"
                            name="receiveNews"
                            type="checkbox"
                            checked={formData.receiveNews}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="receiveNews" className="text-gray-700">
                            Eu desejo receber ofertas e novidades por e-mail
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                          isLoading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? 'Cadastrando...' : 'Criar conta'}
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Já tem uma conta?{' '}
                      <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
                        Faça login
                      </Link>
                    </p>
                  </div>
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
