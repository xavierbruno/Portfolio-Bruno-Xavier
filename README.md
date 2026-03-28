# 🚀 Professional Developer Portfolio - Monorepo

A modern, animated, and professional full-stack developer portfolio built with both **React** and **Vue**, sharing the same design system and content. Perfect for showcasing your skills and landing your dream job!

## ✨ Features

- 🎨 **Two Framework Versions**: React (Vite) and Vue (Vite) with identical features
- 🌗 **Dark Mode**: Elegant dark/light theme switching
- 🌍 **Internationalization**: Support for English, Portuguese, and Spanish
- 🎭 **Smooth Animations**: Powered by Framer Motion (React) and VueUse Motion (Vue)
- 📱 **Fully Responsive**: Mobile-first design approach
- 🧩 **Component Playground**: Interactive showcase of reusable components
- 📊 **Real Data Integration**: Pulls data from GitHub, LinkedIn, and Dev.to
- 🎯 **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- 🧪 **Testing Setup**: Configured with Vitest
- 🚀 **CI/CD Pipeline**: GitHub Actions for automated deployment
- 💅 **Tailwind CSS**: Modern utility-first styling

## 📦 Project Structure

```
portfolio-monorepo/
├── packages/
│   ├── shared/                 # Shared utilities, data, and design system
│   │   ├── src/
│   │   │   ├── data/          # Portfolio data and translations
│   │   │   ├── styles/        # Global styles and Tailwind config
│   │   │   ├── utils/         # Utility functions
│   │   │   └── types/         # TypeScript definitions
│   │   └── tailwind.config.js
│   │
│   ├── react-portfolio/        # React version
│   │   ├── src/
│   │   │   ├── components/    # React components
│   │   │   ├── pages/         # Page components
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   └── stores/        # Zustand stores
│   │   └── vite.config.ts
│   │
│   └── vue-portfolio/          # Vue version
│       ├── src/
│       │   ├── components/    # Vue components
│       │   ├── pages/         # Page components
│       │   ├── composables/   # Vue composables
│       │   └── stores/        # Pinia stores
│       └── vite.config.ts
│
├── .github/
│   └── workflows/             # GitHub Actions CI/CD
├── package.json               # Root package.json with workspace scripts
└── pnpm-workspace.yaml       # PNPM workspace configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PNPM 8+ (recommended) or NPM/Yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-monorepo.git
cd portfolio-monorepo
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Start development servers:

**Both versions simultaneously:**

```bash
pnpm dev
```

**React version only:**

```bash
pnpm dev:react
```

**Vue version only:**

```bash
pnpm dev:vue
```

### Available Scripts

| Script             | Description                          |
| ------------------ | ------------------------------------ |
| `pnpm dev`         | Start both React and Vue dev servers |
| `pnpm dev:react`   | Start React dev server (port 3000)   |
| `pnpm dev:vue`     | Start Vue dev server (port 3001)     |
| `pnpm build`       | Build all packages for production    |
| `pnpm build:react` | Build React version                  |
| `pnpm build:vue`   | Build Vue version                    |
| `pnpm test`        | Run tests for all packages           |
| `pnpm lint`        | Lint all packages                    |
| `pnpm format`      | Format code with Prettier            |

## 🎨 Customization

### 1. Personal Information

Edit the portfolio data in `packages/shared/src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... more fields
};
```

### 2. Projects

Add your projects in the same file:

```typescript
export const projects = [
  {
    title: 'Project Name',
    description: 'Short description',
    technologies: ['React', 'Node.js'],
    // ... more fields
  },
];
```

### 3. Theme Customization

Modify the Tailwind configuration in `packages/shared/tailwind.config.js` to change colors, fonts, and animations.

### 4. Translations

Add or modify translations in `packages/shared/src/data/translations.ts`.

## 📧 Contact Form Setup

The portfolio includes a contact form that can be integrated with email services:

### Option 1: EmailJS (Free tier available)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your credentials to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Option 2: Formspree (Free tier available)

1. Sign up at [Formspree](https://formspree.io/)
2. Create a form
3. Add your form endpoint to `.env`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## 🚀 Deployment

### Vercel (Recommended - Free)

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
# For React version
cd packages/react-portfolio
vercel

# For Vue version
cd packages/vue-portfolio
vercel
```

### Netlify (Free)

1. Build the project:

```bash
pnpm build
```

2. Deploy the `dist` folder from either `packages/react-portfolio` or `packages/vue-portfolio` to Netlify

### GitHub Pages (Free)

The repository includes GitHub Actions workflow for automatic deployment.

1. Enable GitHub Pages in your repository settings
2. Push to main branch to trigger deployment

## 🧪 Testing

Run tests with:

```bash
# All tests
pnpm test

# With coverage
pnpm test:coverage

# Watch mode
pnpm test:watch
```

## 📝 Component Playground

Both versions include an interactive component playground at `/playground` route showcasing:

- Buttons (variants, sizes, states)
- Input fields
- Cards
- Modals
- Loaders
- Alerts
- Form components

## 🌐 Blog Integration

The portfolio can fetch articles from Dev.to:

1. Replace the Dev.to username in the API calls
2. Articles will be automatically fetched and displayed

## 📱 Progressive Web App (PWA)

Both versions can be converted to PWA:

1. Add PWA plugin to Vite config
2. Generate manifest.json
3. Add service worker

## 🔒 Security

- All external links use `rel="noopener noreferrer"`
- Form validation on both client and server side
- Environment variables for sensitive data
- Content Security Policy headers configured

## 🎯 SEO Best Practices

- Semantic HTML structure
- Meta tags and Open Graph data
- Sitemap generation
- Structured data (JSON-LD)
- Fast loading times
- Image optimization

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this portfolio for your own projects!

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/) and [VueUse](https://vueuse.org/)

## 💬 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact via email
- Connect on LinkedIn

---

Built with ❤️ using React, Vue, and TypeScript
