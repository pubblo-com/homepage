import React from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';

/* ── Layout ─────────────────────────────────────────── */
const PageShell = styled.main`
  padding-top: 80px;
  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 100px;
  }
`;

const ContentWrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${spacing.xXLarge} ${spacing.large};
`;

const Section = styled.section`
  margin-bottom: ${spacing.xXLarge};
  scroll-margin-top: 120px;
`;

const SectionDesc = styled.p`
  max-width: 720px;
  color: #555;
  line-height: 1.6;
  margin: 0 0 ${spacing.large};
`;

/* ── Portal grid ─────────────────────────────────────── */
const PortalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.medium};
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PortalCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const PlanName = styled.h3`
  font-size: 28px;
  font-weight: 800;
  margin: 28px 0 4px;
  text-align: center;
`;

const CardFishtail = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  background: ${colors.yellow};
  color: ${colors.white};
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 3px 40px;
  text-align: center;
  clip-path: polygon(0 0, 92% 0, calc(92% - 14px) 50%, 92% 100%, 0 100%);
`;

const PlanTagline = styled.p`
  font-size: 12px;
  line-height: 1.4;
  height: calc(12px * 1.4 * 2);
  color: #888;
  margin: 0 0 ${spacing.small};
  text-align: center;
  overflow: hidden;
`;

const PlanUsers = styled.p`
  font-size: 12px;
  color: #333;
  margin: 0 0 0;
  text-align: center;
`;

const PlanHeader = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: ${spacing.small};
`;

const PlanPrice = styled.div`
  font-size: 26px;
  font-weight: 800;
  margin: ${spacing.small} 0 4px;
  text-align: center;
`;

const PlanPer = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${spacing.small} 0 ${spacing.large};
  flex: 1;
`;

const FeatureItem = styled.li`
  display: grid;
  grid-template-columns: 16px 1fr;
  column-gap: 8px;
  align-items: start;
  font-size: 13px;
  color: #444;
  line-height: 1.5;
  margin-bottom: 6px;
  &::before {
    content: '✔';
    color: ${colors.primary};
    font-size: 11px;
    margin-top: 2px;
  }
`;

/* ── Fishtail banners ────────────────────────────────── */
const FishtailBanner = styled.div`
  background-color: ${(p) => p.$bg};
  color: white;
  /* blue: flat left edge, inward-notch (tail) on right at ~75% of screen
     pink: inward-notch (tail) on left at ~25%, flat right edge */
  clip-path: ${(p) =>
    p.$flip
      ? 'polygon(33% 0, 100% 0, 100% 100%, 33% 100%, calc(33% + 40px) 50%)'
      : 'polygon(0 0, 60% 0, calc(60% - 40px) 50%, 60% 100%, 0 100%)'};
  margin-bottom: ${spacing.xXLarge};

  @media (max-width: ${breakpoints.mobile}) {
    clip-path: none;
  }
`;

/* blue: left edge matches ContentWrap, right edge stays clear of the 60% tail */
const FishtailLeft = styled.div`
  padding-top: ${spacing.large};
  padding-bottom: ${spacing.large};
  padding-left: max(
    ${spacing.large},
    calc((100% - 1100px) / 2 + ${spacing.large})
  );
  padding-right: 44%;

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.medium};
  }
`;

/* pink: text starts after tail (~27vw), right edge matches ContentWrap right edge */
const FishtailRight = styled.div`
  padding-top: ${spacing.large};
  padding-bottom: ${spacing.large};
  padding-left: max(calc(33% + 72px), 36%);
  padding-right: max(
    ${spacing.large},
    calc((100% - 1100px) / 2 + ${spacing.large})
  );

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.medium};
  }
`;

const FishtailKicker = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.88;
  margin-bottom: 6px;
`;
const FishtailBottomKicker = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  opacity: 0.88;
  margin-bottom: 6px;
`;

const FishtailTitle = styled.div`
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;

const FishtailBody = styled.div`
  font-size: 24px;
  line-height: 1.5;
  opacity: 0.95;
`;

/* ── Marketplace cards ───────────────────────────────── */
const MarketGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.large};
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MarketCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
`;

const MarketAudience = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #888;
  text-align: center;
  margin: 0 0 ${spacing.medium};
`;

const MarketPriceRow = styled.div`
  margin-bottom: 6px;
  text-align: center;
`;

const MarketBigPrice = styled.span`
  font-size: 18px;
  font-weight: 800;
`;

const MarketPriceNote = styled.span`
  font-size: 18px;
  font-weight: 800;
  margin-left: 4px;
`;

const MarketPriceSub = styled.p`
  font-size: 12px;
  color: #888;
  text-align: center;
  margin: 0 0 ${spacing.small};
`;

/* ── Pitch tool section ──────────────────────────────── */
const PitchSection = styled.section`
  margin-bottom: ${spacing.xXLarge};
`;

const PitchNote = styled.p`
  font-size: 13px;
  color: #888;
  margin: ${spacing.small} 0;
`;

const PricingPage = () => {
  const goToPortal = () => {
    window.location.href = 'https://portal.pubblo.com/#/create-account/';
  };

  const portalPlans = [
    {
      name: 'S',
      price: '0€',
      tagline: 'Just curious? Start here!',
      users: '1-2 users',
      features: [
        'Receive pitches in a standardized sellsheet through a simple link on your website*',
        'Score incoming pitches to quickly identify the best matches',
        'Marketplace access',
      ],
      cta: { text: 'Get started', disabled: false },
    },
    {
      name: 'M',
      price: '49€',
      tagline: 'Built for growing teams',
      users: '1-2 users',
      bestValue: true,
      features: [
        'Receive pitches in a standardized sellsheet through a simple link on your website*',
        'Score all incoming pitches',
        'Save games for further evaluation',
        'Collaborate with your team and game developers',
        'Marketplace access with scoring tools for efficient browsing',
      ],
      cta: { text: 'Try for free', disabled: false },
    },
    {
      name: 'L',
      price: '99€',
      tagline: 'Designed for established publishers',
      users: '1-2 users',
      features: [
        'Receive pitches in a standardized sellsheet through a simple link on your website*',
        'Score all incoming pitches',
        'Save games for further evaluation',
        'Collaborate with your team and game developers',
        'Marketplace access with scoring',
        'Request exclusivity',
        'Get preview on new submissions',
      ],
      cta: { text: 'Coming soon', disabled: true },
    },
    {
      name: 'XL',
      price: '199€',
      tagline: 'For industry leaders',
      users: '3+ users',
      features: [
        'Receive pitches in a standardized sellsheet through a simple link on your website*',
        'Score all incoming pitches',
        'Save games for further evaluation',
        'Collaborate with your team and game developers',
        'Marketplace access with scoring',
        'Request exclusivity',
        'Get preview on new submissions',
      ],
      cta: { text: 'Coming soon', disabled: true },
    },
  ];

  return (
    <PageShell>
      {/* ── OPENING OFFER ── */}
      <FishtailBanner $bg={colors.lightblue}>
        <FishtailLeft>
          <FishtailKicker>Opening offer</FishtailKicker>
          <FishtailTitle>Sign up now!</FishtailTitle>
          <FishtailBody>
            Sign up before Aug 30 and enjoy the M plan FREE for the rest of the
            year!
          </FishtailBody>
        </FishtailLeft>
      </FishtailBanner>

      <ContentWrap>
        {/* ── THE PORTAL ── */}
        <Section id='portal'>
          <h2>The Portal</h2>
          <SectionDesc>
            Designed for publishers of all sizes, whether you're an indie
            developer with a few active games or an established industry leader
            interested in partnering, collaborating or exploring new
            opportunities together.{' '}
            <a href='/contact' style={{ color: colors.link }}>
              Let's talk.
            </a>
          </SectionDesc>
        </Section>

        <PortalGrid>
          {portalPlans.map((plan) => (
            <PortalCard key={plan.name}>
              {plan.bestValue && <CardFishtail>Best offer</CardFishtail>}
              <PlanHeader>
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  {plan.price}
                  <PlanPer> /month</PlanPer>
                </PlanPrice>
                <PlanTagline>{plan.tagline}</PlanTagline>
                <PlanUsers>{plan.users}</PlanUsers>
              </PlanHeader>
              <FeatureList>
                {plan.features.map((f) => (
                  <FeatureItem key={f}>{f}</FeatureItem>
                ))}
              </FeatureList>
              <Button
                text={plan.cta.text}
                variant='primary'
                disabled={plan.cta.disabled}
                onClick={plan.cta.disabled ? undefined : goToPortal}
              />
            </PortalCard>
          ))}
        </PortalGrid>

        <p style={{ fontSize: 12, color: '#aaa', marginTop: spacing.small }}>
          *The free tier requires the use of a submission inbox linked from your
          company website.
        </p>
      </ContentWrap>

      {/* ── PROMO BANNER ── */}
      <FishtailBanner $bg={colors.pink} $flip>
        <FishtailRight>
          <FishtailKicker>Limited offer</FishtailKicker>
          <FishtailTitle>Want a FREE marketplace slot?</FishtailTitle>
          <FishtailBody>
            We're offering 100 free marketplace slots for publishers and 100 for
            designers.
            <br />
            Use the code <strong>100LAUNCH</strong> to claim yours before
            they're gone!
          </FishtailBody>
          <FishtailBottomKicker>
            Limited to one use per publisher/designer. Registration required
            before Aug 30.
          </FishtailBottomKicker>
        </FishtailRight>
      </FishtailBanner>

      <ContentWrap>
        {/* ── THE MARKETPLACE ── */}
        <Section id='marketplace'>
          <h2>The Marketplace</h2>
          <SectionDesc>
            A digital marketplace for new and established games looking for
            publishing opportunities in new markets. Developers can connect
            directly with publishers, while publishers can use advanced
            filtering and scoring tools to discover titles that fit their
            portfolio.
          </SectionDesc>

          <MarketGrid>
            {/* Designers */}
            <MarketCard>
              <MarketAudience>For Designers</MarketAudience>
              <MarketPriceRow>
                <MarketBigPrice>29€</MarketBigPrice>
                <MarketPriceNote>/ year</MarketPriceNote>
              </MarketPriceRow>
              <MarketPriceSub>
                Launch offer available until Aug 30
              </MarketPriceSub>
              <MarketPriceRow>
                <MarketBigPrice>49€</MarketBigPrice>
                <MarketPriceNote>/ year</MarketPriceNote>
              </MarketPriceRow>
              <MarketPriceSub>
                Introductory pricing for the rest of 2026
              </MarketPriceSub>
              <MarketPriceRow style={{ marginBottom: spacing.medium }}>
                <MarketBigPrice>99€</MarketBigPrice>
                <MarketPriceNote>/ year</MarketPriceNote>
              </MarketPriceRow>
              <FeatureList>
                <FeatureItem>
                  Create strong game pitches with the Pubblo pitch tool
                </FeatureItem>
                <FeatureItem>
                  Instead of knocking doors, showcase your game where publishers
                  are already actively looking for new titles
                </FeatureItem>
                <FeatureItem>
                  Get insights and feedback on your game's performance
                </FeatureItem>
              </FeatureList>
              <Button
                text='Get started'
                variant='primary'
                onClick={goToPortal}
              />
            </MarketCard>

            {/* Publishers */}
            <MarketCard>
              <MarketAudience>For Publishers</MarketAudience>
              <MarketPriceRow>
                <MarketBigPrice>99€</MarketBigPrice>
                <MarketPriceNote>/ year</MarketPriceNote>
              </MarketPriceRow>
              <MarketPriceSub>
                Launch offer available until Aug 30
              </MarketPriceSub>
              <MarketPriceRow>
                <MarketBigPrice>199€</MarketBigPrice>
                <MarketPriceNote>/ year</MarketPriceNote>
              </MarketPriceRow>
              <MarketPriceSub>
                Introductory pricing for the rest of 2026
              </MarketPriceSub>
              <MarketPriceRow style={{ marginBottom: 0 }}>
                <MarketBigPrice>Want 5+ slots?</MarketBigPrice>
              </MarketPriceRow>
              <MarketPriceSub>Contact us for custom pricing</MarketPriceSub>
              <FeatureList>
                <FeatureItem>
                  Find partners in new markets for localization
                </FeatureItem>
                <FeatureItem>
                  Showcase your publishing portfolio to get the best match
                </FeatureItem>
                <FeatureItem>
                  Access performance insights and marketplace feedback
                </FeatureItem>
              </FeatureList>
              <Button
                text='Get started'
                variant='primary'
                onClick={goToPortal}
              />
            </MarketCard>
          </MarketGrid>
        </Section>

        {/* ── THE PITCH TOOL ── */}
        <PitchSection id='pitch-tool'>
          <h2>The Pitch tool</h2>
          <SectionDesc>
            Creating a strong game pitch can be difficult, especially for
            first-time developers. Our pitch tool helps you structure and
            document your game professionally, making it easier for publishers
            to evaluate your project.
          </SectionDesc>
          <PitchNote>
            *Publishers can also use the tool to generate standardized sell
            sheets and export portfolio-ready presentations.
          </PitchNote>
          <p
            style={{
              marginBottom: spacing.large,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Free to use for all registered users.
          </p>
          <Button
            text='Create your pitch now'
            variant='primary'
            onClick={goToPortal}
          />
        </PitchSection>
      </ContentWrap>
    </PageShell>
  );
};

export default PricingPage;
