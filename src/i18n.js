import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false, // set to false to use composition i18n
  globalInjection: true, // to use $t('') globally
  messages: {
    //messages are translation data
    en: {
      title: 'Hellow World',
    },
    vn: {
      title: 'Xin Chao {name}',
    },
  },
});

export default i18n;
