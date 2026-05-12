import React, { useRef, useEffect } from 'react';
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

const Subtitle = styled.p`
  margin-bottom: ${spacing.small};
`;

const CompareLink = styled.p`
  margin-bottom: ${spacing.xLarge};
  font-size: 14px;
  color: ${colors.text};
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.small};
  margin-bottom: ${spacing.xLarge};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Tab = styled.button`
  border: 2px solid ${(p) => p.$color || colors.buttonBackground};
  color: ${(p) => p.$color || colors.buttonBackground};
  background: transparent;
  border-radius: 20px;
  padding: 10px 22px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease;
  width: 100%;
  &:hover {
    background: ${(p) => p.$color || colors.buttonBackground};
    color: ${colors.white};
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: ${spacing.large};
  margin-bottom: ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  background: ${(p) => p.$bg || colors.lightblue};
  border-radius: 14px;
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ul {
    list-style: disc;
    padding-left: 20px;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const Details = styled.div`
  padding: ${spacing.small} 0;
`;

const ProductName = styled.h2`
  margin-bottom: ${spacing.medium};
`;

const MetaRow = styled.div`
  margin-bottom: ${spacing.small};
  font-size: 15px;
  line-height: 1.6;
`;

const MetaLabel = styled.span`
  font-weight: 700;
  display: block;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${colors.text};
  margin-bottom: 2px;
`;

const ProductsPage = () => {
  const portalRef = useRef(null);
  const marketplaceRef = useRef(null);
  const pitchRef = useRef(null);
  const briefsRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (ref) => {
    if (ref.current) {
      const yOffset = -100;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pubblo Platform",
    "description": "Platform connecting game publishers, distributors and developers with tools for submissions, discovery and pitching.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to get started"
    }
  };

  return (
    <>
      <SEOHead
        title="Products - Pubblo"
        description="Pubblo's suite of tools for game publishers, distributors and developers: The Portal, The Marketplace, The Pitch Tool and Briefs."
        keywords="game publishing platform, pitch tool, marketplace, game submissions, publishers, distributors"
        canonical="https://pubblo.com/products"
        structuredData={productsStructuredData}
      />
      <Wrap>
        <Title>Different products for different needs</Title>
        <Subtitle>
          Pubblo aims   to connect buyers and sellers in one place. Our service is divided into different tools to meet the needs of publishers and distributors as well as established or aspiring game developers.
        </Subtitle>
        <CompareLink>
          Wondering how this compares to pitch directories, matchmaking or your current CRM?{' '}
          See our <a href="/compare" style={{ color: colors.contrast }}>comparison</a>.
        </CompareLink>

        <Tabs>
          <Tab $color="#b89a2a" onClick={() => scrollTo(portalRef)}>THE PORTAL</Tab>
          <Tab $color={colors.primary} onClick={() => scrollTo(marketplaceRef)}>THE MARKETPLACE</Tab>
          <Tab $color={colors.contrast} onClick={() => scrollTo(pitchRef)}>THE PITCH TOOL</Tab>
          <Tab $color="#8b1a22" onClick={() => scrollTo(briefsRef)}>BRIEFS</Tab>
        </Tabs>

        <Section ref={portalRef} id="portal">
          <Panel $bg={colors.yellow}>
            <ul>
              <li>Ensure pitch quality with this submission CRM tool</li>
              <li>Enter your preferences to get pitches scored automatically</li>
              <li>Organise, communicate and collaborate efficiently</li>
            </ul>
          </Panel>
          <Details>
            <ProductName>The Portal</ProductName>
            <MetaRow>
              <MetaLabel>Who it's for</MetaLabel>
              Publishers and distributors
            </MetaRow>
            <MetaRow>
              <MetaLabel>What It does</MetaLabel>
              The portal replaces inbox chaos with one place to receive, compare and manage submissions.
              Our standardised pitch format makes evaluations consistent and enables scoring to see what
              games matches what you're looking for in an instant. Collaborate and communicate within your
              team as with the designer.
            </MetaRow>
            <MetaRow>
              <MetaLabel>When it launches</MetaLabel>
              Aug 30
            </MetaRow>
          </Details>
        </Section>

        <Section ref={marketplaceRef} id="marketplace">
          <Panel $bg={colors.lightblue}>
            <ul>
              <li>Browse for fresh titles</li>
              <li>Use filters to find the games you are looking for</li>
              <li>Find the right publisher with the best possibilities to make your game happen</li>
            </ul>
          </Panel>
          <Details>
            <ProductName>The Marketplace</ProductName>
            <MetaRow>
              <MetaLabel>Who it's for</MetaLabel>
              Publishers, distributors and game developers
            </MetaRow>
            <MetaRow>
              <MetaLabel>What It does</MetaLabel>
              The Marketplace is a place for both published and unpublished games to find new partners.
              As a publisher you can scout for new titles or get your own portfolio out there for
              localisation. Tired of knocking doors as an aspiring game developer? This is where you can
              upload your game one time and still reach a bunch of publishers.
            </MetaRow>
            <MetaRow>
              <MetaLabel>When it launches</MetaLabel>
              Aug 30
            </MetaRow>
          </Details>
        </Section>

        <Section ref={pitchRef} id="pitch-tool">
          <Panel $bg={colors.pink}>
            <ul>
              <li>Make a compelling pitch</li>
              <li>Get it out there!</li>
            </ul>
          </Panel>
          <Details>
            <ProductName>The Pitch tool</ProductName>
            <MetaRow>
              <MetaLabel>Who it's for</MetaLabel>
              Game developers
            </MetaRow>
            <MetaRow>
              <MetaLabel>What It does</MetaLabel>
              Use this tool as a game developer to make a compelling pitch. This helps you to get it all
              in there and gives you the possibility to export it as a sell sheet. You could also use this
              to send your pitch to any publisher you like.
            </MetaRow>
            <MetaRow>
              <MetaLabel>When it launches</MetaLabel>
              Summer 2026
            </MetaRow>
          </Details>
        </Section>

        <Section ref={briefsRef} id="briefs">
          <Panel $bg={colors.contrast}>
            <ul style={{ color: colors.white }}>
              <li>Get someone to develop the game you want!</li>
            </ul>
          </Panel>
          <Details>
            <ProductName>Briefs</ProductName>
            <MetaRow>
              <MetaLabel>Who it's for</MetaLabel>
              Anyone
            </MetaRow>
            <MetaRow>
              <MetaLabel>What It does</MetaLabel>
              This is how to tell the industry you're looking for something specific. Maybe you are an IP
              owner that is looking for someone to develop a game for that or maybe you are a publisher
              who can't find the exact game you've been searching for?
            </MetaRow>
            <MetaRow>
              <MetaLabel>When it launches</MetaLabel>
              Fall 2026
            </MetaRow>
          </Details>
        </Section>
      </Wrap>
    </>
  );
};

export default ProductsPage;
