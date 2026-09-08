import React from 'react';
import { useI18n } from '../i18n/I18nProvider';

const LoginPage = () => {
  const { t } = useI18n();

  return (
    <main style={{ padding: '80px 24px' }}>{t('components.login.placeholder')}</main>
  );
};

export default LoginPage;
