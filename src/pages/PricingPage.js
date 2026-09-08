import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/I18nProvider';

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

const PageHeader = styled.header`
  margin-bottom: ${spacing.xXLarge};
`;

const PageTitle = styled.h1`
  margin: 0 0 ${spacing.medium};
  font-size: 40px;
  font-weight: 800;
  color: #333;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`;

const PageIntro = styled.p`
  max-width: 720px;
  color: #555;
  line-height: 1.6;
  margin: 0 0 ${spacing.large};
`;

const PillToggle = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  background: transparent;
  border: none;
  border-radius: 999px;
  padding: 0;
`;

const PillButton = styled.button`
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 700;
  transition:
    background 160ms ease,
    color 160ms ease;
  background: ${(p) =>
    p.$active
      ? p.$variant === 'publishers'
        ? colors.primary
        : colors.contrast
      : 'transparent'};
  border: none;
  color: ${(p) => (p.$active ? '#fff' : colors.text)};

  &:hover {
    color: ${(p) =>
      p.$active
        ? '#fff'
        : p.$variant === 'publishers'
          ? colors.primary
          : colors.contrast};
  }
`;

const Section = styled.section`
  margin-bottom: ${spacing.xXLarge};
  scroll-margin-top: 120px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 ${spacing.medium};
`;

const SectionDesc = styled.p`
  max-width: 720px;
  color: #555;
  line-height: 1.6;
  margin: 0 0 ${spacing.large};
`;

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
  border: 2px solid
    ${(p) => (p.$selected ? colors.buttonBackground : '#ebedf0')};
  box-shadow: ${(p) =>
    p.$selected ? '0 6px 22px rgba(63, 138, 177, 0.18)' : 'none'};
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
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
  margin: 0;
  text-align: center;
`;

const PlanHeader = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: ${spacing.small};
  flex-shrink: 0;
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
  font-size: ${(p) => (p.$accent ? '11px' : '12px')};
  line-height: 1.25;
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

const MarketCardWrap = styled.div`
  max-width: 520px;
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

const IntroPriceNote = styled.p`
  font-size: 14px;
  color: #444;
  text-align: center;
  margin: 0 0 ${spacing.small};
  line-height: 1.5;
  font-weight: 600;
`;

const RegularPriceNote = styled.p`
  font-size: 13px;
  color: #888;
  text-align: center;
  margin: ${spacing.small} 0 ${spacing.medium};
  line-height: 1.5;
`;

const PitchNote = styled.p`
  font-size: 13px;
  color: #888;
  margin: ${spacing.small} 0;
`;

const SlotToggleWrap = styled.div`
  margin-bottom: ${spacing.large};
`;

const SlotToggleLabel = styled.p`
  margin: 0 0 ${spacing.small};
  font-size: 14px;
  font-weight: 600;
  color: #444;
`;

const SlotIntro = styled.p`
  max-width: 720px;
  color: #555;
  line-height: 1.6;
  margin: 0 0 ${spacing.medium};
  padding: ${spacing.medium};
  background: #f5f7fa;
  border-radius: 10px;
  font-size: 14px;
`;

const SlotPriceLabel = styled.p`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #888;
  text-align: center;
  margin: 0 0 ${spacing.medium};
`;

const FreeNote = styled.p`
  margin-bottom: ${spacing.large};
  font-size: 14px;
  font-weight: 600;
`;

function parsePricingHash(hash) {
  const id = hash.replace(/^#/, '');

  if (id === 'portal') {
    return { audience: 'publishers', marketplaceAudience: 'publishers', scrollTo: '#portal' };
  }
  if (id === 'pitch-tool') {
    return { audience: 'designers', marketplaceAudience: 'designers', scrollTo: '#pitch-tool' };
  }
  if (id === 'marketplace-designers') {
    return { marketplaceAudience: 'designers', scrollTo: '#marketplace' };
  }
  if (id === 'marketplace-publishers') {
    return { marketplaceAudience: 'publishers', scrollTo: '#marketplace' };
  }
  if (id === 'marketplace') {
    return { scrollTo: '#marketplace' };
  }

  return null;
}

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('M');
  const [audience, setAudience] = useState('publishers');
  const [marketplaceAudience, setMarketplaceAudience] = useState('publishers');
  const { t } = useI18n();
  const p = t('pricing');
  const portalPlans = p.portalPlans;

  const goToPortal = () => {
    window.location.href = 'https://portal.pubblo.com/#/create-account/';
  };

  const selectAudience = (role) => {
    setAudience(role);
    setMarketplaceAudience(role);
    const hash = role === 'designers' ? '#pitch-tool' : '#portal';
    window.history.replaceState(null, '', hash);
  };

  const selectMarketplaceAudience = (role) => {
    setMarketplaceAudience(role);
    const hash =
      role === 'designers' ? '#marketplace-designers' : '#marketplace-publishers';
    window.history.replaceState(null, '', hash);
  };

  useEffect(() => {
    const syncFromHash = () => {
      const parsed = parsePricingHash(window.location.hash);
      if (!parsed) return;

      if (parsed.audience) {
        setAudience(parsed.audience);
      }
      if (parsed.marketplaceAudience) {
        setMarketplaceAudience(parsed.marketplaceAudience);
      } else if (parsed.scrollTo === '#marketplace' && parsed.audience) {
        setMarketplaceAudience(parsed.audience);
      }

      if (!parsed.scrollTo) return;

      requestAnimationFrame(() => {
        const target = document.querySelector(parsed.scrollTo);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const renderSlotPricing = (slotPricing) => (
    <>
      <IntroPriceNote>{slotPricing.introNote}</IntroPriceNote>
      <MarketPriceRow>
        <MarketBigPrice>{slotPricing.introPrice}</MarketBigPrice>
        <MarketPriceNote>{slotPricing.period}</MarketPriceNote>
      </MarketPriceRow>
      <RegularPriceNote>
        {slotPricing.regularNote}: {slotPricing.regularPrice}
        {slotPricing.period}
      </RegularPriceNote>
    </>
  );

  const renderMarketplaceCard = (role) => {
    const copy = p.marketplace[role];

    return (
      <MarketCardWrap>
        <MarketCard>
          <MarketAudience>{copy.audience}</MarketAudience>
          <SlotPriceLabel>{p.marketplace.slotPriceLabel}</SlotPriceLabel>
          {renderSlotPricing(copy.slotPricing)}
          {role === 'publishers' && (
            <>
              <MarketPriceRow style={{ marginBottom: 0 }}>
                <MarketBigPrice>{copy.customSlots}</MarketBigPrice>
              </MarketPriceRow>
              <MarketPriceSub>{copy.customPricing}</MarketPriceSub>
            </>
          )}
          <FeatureList>
            {copy.features.map((feature) => (
              <FeatureItem key={feature}>{feature}</FeatureItem>
            ))}
          </FeatureList>
          <Button
            text={copy.cta}
            variant={role === 'designers' ? 'contrast' : 'primary'}
            onClick={goToPortal}
          />
        </MarketCard>
      </MarketCardWrap>
    );
  };

  const renderMarketplaceSection = () => {
    const slotCopy = p.marketplace[marketplaceAudience];

    return (
      <Section id='marketplace'>
        <SectionTitle>{p.marketplace.title}</SectionTitle>
        <SectionDesc>{p.marketplace.description}</SectionDesc>

        <SlotToggleWrap>
          <SlotToggleLabel>{p.marketplace.slotTabLabel}</SlotToggleLabel>
          <PillToggle role='tablist' aria-label={p.marketplace.slotTabLabel}>
            <PillButton
              type='button'
              role='tab'
              aria-selected={marketplaceAudience === 'designers'}
              $active={marketplaceAudience === 'designers'}
              $variant='designers'
              onClick={() => selectMarketplaceAudience('designers')}
            >
              {p.marketplace.slotDesigners}
            </PillButton>
            <PillButton
              type='button'
              role='tab'
              aria-selected={marketplaceAudience === 'publishers'}
              $active={marketplaceAudience === 'publishers'}
              $variant='publishers'
              onClick={() => selectMarketplaceAudience('publishers')}
            >
              {p.marketplace.slotPublishers}
            </PillButton>
          </PillToggle>
        </SlotToggleWrap>

        <SlotIntro>{slotCopy.intro}</SlotIntro>
        {renderMarketplaceCard(marketplaceAudience)}
      </Section>
    );
  };

  const renderDesignerContent = () => (
    <>
      <Section id='pitch-tool'>
        <SectionTitle>{p.pitchTool.title}</SectionTitle>
        <SectionDesc>{p.pitchTool.description}</SectionDesc>
        <PitchNote>{p.pitchTool.note}</PitchNote>
        <FreeNote>{p.pitchTool.freeNote}</FreeNote>
        <Button text={p.pitchTool.cta} variant='contrast' onClick={goToPortal} />
      </Section>

      {renderMarketplaceSection()}
    </>
  );

  const renderPublisherContent = () => (
    <>
      <Section id='portal'>
        <SectionTitle>{p.portal.title}</SectionTitle>
        <SectionDesc>{p.portal.description}</SectionDesc>
        <PortalGrid>
          {portalPlans.map((plan) => (
            <PortalCard
              key={plan.name}
              $selected={selectedPlan === plan.name}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {plan.bestValue && (
                <CardFishtail>{plan.bestValueLabel}</CardFishtail>
              )}
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
                      <PlanPer>{plan.perLabel || '/'}</PlanPer>
                      <PlanMonth>{plan.monthWord || 'month'}</PlanMonth>
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
                {plan.features.map((feature) => (
                  <FeatureItem key={feature}>{feature}</FeatureItem>
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
          <span>{p.infoRow}</span>
        </PricingInfoRow>
      </Section>

      {renderMarketplaceSection()}
    </>
  );

  return (
    <>
      <SEOHead
        title={t('seo.pages.pricing.title')}
        description={t('seo.pages.pricing.description')}
        path='/pricing'
      />
      <PageShell>
        <ContentWrap>
          <PageHeader>
            <PageTitle>{p.pageTitle}</PageTitle>
            <PageIntro>{p.intro}</PageIntro>
            <PillToggle role='tablist' aria-label={p.audience.tabLabel}>
              <PillButton
                type='button'
                role='tab'
                aria-selected={audience === 'designers'}
                $active={audience === 'designers'}
                $variant='designers'
                onClick={() => selectAudience('designers')}
              >
                {p.audience.designers}
              </PillButton>
              <PillButton
                type='button'
                role='tab'
                aria-selected={audience === 'publishers'}
                $active={audience === 'publishers'}
                $variant='publishers'
                onClick={() => selectAudience('publishers')}
              >
                {p.audience.publishers}
              </PillButton>
            </PillToggle>
          </PageHeader>

          {audience === 'designers'
            ? renderDesignerContent()
            : renderPublisherContent()}
        </ContentWrap>
      </PageShell>
    </>
  );
};

export default PricingPage;
