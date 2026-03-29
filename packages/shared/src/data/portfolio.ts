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
    title: 'Warehouse Schedule Manager',
    description: 'Full-stack work schedule management system for warehouse operations with JWT auth and PDF export.',
    longDescription:
      'A production-ready full-stack application for managing warehouse employee schedules. Features JWT authentication with role-based access (Operator / Supervisor), weekly AM/PM shift scheduling, automatic payment calculations, PDF export via jsPDF, and a fully Dockerized three-tier architecture (React → Express → PostgreSQL) with Nginx as reverse proxy.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Nginx', 'Vite'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
    githubUrl: 'https://github.com/xavierbruno/warehouse',
    featured: true,
    category: 'web',
  },
  {
    id: '2',
    title: 'Logistics BI Dashboard',
    description: 'Interactive front-end BI dashboard for logistics operations with Chart.js visualizations.',
    longDescription:
      'An operational intelligence dashboard for logistics companies built with pure HTML5, CSS3, and Chart.js. Displays KPIs such as total deliveries, damage rates, active routes, driver performance rankings, and customer satisfaction scores. Features a dark-themed UI with responsive grid layout and Pareto analysis charts.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    githubUrl: 'https://github.com/xavierbruno/logistic-dashboard',
    featured: true,
    category: 'web',
  },
  {
    id: '3',
    title: 'Warehouse BI — Data Analysis',
    description: 'Reusable Python/pandas pipeline that processes Excel data and auto-generates BI charts.',
    longDescription:
      'A reusable data analysis pipeline built in Python with pandas and Google Colab. By uploading an updated Excel file, the system automatically cleans, transforms, and generates charts, trends, and distribution insights — eliminating repetitive manual BI reporting work. Runs fully in the cloud with no local setup required.',
    technologies: ['Python', 'pandas', 'Google Colab', 'Jupyter Notebook'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    demoUrl: 'https://colab.research.google.com/drive/1j0wrD3BQTXpHbDAE1pf5krGmMtiDulzb?usp=sharing',
    githubUrl: 'https://github.com/xavierbruno/logistic_warehouse_BI',
    featured: true,
    category: 'other',
  },
  {
    id: '4',
    title: 'Developer Portfolio',
    description: 'Modern monorepo portfolio with React and Vue implementations, dark mode, and multilingual support.',
    longDescription:
      'A dual-framework portfolio monorepo implementing the same feature set in both React and Vue 3. Built with TypeScript, Tailwind CSS, Framer Motion, i18n (EN/PT/ES), dark/light theme, and contact form via Web3Forms. Deployed on Vercel with GitHub Actions CI/CD and structured as a PNPM workspace with a shared utilities package.',
    technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'PNPM'],
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800',
    demoUrl: 'https://portfolio-bruno-eight-nu.vercel.app/',
    githubUrl: 'https://github.com/xavierbruno/Portfolio-Bruno-Xavier',
    featured: false,
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
  { name: 'HTML/CSS', level: 92, category: 'frontend', icon: 'html' },
  { name: 'JavaScript', level: 87, category: 'frontend', icon: 'javascript' },
  { name: 'Vue.js', level: 85, category: 'frontend', icon: 'vue' },
  { name: 'React', level: 70, category: 'frontend', icon: 'react' },
  { name: 'TypeScript', level: 68, category: 'frontend', icon: 'typescript' },
  { name: 'Tailwind CSS', level: 60, category: 'frontend', icon: 'tailwind' },

  // Backend
  { name: 'Node.js', level: 62, category: 'backend', icon: 'nodejs' },
  { name: 'Express', level: 60, category: 'backend', icon: 'express' },
  { name: 'PostgreSQL', level: 60, category: 'backend', icon: 'postgresql' },
  { name: 'Python', level: 55, category: 'backend', icon: 'python' },

  // Tools
  { name: 'Git', level: 78, category: 'tools', icon: 'git' },
  { name: 'Figma', level: 73, category: 'tools', icon: 'figma' },
  { name: 'Jira / Scrum', level: 70, category: 'tools', icon: 'jira' },
  { name: 'Docker', level: 62, category: 'tools', icon: 'docker' },
  { name: 'Vite', level: 65, category: 'tools', icon: 'vite' },
  { name: 'WordPress', level: 62, category: 'tools', icon: 'wordpress' },

  // Soft Skills
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Self-learning', level: 88, category: 'soft' },
  { name: 'Communication', level: 82, category: 'soft' },
  { name: 'Team Work', level: 80, category: 'soft' },
  { name: 'Leadership', level: 75, category: 'soft' },
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
