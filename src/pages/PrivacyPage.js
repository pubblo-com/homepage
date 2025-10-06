import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';

const Wrap = styled.main`
  padding: 120px ${spacing.xXLarge} 80px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const PrivacyPage = () => (
  <Wrap>
    <h1>Privacy Policy</h1>
    <p>
      This notice explains how we collect, use and protect personal data on the Pubblo website and in the
      Pubblo service (“Service”). We may update this policy from time to time.
    </p>
    <h2>What we collect</h2>
    <ul>
      <li>Account data (name, email, company) when you sign up for the Service.</li>
      <li>Content you upload (e.g., pitch materials) and usage logs.</li>
      <li>Website analytics (cookies) for performance and security.</li>
    </ul>
    <h2>How we use data</h2>
    <ul>
      <li>To provide and improve the Service, including support and security.</li>
      <li>To match creators and publishers when you choose to share your pitch.</li>
      <li>To communicate important updates and product information.</li>
    </ul>
    <h2>Sharing</h2>
    <p>
      We do not sell personal data. We share data with processors who help us operate the Service (hosting,
      analytics, email) under data‑processing agreements and only as necessary.
    </p>
    <h2>Retention</h2>
    <p>We keep data only as long as needed for the purposes above or as required by law.</p>
    <h2>Your choices</h2>
    <ul>
      <li>Control the visibility of your pitches (private link, publishers‑only, public).</li>
      <li>Request access, correction or deletion of your personal data.</li>
      <li>Opt out of non‑essential communications at any time.</li>
    </ul>
    <h2>Contact</h2>
    <p>For privacy questions, contact privacy@pubblo.com.</p>
  </Wrap>
);

export default PrivacyPage;


