import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import I18NextVue from 'i18next-vue';

i18next
  .use(HttpApi) // load translations files from other locations
  .use(LanguageDetector) // detect user language
  .init({
    //NOTE: declare 2 default namespace to prevent Error

    fallbackLng: 'en',
    debug: false,
    ns: ['homepage', 'tours', 'navbar'],
    defaultNS: 'homepage',
    backend: {
      //NOTE: Load path for the translation files
      loadPath: 'src/public/locales/{{lng}}/{{ns}}.json',
      // loadPath: () => {
      // 	// check the domain
      // 	const host = window.location.host;
      // 	return (host === 'chd-travel.pages.dev' ? '' : '') + '/locales/{{lng}}/{{ns}}.json';
      // },
    },
    detection: {
      order: [
        'localStorage',
        'cookie',
        'htmlTag',
        'querystring',
        'navigator',
        'path',
        'subdomain',
      ],
      caches: ['localStorage', 'cookie'],
    },
  });

export default function (app) {
  app.use(I18NextVue, { i18next });
  return app;
}
