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

export default function TermosDeUso() {
  return (
    <>
      <Head>
        <title>Termos de Uso | Fraldas e Patas Assinatura</title>
        <meta name="description" content="Termos e condições de uso do serviço de assinatura de fraldas geriátricas e produtos para pets da Fraldas e Patas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        
        <section className="py-12 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">Termos de Uso</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2>1. Aceitação dos Termos</h2>
                <p>Ao acessar e utilizar o site e os serviços da Fraldas e Patas Assinatura, você concorda em cumprir e estar sujeito a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, solicitamos que não utilize nosso site ou serviços.</p>
                
                <h2>2. Descrição do Serviço</h2>
                <p>A Fraldas e Patas Assinatura oferece um serviço de assinatura para entrega recorrente de fraldas geriátricas, absorventes e tapetes higiênicos para pets. Nosso serviço permite que os clientes escolham produtos, definam a frequência de entrega e gerenciem suas assinaturas através de uma plataforma online.</p>
                
                <h2>3. Cadastro e Conta</h2>
                <p>3.1. Para utilizar nossos serviços de assinatura, é necessário criar uma conta fornecendo informações precisas, completas e atualizadas.</p>
                <p>3.2. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrerem em sua conta.</p>
                <p>3.3. Você concorda em notificar imediatamente a Fraldas e Patas Assinatura sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança.</p>
                <p>3.4. A Fraldas e Patas Assinatura reserva-se o direito de recusar o acesso ao serviço, encerrar contas, remover ou editar conteúdo a seu exclusivo critério.</p>
                
                <h2>4. Assinaturas e Pagamentos</h2>
                <p>4.1. Ao criar uma assinatura, você autoriza a Fraldas e Patas Assinatura a cobrar o valor correspondente ao plano escolhido na frequência selecionada.</p>
                <p>4.2. Os preços dos produtos e serviços estão sujeitos a alterações sem aviso prévio. No entanto, para assinaturas ativas, qualquer alteração de preço será comunicada com pelo menos 30 dias de antecedência.</p>
                <p>4.3. Você pode cancelar sua assinatura a qualquer momento através do seu painel de cliente. O cancelamento será efetivado imediatamente, mas se já houver um ciclo em processamento, você ainda receberá e será cobrado por esta última entrega.</p>
                <p>4.4. Em caso de falha no pagamento, tentaremos realizar a cobrança novamente. Se após três tentativas o pagamento não for aprovado, sua assinatura será suspensa até a regularização.</p>
                
                <h2>5. Entregas</h2>
                <p>5.1. A Fraldas e Patas Assinatura compromete-se a entregar os produtos conforme a frequência escolhida pelo cliente.</p>
                <p>5.2. Os prazos de entrega são estimados e podem variar de acordo com a localização e disponibilidade dos produtos.</p>
                <p>5.3. É responsabilidade do cliente fornecer um endereço de entrega correto e completo, bem como garantir que haja alguém disponível para receber os produtos.</p>
                <p>5.4. Em caso de ausência no momento da entrega, seguiremos o procedimento padrão da transportadora, que geralmente inclui até três tentativas de entrega.</p>
                
                <h2>6. Política de Devolução e Troca</h2>
                <p>6.1. Se você receber produtos danificados ou com defeito, entre em contato conosco em até 7 dias após o recebimento para solicitar a troca ou devolução.</p>
                <p>6.2. Para produtos em perfeito estado, aceitamos devoluções em até 7 dias após o recebimento, desde que o produto esteja em sua embalagem original, não tenha sido aberto ou usado.</p>
                <p>6.3. O custo do frete de devolução será de responsabilidade do cliente, exceto em casos de produtos com defeito ou erro em nosso processamento.</p>
                
                <h2>7. Propriedade Intelectual</h2>
                <p>7.1. Todo o conteúdo presente no site da Fraldas e Patas Assinatura, incluindo textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Fraldas e Patas Assinatura ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais.</p>
                <p>7.2. É proibida a reprodução, distribuição, exibição, transmissão, modificação, publicação ou qualquer outro uso do conteúdo do site sem autorização prévia por escrito da Fraldas e Patas Assinatura.</p>
                
                <h2>8. Limitação de Responsabilidade</h2>
                <p>8.1. A Fraldas e Patas Assinatura não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços.</p>
                <p>8.2. Não garantimos que o site ou os serviços serão ininterruptos, seguros ou livres de erros, nem que os defeitos serão corrigidos.</p>
                <p>8.3. A Fraldas e Patas Assinatura não se responsabiliza por atrasos ou falhas na entrega causados por eventos fora de nosso controle, incluindo, mas não se limitando a, desastres naturais, greves, problemas de transporte ou condições climáticas adversas.</p>
                
                <h2>9. Privacidade</h2>
                <p>9.1. A coleta e o uso de informações pessoais estão sujeitos à nossa Política de Privacidade, que está incorporada a estes Termos de Uso por referência.</p>
                <p>9.2. Ao utilizar nossos serviços, você concorda com nossas práticas de coleta, uso e divulgação de informações conforme descrito em nossa Política de Privacidade.</p>
                
                <h2>10. Modificações nos Termos</h2>
                <p>10.1. A Fraldas e Patas Assinatura reserva-se o direito de modificar estes Termos de Uso a qualquer momento, a seu exclusivo critério.</p>
                <p>10.2. As alterações entrarão em vigor imediatamente após a publicação dos Termos de Uso revisados no site.</p>
                <p>10.3. O uso continuado do site ou dos serviços após a publicação das alterações constitui aceitação dessas alterações.</p>
                
                <h2>11. Lei Aplicável e Foro</h2>
                <p>11.1. Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil.</p>
                <p>11.2. Qualquer disputa decorrente ou relacionada a estes Termos de Uso será submetida ao foro da comarca de São Paulo, SP, com exclusão de qualquer outro, por mais privilegiado que seja.</p>
                
                <h2>12. Disposições Gerais</h2>
                <p>12.1. Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.</p>
                <p>12.2. A falha da Fraldas e Patas Assinatura em exercer ou fazer cumprir qualquer direito ou disposição destes Termos de Uso não constituirá uma renúncia a tal direito ou disposição.</p>
                <p>12.3. Estes Termos de Uso constituem o acordo completo entre você e a Fraldas e Patas Assinatura em relação ao uso do site e dos serviços.</p>
                
                <h2>13. Contato</h2>
                <p>Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail <a href="mailto:contato@fraldasepatas.com.br" className="text-primary-600 hover:text-primary-700">contato@fraldasepatas.com.br</a> ou pelo telefone (11) 98765-4321.</p>
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