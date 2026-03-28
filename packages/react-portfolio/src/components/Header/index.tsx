import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@portfolio/shared';
import { useThemeStore } from '@/stores/themeStore';
import Button from '../ui/Button';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/#hero', label: t('nav.home') },
    { path: '/#about', label: t('nav.about') },
    { path: '/#projects', label: t('nav.projects') },
    { path: '/#experience', label: t('nav.experience') },
    { path: '/#skills', label: t('nav.skills') },
    { path: '/#blog', label: t('nav.blog') },
    { path: '/#contact', label: t('nav.contact') },
    { path: '/playground', label: t('nav.playground') },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const elementId = path.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-4' : 'bg-transparent py-6',
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold gradient-text"
            onClick={() => handleNavClick('/#hero')}
          >
            BX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
                  location.pathname === item.path && 'text-primary-600 dark:text-primary-400',
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative group">
              <Button variant="ghost" size="sm" className="p-2">
                <Globe className="w-5 h-5" />
              </Button>
              <div className="absolute right-0 mt-2 py-2 w-40 bg-white dark:bg-dark-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={cn(
                      'block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700',
                      i18n.language === lang.code && 'bg-gray-100 dark:bg-dark-700',
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="overflow-hidden lg:hidden"
        >
          <div className="pt-4 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
