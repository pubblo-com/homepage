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

const TermsPage = () => (
  <Wrap>
    <h1>Terms of Service</h1>
    <p>
      These terms govern your use of the Pubblo website and the Pubblo service (“Service”). By using the
      Service, you agree to these terms.
    </p>
    <h2>Accounts</h2>
    <p>You’re responsible for your account credentials and for any content you upload.</p>
    <h2>Content and rights</h2>
    <p>
      You retain all rights to your game ideas and materials. By uploading content, you grant Pubblo a limited
      license to host and display it to the parties you choose according to your sharing settings.
    </p>
    <h2>Acceptable use</h2>
    <p>No illegal content, spam or attempts to bypass access controls. We may suspend accounts that violate these terms.</p>
    <h2>Availability</h2>
    <p>We strive for high availability but do not guarantee uninterrupted service.</p>
    <h2>Liability</h2>
    <p>
      The Service is provided “as is”. To the maximum extent permitted by law, Pubblo is not liable for indirect
      or consequential damages.
    </p>
    <h2>Changes</h2>
    <p>We may update these terms. Continued use after changes constitutes acceptance.</p>
    <h2>Contact</h2>
    <p>For questions about these terms, contact legal@pubblo.com.</p>
  </Wrap>
);

export default TermsPage;


