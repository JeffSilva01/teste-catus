# Catus Commerce

Uma moderna aplicação e-commerce construída com as mais recentes tecnologias web, demonstrando habilidades em desenvolvimento front-end com React e Next.js.

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-000000?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat&logo=tailwind-css)

## 🚀 Sobre o Projeto

Este projeto é uma demonstração de uma loja virtual completa com:
- Catálogo de produtos dinâmico via API externa
- Carrinho de compras funcional com persistência em cookies
- Interface responsiva e moderna
- Server Components para performance otimizada

## 🛠️ Tecnologias

| Categoria | Tecnologia |
|-----------|------------|
| Framework | Next.js 16.2.2 (App Router) |
| Linguagem | TypeScript |
| UI | Tailwind CSS v4 |
| Ícones | Lucide React, React Icons |
| Utilitários | clsx, tailwind-merge |
| API | FakeStoreAPI |

### API Externa

O projeto utiliza a **FakeStoreAPI** (https://fakestoreapi.com) para fornecer dados reais de produtos e-commerce:

- **Endpoint**: `GET https://fakestoreapi.com/products`
- **Dados**: 20 produtos reais com imagens, títulos, preços e avaliações
- **Vantagem**: Dados realistas para testes e demonstrações

## 🎯 Features

- **Server-Side Rendering**: Dados carregados no servidor para melhor SEO e performance
- **Data Fetching Dinâmico**: `force-dynamic` para sempre buscar dados frescos
- **Carrinho de Compras**: Context API com persistência em cookies (30 dias)
- **Componentes Reutilizáveis**: Arquitetura modular com barrel exports
- **Imagens Otimizadas**: Next.js Image com lazy loading e domains permitidos
- **Design Responsivo**: Mobile-first com Tailwind CSS

## 📁 Estrutura do Projeto

```
test-catus/
├── app/
│   ├── components/
│   │   ├── home/          # Componentes da página inicial
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductCarousel.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ...
│   │   ├── layout/        # Header, Footer, Navigation
│   │   └── ui/            # Componentes genéricos (Button, Container)
│   ├── context/           # React Context (CartContext)
│   ├── lib/               # Utilitários e API
│   │   ├── api.ts         # fetchProducts()
│   │   ├── constants.ts   # Dados estáticos
│   │   └── utils.ts       # Helpers (formatPrice, etc.)
│   ├── types/             # Definições TypeScript
│   │   └── index.ts       # Product, ApiProduct, CartItem
│   ├── page.tsx           # Página principal
│   └── layout.tsx         # Root layout
├── next.config.ts         # Configurações Next.js
├── package.json           # Dependências
└── tailwind.config        # Configurações Tailwind
```

## 🏃‍♂️ Como Rodar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <repo-url>

# Entre no diretório
cd test-catus

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

### Produção

```bash
# Build da aplicação
npm run build

# Inicie em modo produção
npm start
```

### Linting

```bash
# Execute o linter
npm run lint
```

## 💡 Decisões Técnicas

1. **Server Components**: A página principal busca dados no servidor, evitando requests desnecessárias no cliente
2. **Props Drilling**: Dados da API passados via props para seguir o princípio DRY
3. **Polymorphic Types**: ProductCard aceita tanto `Product` (tipo local) quanto `ApiProduct` (tipo API)
4. **Cookies para Carrinho**: Persistência Client-side sem necessidade de backend
5. **Remote Patterns**: Imagens externas permitidas via next.config.ts

## 📄 Licença

Este projeto é para fins de demonstração e portfólio.
