# Plano de Desenvolvimento do MVP - Fraldas e Patas Assinatura

## Visão Geral

Este documento detalha o plano de desenvolvimento do MVP (Produto Mínimo Viável) para o micro-SaaS "Fraldas e Patas Assinatura", focado na venda por assinatura de fraldas geriátricas, absorventes e tapetes higiênicos para pets. O MVP será desenvolvido com foco nas funcionalidades essenciais que permitam validar o modelo de negócio e iniciar a operação com os primeiros clientes.

## Stack Tecnológico

### Frontend

- **Framework Principal:** Next.js (React)
- **Estilização:** Tailwind CSS
- **Gerenciamento de Estado:** React Context API + SWR para fetching de dados
- **Autenticação:** Firebase Authentication
- **Componentes UI:** Headless UI + Custom Components
- **Formulários:** React Hook Form + Yup para validação
- **Hospedagem:** Vercel

### Backend

- **Framework:** Node.js com Express
- **API:** RESTful com documentação Swagger
- **Banco de Dados:** MongoDB Atlas (cloud)
- **Autenticação:** JWT + Firebase Auth
- **Hospedagem:** Render ou Railway

### Integrações

- **Pagamentos:** Stripe (principal) e Mercado Pago (alternativa para o Brasil)
- **E-mail:** SendGrid
- **SMS:** Twilio
- **WhatsApp:** API oficial do WhatsApp Business
- **Marketplace:** API da Shopee (opcional para fase inicial)

### DevOps

- **Controle de Versão:** GitHub
- **CI/CD:** GitHub Actions
- **Monitoramento:** Sentry para erros, Google Analytics para uso
- **Logs:** LogRocket

## Arquitetura do Sistema

### Diagrama de Componentes

```
+-------------------+      +-------------------+      +-------------------+
|                   |      |                   |      |                   |
|  Cliente Web/App  | <--> |  API Backend      | <--> |  Banco de Dados   |
|  (Next.js)        |      |  (Node.js)        |      |  (MongoDB)        |
|                   |      |                   |      |                   |
+-------------------+      +-------------------+      +-------------------+
          ^                         ^                         ^
          |                         |                         |
          v                         v                         v
+-------------------+      +-------------------+      +-------------------+
|                   |      |                   |      |                   |
|  Autenticação     |      |  Processamento    |      |  Serviços de      |
|  (Firebase)       |      |  de Pagamentos    |      |  Notificação      |
|                   |      |  (Stripe/M.Pago)  |      |  (Email/SMS/WA)   |
+-------------------+      +-------------------+      +-------------------+
                                     ^
                                     |
                                     v
                           +-------------------+
                           |                   |
                           |  Integração com   |
                           |  Marketplaces     |
                           |  (Shopee)         |
                           |                   |
                           +-------------------+
```

### Estrutura de Dados

#### Usuários
```json
{
  "_id": "ObjectId",
  "nome": "String",
  "email": "String",
  "telefone": "String",
  "firebaseUid": "String",
  "dataCadastro": "Date",
  "enderecos": [{
    "tipo": "String (entrega/cobrança)",
    "cep": "String",
    "logradouro": "String",
    "numero": "String",
    "complemento": "String",
    "bairro": "String",
    "cidade": "String",
    "estado": "String",
    "principal": "Boolean"
  }],
  "metodoPagamento": [{
    "tipo": "String (cartão/boleto/pix)",
    "detalhes": "Object (dados específicos do método)",
    "principal": "Boolean"
  }]
}
```

#### Produtos
```json
{
  "_id": "ObjectId",
  "nome": "String",
  "descricao": "String",
  "categoria": "String (fraldas/absorventes/tapetes)",
  "subcategoria": "String",
  "tamanho": "String",
  "absorção": "String",
  "unidadesPorPacote": "Number",
  "precoUnitario": "Number",
  "precoAssinatura": {
    "mensal": "Number",
    "trimestral": "Number",
    "semestral": "Number",
    "anual": "Number"
  },
  "peso": "Number",
  "dimensoes": {
    "altura": "Number",
    "largura": "Number",
    "comprimento": "Number"
  },
  "imagens": ["String (URLs)"],
  "estoque": "Number",
  "ativo": "Boolean"
}
```

#### Assinaturas
```json
{
  "_id": "ObjectId",
  "usuario": "ObjectId (ref: Usuários)",
  "status": "String (ativa/pausada/cancelada)",
  "plano": "String (mensal/trimestral/semestral/anual)",
  "dataCriacao": "Date",
  "dataProximaCobranca": "Date",
  "dataProximaEntrega": "Date",
  "enderecoEntrega": "Object (endereço completo)",
  "metodoPagamento": "Object (método de pagamento)",
  "itens": [{
    "produto": "ObjectId (ref: Produtos)",
    "quantidade": "Number",
    "precoUnitario": "Number",
    "subtotal": "Number"
  }],
  "valorTotal": "Number",
  "valorFrete": "Number",
  "valorDesconto": "Number",
  "cupomAplicado": "String",
  "historicoEntregas": [{
    "data": "Date",
    "status": "String",
    "rastreamento": "String"
  }],
  "historicoCobrancas": [{
    "data": "Date",
    "valor": "Number",
    "status": "String",
    "comprovante": "String (URL)"
  }]
}
```

#### Pedidos
```json
{
  "_id": "ObjectId",
  "assinatura": "ObjectId (ref: Assinaturas)",
  "usuario": "ObjectId (ref: Usuários)",
  "dataCriacao": "Date",
  "status": "String (processando/enviado/entregue/cancelado)",
  "itens": [{
    "produto": "ObjectId (ref: Produtos)",
    "quantidade": "Number",
    "precoUnitario": "Number",
    "subtotal": "Number"
  }],
  "valorTotal": "Number",
  "valorFrete": "Number",
  "valorDesconto": "Number",
  "enderecoEntrega": "Object",
  "infoRastreamento": {
    "codigo": "String",
    "transportadora": "String",
    "dataEnvio": "Date",
    "dataEntregaPrevista": "Date",
    "dataEntregaEfetiva": "Date"
  }
}
```

#### Cupons
```json
{
  "_id": "ObjectId",
  "codigo": "String",
  "tipo": "String (percentual/valor fixo/frete grátis)",
  "valor": "Number",
  "dataInicio": "Date",
  "dataFim": "Date",
  "usoMaximo": "Number",
  "usoAtual": "Number",
  "valorMinimoPedido": "Number",
  "categoriasAplicaveis": ["String"],
  "produtosAplicaveis": ["ObjectId"],
  "exclusivoPrimeiraCompra": "Boolean",
  "ativo": "Boolean"
}
```

## Funcionalidades do MVP

### 1. Cadastro e Autenticação de Usuários
- Cadastro com e-mail/senha ou redes sociais
- Login e recuperação de senha
- Perfil do usuário com dados pessoais e endereços
- Gerenciamento de métodos de pagamento

### 2. Catálogo de Produtos
- Listagem de produtos por categoria
- Filtros por tamanho, absorção, etc.
- Páginas de detalhes dos produtos
- Recomendações personalizadas

### 3. Sistema de Assinaturas
- Seleção de produtos para assinatura
- Escolha de frequência (mensal, trimestral, semestral, anual)
- Cálculo de preços com descontos por frequência
- Checkout seguro

### 4. Processamento de Pagamentos
- Integração com Stripe para pagamentos recorrentes
- Opção alternativa com Mercado Pago para o Brasil
- Geração de faturas e comprovantes
- Notificações de cobrança e falhas

### 5. Dashboard do Cliente
- Visão geral da assinatura
- Status do próximo pedido
- Histórico de entregas
- Gerenciamento da assinatura (alterar, pausar, cancelar)

### 6. Sistema de Notificações
- E-mails transacionais (confirmação, envio, etc.)
- Notificações por SMS para entregas
- Suporte via WhatsApp

### 7. Cupons e Promoções
- Sistema de cupons de desconto
- Promoções por tempo limitado
- Programa de indicação

### 8. Integração com Marketplace (opcional para MVP)
- Conexão básica com Shopee
- Sincronização de pedidos

### 9. Painel Administrativo
- Gestão de produtos e estoque
- Monitoramento de assinaturas
- Relatórios básicos de vendas
- Gestão de usuários

## Etapas de Desenvolvimento

### Fase 1: Planejamento e Setup (2 semanas)

#### Semana 1
- Definição detalhada dos requisitos
- Criação de wireframes e protótipos de alta fidelidade
- Setup do ambiente de desenvolvimento
- Configuração do repositório Git e fluxo de trabalho

#### Semana 2
- Configuração da infraestrutura (servidores, banco de dados)
- Setup do projeto frontend (Next.js + Tailwind)
- Setup do projeto backend (Node.js + Express)
- Configuração das integrações iniciais (Firebase Auth)

### Fase 2: Desenvolvimento do Core (4 semanas)

#### Semana 3-4
- Implementação do sistema de autenticação
- Desenvolvimento do catálogo de produtos
- Criação da API para produtos e usuários
- Implementação do frontend básico

#### Semana 5-6
- Desenvolvimento do sistema de assinaturas
- Integração com gateway de pagamento (Stripe)
- Implementação do checkout
- Desenvolvimento do dashboard do cliente (versão básica)

### Fase 3: Funcionalidades Complementares (3 semanas)

#### Semana 7
- Sistema de notificações (e-mail, SMS)
- Integração com WhatsApp para suporte
- Implementação de cupons e promoções

#### Semana 8-9
- Desenvolvimento do painel administrativo
- Relatórios básicos e monitoramento
- Integração opcional com Shopee
- Refinamento da experiência do usuário

### Fase 4: Testes e Otimização (2 semanas)

#### Semana 10
- Testes de integração e end-to-end
- Testes de carga e performance
- Correção de bugs e ajustes

#### Semana 11
- Otimização de performance
- Implementação de analytics
- Preparação para lançamento

### Fase 5: Lançamento e Iteração (1 semana)

#### Semana 12
- Lançamento para early adopters
- Monitoramento e suporte inicial
- Coleta de feedback
- Planejamento das próximas iterações

## Recursos Necessários

### Equipe

- 1 Product Manager / Product Owner
- 2 Desenvolvedores Full Stack (ou 1 Frontend + 1 Backend)
- 1 Designer UI/UX
- 1 QA (pode ser em tempo parcial)

### Ferramentas

- **Design:** Figma para wireframes e protótipos
- **Desenvolvimento:** VS Code, Git, GitHub
- **Gerenciamento de Projeto:** Jira ou Trello
- **Comunicação:** Slack ou Discord
- **Documentação:** Notion ou Confluence

### Serviços Cloud

- **Hospedagem Frontend:** Vercel
- **Hospedagem Backend:** Render ou Railway
- **Banco de Dados:** MongoDB Atlas
- **Autenticação:** Firebase
- **Armazenamento:** AWS S3 ou Firebase Storage
- **CDN:** Cloudflare

## Estimativa de Custos Mensais (Infraestrutura)

- **Hospedagem Frontend (Vercel):** Plano Hobby - $0 (gratuito para início)
- **Hospedagem Backend (Render):** Plano Starter - $7/mês
- **Banco de Dados (MongoDB Atlas):** Plano Shared - $15/mês
- **Firebase:** Plano Spark - $0 (gratuito para início)
- **SendGrid (E-mail):** Plano Essentials - $14.95/mês (até 50.000 e-mails)
- **Twilio (SMS):** Pay-as-you-go - ~$20/mês (estimado para volume inicial)
- **Stripe:** Sem custo fixo (apenas taxa por transação)
- **Armazenamento (AWS S3):** ~$5/mês (estimado para volume inicial)

**Total Estimado:** ~$62/mês para infraestrutura inicial

## Métricas de Sucesso do MVP

### Métricas Técnicas

- **Uptime:** > 99.9%
- **Tempo de Carregamento:** < 3 segundos para página inicial
- **Taxa de Erro:** < 1% nas transações
- **Compatibilidade:** Funcionamento em 95% dos navegadores modernos

### Métricas de Negócio

- **Conversão de Visitantes para Cadastros:** > 20%
- **Conversão de Cadastros para Assinantes:** > 30%
- **Churn Mensal:** < 5%
- **Ticket Médio:** > R$ 100/mês
- **Custo de Aquisição de Cliente (CAC):** < R$ 50

## Riscos e Mitigações

### Riscos Técnicos

1. **Integração com Gateways de Pagamento**
   - **Risco:** Falhas na integração ou no processamento de pagamentos recorrentes
   - **Mitigação:** Testes extensivos, implementação de sistema de retry, monitoramento constante

2. **Escalabilidade**
   - **Risco:** Sistema não suportar crescimento rápido de usuários
   - **Mitigação:** Arquitetura escalável desde o início, testes de carga, plano de contingência

3. **Segurança de Dados**
   - **Risco:** Vazamento de dados sensíveis de usuários
   - **Mitigação:** Implementação de práticas de segurança, criptografia, auditorias regulares

### Riscos de Negócio

1. **Baixa Adesão**
   - **Risco:** Número insuficiente de assinantes para viabilidade
   - **Mitigação:** Estratégia de marketing focada, programa de indicação, parcerias estratégicas

2. **Alto Churn**
   - **Risco:** Cancelamento frequente de assinaturas
   - **Mitigação:** Programa de fidelidade, comunicação proativa, pesquisas de satisfação

3. **Problemas Logísticos**
   - **Risco:** Atrasos ou falhas nas entregas
   - **Mitigação:** Múltiplos parceiros logísticos, buffer de estoque, comunicação transparente

## Roadmap Pós-MVP

### Curto Prazo (3 meses após lançamento)

- Refinamento da experiência do usuário com base no feedback
- Expansão do catálogo de produtos
- Melhorias no sistema de recomendação
- Implementação de programa de fidelidade completo

### Médio Prazo (6 meses após lançamento)

- Aplicativo móvel nativo (iOS e Android)
- Integração com mais marketplaces
- Sistema avançado de analytics e BI
- Expansão geográfica para mais regiões

### Longo Prazo (12 meses após lançamento)

- Marketplace próprio para produtos relacionados
- Sistema de assinatura personalizada com IA
- Integração com sistemas de saúde e pet shops
- Expansão para novas categorias de produtos

## Conclusão

O plano de desenvolvimento do MVP para o "Fraldas e Patas Assinatura" foi estruturado para permitir um lançamento rápido (12 semanas) com as funcionalidades essenciais para validar o modelo de negócio. A arquitetura proposta é escalável e permite a adição de novas funcionalidades no futuro, conforme o crescimento da base de usuários e a evolução das necessidades do negócio.

O foco inicial será na criação de uma experiência de usuário fluida e confiável, com ênfase na facilidade de assinatura, gerenciamento simples e comunicação transparente. As integrações com sistemas de pagamento e notificações são prioritárias para garantir a operação básica do serviço.

Com uma abordagem iterativa e baseada em feedback, o MVP será continuamente melhorado após o lançamento, com um roadmap claro para os próximos desenvolvimentos.