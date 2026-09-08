import React from 'react';
import { NavLink } from 'react-router-dom';
import { useI18n } from './I18nProvider';
import { localizePath } from './paths';

const LocalizedNavLink = ({ to, children, ...rest }) => {
  const { locale } = useI18n();
  return (
    <NavLink to={localizePath(to, locale)} {...rest}>
      {children}
    </NavLink>
  );
};

export default LocalizedNavLink;
