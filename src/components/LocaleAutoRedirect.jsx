import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLocaleFromPathname, switchLocalePath } from '../i18n/paths';
import { getAutoRedirectTarget } from '../utils/localePreference';

const LocaleAutoRedirect = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const currentLocale = getLocaleFromPathname(pathname);
    const targetLocale = getAutoRedirectTarget(currentLocale);

    if (!targetLocale) {
      return;
    }

    const nextPath = `${switchLocalePath(pathname, targetLocale)}${search}${hash}`;

    if (nextPath !== `${pathname}${search}${hash}`) {
      navigate(nextPath, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return null;
};

export default LocaleAutoRedirect;
