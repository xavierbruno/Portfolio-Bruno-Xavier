export type Language = 'en' | 'pt' | 'es';

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    blog: string;
    contact: string;
    playground: string;
  };
  hero: {
    greeting: string;
    role: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    downloadResume: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
    technologies: string;
    featured: string;
    all: string;
    categories: {
      web: string;
      mobile: string;
      desktop: string;
      other: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    current: string;
    achievements: string;
    technologies: string;
  };
  education: {
    title: string;
    subtitle: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      tools: string;
      soft: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    minRead: string;
    publishedOn: string;
    viewOnDevTo: string;
    noPosts: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    social: string;
  };
  playground: {
    title: string;
    subtitle: string;
    components: {
      buttons: string;
      inputs: string;
      cards: string;
      modals: string;
      loaders: string;
      alerts: string;
    };
    props: string;
    preview: string;
    code: string;
    copy: string;
    copied: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
  common: {
    loading: string;
    error: string;
    retry: string;
    close: string;
    open: string;
    menu: string;
    darkMode: string;
    lightMode: string;
    language: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      blog: 'Blog',
      contact: 'Contact',
      playground: 'Components',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer & UI/UX Enthusiast',
      cta: {
        primary: 'View My Work',
        secondary: 'Download Resume',
      },
    },
    about: {
      title: 'About Me',
      subtitle: 'Passionate about creating digital experiences that matter',
      downloadResume: 'Download Resume',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Showcasing my latest work and experiments',
      viewProject: 'View Project',
      viewCode: 'View Code',
      technologies: 'Technologies',
      featured: 'Featured',
      all: 'All',
      categories: {
        web: 'Web',
        mobile: 'Mobile',
        desktop: 'Desktop',
        other: 'Other',
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey',
      current: 'Current',
      achievements: 'Key Achievements',
      technologies: 'Technologies Used',
    },
    education: {
      title: 'Education',
      subtitle: 'My academic background',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I work with',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools & DevOps',
        soft: 'Soft Skills',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts, tutorials, and insights',
      readMore: 'Read More',
      minRead: 'min read',
      publishedOn: 'Published on',
      viewOnDevTo: 'View on Dev.to',
      noPosts: 'No posts found.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's discuss your next project",
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
      social: 'Connect on Social Media',
    },
    playground: {
      title: 'Component Playground',
      subtitle: 'Interactive showcase of reusable components',
      components: {
        buttons: 'Buttons',
        inputs: 'Inputs',
        cards: 'Cards',
        modals: 'Modals',
        loaders: 'Loaders',
        alerts: 'Alerts',
      },
      props: 'Props',
      preview: 'Preview',
      code: 'Code',
      copy: 'Copy',
      copied: 'Copied!',
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
    },
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      retry: 'Try Again',
      close: 'Close',
      open: 'Open',
      menu: 'Menu',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      language: 'Language',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      skills: 'Habilidades',
      blog: 'Blog',
      contact: 'Contato',
      playground: 'Componentes',
    },
    hero: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor Full Stack & Entusiasta de UI/UX',
      cta: {
        primary: 'Ver Meu Trabalho',
        secondary: 'Baixar Currículo',
      },
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Apaixonado por criar experiências digitais que importam',
      downloadResume: 'Baixar Currículo',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Mostrando meus trabalhos e experimentos mais recentes',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      technologies: 'Tecnologias',
      featured: 'Destaque',
      all: 'Todos',
      categories: {
        web: 'Web',
        mobile: 'Mobile',
        desktop: 'Desktop',
        other: 'Outros',
      },
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Minha jornada profissional',
      current: 'Atual',
      achievements: 'Principais Conquistas',
      technologies: 'Tecnologias Utilizadas',
    },
    education: {
      title: 'Formação',
      subtitle: 'Minha formação acadêmica',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologias e ferramentas que trabalho',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Ferramentas & DevOps',
        soft: 'Habilidades Interpessoais',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Pensamentos, tutoriais e insights',
      readMore: 'Ler Mais',
      minRead: 'min de leitura',
      publishedOn: 'Publicado em',
      viewOnDevTo: 'Ver no Dev.to',
      noPosts: 'Nenhum post encontrado.',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos discutir seu próximo projeto',
      form: {
        name: 'Seu Nome',
        email: 'Seu Email',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso!',
        error: 'Falha ao enviar mensagem. Tente novamente.',
      },
      social: 'Conecte nas Redes Sociais',
    },
    playground: {
      title: 'Playground de Componentes',
      subtitle: 'Demonstração interativa de componentes reutilizáveis',
      components: {
        buttons: 'Botões',
        inputs: 'Inputs',
        cards: 'Cards',
        modals: 'Modais',
        loaders: 'Carregadores',
        alerts: 'Alertas',
      },
      props: 'Propriedades',
      preview: 'Visualização',
      code: 'Código',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    footer: {
      rights: 'Todos os direitos reservados',
      madeWith: 'Feito com',
    },
    common: {
      loading: 'Carregando...',
      error: 'Algo deu errado',
      retry: 'Tentar Novamente',
      close: 'Fechar',
      open: 'Abrir',
      menu: 'Menu',
      darkMode: 'Modo Escuro',
      lightMode: 'Modo Claro',
      language: 'Idioma',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca',
      projects: 'Proyectos',
      experience: 'Experiencia',
      skills: 'Habilidades',
      blog: 'Blog',
      contact: 'Contacto',
      playground: 'Componentes',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full Stack & Entusiasta de UI/UX',
      cta: {
        primary: 'Ver Mi Trabajo',
        secondary: 'Descargar CV',
      },
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Apasionado por crear experiencias digitales que importan',
      downloadResume: 'Descargar CV',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Mostrando mis trabajos y experimentos más recientes',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      technologies: 'Tecnologías',
      featured: 'Destacado',
      all: 'Todos',
      categories: {
        web: 'Web',
        mobile: 'Móvil',
        desktop: 'Escritorio',
        other: 'Otros',
      },
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Mi trayectoria profesional',
      current: 'Actual',
      achievements: 'Logros Clave',
      technologies: 'Tecnologías Utilizadas',
    },
    education: {
      title: 'Educación',
      subtitle: 'Mi formación académica',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y herramientas con las que trabajo',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Herramientas y DevOps',
        soft: 'Habilidades Blandas',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Pensamientos, tutoriales y conocimientos',
      readMore: 'Leer Más',
      minRead: 'min de lectura',
      publishedOn: 'Publicado el',
      viewOnDevTo: 'Ver en Dev.to',
      noPosts: 'No se encontraron posts.',
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle: 'Hablemos de tu próximo proyecto',
      form: {
        name: 'Tu Nombre',
        email: 'Tu Email',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado con éxito!',
        error: 'Error al enviar mensaje. Intenta de nuevo.',
      },
      social: 'Conéctate en Redes Sociales',
    },
    playground: {
      title: 'Playground de Componentes',
      subtitle: 'Muestra interactiva de componentes reutilizables',
      components: {
        buttons: 'Botones',
        inputs: 'Entradas',
        cards: 'Tarjetas',
        modals: 'Modales',
        loaders: 'Cargadores',
        alerts: 'Alertas',
      },
      props: 'Propiedades',
      preview: 'Vista Previa',
      code: 'Código',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con',
    },
    common: {
      loading: 'Cargando...',
      error: 'Algo salió mal',
      retry: 'Intentar de Nuevo',
      close: 'Cerrar',
      open: 'Abrir',
      menu: 'Menú',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
      language: 'Idioma',
    },
  },
};
