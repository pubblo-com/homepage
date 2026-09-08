import { DEFAULT_LOCALE, LOCALES } from './config';
import { SITE_URL } from '../constants/seo';

function getLocalePrefix(pathname) {
  if (!pathname) {
    return { locale: DEFAULT_LOCALE, barePath: '/' };
  }

  for (const [code, config] of Object.entries(LOCALES)) {
    const prefix = config.pathPrefix;
    if (!prefix) {
      continue;
    }

    if (pathname === prefix || pathname === `${prefix}/`) {
      return { locale: code, barePath: '/' };
    }

    if (pathname.startsWith(`${prefix}/`)) {
      return {
        locale: code,
        barePath: pathname.slice(prefix.length) || '/',
      };
    }
  }

  return { locale: DEFAULT_LOCALE, barePath: pathname };
}

/** Strip locale prefix; returns path starting with / */
export function stripLocalePrefix(pathname) {
  return getLocalePrefix(pathname).barePath;
}

export function getLocaleFromPathname(pathname) {
  return getLocalePrefix(pathname).locale;
}

export function localizePath(path, locale = DEFAULT_LOCALE) {
  const clean = stripLocalePrefix(path.split('?')[0]);
  const suffix = path.includes('?') ? path.slice(path.indexOf('?')) : '';
  const base = clean.startsWith('/') ? clean : `/${clean}`;

  if (locale === DEFAULT_LOCALE || !LOCALES[locale]) {
    return `${base === '/' ? '/' : base}${suffix}`;
  }

  const prefix = LOCALES[locale].pathPrefix;
  if (base === '/') {
    return `${prefix}${suffix}`;
  }
  return `${prefix}${base}${suffix}`;
}

export function getCanonicalUrl(path, locale = DEFAULT_LOCALE) {
  const localized = localizePath(path, locale);
  if (localized === '/') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${localized}`;
}

export function getHreflangUrls(path) {
  return Object.entries(LOCALES).map(([code]) => ({
    hreflang: code,
    href: getCanonicalUrl(path, code),
  }));
}

export function switchLocalePath(pathname, targetLocale) {
  const bare = stripLocalePrefix(pathname);
  return localizePath(bare, targetLocale);
}
