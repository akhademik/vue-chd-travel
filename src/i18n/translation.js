import i18n from './i18n';
import { nextTick } from 'vue';

const Trans = {
  // get the value of default locale
  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE;
  },

  // get all the defined supported locales, split and turn into array
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',');
  },

  get currentLocale() {
    return i18n.global.locale.value;
  },

  // change the Language to the new selected language
  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },

  // async changing the language
  // and set locale to 'html lang'
  // and set locale to local Storage
  async switchLanguage(newLocale) {
    await Trans.loadLocaleMessages(newLocale);
    Trans.currentLocale = newLocale;
    document.querySelector('html').setAttribute('lang', newLocale);
    localStorage.setItem('chd-locale', newLocale);
  },

  async loadLocaleMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@i18n/locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, messages.default);
    }
    return nextTick();
  },

  // check if a locale is supported on website
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale);
  },

  // check to see if user have a preferred locale
  getUserLocale() {
    // nav.lang is lang on browser set
    // nav.userLang is lang on Control Panel detected from IE
    // or else use default setup lang on this website
    const locale =
      window.navigator.language ||
      window.navigator.userLanguage ||
      Trans.defaultLocale;

    return {
      locale: locale, //normal locale 'en' 'vn'
      localeNoRegion: locale.split('-')[0], //locale with 'en-US' etc
    };
  },

  // guess the locale to display for the first time visit website
  guessDefaultLocale() {
    // check if user visited website before and set the locale then use it
    const userSelectedLocale = Trans.getPersistedLocale();
    if (userSelectedLocale) return userSelectedLocale;

    // check if user have set preferred locale in their system then use it
    const userPreferredLocale = Trans.getUserLocale();
    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }

    // if none above have then set it to default of our website
    return Trans.defaultLocale;
  },

  // check localStorage for previous selected locale
  getPersistedLocale() {
    const prevSelected = localStorage.getItem('chd-locale');
    // check if the value is correct in supported languages
    if (Trans.isLocaleSupported(prevSelected)) {
      return prevSelected;
    } else {
      return null;
    }
  },

  // do before each time user change link/route
  async routeMiddleware(to, from, next) {
    // get the params when they navigate TO
    const paramLocale = to.params.locale;

    // if locale param is not supported change to default
    if (!Trans.isLocaleSupported(paramLocale)) {
      return next(Trans.guessDefaultLocale());
    }

    // if locale param is supported change the locale base on that
    await Trans.switchLanguage(paramLocale);
    return next();
  },

  i18nRoute(to) {
    return {
      ...to,
      params: { locale: Trans.currentLocale, ...to.params },
    };
  },
};

export default Trans;
