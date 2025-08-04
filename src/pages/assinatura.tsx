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
          <Link href="/" className="text-gray-600 hover:text-primary-500">Início</Link>
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

const ProgressSteps = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { id: 1, name: 'Produtos' },
    { id: 2, name: 'Frequência' },
    { id: 3, name: 'Entrega' },
    { id: 4, name: 'Pagamento' },
    { id: 5, name: 'Confirmação' }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step.id ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {step.id}
            </div>
            <div className="text-sm mt-2 text-center">{step.name}</div>
            {index < steps.length - 1 && (
              <div className={`hidden md:block absolute h-1 w-16 ${currentStep > step.id ? 'bg-primary-500' : 'bg-gray-200'}`} style={{ left: `calc(${(index + 1) * 20}% - 8px)` }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CartItem = ({ 
  image, 
  title, 
  size, 
  absorption, 
  price, 
  quantity,
  onRemove,
  onUpdateQuantity
}: { 
  image: string, 
  title: string, 
  size: string, 
  absorption: string, 
  price: number, 
  quantity: number,
  onRemove: () => void,
  onUpdateQuantity: (newQuantity: number) => void
}) => {
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-16 h-16 bg-gray-200 rounded-md mr-4 flex items-center justify-center text-gray-500">
        <span>{image}</span>
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <div className="flex space-x-2 mt-1">
          <span className="text-sm text-gray-600">{size}</span>
          <span className="text-sm text-gray-600">•</span>
          <span className="text-sm text-gray-600">{absorption}</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mr-4">
          <button 
            onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
          >
            -
          </button>
          <span className="px-3 py-1">{quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(quantity + 1)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
          >
            +
          </button>
        </div>
        <div className="text-right">
          <div className="font-medium text-gray-800">R$ {(price * quantity).toFixed(2)}</div>
          <button 
            onClick={onRemove}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};

const FrequencyOption = ({ 
  id, 
  title, 
  description, 
  discount, 
  selected, 
  onSelect 
}: { 
  id: string, 
  title: string, 
  description: string, 
  discount: number, 
  selected: boolean, 
  onSelect: () => void 
}) => {
  return (
    <div 
      className={`border rounded-xl p-4 cursor-pointer transition duration-300 ${selected ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}
      onClick={onSelect}
    >
      <div className="flex items-start">
        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 mr-3 ${selected ? 'border-primary-500 bg-white' : 'border-gray-300'}`}>
          {selected && <div className="w-3 h-3 rounded-full bg-primary-500 m-auto"></div>}
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {discount > 0 && (
            <div className="mt-2 inline-block bg-secondary-100 text-secondary-800 text-xs font-medium px-2 py-1 rounded-full">
              Economize {discount}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CartSummary = ({ 
  subtotal, 
  discount, 
  shipping, 
  total,
  frequency,
  onCheckout
}: { 
  subtotal: number, 
  discount: number, 
  shipping: number, 
  total: number,
  frequency: string,
  onCheckout: () => void
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-heading font-semibold text-gray-800 mb-4">Resumo da Assinatura</h3>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-800">R$ {subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Desconto ({frequency})</span>
            <span className="text-green-600">-R$ {discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Frete</span>
          <span className="text-gray-800">{shipping > 0 ? `R$ ${shipping.toFixed(2)}` : 'Grátis'}</span>
        </div>
        <div className="border-t border-gray-200 my-2 pt-2">
          <div className="flex justify-between">
            <span className="font-medium text-gray-800">Total</span>
            <span className="font-medium text-gray-800">R$ {total.toFixed(2)}</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            A cada {frequency.toLowerCase()}
          </div>
        </div>
      </div>
      
      <button 
        onClick={onCheckout}
        className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition duration-300"
      >
        Finalizar Assinatura
      </button>
      
      <div className="mt-4">
        <div className="flex items-center justify-center mb-2">
          <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-sm text-gray-600">Pagamento 100% seguro</span>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="w-10 h-6 bg-gray-200 rounded"></div>
          <div className="w-10 h-6 bg-gray-200 rounded"></div>
          <div className="w-10 h-6 bg-gray-200 rounded"></div>
          <div className="w-10 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default function Assinatura() {
  const [currentStep, setCurrentStep] = useState(2); // Começando na etapa de frequência
  const [selectedFrequency, setSelectedFrequency] = useState('Mensal');
  
  // Dados fictícios do carrinho
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: 'Fralda G',
      title: 'Fralda Geriátrica Premium G',
      size: 'G',
      absorption: 'Extra',
      price: 89.90,
      quantity: 2
    },
    {
      id: 2,
      image: 'Tapete M',
      title: 'Tapete Higiênico Premium M',
      size: 'M',
      absorption: 'Regular',
      price: 49.90,
      quantity: 1
    }
  ]);

  const updateItemQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calcular desconto com base na frequência
  const getDiscountRate = () => {
    switch (selectedFrequency) {
      case 'Mensal': return 0.05;
      case 'Trimestral': return 0.10;
      case 'Semestral': return 0.15;
      case 'Anual': return 0.25;
      default: return 0;
    }
  };
  
  const discountRate = getDiscountRate();
  const discountAmount = subtotal * discountRate;
  const shipping = 0; // Frete grátis
  const total = subtotal - discountAmount + shipping;

  const handleCheckout = () => {
    // Preparar os dados da assinatura para enviar ao checkout
    const subscriptionData = {
      items: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        frequency: selectedFrequency,
        total: total
      })),
      frequency: selectedFrequency,
      subtotal,
      discount: discountAmount,
      shipping,
      total
    };

    // Salvar os dados no localStorage para usar na página de checkout
    if (typeof window !== 'undefined') {
      localStorage.setItem('subscriptionData', JSON.stringify(subscriptionData));
      // Redirecionar para a página de checkout
      window.location.href = '/checkout';
    }
  };

  return (
    <>
      <Head>
        <title>Configure sua Assinatura | Fraldas e Patas Assinatura</title>
        <meta name="description" content="Configure sua assinatura personalizada de fraldas geriátricas e produtos para pets. Escolha a frequência, produtos e forma de pagamento." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-heading font-bold text-gray-800 mb-6 text-center">Configure sua Assinatura</h1>
            
            <ProgressSteps currentStep={currentStep} />
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-heading font-semibold text-gray-800 mb-4">Produtos Selecionados</h2>
                  
                  {cartItems.map(item => (
                    <CartItem 
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      size={item.size}
                      absorption={item.absorption}
                      price={item.price}
                      quantity={item.quantity}
                      onRemove={() => removeItem(item.id)}
                      onUpdateQuantity={(newQuantity) => updateItemQuantity(item.id, newQuantity)}
                    />
                  ))}
                  
                  <div className="mt-4">
                    <Link 
                      href="/produtos" 
                      className="text-primary-500 hover:text-primary-600 font-medium flex items-center"
                    >
                      <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Adicionar mais produtos
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-heading font-semibold text-gray-800 mb-4">Frequência de Entrega</h2>
                  <p className="text-gray-600 mb-6">Escolha com qual frequência você deseja receber seus produtos:</p>
                  
                  <div className="space-y-3">
                    <FrequencyOption 
                      id="mensal"
                      title="Mensal"
                      description="Receba seus produtos todo mês. Ideal para uso contínuo."
                      discount={5}
                      selected={selectedFrequency === 'Mensal'}
                      onSelect={() => setSelectedFrequency('Mensal')}
                    />
                    <FrequencyOption 
                      id="trimestral"
                      title="Trimestral"
                      description="Receba seus produtos a cada 3 meses. Maior economia."
                      discount={10}
                      selected={selectedFrequency === 'Trimestral'}
                      onSelect={() => setSelectedFrequency('Trimestral')}
                    />
                    <FrequencyOption 
                      id="semestral"
                      title="Semestral"
                      description="Receba seus produtos a cada 6 meses. Economia ainda maior."
                      discount={15}
                      selected={selectedFrequency === 'Semestral'}
                      onSelect={() => setSelectedFrequency('Semestral')}
                    />
                    <FrequencyOption 
                      id="anual"
                      title="Anual"
                      description="Receba seus produtos uma vez por ano. Máxima economia."
                      discount={25}
                      selected={selectedFrequency === 'Anual'}
                      onSelect={() => setSelectedFrequency('Anual')}
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <CartSummary 
                  subtotal={subtotal}
                  discount={discountAmount}
                  shipping={shipping}
                  total={total}
                  frequency={selectedFrequency}
                  onCheckout={handleCheckout}
                />
                
                <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
                  <h3 className="text-lg font-heading font-semibold text-gray-800 mb-4">Precisa de ajuda?</h3>
                  <p className="text-gray-600 mb-4">Estamos aqui para ajudar com qualquer dúvida sobre sua assinatura.</p>
                  <a 
                    href="#" 
                    className="flex items-center text-primary-500 hover:text-primary-600 font-medium"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Fale conosco pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}