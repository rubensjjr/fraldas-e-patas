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
          <div className="relative">
            <button className="flex items-center text-gray-700 hover:text-primary-500">
              <span className="mr-1">Minha Conta</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
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
    { id: 2, name: 'Assinatura' },
    { id: 3, name: 'Checkout' },
    { id: 4, name: 'Confirmação' }
  ];

  return (
    <div className="py-4">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step.id ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {currentStep > step.id ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <span className={`mt-2 text-sm font-medium ${currentStep >= step.id ? 'text-primary-500' : 'text-gray-500'}`}>
              {step.name}
            </span>
            {index < steps.length - 1 && (
              <div className={`absolute top-5 left-10 w-full h-0.5 ${currentStep > step.id ? 'bg-primary-500' : 'bg-gray-200'}`} style={{ width: 'calc(100% - 2.5rem)' }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const OrderSummary = ({ cart, subtotal, discount, shipping, total }: { 
  cart: Array<{id: string, name: string, price: number, quantity: number, image: string}>,
  subtotal: number,
  discount: number,
  shipping: number,
  total: number
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-heading font-semibold text-gray-800 mb-4">Resumo do Pedido</h3>
      
      <div className="space-y-4 mb-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center mr-4">
              {item.image ? (
                <Image src={item.image} alt={item.name} width={48} height={48} />
              ) : (
                <span className="text-gray-400">Imagem</span>
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">R$ {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-800">R$ {subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Desconto</span>
            <span className="text-green-600">-R$ {discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-600">Frete</span>
          <span className="text-gray-800">{shipping > 0 ? `R$ ${shipping.toFixed(2)}` : 'Grátis'}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-gray-200 font-medium">
          <span className="text-gray-800">Total</span>
          <span className="text-xl text-primary-600">R$ {total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-start">
            <div className="mr-3 mt-0.5">
              <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Sua assinatura será renovada automaticamente a cada período selecionado. Você pode cancelar ou modificar a qualquer momento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CouponForm = ({ onApply }: { onApply: (code: string) => void }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim()) {
      onApply(couponCode);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h3 className="text-lg font-heading font-semibold text-gray-800 mb-4">Cupom de Desconto</h3>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Digite seu código"
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button 
          type="submit" 
          className="bg-primary-500 text-white px-4 py-2 rounded-r-lg hover:bg-primary-600 transition duration-300"
        >
          Aplicar
        </button>
      </form>
    </div>
  );
};

const AddressForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h3 className="text-lg font-heading font-semibold text-gray-800 mb-4">Endereço de Entrega</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input 
            type="text" 
            id="name" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <div>
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
          <input 
            type="text" 
            id="cep" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="00000-000"
          />
        </div>
        
        <div>
          <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
          <input 
            type="text" 
            id="street" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Rua, Avenida, etc."
          />
        </div>
        
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Número</label>
          <input 
            type="text" 
            id="number" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="123"
          />
        </div>
        
        <div>
          <label htmlFor="complement" className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
          <input 
            type="text" 
            id="complement" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Apto, Bloco, etc. (opcional)"
          />
        </div>
        
        <div>
          <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
          <input 
            type="text" 
            id="neighborhood" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Seu bairro"
          />
        </div>
        
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
          <input 
            type="text" 
            id="city" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Sua cidade"
          />
        </div>
        
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
          <select 
            id="state" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
      </div>
      
      <div className="mt-4">
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded" />
          <span className="ml-2 text-sm text-gray-600">Salvar este endereço para futuras compras</span>
        </label>
      </div>
    </div>
  );
};

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h3 className="text-lg font-heading font-semibold text-gray-800 mb-4">Método de Pagamento</h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center mb-4">
            <input 
              id="credit_card" 
              name="payment_method" 
              type="radio" 
              checked={paymentMethod === 'credit_card'}
              onChange={() => setPaymentMethod('credit_card')}
              className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300" 
            />
            <label htmlFor="credit_card" className="ml-3 block text-sm font-medium text-gray-700">
              Cartão de Crédito
            </label>
          </div>
          
          {paymentMethod === 'credit_card' && (
            <div className="pl-7 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="card_number" className="block text-sm font-medium text-gray-700 mb-1">Número do Cartão</label>
                  <input 
                    type="text" 
                    id="card_number" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="card_name" className="block text-sm font-medium text-gray-700 mb-1">Nome no Cartão</label>
                  <input 
                    type="text" 
                    id="card_name" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Nome como está no cartão"
                  />
                </div>
                
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Data de Validade</label>
                  <input 
                    type="text" 
                    id="expiry" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="MM/AA"
                  />
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input 
                    type="text" 
                    id="cvv" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="123"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="installments" className="block text-sm font-medium text-gray-700 mb-1">Parcelas</label>
                <select 
                  id="installments" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="1">1x de R$ 159,80 sem juros</option>
                  <option value="2">2x de R$ 79,90 sem juros</option>
                  <option value="3">3x de R$ 53,27 sem juros</option>
                  <option value="4">4x de R$ 39,95 sem juros</option>
                  <option value="5">5x de R$ 31,96 sem juros</option>
                  <option value="6">6x de R$ 26,63 sem juros</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <div className="flex items-center mb-4">
            <input 
              id="boleto" 
              name="payment_method" 
              type="radio" 
              checked={paymentMethod === 'boleto'}
              onChange={() => setPaymentMethod('boleto')}
              className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300" 
            />
            <label htmlFor="boleto" className="ml-3 block text-sm font-medium text-gray-700">
              Boleto Bancário
            </label>
          </div>
          
          {paymentMethod === 'boleto' && (
            <div className="pl-7">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">O boleto será gerado após a finalização do pedido e tem vencimento em 3 dias úteis. A assinatura será ativada somente após a confirmação do pagamento.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <div className="flex items-center mb-4">
            <input 
              id="pix" 
              name="payment_method" 
              type="radio" 
              checked={paymentMethod === 'pix'}
              onChange={() => setPaymentMethod('pix')}
              className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300" 
            />
            <label htmlFor="pix" className="ml-3 block text-sm font-medium text-gray-700">
              PIX
            </label>
          </div>
          
          {paymentMethod === 'pix' && (
            <div className="pl-7">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">O QR Code do PIX será gerado após a finalização do pedido e tem validade de 30 minutos. A assinatura será ativada imediatamente após a confirmação do pagamento.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Checkout() {
  // Dados fictícios para simulação
  const [cart] = useState([
    {
      id: '1',
      name: 'Fralda Geriátrica Premium G',
      price: 89.90,
      quantity: 2,
      image: ''
    },
    {
      id: '2',
      name: 'Tapete Higiênico Premium M',
      price: 69.90,
      quantity: 1,
      image: ''
    }
  ]);

  const [couponApplied, setCouponApplied] = useState(false);
  
  // Cálculos
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% de desconto se cupom aplicado
  const shipping = 0; // Frete grátis
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = (code: string) => {
    // Simulação de aplicação de cupom
    if (code === 'BEMVINDO10') {
      setCouponApplied(true);
      alert('Cupom aplicado com sucesso! 10% de desconto.');
    } else {
      alert('Cupom inválido ou expirado.');
    }
  };

  return (
    <>
      <Head>
        <title>Checkout | Fraldas e Patas Assinatura</title>
        <meta name="description" content="Finalize sua assinatura de produtos para cuidados geriátricos e pets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-heading font-bold text-gray-800 mb-2">Checkout</h1>
            <p className="text-gray-600">Finalize sua assinatura</p>
            
            <div className="mt-6">
              <ProgressSteps currentStep={3} />
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <CouponForm onApply={handleApplyCoupon} />
                <AddressForm />
                <PaymentForm />
                
                <div className="mt-6">
                  <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition duration-300 flex items-center justify-center">
                    <span className="mr-2">Finalizar Assinatura</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Ao finalizar, você concorda com nossos <Link href="/termos-de-uso" className="text-primary-500 hover:underline">Termos de Uso</Link> e <Link href="/politica-de-privacidade" className="text-primary-500 hover:underline">Política de Privacidade</Link>
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <OrderSummary 
                  cart={cart}
                  subtotal={subtotal}
                  discount={discount}
                  shipping={shipping}
                  total={total}
                />
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}