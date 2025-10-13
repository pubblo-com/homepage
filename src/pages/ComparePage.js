import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';

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

// Outer wrapper hosts the stationary gradient overlay
const TableOuter = styled.div`
  margin-top: ${spacing.xLarge};
  position: relative;
  @media (max-width: ${breakpoints.tablet}), (orientation: landscape) and (max-height: 480px) {
    &::after {
      content: '';
      position: absolute;
      inset: 0 0 0 auto; /* ensure full height, right side */
      width: 24px;
      background: linear-gradient(to left, rgba(255,255,255,0.95), rgba(255,255,255,0));
      pointer-events: none;
    }
  }
`;

// Scrollable inner container so the gradient does not move with content
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
    /* Make columns only as wide as their content and allow horizontal overflow */
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
  /* first row */
  &:nth-child(-n+6) { border-top: 0; }

  @media (max-width: ${breakpoints.tablet}), (orientation: landscape) and (max-height: 480px) {
    padding: ${spacing.small} 12px;
    line-height: 1.4;
    min-width: 0; /* allow shrinking to content */
    white-space: nowrap; /* default: keep compact */
    
    /* Allow first column to wrap for readability */
    &:nth-child(6n+1) {
      white-space: normal;
    }
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

const ComparePage = () => {
  const navigate = useNavigate();
  const handleGoToLogin = () => {
    navigate('/launch#/create-account/1-email-password');
  };

  return (
    <Wrap>
      <Title>Pubblo vs. pitch directories, matchmaking, trade fairs and generic CRMs</Title>
      <Lead>
        Pubblo is a <Pink>Deal engine</Pink> for board‑game licensing. Where pitch directories stop at listing,
        Pubblo adds a CRM‑grade workflow: preferences, auto‑scoring, team review and status – for publishers –
        and decision‑ready portfolio pages for creators.
      </Lead>

      <ScrollHint>← Swipe to compare →</ScrollHint>
      <TableOuter>
        <TableScroll>
          <Table>
        <Cell $head>Capability</Cell>
        <Cell $head>Pitch directory</Cell>
        <Cell $head>Generic CRM</Cell>
        <Cell $head>Pitch matchmaking</Cell>
        <Cell $head>Trade fairs</Cell>
        <Cell $head $center>Pubblo <Badge>Deal engine</Badge></Cell>

        <Cell>Submission intake</Cell>
        <Cell>Manual forms / e‑mail</Cell>
        <Cell>Requires custom mapping</Cell>
        <Cell>Sign‑up + meeting facilitation</Cell>
        <Cell>Meetings scheduled on site</Cell>
        <Cell>Standardized pitch format with <Pink>creator templates</Pink></Cell>

        <Cell>Buyer preferences & matching</Cell>
        <Cell>Basic filters</Cell>
        <Cell>Not native</Cell>
        <Cell>Manual matching by facilitators</Cell>
        <Cell>—</Cell>
        <Cell>Preferences + <Pink>auto‑score</Pink> to reduce noise</Cell>

        <Cell>Team review & comments</Cell>
        <Cell>Not native</Cell>
        <Cell>Generic notes</Cell>
        <Cell>Not provided</Cell>
        <Cell>Not provided</Cell>
        <Cell><Pink>Assign</Pink>, comment and track status</Cell>

        <Cell>Status pipeline</Cell>
        <Cell>Not available</Cell>
        <Cell>Custom setup</Cell>
        <Cell>Not provided</Cell>
        <Cell>Not provided</Cell>
        <Cell>Built‑in pipeline for <Pink>go / no‑go</Pink></Cell>

        <Cell>Portfolio → decision‑ready pitch</Cell>
        <Cell>Not available</Cell>
        <Cell>Manual document work</Cell>
        <Cell>Not standardized</Cell>
        <Cell>Decks/rulebooks handed over in person</Cell>
        <Cell>Generate <Pink>Pubblo‑ready</Pink> pitch from portfolio in one click</Cell>

        <Cell>Outreach / agency option</Cell>
        <Cell>—</Cell>
        <Cell>—</Cell>
        <Cell>Facilitation of meetings only</Cell>
        <Cell>—</Cell>
        <Cell>Optional Pubblo <Pink>Agency</Pink> for targeted partner outreach</Cell>
          </Table>
        </TableScroll>
      </TableOuter>

      <div style={{ marginTop: spacing.xXLarge, display: 'flex', gap: '16px' }}>
        <Button text='Start free trial' onClick={handleGoToLogin} />
        <Button text='Start free trial' variant='contrast' onClick={handleGoToLogin} />
      </div>

      <div style={{ marginTop: spacing.xLarge }}>
        <h2>Why digital is safer for your ideas</h2>
        <p>
          A common concern is idea theft. With Pubblo, every view is <Pink>tracked</Pink> – you can see which
          publishers accessed your materials (e.g. rulebook) and when. At trade fairs, hand‑overs and meetings are
          hard to audit after the fact; in Pubblo, access is controlled and logged, giving creators more
          transparency and a stronger paper trail.
        </p>
      </div>
    </Wrap>
  );
};

export default ComparePage;



