import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LandingPageLayout from '../components/LandingPageLayout';
import { stripLocalePrefix } from '../i18n/paths';
import { getLocalizedLandingPage } from '../i18n/localizedContent';
import { useI18n } from '../i18n/I18nProvider';

const AdLandingPage = () => {
  const { pathname } = useLocation();
  const { t } = useI18n();
  const slug = stripLocalePrefix(pathname).replace(/^\//, '');
  const page = getLocalizedLandingPage(slug, t);

  if (!page) {
    return <Navigate to='/' replace />;
  }

  return <LandingPageLayout page={page} />;
};

export default AdLandingPage;
