import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }

  ul,
  ol {
    padding-left: ${spacing.large};
    margin-left: ${spacing.medium};
    margin-top: ${spacing.medium};
    margin-bottom: ${spacing.medium};
  }

  li {
    margin-left: ${spacing.small};
  }

  h3 {
    font-weight: 400;
  }

  h2 {
    margin-top: ${spacing.large};
  }
`;

const PrivacyPage = () => (
  <Wrap>
    <h1>Pubblo Privacy Policy</h1>
    <p><strong>Effective date:</strong> 16 October 2025</p>
    <p><strong>Company:</strong> Pubblo AB, Sweden</p>
    <p><strong>Contact:</strong> support@pubblo.com</p>

    <h2>1. Introduction</h2>
    <p>
      This Privacy Policy explains how Pubblo AB ("Pubblo", "we", "us", or "our") collects, uses, and protects
      personal data when you use the Pubblo platform ("Service"). We are committed to protecting your privacy and
      handling your data in accordance with the EU General Data Protection Regulation (GDPR) and applicable Swedish
      data protection laws. By using our Service, you consent to the practices described in this Privacy Policy.
    </p>

    <h2>2. Who We Are</h2>
    <p>
      Pubblo AB is the data controller responsible for the processing of your personal data under this Policy.
      Registered office: Pubblo AB, Storgatan 44, 903 26 Umeå, Sweden. Email: support@pubblo.com. If you have any
      questions about this Policy or how we handle your data, please contact us.
    </p>

    <h2>3. Information We Collect</h2>
    <h3>3.1 Information You Provide Directly</h3>
    <ul>
      <li>Account details: name, email address, password, and user role (designer, publisher, distributor).</li>
      <li>
        Profile information: biography, company name, website links, profile photo, and uploaded materials (for example
        game concepts, artwork, rules). We may also collect additional data such as date of birth, citizenship, and
        place of residence, etc.
      </li>
      <li>
        Subscription and billing information: payment method, billing address, and transaction history (processed
        securely by our payment provider Stripe).
      </li>
      <li>Communications: messages you send to other users or to our support team.</li>
    </ul>

    <h3>3.2 Information We Collect Automatically</h3>
    <ul>
      <li>Usage data: pages visited, features used, session duration, and clicks.</li>
      <li>Device and technical data: browser type, IP address, operating system, and device information.</li>
      <li>Cookies and similar technologies: used to provide essential platform functions and analytics (see section 9).</li>
    </ul>

    <h3>3.3 Information from Third Parties</h3>
    <p>We may receive limited information from:</p>
    <ul>
      <li>Payment processors for verification of successful payments.</li>
      <li>Analytics providers for aggregated, non-identifiable usage data.</li>
    </ul>

    <h2>4. How We Use Your Information</h2>
    <p>We use personal data to:</p>
    <ul>
      <li>Provide and operate the Pubblo platform.</li>
      <li>Authenticate users and maintain account security.</li>
      <li>Facilitate connections between publishers, designers, and distributors.</li>
      <li>Host and display user-uploaded materials as you choose (private or shared with others).</li>
      <li>Process payments and subscriptions.</li>
      <li>Provide customer support.</li>
      <li>Improve and personalize the Service through analytics and feedback.</li>
      <li>
        Contact you with information that may be of interest to you, such as newsletters, marketing, or other
        promotional materials. You may opt out of receiving such information by unsubscribing via the provided link.
      </li>
      <li>Comply with legal obligations.</li>
    </ul>

    <h2>5. Legal Bases for Processing</h2>
    <p>
      We process your personal data based on the following lawful grounds:
    </p>
    <p>
      You can withdraw consent at any time (for example, unsubscribing from marketing emails)
    </p>

    <h2>6. Sharing and Disclosure of Data</h2>
    <p>We do not sell or rent your personal data. We may share your information only with:</p>
    <ul>
      <li>Service providers who help us operate the platform (hosting, analytics, email delivery, payment processing).</li>
      <li>
        Other users, if you choose to share your content and profile with others,
        and if you choose to view other user’s content, these users will see what you have viewed, as well as your profile.
      </li>
      <li>Authorities, if required by law or to protect our rights and users' safety.</li>
    </ul>
    <p>
      All third-party processors are bound by data processing agreements and are required to handle your data securely
      and in compliance with GDPR.
    </p>

    <h2>7. International Data Transfers</h2>
    <p>
      Pubblo's servers are located within the European Union.
    </p>
     <p>If we transfer data outside the EU/EEA (e.g. to cloud providers),
      we ensure appropriate safeguards, such as EU Standard Contractual Clauses (SCCs) or equivalent legal mechanisms.
    </p>

    <h2>8. Data Retention</h2>
    <p>
      We retain your personal data only for as long as necessary to:
      <ul>
        <li>	provide our Service,</li>
        <li>	comply with legal obligations, or</li>
        <li>	resolve disputes and enforce our Terms.</li>
      </ul>
      When you delete your account, we remove or anonymize your personal data within 30 days, unless retention is required by law (e.g. accounting records).

    </p>

    <h2>9. Cookies and Tracking</h2>
    <p>Pubblo uses cookies and similar technologies for the following purposes:</p>
    <ul>
      <li>Essential cookies – required for login and account management.</li>
      <li>Analytics cookies – help us understand usage patterns (aggregated).</li>
      <li>Security cookies - used for security purposes. </li>
    </ul>
    <p>
      You can manage or disable cookies in your browser settings, but some parts of the Service may not function
      properly without them.
    </p>

    <h2>10. Your Rights Under GDPR</h2>
    <p>You have the following rights:</p>
    <ul>
      <li>Access: request a copy of your personal data.</li>
      <li>Rectification: request correction of inaccurate or incomplete data.</li>
      <li>Erasure ("Right to be Forgotten"): request deletion of your personal data.</li>
      <li>Restriction of Processing: ask us to limit data use in certain cases.</li>
      <li>Data Portability: request your data in a structured, machine-readable format.</li>
      <li>Objection: object to processing based on legitimate interest.</li>
      <li>Withdraw Consent: withdraw consent where processing is based on it.</li>
    </ul>
    <p>
      To exercise any of these rights, contact support@pubblo.com.
    </p>
    <p>
      We will respond within 30 days of your request.
    </p>

    <h2>11. Data Security</h2>
    <p>
      We apply industry-standard technical and organizational measures to protect your data from loss, misuse,
      unauthorized access, disclosure, or alteration. However, no system is completely secure, and you use the Service
      at your own risk.
    </p>

    <h2>12. Children's Privacy</h2>
    <p>
      Pubblo is not intended for individuals under 18 years of age, and minors are not permitted to create accounts. We
      do not knowingly collect personal data from minors. If we become aware that a child has provided us with personal
      information, we will delete it promptly.
    </p>

    <h2>13. Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy periodically. Material changes will be notified via email or on our website at
      least 14 days before they take effect. Your continued use of the Service after the update constitutes acceptance
      of the revised Policy.
    </p>

    <h2>14. Complaints</h2>
    <p>
      If you believe we have violated your data protection rights, you may contact us directly at support@pubblo.com or
      lodge a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY) or your
      local supervisory authority.
    </p>

    <h2>15. Contact</h2>
    <p>
      Pubblo AB<br />
      Storgatan 44<br />
      903 26 Umeå<br />
      Sweden
    </p>
    <p>Email: support@pubblo.com</p>
    <p>Registered in Sweden</p>
  </Wrap>
);

export default PrivacyPage;


