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

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-xl font-heading font-semibold text-gray-800">{question}</h3>
        <span className="ml-6">
          {isOpen ? (
            <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  title: string;
  faqs: FAQ[];
}

const FAQCategory = ({ title, faqs }: FAQCategoryProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">{title}</h2>
      <div className="bg-white rounded-xl shadow-sm">
        {faqs.map((faq: FAQ, index: number) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar perguntas frequentes..."
          className="w-full px-5 py-4 pr-12 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const generalFAQs = [
    {
      question: 'O que é o Fraldas e Patas Assinatura?',
      answer: 'Fraldas e Patas Assinatura é um serviço de assinatura que entrega regularmente fraldas geriátricas, absorventes e tapetes higiênicos para pets. Nosso objetivo é proporcionar conveniência e economia para cuidadores de idosos e tutores de pets, garantindo que nunca faltem produtos essenciais.'
    },
    {
      question: 'Quais produtos estão disponíveis para assinatura?',
      answer: 'Oferecemos uma ampla variedade de fraldas geriátricas em diferentes tamanhos e níveis de absorção, absorventes femininos e tapetes higiênicos para pets em diversos tamanhos. Você pode visualizar todo nosso catálogo na página de produtos.'
    },
    {
      question: 'Como funciona o sistema de assinatura?',
      answer: 'É simples! Você escolhe os produtos que deseja receber regularmente, define a quantidade e seleciona a frequência de entrega (mensal, trimestral, semestral ou anual). Nós cuidamos do resto, garantindo que você receba seus produtos pontualmente conforme o plano escolhido.'
    },
    {
      question: 'Existe um valor mínimo para assinatura?',
      answer: 'Sim, o valor mínimo para criar uma assinatura é de R$ 100,00. Este valor garante que possamos oferecer frete grátis e manter a qualidade do nosso serviço.'
    },
    {
      question: 'Posso alterar minha assinatura depois de criada?',
      answer: 'Sim! Você pode alterar produtos, quantidades, endereço de entrega e frequência a qualquer momento através do seu painel de cliente. As alterações feitas até 3 dias antes da data de processamento serão aplicadas no próximo ciclo.'
    }
  ];

  const deliveryFAQs = [
    {
      question: 'Qual o prazo de entrega dos produtos?',
      answer: 'O prazo de entrega varia de acordo com a sua localização, mas geralmente é de 3 a 7 dias úteis para capitais e regiões metropolitanas, e de 5 a 12 dias úteis para demais localidades.'
    },
    {
      question: 'Vocês entregam em todo o Brasil?',
      answer: 'Sim, realizamos entregas para todo o território nacional. O prazo e o valor do frete podem variar conforme a região, mas para assinaturas acima de R$ 100,00, o frete é grátis para todo o Brasil.'
    },
    {
      question: 'Como acompanho o status da minha entrega?',
      answer: 'Assim que seu pedido for despachado, você receberá um e-mail e uma notificação por WhatsApp com o código de rastreamento. Além disso, você pode acompanhar o status da entrega diretamente pelo seu painel de cliente.'
    },
    {
      question: 'O que acontece se eu não estiver em casa no momento da entrega?',
      answer: 'Se não houver ninguém para receber o pedido, a transportadora tentará realizar a entrega mais duas vezes. Caso as três tentativas sejam frustradas, o pedido retornará para nosso centro de distribuição e entraremos em contato para reagendar a entrega.'
    },
    {
      question: 'É possível agendar a entrega para um horário específico?',
      answer: 'Infelizmente, não é possível agendar horários específicos para entrega, pois dependemos das rotas das transportadoras. No entanto, você pode adicionar observações no seu endereço de entrega com instruções para o entregador.'
    }
  ];

  const paymentFAQs = [
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceitamos pagamentos via cartão de crédito (para assinaturas recorrentes), boleto bancário e PIX (para pagamentos únicos ou recorrentes manuais).'
    },
    {
      question: 'Como funciona o pagamento recorrente?',
      answer: 'Para assinaturas com cartão de crédito, realizamos a cobrança automaticamente a cada ciclo. Para pagamentos via boleto ou PIX, enviamos o código com antecedência para que você possa efetuar o pagamento. Sua assinatura só será processada após a confirmação do pagamento.'
    },
    {
      question: 'Quando é feita a cobrança da minha assinatura?',
      answer: 'A cobrança é realizada 3 dias antes da data programada para envio dos produtos. Isso nos dá tempo para processar o pagamento e preparar seu pedido para que chegue pontualmente.'
    },
    {
      question: 'O que acontece se meu pagamento não for aprovado?',
      answer: 'Se o pagamento por cartão de crédito não for aprovado, tentaremos realizar a cobrança mais duas vezes em dias consecutivos. Se ainda assim não for aprovado, enviaremos um e-mail e uma notificação por WhatsApp para que você possa atualizar seus dados de pagamento ou escolher outro método.'
    },
    {
      question: 'Posso solicitar nota fiscal dos meus pedidos?',
      answer: 'Sim, emitimos nota fiscal para todos os pedidos automaticamente. A nota fiscal é enviada para o e-mail cadastrado assim que o pedido é despachado e também fica disponível para download no seu painel de cliente.'
    }
  ];

  const subscriptionFAQs = [
    {
      question: 'Quais são as vantagens de assinar em vez de comprar avulso?',
      answer: 'Ao assinar, você garante descontos exclusivos (de até 15% dependendo do plano), frete grátis, conveniência de receber os produtos regularmente sem precisar se preocupar em fazer novos pedidos, e prioridade no atendimento ao cliente.'
    },
    {
      question: 'Posso pausar minha assinatura temporariamente?',
      answer: 'Sim, você pode pausar sua assinatura por até 3 meses através do seu painel de cliente. Após esse período, você pode optar por retomar a assinatura ou cancelá-la definitivamente.'
    },
    {
      question: 'Posso cancelar minha assinatura quando quiser?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem multa ou taxas adicionais. Basta acessar seu painel de cliente e solicitar o cancelamento. Se o cancelamento for feito após o processamento do ciclo atual, você ainda receberá a última entrega.'
    },
    {
      question: 'Existe fidelidade nos planos de assinatura?',
      answer: 'Não, não exigimos período mínimo de permanência. Você pode cancelar quando desejar, embora recomendamos manter a assinatura por pelo menos um ciclo completo para aproveitar todos os benefícios.'
    },
    {
      question: 'Posso ter mais de uma assinatura ativa ao mesmo tempo?',
      answer: 'Sim, você pode criar múltiplas assinaturas com diferentes configurações de produtos e frequências. Cada assinatura terá seu próprio ciclo e será gerenciada independentemente no seu painel de cliente.'
    }
  ];

  const productFAQs = [
    {
      question: 'Qual a diferença entre os tipos de fraldas geriátricas oferecidas?',
      answer: 'Oferecemos fraldas geriátricas em diferentes formatos (tipo fralda, tipo roupa íntima), tamanhos (P, M, G, XG, XXG) e níveis de absorção (dia, noite, máxima). A escolha ideal depende da mobilidade, do biotipo e das necessidades específicas do usuário.'
    },
    {
      question: 'Como escolher o tamanho correto de fralda geriátrica?',
      answer: 'O tamanho da fralda geriátrica deve ser escolhido com base na circunferência da cintura/quadril do usuário. Temos um guia detalhado de medidas na página de cada produto, mas em geral: P (40-80cm), M (70-120cm), G (110-150cm), XG (120-170cm), XXG (acima de 160cm).'
    },
    {
      question: 'Quais são os tamanhos disponíveis para tapetes higiênicos?',
      answer: 'Oferecemos tapetes higiênicos em três tamanhos: Padrão (60x60cm), Grande (80x80cm) e Extra Grande (90x90cm). Também temos opções com diferentes níveis de absorção e com ou sem aroma neutralizador de odores.'
    },
    {
      question: 'Os produtos têm garantia de qualidade?',
      answer: 'Sim, todos os nossos produtos passam por rigoroso controle de qualidade e são fornecidos por fabricantes certificados. Caso receba algum produto com defeito, entre em contato conosco em até 7 dias para substituição.'
    },
    {
      question: 'Vocês oferecem amostras dos produtos antes da assinatura?',
      answer: 'Sim, oferecemos kits de teste com pequenas quantidades dos produtos para que você possa experimentar antes de assinar. O valor do kit é revertido como desconto na sua primeira assinatura caso decida prosseguir.'
    }
  ];

  const accountFAQs = [
    {
      question: 'Como criar uma conta no site?',
      answer: 'Para criar uma conta, clique em "Minha Conta" no topo da página e selecione "Criar Conta". Preencha o formulário com seus dados pessoais e crie uma senha. Você também pode se cadastrar diretamente durante o processo de criação da assinatura.'
    },
    {
      question: 'Esqueci minha senha, como recuperá-la?',
      answer: 'Na página de login, clique em "Esqueceu sua senha?". Você receberá um e-mail com instruções para criar uma nova senha. Se não receber o e-mail, verifique sua pasta de spam ou entre em contato com nosso suporte.'
    },
    {
      question: 'Posso ter mais de um endereço de entrega cadastrado?',
      answer: 'Sim, você pode cadastrar múltiplos endereços de entrega na sua conta e selecionar qual deseja utilizar para cada assinatura ou alterar o endereço de entrega a qualquer momento.'
    },
    {
      question: 'Como atualizar meus dados cadastrais?',
      answer: 'Acesse seu painel de cliente, vá para a seção "Minha Conta" e selecione "Dados Cadastrais". Lá você poderá atualizar suas informações pessoais, endereço e dados de contato.'
    },
    {
      question: 'É possível excluir minha conta?',
      answer: 'Sim, você pode solicitar a exclusão da sua conta através da seção "Minha Conta" > "Configurações" > "Excluir Conta". Lembre-se que isso cancelará todas as suas assinaturas ativas e você perderá acesso ao histórico de pedidos.'
    }
  ];

  return (
    <>
      <Head>
        <title>Perguntas Frequentes | Fraldas e Patas Assinatura</title>
        <meta name="description" content="Encontre respostas para as dúvidas mais comuns sobre o serviço de assinatura de fraldas geriátricas e produtos para pets da Fraldas e Patas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        
        <section className="py-12 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">Perguntas Frequentes</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços.</p>
            </div>
            
            <SearchBar />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <a href="#geral" className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition duration-300">
                <div className="bg-primary-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-gray-800">Informações Gerais</h3>
              </a>
              <a href="#entrega" className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition duration-300">
                <div className="bg-primary-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-gray-800">Entrega</h3>
              </a>
              <a href="#pagamento" className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition duration-300">
                <div className="bg-primary-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-gray-800">Pagamento</h3>
              </a>
              <a href="#assinatura" className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition duration-300">
                <div className="bg-primary-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-gray-800">Assinatura</h3>
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div id="geral" className="scroll-mt-24">
              <FAQCategory title="Informações Gerais" faqs={generalFAQs} />
            </div>
            
            <div id="entrega" className="scroll-mt-24">
              <FAQCategory title="Entrega" faqs={deliveryFAQs} />
            </div>
            
            <div id="pagamento" className="scroll-mt-24">
              <FAQCategory title="Pagamento" faqs={paymentFAQs} />
            </div>
            
            <div id="assinatura" className="scroll-mt-24">
              <FAQCategory title="Assinatura" faqs={subscriptionFAQs} />
            </div>
            
            <div id="produtos" className="scroll-mt-24">
              <FAQCategory title="Produtos" faqs={productFAQs} />
            </div>
            
            <div id="conta" className="scroll-mt-24">
              <FAQCategory title="Conta e Cadastro" faqs={accountFAQs} />
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-800 mb-6">Não encontrou o que procurava?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Nossa equipe está pronta para ajudar com qualquer dúvida adicional que você possa ter.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contato" className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition duration-300">
                Entre em Contato
              </Link>
              <a href="https://wa.me/5511987654321" className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300 flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}