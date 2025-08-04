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

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Fraldas e Patas Assinatura</title>
        <meta name="description" content="Política de privacidade da Fraldas e Patas Assinatura. Saiba como coletamos, usamos e protegemos seus dados pessoais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        
        <section className="py-12 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">Política de Privacidade</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2>1. Introdução</h2>
                <p>A Fraldas e Patas Assinatura está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos, transferimos e armazenamos suas informações. Por favor, reserve um momento para se familiarizar com nossas práticas de privacidade.</p>
                <p>Ao utilizar nosso site e serviços, você concorda com a coleta, uso e divulgação de suas informações conforme descrito nesta Política de Privacidade.</p>
                
                <h2>2. Informações que Coletamos</h2>
                <p>Podemos coletar os seguintes tipos de informações:</p>
                
                <h3>2.1. Informações Pessoais</h3>
                <p>Informações que você nos fornece diretamente:</p>
                <ul>
                  <li>Informações de cadastro: nome completo, endereço de e-mail, número de telefone, endereço residencial, data de nascimento e CPF/CNPJ.</li>
                  <li>Informações de pagamento: dados de cartão de crédito, informações bancárias para pagamento via boleto ou PIX.</li>
                  <li>Informações de perfil: preferências de produtos, histórico de compras e configurações de assinatura.</li>
                  <li>Comunicações: quando você entra em contato conosco por e-mail, WhatsApp, telefone ou formulários de contato.</li>
                </ul>
                
                <h3>2.2. Informações Automáticas</h3>
                <p>Informações coletadas automaticamente durante sua interação com nosso site:</p>
                <ul>
                  <li>Informações do dispositivo: tipo de dispositivo, sistema operacional, navegador, endereço IP.</li>
                  <li>Informações de uso: páginas visitadas, tempo gasto no site, links clicados, produtos visualizados.</li>
                  <li>Informações de localização: localização geográfica aproximada baseada no seu endereço IP.</li>
                  <li>Cookies e tecnologias semelhantes: utilizamos cookies e outras tecnologias para melhorar sua experiência em nosso site.</li>
                </ul>
                
                <h2>3. Como Usamos Suas Informações</h2>
                <p>Utilizamos suas informações para os seguintes fins:</p>
                
                <h3>3.1. Fornecer e Melhorar Nossos Serviços</h3>
                <ul>
                  <li>Processar e gerenciar suas assinaturas e pedidos.</li>
                  <li>Personalizar sua experiência de compra com base em suas preferências.</li>
                  <li>Enviar notificações sobre entregas, renovações e alterações em sua assinatura.</li>
                  <li>Melhorar nossos produtos, serviços e funcionalidades do site.</li>
                  <li>Desenvolver novos produtos e serviços.</li>
                </ul>
                
                <h3>3.2. Comunicação</h3>
                <ul>
                  <li>Enviar comunicações sobre sua assinatura, como confirmações de pedido, avisos de renovação e atualizações de entrega.</li>
                  <li>Responder a suas perguntas, comentários e solicitações.</li>
                  <li>Enviar informações sobre produtos, serviços, promoções e ofertas que possam ser de seu interesse (com seu consentimento).</li>
                  <li>Conduzir pesquisas e coletar feedback sobre nossos serviços.</li>
                </ul>
                
                <h3>3.3. Segurança e Proteção</h3>
                <ul>
                  <li>Proteger nossos serviços, usuários e o público.</li>
                  <li>Detectar, prevenir e resolver fraudes, violações de segurança e atividades potencialmente proibidas ou ilegais.</li>
                  <li>Verificar sua identidade para prevenir acesso não autorizado à sua conta.</li>
                </ul>
                
                <h2>4. Compartilhamento de Informações</h2>
                <p>Podemos compartilhar suas informações com os seguintes tipos de terceiros:</p>
                
                <h3>4.1. Prestadores de Serviços</h3>
                <p>Compartilhamos informações com empresas que prestam serviços em nosso nome, como:</p>
                <ul>
                  <li>Processadores de pagamento (Stripe, Mercado Pago).</li>
                  <li>Serviços de entrega e logística.</li>
                  <li>Serviços de atendimento ao cliente.</li>
                  <li>Serviços de marketing e análise.</li>
                  <li>Serviços de hospedagem e tecnologia.</li>
                </ul>
                <p>Esses prestadores de serviços têm acesso às suas informações pessoais apenas para realizar tarefas em nosso nome e são obrigados a não divulgar ou usar essas informações para qualquer outro fim.</p>
                
                <h3>4.2. Parceiros Comerciais</h3>
                <p>Podemos compartilhar informações limitadas com parceiros comerciais para oferecer produtos, serviços ou promoções que possam ser de seu interesse.</p>
                
                <h3>4.3. Conformidade Legal</h3>
                <p>Podemos divulgar suas informações quando acreditarmos, de boa-fé, que a divulgação é necessária para:</p>
                <ul>
                  <li>Cumprir com uma obrigação legal, regulatória ou processo legal.</li>
                  <li>Proteger os direitos, propriedade ou segurança da Fraldas e Patas Assinatura, nossos clientes ou o público.</li>
                  <li>Detectar, prevenir ou investigar possíveis atividades ilegais, fraudes ou problemas de segurança.</li>
                </ul>
                
                <h2>5. Seus Direitos e Escolhas</h2>
                <p>Você tem certos direitos e escolhas em relação às suas informações pessoais:</p>
                
                <h3>5.1. Acesso e Controle</h3>
                <ul>
                  <li>Acessar, corrigir ou excluir suas informações pessoais através do seu painel de controle na sua conta.</li>
                  <li>Solicitar uma cópia das informações pessoais que mantemos sobre você.</li>
                  <li>Solicitar a exclusão da sua conta e informações pessoais.</li>
                </ul>
                
                <h3>5.2. Comunicações de Marketing</h3>
                <ul>
                  <li>Optar por receber ou não comunicações de marketing através das configurações da sua conta ou links de cancelamento de inscrição nos e-mails.</li>
                  <li>Observe que mesmo que você opte por não receber comunicações de marketing, ainda enviaremos comunicações relacionadas ao serviço sobre sua assinatura.</li>
                </ul>
                
                <h3>5.3. Cookies e Tecnologias Semelhantes</h3>
                <ul>
                  <li>Gerenciar suas preferências de cookies através das configurações do seu navegador.</li>
                  <li>Observe que a desativação de certos cookies pode afetar a funcionalidade do nosso site.</li>
                </ul>
                
                <h2>6. Segurança das Informações</h2>
                <p>Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Portanto, embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.</p>
                
                <h2>7. Retenção de Dados</h2>
                <p>Mantemos suas informações pessoais pelo tempo necessário para cumprir os fins descritos nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Quando não tivermos mais uma necessidade comercial legítima de processar suas informações pessoais, excluiremos ou anonimizaremos essas informações.</p>
                
                <h2>8. Transferências Internacionais de Dados</h2>
                <p>Suas informações pessoais podem ser transferidas e processadas em países diferentes do país em que você reside. Esses países podem ter leis de proteção de dados diferentes das leis do seu país. Ao fornecer suas informações pessoais, você concorda com essa transferência, armazenamento e processamento.</p>
                
                <h2>9. Privacidade de Crianças</h2>
                <p>Nossos serviços não são direcionados a pessoas com menos de 18 anos, e não coletamos intencionalmente informações pessoais de crianças menores de 18 anos. Se tomarmos conhecimento de que coletamos informações pessoais de uma criança menor de 18 anos, tomaremos medidas para excluir essas informações o mais rápido possível.</p>
                
                <h2>10. Alterações nesta Política de Privacidade</h2>
                <p>Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações em nossas práticas de informação. Se fizermos alterações materiais, notificaremos você por e-mail (enviado para o endereço de e-mail especificado em sua conta) ou por meio de um aviso em nosso site antes que a alteração entre em vigor. Recomendamos que você revise periodicamente esta página para obter as informações mais recentes sobre nossas práticas de privacidade.</p>
                
                <h2>11. Contato</h2>
                <p>Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de privacidade, entre em contato conosco em:</p>
                <p>
                  <strong>E-mail:</strong> <a href="mailto:privacidade@fraldasepatas.com.br" className="text-primary-600 hover:text-primary-700">privacidade@fraldasepatas.com.br</a><br />
                  <strong>Telefone:</strong> (11) 98765-4321<br />
                  <strong>Endereço:</strong> São Paulo, SP
                </p>
                
                <h2>12. Consentimento</h2>
                <p>Ao utilizar nosso site e serviços, você consente com a coleta, uso e divulgação de suas informações conforme descrito nesta Política de Privacidade. Se você não concordar com esta Política de Privacidade, por favor, não utilize nosso site ou serviços.</p>
              </div>
              
              <div className="mt-12 text-center">
                <Link href="/contato" className="text-primary-600 hover:text-primary-700 font-medium">
                  Dúvidas? Entre em contato conosco
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}