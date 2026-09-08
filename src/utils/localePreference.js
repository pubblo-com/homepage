const LOCALE_PREFERENCE_KEY = 'pubblo-locale';
const SUPPORTED_LOCALES = ['en', 'de', 'fr', 'es'];

export function getLocalePreference() {
  try {
    const value = localStorage.getItem(LOCALE_PREFERENCE_KEY);
    if (SUPPORTED_LOCALES.includes(value)) {
      return value;
    }
  } catch {
    // localStorage may be unavailable in private mode or blocked storage.
  }
  return null;
}

export function setLocalePreference(locale) {
  try {
    localStorage.setItem(LOCALE_PREFERENCE_KEY, locale);
  } catch {
    // Ignore write failures; navigation still switches locale for this visit.
  }
}

export function getBrowserPreferredLocale() {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  const languages = navigator.languages?.length
    ? [...navigator.languages]
    : [navigator.language].filter(Boolean);

  for (const lang of languages) {
    const code = String(lang).split('-')[0].toLowerCase();
    if (code === 'de' || code === 'fr' || code === 'es') {
      return code;
    }
    if (code === 'en') {
      return 'en';
    }
  }

  return 'en';
}

/**
 * Returns a locale code when the visitor should be redirected, otherwise null.
 * Manual preference always wins over browser detection.
 */
export function getAutoRedirectTarget(currentLocale) {
  const preference = getLocalePreference();

  if (preference) {
    return preference !== currentLocale ? preference : null;
  }

  const browserLocale = getBrowserPreferredLocale();
  if (currentLocale === 'en' && browserLocale !== 'en') {
    return browserLocale;
  }

  return null;
}
