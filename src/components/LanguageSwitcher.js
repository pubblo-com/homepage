import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { colors, spacing } from '../styles/tokens';
import { LOCALE_CODES, LOCALES } from '../i18n/config';
import { switchLocalePath } from '../i18n/paths';
import { setLocalePreference } from '../utils/localePreference';
import { useI18n } from '../i18n/I18nProvider';

const Wrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const Trigger = styled.button`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font: inherit;
  font-weight: 500;
  line-height: 1.5;
  color: ${colors.text};
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 9px 8px 6px;
  margin: 0;
  border-radius: 6px;
  cursor: pointer;
  appearance: none;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);

  &:hover,
  &[aria-expanded='true'] {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.24);
  }
`;

const Chevron = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid ${colors.text};
  opacity: 0.7;
  transform: ${(p) => (p.$open ? 'rotate(180deg)' : 'none')};
  transition: transform 160ms ease;
  align-self: center;
  margin-bottom: 2px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
  border-radius: 12px;
  padding: ${spacing.small};
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 1002;
`;

const LangOption = styled(Link)`
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: ${colors.text};
  font-size: 14px;
  font-weight: ${(p) => (p.$active ? 700 : 500)};
  background: ${(p) => (p.$active ? 'rgba(249, 81, 96, 0.08)' : 'transparent')};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MobileLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.65;
  margin-bottom: 4px;
`;

const LanguageSwitcher = ({ variant = 'dropdown', onSelect }) => {
  const { locale, t } = useI18n();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleClickOutside = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const handleSelect = (code) => {
    setLocalePreference(code);
    setOpen(false);
    onSelect?.();
  };

  if (variant === 'list') {
    return (
      <MobileList>
        <MobileLabel>{t('nav.language')}</MobileLabel>
        {LOCALE_CODES.map((code) => (
          <LangOption
            key={code}
            to={switchLocalePath(pathname, code)}
            $active={code === locale}
            onClick={() => handleSelect(code)}
          >
            {LOCALES[code].label}
          </LangOption>
        ))}
      </MobileList>
    );
  }

  return (
    <Wrap ref={wrapRef}>
      <Trigger
        type='button'
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-label={t('nav.language')}
        onClick={() => setOpen((value) => !value)}
      >
        {LOCALES[locale]?.short || locale.toUpperCase()}
        <Chevron $open={open} aria-hidden />
      </Trigger>
      {open && (
        <Dropdown role='listbox' aria-label={t('nav.language')}>
          {LOCALE_CODES.map((code) => (
            <LangOption
              key={code}
              role='option'
              aria-selected={code === locale}
              to={switchLocalePath(pathname, code)}
              $active={code === locale}
              onClick={() => handleSelect(code)}
            >
              {LOCALES[code].label}
            </LangOption>
          ))}
        </Dropdown>
      )}
    </Wrap>
  );
};

export default LanguageSwitcher;
