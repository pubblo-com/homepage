import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/tokens';
import { spacing, breakpoints } from '../styles/tokens';
import Hero from '../components/Hero';
import USPComponent from '../components/USPComponent.js';
import iconRocket from '../assets/icon-white-rocket.svg';
import iconClock from '../assets/icon-white-clock.svg';
import iconStars from '../assets/icon-white-stars.svg';
//import TextImageComponent from '../components/TextImageComponent.js';
// removed unused TextComponent import
import FormComponent from '../components/FormComponent.js';
import BigMessageComponent from '../components/BigMessageComponent.js';
import EarlyBirdDeals from '../components/EarlyBirdDeals.js';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import RollingBanner from '../components/RollingBanner';
import { isSpielPitchActive } from '../utils/spielPitch';

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
  transition: max-height 900ms ease, opacity 900ms ease, transform 900ms ease;
`;

const BenefitsWrapper = styled.div`
  background-color: ${colors.pink};
  width: 100%;
  /* Reduce right-side empty space by tightening the angle */
  clip-path: polygon(0 80px, calc(100% - 80px) 0, calc(100% - 260px) 100%, 0 100%);
  margin-top: 32px;
  
  @media (max-width: ${breakpoints.tablet}) {
    /* Keep similar angle but with reduced right margin on laptops */
    clip-path: polygon(0 60px, calc(100% - 60px) 0, calc(100% - 220px) 100%, 0 100%);
  }

  @media (max-width: ${breakpoints.mobile}) {
    /* Mobile: minimal right margin and gentler right-edge slope */
    clip-path: polygon(0 40px, calc(100% - 5px) 0, calc(100% - 80px) 100%, 0 100%);
  }
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
  transition: max-height 1200ms ease, opacity 900ms ease, transform 900ms ease, margin-top 900ms ease;
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

const SpielTeaser = styled.div`
  background: ${colors.beige};
  border-radius: 20px;
  padding: ${spacing.xLarge};
`;

const Reveal = styled.div`
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 480ms ease, transform 480ms ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const publisherUsps = [
  {
    icon: iconRocket,
    heading: 'Scale your existing games to new markets',
    description:
      'Expand globally by making your games available for localization and distribution in new geographies.',
  },
  {
    icon: iconStars,
    heading: 'Spot tomorrow’s hit games first',
    description:
      'Find the best new games for your portfolio by scouting with elaborate filters.',
  },
  {
    icon: iconClock,
    heading: 'Make pitch evaluation easy',
    description:
      'Organize and evaluate incoming pitches efficiently with the CRM tool and a standardized pitch format.',
  },
];

const inputFields = [
  { label: 'Name', type: 'text', name: 'name', id: 'name' },
  { label: 'Email', type: 'email', name: 'email', id: 'email' },
  { label: 'Phone', type: 'tel', name: 'phone', id: 'phone' },
  { label: 'Company', type: 'text', name: 'company', id: 'company' },
  { label: 'Address', type: 'text', name: 'address', id: 'address' },
];

const checkboxes = [
  {
    checkboxId: 'crm',
    checkboxName: 'areas',
    checkboxValue: 'crm',
    checkboxLabel: 'The CRM tool for receiving pitches from game designers',
  },
  {
    checkboxId: 'scouting',
    checkboxName: 'areas',
    checkboxValue: 'scouting',
    checkboxLabel: 'Scouting for new games (unpublished and published)',
  },
  {
    checkboxId: 'connecting',
    checkboxName: 'areas',
    checkboxValue: 'connecting',
    checkboxLabel: 'Connecting with game designers',
  },
  {
    checkboxId: 'newGeographies',
    checkboxName: 'areas',
    checkboxValue: 'newGeographies',
    checkboxLabel:
      'Making my games available for localization and distribution in new geographies',
  },
];

const HomePage = ({ lockedAudience }) => {
  const navigate = useNavigate();
  const formSectionRef = useRef(null);
  const handleGoToLogin = () => {
    navigate('/launch#/create-account/1-email-password');
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [introHidden, setIntroHidden] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const letterTimerRef = useRef(null);
  const [visibleIds, setVisibleIds] = useState({ form: true });
  const spielPitchActive = isSpielPitchActive();

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
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pubblo",
    "description": "The deal engine connecting board game designers, publishers, and distributors worldwide",
    "url": "https://pubblo.com",
  "logo": "https://pubblo.com/logo-pubblo.png",
    "sameAs": [
      "https://twitter.com/pubblo",
      "https://linkedin.com/company/pubblo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@pubblo.com"
    },
    "offers": {
      "@type": "Offer",
      "description": "Board game licensing platform with 6 months free trial",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

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

  return (
    <>
      <SEOHead 
        title="The Deal Engine for Board Game Licensing"
        description="Connect designers, publishers, and distributors worldwide. Streamline licensing deals with standardized pitches, automated scoring, and team collaboration. Get 6 months free."
        keywords="board game licensing, game publishing platform, deal engine, game designers, publishers, distributors, pitch platform"
        canonical="https://pubblo.com"
        structuredData={homeStructuredData}
      />
      <div>
      <Hero
        onScrollToSection={handleGoToLogin}
        lockedAudience={lockedAudience}
        audiences={{
          publishers: {
            headline: "Don't let old systems hold you back",
            subhead:
              "Turn emails and Excel into efficient workflows with Pubblo's digital tool for trading board game licenses and distribution rights.",
            support: "Work smarter. With Pubblo, it's simple.",
            ctaText: 'Start free trial',
          },
          designers: {
            headline: 'One pitch to reach them all',
            subhead:
              'Make compelling and informative pitches for your games with Pubblo and reach new partners and markets.',
            support: "Work smarter. With Pubblo, it's simple.",
            ctaText: 'Start free trial',
          },
        }}
      />
      <Reveal data-reveal-id='what' className={visibleIds['what'] ? 'is-visible' : ''}>
      <SectionWrap>
        <BigMessageComponent
          text='Pubblo is a deal engine where publishers, designers, and distributors connect to bring new board games to market. Whether you’re scouting fresh titles, evaluating pitches, or looking for distribution partners, Pubblo is for you.'
          underlinecolor={colors.contrast}
          style={{ padding: 0 }}
        >
          What is <span style={{ color: colors.contrast }}>Pubblo</span>?
        </BigMessageComponent>
      </SectionWrap>
      </Reveal>
      <RollingBanner mobileOnly fadeAtCenter={false} headingAlignment='full' />
      <Reveal data-reveal-id='marcus' className={visibleIds['marcus'] ? 'is-visible' : ''}>
        <SectionWrap style={{ paddingBottom: 0 }}>
          <h2 style={{ marginTop: 0 }}>Why we created Pubblo</h2>
        </SectionWrap>
        <MarcusCard>
            <MarcusAvatar src='/1706627130390.jfif' alt='Marcus Carleson' />
            <div>
              <MarcusIntro $hidden={introHidden} aria-hidden={introHidden}>
                <p style={{ fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                  Hi, I'm Marcus, the creator of HITSTER – Europe's best selling game 2024. I'm thrilled to introduce you to my new project: PUBBLO
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: spacing.medium }}>
                  Pubblo is a digital platform designed to match and connect <strong>publishers, distributors, and creators</strong> for licensing and distribution opportunities in the board game industry
                </p>
                <div style={{ marginTop: spacing.medium, fontWeight: 600 }}>
                  Marcus Carleson — Chairman and founder of Pubblo, creator of HITSTER
                </div>
              </MarcusIntro>
            <div style={{ marginTop: spacing.medium }}>
              <Button
                text={isExpanded ? 'Hide full letter ▴' : 'Read the full letter ▾'}
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
              />
              </div>
              <Foldout $expanded={letterVisible} aria-hidden={!letterVisible}>
                <FoldoutInner>
                  <h3 style={{ marginTop: 0 }}>Letter from Marcus</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', fontStyle: 'italic', marginBottom: spacing.large }}>
                    For a long time, people came to me to get connected in the business… I thought about how I could help — and Pubblo was the answer.
                  </p>
                  <h4>The gap we saw</h4>
                  <p>
                    Every year, thousands of brilliant board games are imagined, prototyped, and play‑tested. Some find their audience quickly; many don’t. The line between a successful launch and a forgotten campaign is razor‑thin. A Kickstarter that barely funds – or even misses – can still hide a game with enormous potential.
                  </p>
                  <p>
                    I’ve seen this up close. Take HITSTER. The original crowdfunding campaign was a close call; it almost didn’t make it. Today HITSTER is the best‑selling game in Europe. The difference wasn’t a sudden change in the game’s quality – it was access: getting the concept in front of the right people at the right time, with a pitch that made evaluation easy.
                  </p>
                  <h4>The problem</h4>
                  <p>
                    Designers compete for limited attention. You don’t just need a pretty page; you need a structured, comparable pitch that answers the questions a decision‑maker asks in the first thirty seconds. Who is it for? How does it play? What’s unique? How does it fit a catalogue?
                  </p>
                  <p>
                    On the other side of the table, publishers are actively searching for exciting projects – but they are overwhelmed by noise. Submissions are often wonderful games that simply don’t match current portfolio strategy, audience or price point.
                  </p>
                  <h4>Our approach</h4>
                  <p>
                    Pubblo creates a shared language for discovery. We standardize the pitch so ideas can be compared fairly, and connect the dots with scoring and a lightweight licensing pipeline.
                  </p>
                  <p style={{ marginTop: spacing.medium }}>
                    Thank you for being part of this journey.
                    <br />
                    <strong>Marcus Carleson</strong>
                    <br />Chairman and founder, Pubblo
                  </p>
                </FoldoutInner>
              </Foldout>
            </div>
          </MarcusCard>
      </Reveal>

      {spielPitchActive && (
        <SectionWrap>
          <Reveal data-reveal-id='spiel' className={visibleIds['spiel'] ? 'is-visible' : ''}>
            <SpielTeaser>
              <h2 style={{ marginTop: 0 }}>Pitch Competition</h2>
              <p>
                Starting on the 24th of October, the second day of SPIEL in Essen, we're running a pitch competition. The competition is open until the 30th of November but register already now - early birds will get an advantage.
              </p>
              <p>
                If you've got a game, register and make a great pitch using Pubblo's pitch creation tool. You can win a pitch meeting with a matching publisher!
              </p>
              <p>
                If you're looking for games, tell us what you're interested in and you'll be invited to review matching pitches. Register now - you can be first to see the winning pitches.
              </p>
              <p>
                <strong>Join for free - no strings attached!</strong>
              </p>
              <div style={{ marginTop: spacing.medium }}>
                <a href='/spielpitch' style={{ textDecoration: 'none' }}>
                  <Button text='Learn more & register' $variant='contrast' />
                </a>
              </div>
            </SpielTeaser>
          </Reveal>
        </SectionWrap>
      )}
      <Reveal data-reveal-id='usps' className={visibleIds['usps'] ? 'is-visible' : ''}>
        <BenefitsWrapper>
          <USPComponent
            headline='Key benefits'
            usps={publisherUsps}
            backgroundcolor='transparent'
            textcolor={colors.text}
          />
        </BenefitsWrapper>
      </Reveal>
      <SectionWrap>
        <Reveal data-reveal-id='deals' className={visibleIds['deals'] ? 'is-visible' : ''}>
          <div id="early-bird-deals">
            <EarlyBirdDeals />
          </div>
        </Reveal>
      </SectionWrap>
      <SectionWrap>
        <Reveal data-reveal-id='form' className={visibleIds['form'] ? 'is-visible' : ''}>
        <FormComponent
          headline=''
          text=''
          inputFields={inputFields}
          checkboxes={checkboxes}
          ref={formSectionRef}
        />
        </Reveal>
      </SectionWrap>
      </div>
    </>
  );
};

export default HomePage;
