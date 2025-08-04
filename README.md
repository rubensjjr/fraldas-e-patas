# Fraldas e Patas Assinatura

![Logo Fraldas e Patas](./public/assets/logo.svg)

## Visão Geral do Projeto

Fraldas e Patas Assinatura é um micro-SaaS voltado para a venda por assinatura de fraldas geriátricas, absorventes e tapetes higiênicos para pets. O serviço atende três públicos-alvo principais:

1. **Cuidadores de idosos acamados** - Fornecimento regular de fraldas geriátricas e produtos de higiene
2. **Tutores de pets** - Entrega recorrente de tapetes higiênicos e absorventes para animais de estimação
3. **Consumidores que buscam conveniência** - Pessoas que valorizam economia e praticidade através de compras recorrentes

## Funcionalidades do MVP

- Cadastro de cliente
- Seleção de produtos e tamanhos
- Montagem de plano de assinatura (mensal, trimestral, semestral, anual)
- Pagamento recorrente (Stripe ou Mercado Pago)
- Dashboard com status do pedido
- Gerenciamento da assinatura (alterar, pausar, cancelar)
- Suporte via WhatsApp
- Notificações por e-mail/SMS
- Cupons promocionais
- Integração opcional com Shopee ou Shopify

## Stack Tecnológico

### Frontend
- **Next.js** - Framework React para renderização híbrida (SSR/SSG)
- **React** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Headless UI** - Componentes acessíveis sem estilo
- **React Hook Form** - Gerenciamento de formulários
- **SWR** - Biblioteca para data fetching

### Backend (Planejado)
- **Node.js** - Ambiente de execução JavaScript
- **MongoDB** - Banco de dados NoSQL
- **Firebase** - Autenticação e armazenamento

### Pagamentos
- **Stripe** - Processamento de pagamentos recorrentes
- **Mercado Pago** - Alternativa para pagamentos no Brasil

### Comunicação
- **SendGrid** - Envio de e-mails transacionais
- **Twilio** - Notificações por SMS
- **WhatsApp API** - Suporte ao cliente

### Hospedagem
- **Vercel** - Plataforma para hospedagem de aplicações Next.js

## Estratégia de Lançamento

- Marketing digital focado em Instagram e Facebook
- Campanhas de WhatsApp para clientes potenciais
- Marketplace na Shopee para ampliar alcance
- Programa de indicação para aquisição de novos clientes

## Modelo de Monetização

- Assinaturas recorrentes com descontos progressivos para planos mais longos
- Programa de fidelidade com pontos e benefícios exclusivos
- Venda de produtos complementares

## Como Executar o Projeto

### Pré-requisitos

- Node.js 14.x ou superior
- npm ou yarn

### Instalação

1. Clone o repositório
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd fraldas-e-patas
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse `http://localhost:3000` no seu navegador

## Documentação

O projeto inclui documentação detalhada nos seguintes arquivos:

- **[docs/estrategia_lancamento.md](./docs/estrategia_lancamento.md)** - Estratégia completa de lançamento, incluindo fases, canais de aquisição, planos de assinatura e métricas de sucesso.

- **[docs/identidade_visual.md](./docs/identidade_visual.md)** - Guia completo de identidade visual, detalhando paleta de cores, tipografia, logo e aplicações da marca.

- **[docs/plano_desenvolvimento_mvp.md](./docs/plano_desenvolvimento_mvp.md)** - Plano detalhado de desenvolvimento do MVP, incluindo arquitetura do sistema, estruturas de dados, cronograma e estratégia de mitigação de riscos.

- **[docs/wireframes/](./docs/wireframes/)** - Wireframes das principais telas do sistema, incluindo homepage, dashboard e página de planos de assinatura.

## Estrutura do Projeto

```
├── docs/                      # Documentação do projeto
│   ├── estrategia_lancamento.md   # Estratégia de lançamento e monetização
│   ├── identidade_visual.md       # Guia de identidade visual
│   ├── plano_desenvolvimento_mvp.md  # Plano de desenvolvimento do MVP
│   └── wireframes/               # Wireframes das principais telas
│       ├── dashboard.svg
│       ├── homepage.svg
│       └── subscription_plan.svg
├── public/                    # Arquivos públicos
│   ├── assets/                  # Recursos estáticos como logo
│   │   └── logo.svg
│   └── images/                  # Imagens do site
├── src/                       # Código-fonte
│   ├── backend/                 # Código do backend (a ser implementado)
│   ├── frontend/                # Componentes reutilizáveis (a ser implementado)
│   └── pages/                   # Páginas da aplicação
│       ├── assinatura.tsx         # Página de configuração da assinatura
│       ├── checkout.tsx           # Página de checkout
│       ├── como-funciona.tsx      # Página explicativa do serviço
│       ├── confirmacao.tsx        # Página de confirmação de assinatura
│       ├── contato.tsx            # Página de contato
│       ├── dashboard.tsx          # Painel do cliente
│       ├── faq.tsx                # Perguntas frequentes
│       ├── index.tsx              # Página inicial
│       ├── politica-de-privacidade.tsx  # Política de privacidade
│       ├── produtos.tsx           # Catálogo de produtos
│       ├── sobre.tsx              # Página sobre a empresa
│       └── termos-de-uso.tsx      # Termos de uso
├── next.config.js             # Configuração do Next.js
├── package.json               # Dependências e scripts
├── tailwind.config.js         # Configuração do Tailwind CSS
└── tsconfig.json              # Configuração do TypeScript
```