export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'other';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  icon?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  url?: string;
  devToUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  endDate: string;
  url?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  shortBio: string;
  avatar: string;
  resume?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    codepen?: string;
    devto?: string;
    instagram?: string;
    youtube?: string;
  };
}

// Portfolio Data
export const personalInfo: PersonalInfo = {
  name: 'Bruno Xavier',
  title: 'Front-end Developer',
  email: 'brunovx6@gmail.com',
  phone: '+5521997064277',
  location: 'Rio de Janeiro, Brazil',
  bio: 'Skilled professional with 5+ years of experience in software development, with a focus on front-end, working on prototyping services, layout creation, screen development, and integration with APIs or databases. Some of my interpersonal skills include being proactive, organized, having strong communication skills, and maintaining empathetic relationships with clients.',
  shortBio: 'Front-end Developer with 5+ years of experience.',
  avatar: 'https://avatars.githubusercontent.com/u/placeholder',
  resume: '/resume.pdf',
  social: {
    github: 'https://github.com/xavierbruno',
    linkedin: 'https://www.linkedin.com/in/brunovx6/',
    instagram: 'https://www.instagram.com/brunoxavier6/',
    codepen: 'https://codepen.io/xavierbruno',
    devto: 'https://dev.to/xavierbruno',
  },
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory management',
    longDescription:
      'A comprehensive e-commerce platform built with Next.js and Node.js, featuring real-time inventory management, payment processing with Stripe, and an admin dashboard for analytics and order management.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/xavierbruno/ecommerce-platform',
    featured: true,
    category: 'web',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    longDescription:
      'A Trello-inspired task management application with drag-and-drop functionality, real-time collaboration using WebSockets, and integration with popular tools like Slack and GitHub.',
    technologies: ['Vue 3', 'Vuex', 'Socket.io', 'Express', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    demoUrl: 'https://demo-taskapp.example.com',
    githubUrl: 'https://github.com/xavierbruno/task-manager',
    featured: true,
    category: 'web',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with forecasting and alerts',
    longDescription:
      'A responsive weather dashboard that provides real-time weather data, 7-day forecasts, interactive maps, and customizable weather alerts using OpenWeather API.',
    technologies: ['React', 'Redux Toolkit', 'Chart.js', 'Mapbox GL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
    demoUrl: 'https://demo-weather.example.com',
    githubUrl: 'https://github.com/xavierbruno/weather-dashboard',
    featured: false,
    category: 'web',
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media performance tracking',
    longDescription:
      'A comprehensive analytics platform that aggregates data from multiple social media platforms, providing insights, trends analysis, and automated reporting features.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Celery'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    demoUrl: 'https://demo-analytics.example.com',
    featured: true,
    category: 'web',
  },
  {
    id: '5',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    longDescription:
      'A React Native mobile application for banking services featuring biometric authentication, QR code payments, expense tracking, and real-time notifications.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
    githubUrl: 'https://github.com/xavierbruno/mobile-banking',
    featured: false,
    category: 'mobile',
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool for marketers',
    longDescription:
      "An innovative content generation platform using OpenAI's GPT models to create marketing copy, blog posts, and social media content with customizable tone and style.",
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    demoUrl: 'https://demo-ai-content.example.com',
    featured: true,
    category: 'web',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Oliveira Trust',
    position: 'Front-end Developer',
    location: 'Brazil',
    startDate: '2020-09',
    endDate: '2024-08',
    current: false,
    description:
      "I worked on developing applications for the company itself as well as for its clients, mainly through web platforms, using the Vue.js framework in most projects in addition to HTML, CSS, and TypeScript. I was also responsible for creating and maintaining the company's website using the WordPress platform. Additionally, I contributed to the development of prototypes and wireframes, using Figma. I collaborated in a team environment following an adapted SCRUM methodology, with weekly sprints and daily meetings. For task management, we used Jira. As a version creator, we used Git.",
    achievements: [],
    technologies: ['Vue.js', 'HTML', 'CSS', 'TypeScript', 'WordPress', 'Figma', 'Jira', 'Git'],
  },
  {
    id: '2',
    company: 'In Junior',
    position: 'Front-end Web developer',
    location: 'Brazil',
    startDate: '2018-01',
    endDate: '2020-09',
    current: false,
    description:
      'I worked as a Front-End Developer on six projects for the company, using HTML, CSS, JavaScript, and Figma. I worked on projects such as the refactoring of the company’s website, internal system projects for the university, and projects for creating websites and systems for clients.',
    achievements: [],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
  {
    id: '3',
    company: 'In Junior',
    position: 'Product Owner and Project Management Office',
    location: 'Brazil',
    startDate: '2019-05',
    endDate: '2020-09',
    current: false,
    description:
      'Out of the 23 projects got new clients by the company in 2018, I managed 2 projects. Applied SCRUM methodology: weekly client meetings, task delegation, and developer team coordination. This role helped me develop skills in tracking and delegating team tasks, successfully completing these projects ahead of schedule.',
    achievements: [],
    technologies: ['SCRUM'],
  },
  {
    id: '4',
    company: 'Cooperation Center for the Development of Infancy and Adolescence – CCDIA (NGO)',
    position: 'Voluntary teacher',
    location: 'Brazil',
    startDate: '2001-01',
    endDate: '2002-12',
    current: false,
    description:
      'At CCDIA, I gave classes on Microsoft Windows, Word, and PowerPoint for children and adolescents in need, and also helped manage a network of 16 Windows computers.',
    achievements: [],
    technologies: ['Microsoft Windows', 'Word', 'PowerPoint'],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend', icon: 'react' },
  { name: 'Vue.js', level: 90, category: 'frontend', icon: 'vue' },
  { name: 'TypeScript', level: 88, category: 'frontend', icon: 'typescript' },
  { name: 'JavaScript', level: 95, category: 'frontend', icon: 'javascript' },
  { name: 'HTML/CSS', level: 95, category: 'frontend', icon: 'html' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: 'tailwind' },
  { name: 'Next.js', level: 85, category: 'frontend', icon: 'nextjs' },
  { name: 'Nuxt.js', level: 80, category: 'frontend', icon: 'nuxt' },

  // Backend
  { name: 'Node.js', level: 88, category: 'backend', icon: 'nodejs' },
  { name: 'Express', level: 85, category: 'backend', icon: 'express' },
  { name: 'Python', level: 75, category: 'backend', icon: 'python' },
  { name: 'PostgreSQL', level: 82, category: 'backend', icon: 'postgresql' },
  { name: 'MongoDB', level: 80, category: 'backend', icon: 'mongodb' },
  { name: 'GraphQL', level: 78, category: 'backend', icon: 'graphql' },
  { name: 'Redis', level: 75, category: 'backend', icon: 'redis' },

  // Tools
  { name: 'Git', level: 90, category: 'tools', icon: 'git' },
  { name: 'Docker', level: 82, category: 'tools', icon: 'docker' },
  { name: 'AWS', level: 78, category: 'tools', icon: 'aws' },
  { name: 'CI/CD', level: 85, category: 'tools', icon: 'cicd' },
  { name: 'Jest/Vitest', level: 88, category: 'tools', icon: 'jest' },
  { name: 'Webpack/Vite', level: 85, category: 'tools', icon: 'webpack' },

  // Soft Skills
  { name: 'Leadership', level: 85, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Problem Solving', level: 92, category: 'soft' },
  { name: 'Team Work', level: 88, category: 'soft' },
  { name: 'Time Management', level: 85, category: 'soft' },
  { name: 'Mentoring', level: 82, category: 'soft' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with Clean Architecture',
    excerpt:
      'Learn how to structure your React applications for maximum scalability and maintainability using clean architecture principles.',
    content: 'Full article content here...',
    date: '2024-03-15',
    readTime: 8,
    tags: ['React', 'Architecture', 'Best Practices'],
    devToUrl: 'https://dev.to/xavierbruno/building-scalable-react-apps',
  },
  {
    id: '2',
    title: 'Mastering Vue 3 Composition API: A Practical Guide',
    excerpt:
      "Dive deep into Vue 3's Composition API with practical examples and best practices for building modern applications.",
    content: 'Full article content here...',
    date: '2024-03-01',
    readTime: 10,
    tags: ['Vue', 'Composition API', 'Tutorial'],
    devToUrl: 'https://dev.to/xavierbruno/vue3-composition-api-guide',
  },
  {
    id: '3',
    title: 'Optimizing Web Performance: From Theory to Practice',
    excerpt:
      "A comprehensive guide to web performance optimization techniques that can dramatically improve your site's speed.",
    content: 'Full article content here...',
    date: '2024-02-20',
    readTime: 12,
    tags: ['Performance', 'Optimization', 'Web Development'],
    devToUrl: 'https://dev.to/xavierbruno/web-performance-optimization',
  },
  {
    id: '4',
    title: "Docker for Frontend Developers: A Beginner's Guide",
    excerpt:
      "Understanding Docker and containerization from a frontend developer's perspective with practical examples.",
    content: 'Full article content here...',
    date: '2024-02-10',
    readTime: 7,
    tags: ['Docker', 'DevOps', 'Frontend'],
    devToUrl: 'https://dev.to/xavierbruno/docker-for-frontend',
  },
  {
    id: '5',
    title: 'State Management in 2024: Comparing Redux, Zustand, and Pinia',
    excerpt:
      'An in-depth comparison of modern state management solutions for React and Vue applications.',
    content: 'Full article content here...',
    date: '2024-01-25',
    readTime: 15,
    tags: ['State Management', 'React', 'Vue'],
    devToUrl: 'https://dev.to/xavierbruno/state-management-2024',
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Federal Fluminense University',
    degree: 'Bachelor of Information Systems',
    endDate: 'Dec/2025',
    url: 'www.uff.br',
  },
  {
    id: '2',
    institution: 'Estácio de Sá University',
    degree: 'Bachelor of Electrical Engineering',
    endDate: 'Dec/2020',
    url: 'www.estacio.br',
  },
];
