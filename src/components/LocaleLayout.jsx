import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { I18nProvider } from '../i18n/I18nProvider';
import { getLocaleFromPathname } from '../i18n/paths';

const LocaleLayout = () => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPathname(pathname);

  return (
    <I18nProvider locale={locale}>
      <Outlet />
    </I18nProvider>
  );
};

export default LocaleLayout;
