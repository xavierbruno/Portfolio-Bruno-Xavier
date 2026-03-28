import { createI18n } from 'vue-i18n';
import { translations } from '@portfolio/shared';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: translations.en,
    pt: translations.pt,
    es: translations.es,
  },
} as any);

export default i18n;
