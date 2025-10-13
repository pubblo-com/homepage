import React, { useRef } from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import SEOHead from '../components/SEOHead';

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h1`
  margin-bottom: ${spacing.large};
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 1fr));
  gap: ${spacing.large};
  margin-bottom: ${spacing.xLarge};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Tab = styled.button`
  border: 2px solid ${(p) => (p.$variant === 'pink' ? colors.contrast : colors.buttonBackground)};
  color: ${(p) => (p.$variant === 'pink' ? colors.contrast : colors.buttonBackground)};
  background: transparent;
  border-radius: 18px;
  padding: 14px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease;
  &:hover {
    background: ${(p) => (p.$variant === 'pink' ? colors.contrast : colors.buttonBackground)};
    color: ${colors.white};
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: ${spacing.large};
  margin-bottom: ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  background: ${(p) => (p.$variant === 'pink' ? '#ffe1e7' : '#eef1ff')};
  border-radius: 14px;
  padding: ${spacing.large};
`;

const Placeholder = styled.div`
  border-left: 4px solid ${(p) => (p.$variant === 'pink' ? colors.contrast : colors.buttonBackground)};
  border-radius: 8px;
  padding: ${spacing.large};
  background: #fff;
  color: #333;
  line-height: 1.8;
`;

const ProductsPage = () => {
  const pitchRef = useRef(null);
  const crmRef = useRef(null);
  const portfolioRef = useRef(null);
  const agencyRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      const yOffset = -100; // Offset for fixed header
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pubblo Platform",
    "description": "Board game licensing and deal management platform for designers, publishers, and distributors",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "6 months free trial"
    }
  };

  return (
    <>
      <SEOHead 
        title="Products - Board Game Licensing Platform"
        description="Discover Pubblo's suite of tools for board game licensing: standardized pitch templates, automated scoring, team collaboration, and distribution network access."
        keywords="board game platform, licensing tools, pitch templates, game publishing software, distribution network"
        canonical="https://pubblo.com/products"
        structuredData={productsStructuredData}
      />
      <Wrap>
      <Title>Different products for your specific needs</Title>
      <p style={{ marginBottom: spacing.large }}>
        Pubblo connects buyers and sellers in one place. Some modules are designed primarily for buyers
        (distributors and publishers), others for sellers (designers/publishers), and the workflow meets in
        Pubblo so that discovery, evaluation and collaboration become one smooth process.
      </p>
      <p style={{ marginBottom: spacing.large }}>
        Wondering how this compares to pitch directories, matchmaking or your current CRM? See our
        <a href='/compare' style={{ color: colors.contrast, marginLeft: 6 }}>comparison</a>.
      </p>

      <Tabs>
        <Tab onClick={() => scrollTo(pitchRef)}>PITCH LIST</Tab>
        <Tab onClick={() => scrollTo(crmRef)}>PURCHASING CRM TOOL</Tab>
        <Tab $variant='pink' onClick={() => scrollTo(portfolioRef)}>PORTFOLIO</Tab>
        <Tab $variant='pink' onClick={() => scrollTo(agencyRef)}>AGENCY</Tab>
      </Tabs>

      <Section ref={pitchRef}>
        <Panel>
          <h3>Increase your funnel by signing up to the Pitch list</h3>
          <ul>
            <li>Tell us what type of games you’re looking for and receive matching pitches</li>
            <li>Use Pubblo to evaluate and organize incoming pitches</li>
            <li>Completely FREE – no strings attached</li>
          </ul>
        </Panel>
        <Placeholder>
          <h2>Pitch List</h2>
          <strong>Who it’s for:</strong> Buyers (publishers, distributors).<br />
          <strong>What it does:</strong> You describe your portfolio needs – audience, mechanics, price point,
          themes – and Pubblo routes the most relevant pitches to you. Auto‑scoring and tags help you focus on
          the right ideas first. You can convert any list match into a full review workflow with one click.
        </Placeholder>
      </Section>

      <Section ref={crmRef}>
        <Panel>
          <h3>Ensure pitch quality with the submission CRM tool</h3>
          <ul>
            <li>Receive pitches in standardized format ensuring high quality</li>
            <li>Enter your preferences to get pitches scored automatically – focus on what you’re looking for</li>
            <li>Organize, communicate and collaborate efficiently</li>
          </ul>
        </Panel>
        <Placeholder>
          <h2>Purchasing CRM tool</h2>
          <strong>Who it’s for:</strong> Buyers (publishers, distributors).<br />
          <strong>What it does:</strong> Replace inbox chaos with one place to receive, compare and manage
          submissions. Our standardized pitch format makes evaluations consistent; auto‑scoring highlights the
          best matches; comments, assignments and status help teams collaborate and keep momentum.
        </Placeholder>
      </Section>

      <Section ref={portfolioRef}>
        <Panel $variant='pink'>
          <h3>Showcase your games with the Portfolio tool</h3>
          <ul>
            <li>Unlock the full potential of your current portfolio</li>
            <li>Keep track and make compelling and informative pitches</li>
            <li>Showcase and reach new partners and markets</li>
          </ul>
        </Panel>
        <Placeholder $variant='pink'>
          <h2>Portfolio</h2>
          <strong>Who it’s for:</strong> Sellers (designers, publishers with catalogues).<br />
          <strong>What it does:</strong> Create beautiful, informative pages for each title and share them with
          potential partners. Track interest and requests, keep assets and specs in sync, and generate a
          Pubblo‑ready pitch for any game in one click so buyers can evaluate it instantly.
        </Placeholder>
      </Section>

      <Section ref={agencyRef}>
        <Panel $variant='pink'>
          <h3>Increase your chances of success with Pubblo as your sales partner</h3>
          <ul>
            <li>Assign Pubblo to find new partners for your games and get the benefit of Pubblo’s extensive networks and reach</li>
            <li>Get access to additional resources, save time and increase your chances of success</li>
          </ul>
        </Panel>
        <Placeholder $variant='pink'>
          <h2>Agency</h2>
          <strong>Who it’s for:</strong> Sellers (designers, small/medium publishers).<br />
          <strong>What it does:</strong> Engage Pubblo as an agency layer. We help target the right partners,
          prepare materials, and manage outreach. Your prospective buyers can review through the same standardized
          pipeline used by publishers, which means less friction and faster decisions.
        </Placeholder>
      </Section>
      </Wrap>
    </>
  );
};

export default ProductsPage;


