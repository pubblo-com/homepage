import React, { createContext, useContext, useMemo } from 'react';
import { DEFAULT_LOCALE } from './config';
import { createTranslator } from './translate';

const I18nContext = createContext({
  locale: DEFAULT_LOCALE,
  t: (key) => key,
});

export function I18nProvider({ locale = DEFAULT_LOCALE, children }) {
  const value = useMemo(() => {
    const t = createTranslator(locale);
    return { locale, t };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
