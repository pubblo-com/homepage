import React from 'react';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/tokens';
import { spacing, breakpoints } from '../styles/tokens';
import Hero from '../components/Hero';
//import TextImageComponent from '../components/TextImageComponent.js';
// removed unused TextComponent import
import FormComponent from '../components/FormComponent.js';
import EarlyBirdDeals from '../components/EarlyBirdDeals.js';
import SEOHead from '../components/SEOHead';
import {
  ORGANIZATION_LOGO,
  SITE_URL,
} from '../constants/seo';
import Button from '../components/Button';
import RollingBanner from '../components/RollingBanner';
import WhoAreYouFlow from '../components/WhoAreYouFlow';
import LocalizedLink from '../i18n/LocalizedLink';
import { useI18n } from '../i18n/I18nProvider';
import { stripLocalePrefix } from '../i18n/paths';

// const Wrap = styled.main`
//   padding: 64px 0 ${spacing.xXLarge};
//   max-width: 960px;
//   margin: 0 auto;

//   @media (max-width: ${breakpoints.tablet}) {
//     padding: 100px ${spacing.large} 64px;
//   }
// `;

const SectionWrap = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px ${spacing.xXLarge};
  padding-left: 0;
  padding-right: 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px ${spacing.large};
  }
`;

const StorySection = styled(SectionWrap)`
  padding-top: ${spacing.large};
`;

const StoryLead = styled.p`
  margin: ${spacing.medium} 0;
  font-size: 1.25rem;
  line-height: 1.5;
  max-width: 960px;
`;

const StoryBody = styled.p`
  margin: 0 0 ${spacing.medium};
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 960px;
`;

const StoryPrompt = styled.p`
  margin: ${spacing.large} 0 ${spacing.xLarge};
  font-size: 1.45rem;
  font-weight: 500;
`;

const StoryTail = styled.div`
  margin-top: ${spacing.xXLarge};
  max-width: 960px;
`;

const MarcusCard = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: ${spacing.large};
  background: ${colors.lightblue};
  border-radius: 999px 0 0 999px;
  padding: ${spacing.large};
  padding-left: 60px;
  align-items: center;
  margin-left: max(20px, calc((100% - 1200px) / 2));
  padding-right: max(20px, calc((100% - 1200px) / 2));

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    margin: 0 20px;
    padding: ${spacing.large};
  }
`;

const MarcusAvatar = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #fff;
  justify-self: center;

  @media (max-width: ${breakpoints.tablet}) {
    justify-self: center;
  }
`;

const MarcusIntro = styled.div`
  overflow: hidden;
  max-height: ${(p) => (p.$hidden ? '0' : '800px')};
  opacity: ${(p) => (p.$hidden ? 0 : 1)};
  transform: translateY(${(p) => (p.$hidden ? '-16px' : '0')});
  pointer-events: ${(p) => (p.$hidden ? 'none' : 'auto')};
  transition:
    max-height 900ms ease,
    opacity 900ms ease,
    transform 900ms ease;
`;

const Foldout = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(p) => (p.$expanded ? spacing.medium : '0')};
  overflow: hidden;
  max-height: ${(p) => (p.$expanded ? '2000px' : '0')};
  opacity: ${(p) => (p.$expanded ? 1 : 0)};
  transform: translateY(${(p) => (p.$expanded ? '0' : '-12px')});
  pointer-events: ${(p) => (p.$expanded ? 'auto' : 'none')};
  transition:
    max-height 1200ms ease,
    opacity 900ms ease,
    transform 900ms ease,
    margin-top 900ms ease;
`;

const FoldoutInner = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: ${spacing.large};
  border: 1px solid #eee;
  line-height: 1.7;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.medium};
    font-size: 14px;
    line-height: 1.5;

    h3 {
      font-size: 18px;
      margin-top: ${spacing.medium};
      margin-bottom: ${spacing.small};
    }

    h4 {
      font-size: 16px;
      margin-top: ${spacing.medium};
      margin-bottom: ${spacing.small};
    }

    p {
      margin-bottom: ${spacing.medium};
    }
  }
`;

const Reveal = styled.div`
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 480ms ease,
    transform 480ms ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const inputFields = (t) => [
  { label: t('home.form.name'), type: 'text', name: 'name', id: 'name' },
  { label: t('home.form.email'), type: 'email', name: 'email', id: 'email' },
  { label: t('home.form.company'), type: 'text', name: 'company', id: 'company' },
];

const checkboxes = (t) => [
  {
    checkboxId: 'portal',
    checkboxName: 'areas',
    checkboxValue: 'portal',
    checkboxLabel: t('home.form.checkboxes.portal'),
  },
  {
    checkboxId: 'localization',
    checkboxName: 'areas',
    checkboxValue: 'localization',
    checkboxLabel: t('home.form.checkboxes.localization'),
  },
  {
    checkboxId: 'marketplace',
    checkboxName: 'areas',
    checkboxValue: 'marketplace',
    checkboxLabel: t('home.form.checkboxes.marketplace'),
  },
  {
    checkboxId: 'publisher-lists',
    checkboxName: 'areas',
    checkboxValue: 'publisher-lists',
    checkboxLabel: t('home.form.checkboxes.publisherLists'),
  },
  {
    checkboxId: 'chat',
    checkboxName: 'areas',
    checkboxValue: 'chat',
    checkboxLabel: t('home.form.checkboxes.chat'),
  },
];

const HomePage = ({ lockedAudience }) => {
  const { pathname } = useLocation();
  const { t } = useI18n();
  const ext = t('homeExtended');
  const marcus = ext.marcus;
  const isPreview = stripLocalePrefix(pathname) === '/preview';
  const audienceSeo = lockedAudience
    ? {
        title: t(`seo.audience.${lockedAudience}.title`),
        description: t(`seo.audience.${lockedAudience}.description`),
        path: lockedAudience === 'publishers' ? '/publisher' : '/creator',
      }
    : null;
  const formSectionRef = useRef(null);
  const storySectionRef = useRef(null);
  const handleScrollToStory = () => {
    if (storySectionRef.current) {
      const y =
        storySectionRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [introHidden, setIntroHidden] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const letterTimerRef = useRef(null);
  const [visibleIds, setVisibleIds] = useState({ form: true });

  React.useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal-id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-reveal-id');
          if (!id) return;
          if (entry.isIntersecting) {
            setVisibleIds((prev) => ({ ...prev, [id]: true }));
          } else {
            // Don't hide 'form' once it's been revealed
            if (id !== 'form') {
              setVisibleIds((prev) => ({ ...prev, [id]: false }));
            }
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (letterTimerRef.current) {
      clearTimeout(letterTimerRef.current);
      letterTimerRef.current = null;
    }

    if (isExpanded) {
      setIntroHidden(true);
      letterTimerRef.current = setTimeout(() => {
        setLetterVisible(true);
        letterTimerRef.current = null;
      }, 900);
    } else {
      setLetterVisible(false);
      letterTimerRef.current = setTimeout(() => {
        setIntroHidden(false);
        letterTimerRef.current = null;
      }, 1200);
    }

    return () => {
      if (letterTimerRef.current) {
        clearTimeout(letterTimerRef.current);
        letterTimerRef.current = null;
      }
    };
  }, [isExpanded]);

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pubblo',
    description:
      'The board game marketplace and submission platform connecting designers, publishers, and distributors worldwide',
    url: SITE_URL,
    logo: ORGANIZATION_LOGO,
    sameAs: [
      'https://twitter.com/pubblo',
      'https://linkedin.com/company/pubblo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@pubblo.com',
    },
    offers: {
      '@type': 'Offer',
      description: 'Board game licensing platform with 6 months free trial',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <SEOHead
        title={audienceSeo?.title || t('seo.home.title')}
        description={audienceSeo?.description || t('seo.home.description')}
        path={audienceSeo?.path || '/'}
        exactTitle={!audienceSeo}
        noindex={isPreview}
        structuredData={homeStructuredData}
      />
      <div>
        <Hero
          onScrollToSection={handleScrollToStory}
          lockedAudience={lockedAudience}
          superTitle={t('home.hero.superTitle')}
          publisherPillLabel={t('home.hero.forPublishers')}
          designerPillLabel={t('home.hero.forDesigners')}
          audiences={{
            publishers: {
              headline: t('home.hero.publishers.headline'),
              subhead: t('home.hero.publishers.subhead'),
              support: t('home.hero.publishers.support'),
              ctaText: t('home.hero.publishers.ctaText'),
            },
            designers: {
              headline: t('home.hero.designers.headline'),
              subhead: t('home.hero.designers.subhead'),
              support: t('home.hero.designers.support'),
              ctaText: t('home.hero.designers.ctaText'),
            },
          }}
        />
        <Reveal
          data-reveal-id='what'
          className={visibleIds['what'] ? 'is-visible' : ''}
        >
          <StorySection ref={storySectionRef}>
            <h2 style={{ marginTop: 0 }}>{t('home.story.title')}</h2>
            <StoryLead>{t('home.story.lead')}</StoryLead>
            <StoryBody>{t('home.story.body1')}</StoryBody>
            <StoryBody>{t('home.story.body2')}</StoryBody>
            <StoryPrompt>
              {t('home.story.promptBefore')}{' '}
              <strong>{t('home.story.promptStrong')}</strong>
            </StoryPrompt>

            <WhoAreYouFlow />

            <StoryTail>
              <h3>{t('home.story.notEitherTitle')}</h3>
              <StoryBody>
                {t('home.story.notEitherBody')}
                <LocalizedLink to='/contact'>{t('home.story.contactLink')}</LocalizedLink>
                {t('home.story.notEitherSuffix')}
              </StoryBody>
            </StoryTail>
          </StorySection>
        </Reveal>
        <RollingBanner
          mobileOnly
          fadeAtCenter={false}
          headingAlignment='full'
        />
        <Reveal
          data-reveal-id='marcus'
          className={visibleIds['marcus'] ? 'is-visible' : ''}
        >
          <SectionWrap style={{ paddingBottom: 0 }}>
            <h2 style={{ marginTop: 0 }}>{ext.whyWeCreated}</h2>
          </SectionWrap>
          <MarcusCard>
            <MarcusAvatar src='/1706627130390.jfif' alt={marcus.avatarAlt} />
            <div>
              <MarcusIntro $hidden={introHidden} aria-hidden={introHidden}>
                <p style={{ fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                  {marcus.intro1}
                </p>
                <p
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.6',
                    marginTop: spacing.medium,
                  }}
                >
                  {marcus.intro2.split(marcus.intro2Highlight)[0]}
                  <strong>{marcus.intro2Highlight}</strong>
                  {marcus.intro2.split(marcus.intro2Highlight)[1]}
                </p>
                <div style={{ marginTop: spacing.medium, fontWeight: 600 }}>
                  {marcus.signature}
                </div>
              </MarcusIntro>
              <div style={{ marginTop: spacing.medium }}>
                <Button
                  text={isExpanded ? marcus.collapse : marcus.expand}
                  onClick={() => setIsExpanded((prev) => !prev)}
                  aria-expanded={isExpanded}
                />
              </div>
              <Foldout $expanded={letterVisible} aria-hidden={!letterVisible}>
                <FoldoutInner>
                  <h3 style={{ marginTop: 0 }}>{marcus.letterTitle}</h3>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                      marginBottom: spacing.large,
                    }}
                  >
                    {marcus.quote}
                  </p>
                  {marcus.sections.map((section) => (
                    <React.Fragment key={section.heading}>
                      <h4>{section.heading}</h4>
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </React.Fragment>
                  ))}
                  <p style={{ marginTop: spacing.medium }}>
                    {marcus.closing}
                    <br />
                    <strong>{marcus.signatureName}</strong>
                    <br />
                    {marcus.signatureTitle}
                  </p>
                </FoldoutInner>
              </Foldout>
            </div>
          </MarcusCard>
        </Reveal>

        <SectionWrap style={{ display: 'none' }}>
          <Reveal
            data-reveal-id='deals'
            className={visibleIds['deals'] ? 'is-visible' : ''}
          >
            <div id='early-bird-deals'>
              <EarlyBirdDeals />
            </div>
          </Reveal>
        </SectionWrap>
        <SectionWrap>
          <Reveal
            data-reveal-id='form'
            className={visibleIds['form'] ? 'is-visible' : ''}
          >
            <FormComponent
              headline=''
              text=''
              inputFields={inputFields(t)}
              checkboxes={checkboxes(t)}
              ref={formSectionRef}
            />
          </Reveal>
        </SectionWrap>
      </div>
    </>
  );
};

export default HomePage;
