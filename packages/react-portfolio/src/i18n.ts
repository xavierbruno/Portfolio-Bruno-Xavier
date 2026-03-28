import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from '@portfolio/shared';

const resources = {
  en: { translation: translations.en },
  pt: { translation: translations.pt },
  es: { translation: translations.es },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
