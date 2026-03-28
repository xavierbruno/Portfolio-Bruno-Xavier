# 🚀 Portfolio Setup Instructions

Este documento fornece instruções detalhadas para configurar e executar o projeto do portfólio.

## 📋 Pré-requisitos

- **Node.js** 18.0 ou superior
- **PNPM** 8.0 ou superior (recomendado) ou NPM/Yarn
- **Git** para controle de versão
- **VS Code** (recomendado) ou outro editor de código

## 🔧 Instalação

### 1. Instalar PNPM (se não tiver)

```bash
npm install -g pnpm
```

### 2. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/portfolio-monorepo.git
cd portfolio-monorepo
```

### 3. Instalar Dependências

```bash
pnpm install
```

Isso instalará todas as dependências para todos os pacotes no monorepo.

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento

**Executar ambas versões (React e Vue):**

```bash
pnpm dev
```

- React: http://localhost:3000
- Vue: http://localhost:3001

**Executar apenas React:**

```bash
pnpm dev:react
```

**Executar apenas Vue:**

```bash
pnpm dev:vue
```

### Build de Produção

**Build de todos os pacotes:**

```bash
pnpm build
```

**Build específico:**

```bash
pnpm build:react  # Apenas React
pnpm build:vue    # Apenas Vue
```

### Visualizar Build

```bash
pnpm preview:react  # Preview React
pnpm preview:vue    # Preview Vue
```

## ⚙️ Configuração de Serviços

### EmailJS (Para formulário de contato)

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)

2. Configure um serviço de email:
   - Dashboard → Email Services → Add New Service
   - Escolha seu provedor (Gmail, Outlook, etc)
   - Conecte sua conta

3. Crie um template:
   - Dashboard → Email Templates → Create New Template
   - Configure o template com as variáveis:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{subject}}`
     - `{{message}}`

4. Obtenha suas credenciais:
   - Service ID
   - Template ID
   - Public Key (em Account → API Keys)

5. Crie arquivos `.env.local` em cada projeto:

**packages/react-portfolio/.env.local:**

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

**packages/vue-portfolio/.env.local:**

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### Dev.to Integration (Para blog)

1. Acesse [Dev.to Settings](https://dev.to/settings/extensions)
2. Gere uma API Key
3. Adicione ao `.env.local`:

```env
VITE_DEVTO_API_KEY=sua_api_key
VITE_DEVTO_USERNAME=seu_username
```

## 🚀 Deploy

### Vercel (Recomendado)

#### Deploy Automático via GitHub

1. Faça push do código para GitHub
2. Acesse [Vercel](https://vercel.com)
3. Importe o projeto do GitHub
4. Configure:
   - Framework Preset: Vite
   - Root Directory: `packages/react-portfolio` ou `packages/vue-portfolio`
   - Build Command: `cd ../.. && pnpm install && pnpm build:react`
   - Output Directory: `dist`

#### Deploy Manual via CLI

1. Instale Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy React:

```bash
cd packages/react-portfolio
vercel
```

3. Deploy Vue:

```bash
cd packages/vue-portfolio
vercel
```

### Netlify

1. Build o projeto:

```bash
pnpm build
```

2. Faça deploy da pasta `dist`:
   - React: `packages/react-portfolio/dist`
   - Vue: `packages/vue-portfolio/dist`

3. Configure redirects criando `_redirects`:

```
/*    /index.html   200
```

### GitHub Pages

1. Adicione homepage no package.json:

```json
"homepage": "https://seu-usuario.github.io/portfolio"
```

2. Instale gh-pages:

```bash
pnpm add -D gh-pages
```

3. Adicione script de deploy:

```json
"deploy": "pnpm build && gh-pages -d dist"
```

4. Execute:

```bash
pnpm deploy
```

## 📝 Personalização

### 1. Informações Pessoais

Edite `packages/shared/src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: 'Seu Nome',
  title: 'Seu Título',
  email: 'seu.email@example.com',
  location: 'Sua Cidade, País',
  bio: 'Sua biografia completa...',
  // ... mais campos
};
```

### 2. Projetos

Adicione seus projetos no mesmo arquivo:

```typescript
export const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição breve',
    technologies: ['React', 'Node.js'],
    image: 'URL da imagem',
    demoUrl: 'Link da demo',
    githubUrl: 'Link do GitHub',
    // ... mais campos
  },
];
```

### 3. Experiências

```typescript
export const experiences = [
  {
    company: 'Nome da Empresa',
    position: 'Cargo',
    startDate: '2022-01',
    endDate: '', // vazio se for emprego atual
    current: true,
    description: 'Descrição do trabalho',
    achievements: ['Conquista 1', 'Conquista 2'],
    technologies: ['Tech 1', 'Tech 2'],
  },
];
```

### 4. Cores e Tema

Edite `packages/shared/tailwind.config.js` para customizar cores:

```javascript
colors: {
  primary: {
    // suas cores primárias
  },
  secondary: {
    // suas cores secundárias
  }
}
```

### 5. Traduções

Adicione ou modifique traduções em `packages/shared/src/data/translations.ts`.

## 🧪 Testes

### Executar Testes

```bash
# Todos os testes
pnpm test

# Modo watch
pnpm test:watch

# Com coverage
pnpm test:coverage

# UI para testes
pnpm test:ui
```

### Escrever Testes

Exemplo de teste para React (Vitest):

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## 🐛 Troubleshooting

### Erro: "Cannot find module '@portfolio/shared'"

```bash
# Rebuild o pacote compartilhado
pnpm --filter @portfolio/shared build
```

### Porta já em uso

Mude a porta no `vite.config.ts`:

```javascript
server: {
  port: 3002, // nova porta
}
```

### Problemas com cache

```bash
# Limpar cache do pnpm
pnpm store prune

# Reinstalar dependências
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build falhando no Vercel

Certifique-se de configurar:

- Root Directory correto
- Build Command: `cd ../.. && pnpm install && pnpm build:react`
- Install Command: `pnpm install`

## 📚 Recursos Úteis

- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://react.dev/)
- [Documentação do Vue](https://vuejs.org/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [Documentação do PNPM](https://pnpm.io/)

## 💬 Suporte

Se tiver problemas:

1. Verifique o [README.md](./README.md)
2. Procure nas [Issues do GitHub](https://github.com/seu-usuario/portfolio/issues)
3. Crie uma nova issue com detalhes do problema

## 🎉 Pronto!

Seu portfólio está configurado e pronto para uso. Personalize com suas informações e faça deploy para mostrar ao mundo seu trabalho incrível!

---

Feito com ❤️ usando React, Vue, e TypeScript
