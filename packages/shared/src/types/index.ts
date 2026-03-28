export interface ComponentVariant {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  ghost: string;
  link: string;
}

export interface ComponentSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
}

export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  author?: string;
  url?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  validation?: (value: string) => string | null;
  options?: { label: string; value: string }[];
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
  duration?: number;
}
