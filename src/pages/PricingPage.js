import React, { useState } from 'react';
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

/* ── Welcome section ────────────────────────────────── */
const WelcomeSection = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  padding: ${spacing.xLarge};
  margin-bottom: ${spacing.xXLarge};
  display: flex;
  gap: ${spacing.large};
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const WelcomeAvatar = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #66b3ff 0%, #4a9fd8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 60px;
    height: 60px;
    min-width: 60px;
  }
`;

const WelcomeContent = styled.div`
  flex: 1;
`;

const WelcomeTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 8px;
  color: #333;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`;

const WelcomeDesc = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.5;
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
  border: 2px solid ${(p) => (p.$selected ? colors.buttonBackground : '#ebedf0')};
  box-shadow: ${(p) =>
    p.$selected ? '0 6px 22px rgba(63, 138, 177, 0.18)' : 'none'};
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
`;

const PlanSelector = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid
    ${(p) => (p.$selected ? colors.buttonBackground : '#d2d6dc')};
  background: ${(p) => (p.$selected ? colors.buttonBackground : '#fff')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 22px;
  left: 22px;
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
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: ${spacing.small} 0 4px;
  text-align: center;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
`;

const PlanOldPrice = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: #a6adb7;
  text-decoration: line-through;
  margin-right: 2px;
`;

const PlanCurrentPrice = styled.span`
  font-size: inherit;
  font-weight: inherit;
  color: #111827;
  line-height: 1;
`;

const PlanPer = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #6b7280;
`;

const PlanMonth = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #6b7280;
`;

const PlanBilling = styled.div`
  font-size: 12px;
  margin-top: 6px;
  white-space: pre-line;
  text-align: center;
  color: ${(p) => (p.$accent ? colors.primary : '#888')};
`;

const PricingInfoRow = styled.div`
  margin-top: ${spacing.small};
  padding: 10px 12px;
  border-radius: 8px;
  background: #f5f7fa;
  color: #2d3748;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PricingInfoIcon = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${colors.buttonBackground};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::before {
    content: '';
    width: 6px;
    height: 3px;
    border-left: 2px solid ${colors.buttonBackground};
    border-bottom: 2px solid ${colors.buttonBackground};
    transform: rotate(-45deg) translate(0, -1px);
  }
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
  const [selectedPlan, setSelectedPlan] = useState('M');

  const goToPortal = () => {
    window.location.href = 'https://portal.pubblo.com/#/create-account/';
  };

  const portalPlans = [
    {
      name: 'S',
      price: '0',
      currency: '€',
      monthLabel: '/month',
      tagline: 'Built for small publishers',
      users: '1-2 users',
      billing: '',
      features: [
        'Receive pitches via a link or button from your own website',
        'Score incoming pitches against your preferences',
        'Marketplace access',
      ],
      cta: { text: 'Apply', disabled: false },
    },
    {
      name: 'M',
      oldPrice: '49€',
      price: '0',
      monthLabel: '/month',
      tagline: 'Built for growing teams',
      users: '1-2 users',
      billing: 'Free trial until 1 jan. 2027\nNo automatic billing',
      billingAccent: true,
      bestValue: true,
      features: [
        'All in S',
        'Save games for evaluation',
        'Collaborate with your team',
        'Score marketplace games against your preferences',
      ],
      cta: { text: 'Apply', disabled: false },
    },
    {
      name: 'L',
      price: '99',
      currency: '€',
      monthLabel: '/month',
      tagline: 'Designed for established publishers',
      users: '1-2 users',
      billing: 'Billed annually',
      features: [
        'All in M',
        'Request exclusivity',
        'Preview new submissions',
      ],
      cta: { text: 'Coming soon', disabled: true },
    },
    {
      name: 'XL',
      price: '199',
      currency: '€',
      monthLabel: '/month',
      tagline: 'For industry leaders',
      users: 'Unlimited users in your company',
      billing: 'Billed annually',
      features: [
        'All in L',
        'Unlimited users in your company',
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
        {/* ── WELCOME ── */}
        <WelcomeSection>
          <WelcomeAvatar>👋</WelcomeAvatar>
          <WelcomeContent>
            <WelcomeTitle>Welcome to Pubblo Portal!</WelcomeTitle>
            <WelcomeDesc>
              Choose the plan that best fits your team to start exploring the
              platform.
            </WelcomeDesc>
          </WelcomeContent>
        </WelcomeSection>

        {/* ── THE PORTAL ── */}
        <Section id='portal' style={{ marginTop: spacing.xXLarge }}>
        </Section>

        <PortalGrid>
          {portalPlans.map((plan) => (
            <PortalCard
              key={plan.name}
              $selected={selectedPlan === plan.name}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {plan.bestValue && <CardFishtail>Opening offer</CardFishtail>}
              <PlanSelector $selected={selectedPlan === plan.name} />
              <PlanHeader>
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  {plan.oldPrice && <PlanOldPrice>{plan.oldPrice}</PlanOldPrice>}
                  <PlanCurrentPrice>
                    {plan.price}
                    {plan.currency || ''}
                  </PlanCurrentPrice>
                  {plan.monthLabel && (
                    <>
                      <PlanPer>/</PlanPer>
                      <PlanMonth>month</PlanMonth>
                    </>
                  )}
                </PlanPrice>
                <PlanTagline>{plan.tagline}</PlanTagline>
                <PlanUsers>{plan.users}</PlanUsers>
                {plan.billing && (
                  <PlanBilling $accent={plan.billingAccent}>
                    {plan.billing}
                  </PlanBilling>
                )}
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

        <PricingInfoRow>
          <PricingInfoIcon aria-hidden='true' />
          <span>
            No hidden fees, no credit card required, and no automatic renewal
            when the free period ends.
          </span>
        </PricingInfoRow>
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
