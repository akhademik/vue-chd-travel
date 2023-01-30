import { createI18n } from 'vue-i18n';
// import messages from '@intlify/unplugin-vue-i18n/messages';
import en from '../i18n/locales/en.json';
import vn from '../i18n/locales/vn.json';
import fr from '../i18n/locales/fr.json';

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE, // default locale
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, //fallback locale
  legacy: false, // set to false to use composition i18n
  globalInjection: true, // to use $t('') globally
  messages: { en, vn, fr },
});

export default i18n;
