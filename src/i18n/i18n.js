import { createI18n } from 'vue-i18n';
import en from '../i18n/locales/en.json';

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE, // default locale
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, //fallback locale
  legacy: false, // set to false to use composition i18n
  globalInjection: true, // to use $t('') globally
  messages: { en },
});

export default i18n;
