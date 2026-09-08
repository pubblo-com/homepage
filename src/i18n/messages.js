import { en } from './locales/en/index.js';
import { de } from './locales/de/index.js';
import { fr } from './locales/fr/index.js';
import { es } from './locales/es/index.js';
import { DEFAULT_LOCALE } from './config';

const catalogs = { en, de, fr, es };

export function getMessages(locale) {
  return catalogs[locale] || catalogs[DEFAULT_LOCALE];
}

export function getFallbackMessages() {
  return catalogs[DEFAULT_LOCALE];
}
