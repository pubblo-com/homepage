import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/I18nProvider';
import { localizePath } from '../i18n/paths';

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}), (orientation: landscape) and (max-height: 480px) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h1`
  margin-bottom: ${spacing.large};
`;

const Lead = styled.p`
  font-size: 18px;
  line-height: 1.7;
`;

const TableOuter = styled.div`
  margin-top: ${spacing.xLarge};
  position: relative;
  @media (max-width: ${breakpoints.tablet}), (orientation: landscape) and (max-height: 480px) {
    &::after {
      content: '';
      position: absolute;
      inset: 0 0 0 auto;
      width: 24px;
      background: linear-gradient(to left, rgba(255,255,255,0.95), rgba(255,255,255,0));
      pointer-events: none;
    }
  }
`;

const TableScroll = styled.div`
  @media (max-width: ${breakpoints.tablet}), (orientation: landscape) and (max-height: 480px) {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: ${spacing.small};
    padding-right: ${spacing.small};

    &::-webkit-scrollbar { height: 8px; }
    &::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
    &::-webkit-scrollbar-thumb { background: ${colors.buttonBackground}; border-radius: 4px; }
    &::-webkit-scrollbar-thumb:hover { background: ${colors.buttonBackgroundHover}; }
  }
`;

const ScrollHint = styled.div`
  display: none;
  text-align: center;
  color: ${colors.buttonBackground};
  font-size: 14px;
  margin-bottom: ${spacing.small};
  font-weight: 600;

  @media (max-width: ${breakpoints.tablet}), (orientation: landscape) and (max-height: 480px) {
    display: block;
  }
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}), (orientation: landscape) and (max-height: 480px) {
    grid-template-columns: minmax(180px, max-content) repeat(5, max-content);
    width: max-content;
  }
`;

const Cell = styled.div`
  padding: ${spacing.medium};
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  background: ${(p) => (p.$head ? '#fafafa' : '#fff')};
  font-weight: ${(p) => (p.$head ? 700 : 400)};
  font-size: ${(p) => (p.$head ? '14px' : '13px')};
  text-align: ${(p) => (p.$center ? 'center' : 'left')};
  &:nth-child(-n+6) { border-top: 0; }

  @media (max-width: ${breakpoints.tablet}), (orientation: landscape) and (max-height: 480px) {
    padding: ${spacing.small} 12px;
    line-height: 1.4;
    min-width: 0;
    white-space: nowrap;
    &:nth-child(6n+1) { white-space: normal; }
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  color: ${colors.white};
  background: ${colors.buttonBackground};
  margin-left: 6px;
  line-height: 1;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;

const Pink = styled.span`
  color: ${colors.contrast};
  font-weight: 700;
`;

function highlightText(text, highlight) {
  if (!highlight || !text.includes(highlight)) return text;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <Pink>{highlight}</Pink>
      {after}
    </>
  );
}

const ComparePage = () => {
  const navigate = useNavigate();
  const { t, locale } = useI18n();
  const c = t('compare');

  const handleGoToLogin = () => {
    navigate(localizePath('/launch#/create-account/1-email-password', locale));
  };

  return (
    <>
      <SEOHead
        title={t('seo.pages.compare.title')}
        description={t('seo.pages.compare.description')}
        path='/compare'
      />
      <Wrap>
        <Title>{c.title}</Title>
        <Lead>
          {c.leadBefore} <Pink>{c.leadHighlight}</Pink> {c.leadAfter}
        </Lead>

        <ScrollHint>{c.scrollHint}</ScrollHint>
        <TableOuter>
          <TableScroll>
            <Table>
              {c.columns.map((col, i) => (
                <Cell key={col} $head $center={i === c.columns.length - 1}>
                  {col}
                  {i === c.columns.length - 1 && <Badge>{c.badge}</Badge>}
                </Cell>
              ))}

              {c.rows.map((row) => (
                <React.Fragment key={row.capability}>
                  <Cell>{row.capability}</Cell>
                  <Cell>{row.pitchDirectory}</Cell>
                  <Cell>{row.genericCrm}</Cell>
                  <Cell>{row.pitchMatchmaking}</Cell>
                  <Cell>{row.tradeFairs}</Cell>
                  <Cell>{highlightText(row.pubblo, row.pubbloHighlight)}</Cell>
                </React.Fragment>
              ))}
            </Table>
          </TableScroll>
        </TableOuter>

        <div style={{ marginTop: spacing.xXLarge, display: 'flex', gap: '16px' }}>
          <Button text={c.cta} onClick={handleGoToLogin} />
        </div>

        <div style={{ marginTop: spacing.xLarge }}>
          <h2>{c.safety.title}</h2>
          <p>
            {c.safety.bodyBefore} <Pink>{c.safety.bodyHighlight}</Pink>{' '}
            {c.safety.bodyAfter}
          </p>
        </div>
      </Wrap>
    </>
  );
};

export default ComparePage;
