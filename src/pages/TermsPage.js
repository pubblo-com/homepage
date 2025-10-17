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

  h4 {
    font-weight: 400;
    margin-top: ${spacing.medium};
  }

  h2 {
    margin-top: ${spacing.large};
  }
`;

const TermsPage = () => (
  <Wrap>
    <h1>Pubblo Terms &amp; Conditions</h1>
    <p><strong>Effective date:</strong> 16 October 2025</p>
    <p><strong>Company:</strong> Pubblo AB, Sweden</p>
    <p><strong>Contact:</strong> support@pubblo.com</p>

    <h2>1. Introduction</h2>
    <p>
      These Terms and Conditions ("Terms") govern your access to and use of the Pubblo platform ("Service"), operated
      by Pubblo AB, a company registered in Sweden ("Pubblo", "we", "us", or "our"). By creating an account or otherwise
      using the Service, you agree to be bound by these Terms, together with our Privacy Policy. If you do not agree, do
      not use the Service.
    </p>

    <h2>2. The Service</h2>
    <p>
      Pubblo is a digital platform for portfolio management and portfolio development in the board game industry,
      designed to connect users such as board game publishers, distributors, and designers ("Customers" or "Users").
    </p>
    <p>
      Users can:
      <ul>
        <li>create profiles,</li>
        <li>upload and display board game material (rules, images, descriptive texts, etc),</li>
        <li>view material submitted or otherwise made available to them, and</li>
        <li>communicate with other users.</li>
      </ul>
    </p>
    <p>
      Users may only use the Service within scope of what it is provided for, under these Terms, and applicable laws and
      regulations. Users are solely responsible for ensuring their use of the Service does not violate any applicable
      laws, regulations, or third-party rights. Pubblo does not act as a contracting party between users. All
      interactions and agreements between users occur independently of Pubblo, unless clearly expressed otherwise.
    </p>

    <h2>3. Accounts and Eligibility</h2>
    <ul>
      <li>You must be at least 18 years old to use the Service and have the authority to follow these Terms.</li>
      <li>You are responsible for maintaining the confidentiality of your login credentials and all activity under your account.</li>
      <li>You must be authorized by the company you represent to create a company account.</li>
      <li>Your company, if any, must be able to present formal company registration data and be active in the board game industry.</li>
      <li>Pubblo may suspend or terminate your account if you breach these Terms or misuse the Service.</li>
    </ul>

    <h2>4. Acceptable Use Policy</h2>
    <p>As previously stated, the Service may only be used in accordance with laws and regulations, and these Terms. If you do not agree, do not use the Service.
      By creating an account or otherwise using the Service, you agree not to:
      <ul>
        <li>Use the Service in any way that violates any applicable national or international laws and regulations</li>
        <li>Impersonate any other person or any entity which you have no authority to represent</li>
        <li>Upload or share unlawful, offensive, or infringing material</li>
        <li>Use profane language or otherwise act offensively, threatening and harmful, neither in any uploaded material nor in any communication on the platform</li>
        <li>Use the Service for unsolicited advertising and spam</li>
        <li>Externally share material you have received in a submission directed specifically to you</li>
        <li>Use the Service in any way that may harm it, exemplified by but not limited to:</li>
          <ul>
            <li>Activities that could disable, overburden, damage, or impair the Service or interfere with any other party’s use of the Service</li>
            <li>Using automatic tools for accessing the Service for any purpose, e.g. collecting data</li>
            <li>Accessing or copying any material on the Service without authority or prior written consent</li>
            <li>Using any device, software, or routine that interferes with the operations of the Service, or otherwise try to impair the proper working of the Service</li>
            <li>Uploading or otherwise introducing any kind of malware, such as viruses, trojan horses, worms, logic bombs and other malicious material</li>
            <li>Attempting to gain unauthorized access, disrupt or otherwise attack and damage the Service</li>
        </ul>
        Pubblo may remove or disable any content or account that violates these rules.
      </ul>
    </p>

    <h2>5. Content and Intellectual Property</h2>
    <h3>5.1 Pubblo Content and Intellectual Property</h3>
    <p>
      The content connected to the Service is Pubblo’s intellectual property (“IP”) or the IP of a third party from which Pubblo has permission to use it. 
    </p>
    <p>You may not download, copy, reuse, or distribute this content for commercial purposes or activities outside the Pubblo platform.
    </p>
    <h3>5.2 User Content and Intellectual Property</h3>
    <h4>5.2.1 Ownership</h4>
    <p>You retain full ownership of all content you upload ("User Content"), including game concepts, rulebooks, artwork, and other materials.</p>
    <h4>5.2.2 License to Pubblo</h4>
    <p>
      By uploading User Content, you grant Pubblo a non-exclusive, worldwide, royalty-free license to host, store, process, display,
      and otherwise use your content as necessary to operate and improve the Service.
    </p>
    <h4>5.2.3 License to Other Users</h4>
    <p>
      By sharing your content with others, you grant other registered users the right to view and download your material for
      evaluation purposes only.
    </p>
    <p>
      No further commercial or derivative use is allowed unless agreed separately in writing.
    </p>
    <h4>5.2.4 Responsibility for Content</h4>
    <p>You represent and warrant that:
      <ul>
        <li>you own or have permission to upload and license your User Content;</li>
        <li>your uploads do not infringe any copyright, trademark, or other third-party right; and</li>
        <li>your uploads comply with all applicable laws.</li>
      </ul>
    </p>

    <h4>5.2.5 Confidentiality, Visibility, and Traceability</h4>
    <p>
      Uploads are accessible only to you until you choose to share access with others.
    </p>
    <p>
      Viewers will be logged for all individual game presentations.
    </p>
    <p>
      Pubblo does not sign or enforce NDAs between users and does not guarantee confidentiality for public uploads.
    </p>

    <h2>6. Reporting and Takedown</h2>
    <p>
      If you believe content on Pubblo infringes your rights, contact support@pubblo.com with the following:
      <ul>
        <li>Identification of the content and its URL;</li>
        <li>Proof of your ownership or authorization;</li>
        <li>Statement under penalty of perjury that your claim is accurate.</li>
      </ul>
      Pubblo may remove the material temporarily while investigating the claim and may notify the uploader.

    </p>

    <h2>7. Free and Paid Plans</h2>
    <p>
      Pubblo offers both free and paid subscription plans.
      <ul>
        <li>Billing: Subscriptions are billed in EUR, either monthly or annually (as selected).</li>
        <li>Renewal: Subscriptions renew automatically unless cancelled before the renewal date.</li>
        <li>Refunds: Refunds can be requested within 24 hours of initial purchase. After that period, payments are non-refundable.</li>
      </ul>
      Fees may also occur outside subscriptions.
      We may change prices or features of subscription tiers; any such changes will be communicated before they take effect.

    </p>

    <h2>8. Availability and Security</h2>
    <p>
      We strive to keep the Service operational but cannot guarantee uninterrupted access.
    </p>
    <p>
      Users are encouraged to keep backup copies of their important materials.
    </p>
    <p>
      No system is perfectly secure; you use the Service at your own risk.
    </p>

    <h2>9. Disclaimers</h2>
    <p>
      The Service is provided “as is” and “as available”.
    </p>
    <p>
      Pubblo makes no warranties about the accuracy or completeness of content on the platform.
    </p>
    <p>
      You use the Service at your own discretion and risk.
    </p>

    <h2>10. Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by law, Pubblo shall not be liable for:
      <ul>
      <li>indirect, incidental, or consequential damages,</li>
      <li>loss of data, profits, or goodwill, or</li>
      <li>total damages exceeding the amount you paid to Pubblo in the 12 months before the claim.</li>
      </ul>
      This limitation does not apply where prohibited by law.

    </p>

    <h2>11. Indemnification</h2>
    <p>
      You agree to indemnify and hold harmless Pubblo AB, its directors, employees,
      and partners from any claim or demand arising out of your User Content, breach of these Terms, or misuse of the Service.
    </p>

    <h2>12. Termination</h2>
    <p>
      You may close your account at any time.
    </p>
    <p>
      Pubblo may suspend or terminate access if you breach these Terms or misuse the Service.
    </p>
    <p>
      Upon termination, your uploaded content may be deleted or retained as permitted by law and our Privacy Policy.

    </p>

    <h2>13. Changes to the Service</h2>
    <p>
      We may make changes to the Service. Material changes will be communicated to affected users via email or in-app
      notice at least 14 days before taking effect.
    </p>

    <h2>14. Changes to These Terms</h2>
    <p>
      We may update these Terms from time to time. Material changes will be notified via email or in-app notice at least
      14 days before taking effect. Continued use of the Service after that date constitutes acceptance of the new Terms.
    </p>

    <h2>15. Competitions and Promotions</h2>
    <p>
      Competitions and other promotions (“promotion campaigns”) may occur from time to time.
      In general, the Terms apply but there may be additional rules for the specific promotion campaign.
      In case Terms and rules for any promotion campaign are in conflict, promotion campaign rules will apply for participants.
    </p>

    <h2>16. Governing Law and Jurisdiction</h2>
    <p>
      These Terms are governed by the laws of Sweden.
    </p>
    <p>  
      Any disputes arising under or in connection with these Terms are
      subject to the exclusive jurisdiction of Swedish courts.
    </p>

    <h2>17. Data Protection and Privacy</h2>
    <p>
      Pubblo complies with the EU General Data Protection Regulation (GDPR).
    </p>
    <p>
      Our Privacy Policy explains:
      <ul>
      	<li>what data we collect,</li>
      	<li>how we use and store it,</li>
      	<li>your rights to access, rectify, or delete data, and</li>
      	<li>how we protect your information.</li>
      </ul>
      You consent to our data processing practices as described in that policy.

    </p>

    <h2>18. Contact</h2>
    <p>
      For questions, legal notices, or complaints, contact:<br />
      Pubblo AB<br />
      Storgatan 44<br />
      903 26 Umeå<br />
      Sweden
    </p>
    <p>Email: support@pubblo.com</p>
  </Wrap>
);

export default TermsPage;


