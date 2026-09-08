import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from './I18nProvider';
import { localizePath } from './paths';

const LocalizedLink = ({ to, children, ...rest }) => {
  const { locale } = useI18n();
  return (
    <Link to={localizePath(to, locale)} {...rest}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
