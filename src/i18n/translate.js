import { getFallbackMessages, getMessages } from './messages';

function getNested(obj, key) {
  return key.split('.').reduce((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return acc[part];
    }
    return undefined;
  }, obj);
}

export function createTranslator(locale) {
  const messages = getMessages(locale);
  const fallback = getFallbackMessages();

  const t = (key) => {
    const value = getNested(messages, key);
    if (value !== undefined) {
      return value;
    }
    const fallbackValue = getNested(fallback, key);
    if (fallbackValue !== undefined) {
      return fallbackValue;
    }
    return key;
  };

  return t;
}
