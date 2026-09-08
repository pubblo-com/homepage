import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import Button from './Button';
import logo from '../assets/logo-pubblo.png';
import LocalizedLink from '../i18n/LocalizedLink';
import LocalizedNavLink from '../i18n/LocalizedNavLink';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../i18n/I18nProvider';

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: saturate(180%) blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px ${spacing.xXLarge};

  height: 72px;

  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px ${spacing.large};
  }
`;

const NavWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

const Brand = styled(LocalizedLink)`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.small};
  text-decoration: none;
`;

const Logo = styled.img`
  width: 100px;
`;

const Menu = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.large};
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 100%;
  &:hover > div[role='menu'] {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  border: 1px solid #eee;
  border-radius: 12px;
  padding: ${spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  min-width: 220px;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 160ms ease, transform 160ms ease;
  pointer-events: none;
  z-index: 1001;
`;

const MenuLink = styled(LocalizedNavLink)`
  color: ${(p) => (p.$highlight ? colors.contrast : colors.text)};
  text-decoration: none;
  font-weight: 500;
  padding-bottom: 6px;
  padding-top: 9px;
  border-bottom: 2px solid transparent;
  &.active {
    border-bottom-color: currentColor;
  }
`;

const Right = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.medium};

  @media (max-width: 600px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 8px;
  @media (max-width: 600px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const Burger = styled.span`
  width: 24px;
  height: 2px;
  background: ${colors.text};
  position: relative;
  display: inline-block;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 24px;
    height: 2px;
    background: ${colors.text};
  }
  &:before { top: -7px; }
  &:after { top: 7px; }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.98);
  backdrop-filter: saturate(180%) blur(8px);
  border-top: 1px solid #eee;
  padding: ${spacing.large};
  display: none;
  flex-direction: column;
  gap: ${spacing.medium};
  z-index: 999;
  @media (max-width: 600px) {
    display: ${(p) => (p.$open ? 'flex' : 'none')};
  }
`;

const MobileMenuLink = styled(LocalizedLink)`
  color: ${colors.text};
  text-decoration: none;
  font-weight: 600;
`;

const TopNav = ({ onCtaClick }) => {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const close = () => setOpen(false);

  return (
    <Bar>
      <NavWrap>
        <Brand to='/'>
          <Logo src={logo} alt='Pubblo' />
        </Brand>

        <Menu aria-label='Primary'>
          <MenuItem>
            <MenuLink to='/products' end>{t('nav.whatWeDo')}</MenuLink>
            <Dropdown role='menu' aria-label={t('nav.whatWeDo')}>
              <MenuLink to='/products'>{t('nav.overview')}</MenuLink>
              <MenuLink to='/portal'>{t('nav.portal')}</MenuLink>
              <MenuLink to='/marketplace'>{t('nav.marketplace')}</MenuLink>
              <MenuLink to='/pitch'>{t('nav.pitchTool')}</MenuLink>
              <MenuLink to='/users'>{t('nav.users')}</MenuLink>
              <MenuLink to='/pricing'>{t('nav.pricing')}</MenuLink>
              <MenuLink to='/compare'>{t('nav.compare')}</MenuLink>
              <MenuLink to='/faq'>{t('nav.faq')}</MenuLink>
            </Dropdown>
          </MenuItem>
          <MenuLink to='/about' end>{t('nav.about')}</MenuLink>
          <MenuLink to='/news' end>{t('nav.news')}</MenuLink>
          <MenuLink to='/contact' end>{t('nav.contact')}</MenuLink>
        </Menu>

        <Right>
          <LanguageSwitcher />
          <MenuLink to='/launch'>{t('nav.login')}</MenuLink>
          <Button text={t('nav.bookDemo')} onClick={onCtaClick} style={{ marginBottom: 0 }} />
        </Right>

        <ToggleButton aria-label={t('nav.openMenu')} onClick={() => setOpen((v) => !v)} style={{ marginBottom: 0, padding: spacing.small }}>
          <Burger />
        </ToggleButton>

        <MobileMenu $open={open}>
          <LanguageSwitcher variant='list' onSelect={close} />
          <MobileMenuLink to='/products' onClick={close}>{t('nav.whatWeDo')}</MobileMenuLink>
          <MobileMenuLink to='/portal' onClick={close}>— {t('nav.portal')}</MobileMenuLink>
          <MobileMenuLink to='/marketplace' onClick={close}>— {t('nav.marketplace')}</MobileMenuLink>
          <MobileMenuLink to='/pitch' onClick={close}>— {t('nav.pitchTool')}</MobileMenuLink>
          <MobileMenuLink to='/users' onClick={close}>— {t('nav.users')}</MobileMenuLink>
          <MobileMenuLink to='/pricing' onClick={close}>— {t('nav.pricing')}</MobileMenuLink>
          <MobileMenuLink to='/compare' onClick={close}>— {t('nav.compare')}</MobileMenuLink>
          <MobileMenuLink to='/faq' onClick={close}>— {t('nav.faq')}</MobileMenuLink>
          <MobileMenuLink to='/about' onClick={close}>{t('nav.about')}</MobileMenuLink>
          <MobileMenuLink to='/news' onClick={close}>{t('nav.news')}</MobileMenuLink>
          <MobileMenuLink to='/contact' onClick={close}>{t('nav.contact')}</MobileMenuLink>
          <MobileMenuLink to='/launch' onClick={close}>{t('nav.login')}</MobileMenuLink>
          <div>
            <Button text={t('nav.bookDemo')} onClick={() => { close(); onCtaClick(); }} />
          </div>
        </MobileMenu>
      </NavWrap>
    </Bar>
  );
};

export default TopNav;
