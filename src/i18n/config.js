export const DEFAULT_LOCALE = 'en';

/** Locales with full or partial site translations */
export const LOCALES = {
  en: {
    label: 'English',
    short: 'EN',
    htmlLang: 'en',
    ogLocale: 'en_US',
    pathPrefix: '',
  },
  de: {
    label: 'Deutsch',
    short: 'DE',
    htmlLang: 'de',
    ogLocale: 'de_DE',
    pathPrefix: '/de',
  },
  fr: {
    label: 'Français',
    short: 'FR',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    pathPrefix: '/fr',
  },
  es: {
    label: 'Español',
    short: 'ES',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    pathPrefix: '/es',
  },
};

export const LOCALE_CODES = Object.keys(LOCALES);

export function isLocale(code) {
  return LOCALE_CODES.includes(code);
}
