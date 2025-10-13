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
import TextImageComponent from '../components/TextImageComponent.js';
// removed unused TextComponent import
import FormComponent from '../components/FormComponent.js';
import BigMessageComponent from '../components/BigMessageComponent.js';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';

const SectionWrap = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px ${spacing.large};
  }
`;

const MarcusCard = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: ${spacing.large};
  background: #ffe1e7;
  border-radius: 20px;
  padding: ${spacing.large};
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    align-items: center;
  }
`;

const MarcusAvatar = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #fff;
  justify-self: center;

  @media (max-width: ${breakpoints.tablet}) {
    justify-self: center;
  }
`;


const Foldout = styled.div`
  margin-top: ${spacing.medium};
  background: #fff;
  border-radius: 16px;
  padding: ${spacing.large};
  border: 1px solid #eee;

  @media (min-width: 770px) {
    position: relative;
    left: calc(-160px - ${spacing.large});
    width: calc(100% + 160px + ${spacing.large});
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.small};
    font-size: 14px;
    line-height: 1.4;
    margin-left: -${spacing.small};
    margin-right: -${spacing.small};

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
  const [showMarcus, setShowMarcus] = useState(false);
  const [visibleIds, setVisibleIds] = useState({});

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
            setVisibleIds((prev) => ({ ...prev, [id]: false }));
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
    "logo": "https://pubblo.com/logo.png",
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
      <BigMessageComponent
        headline='What is Pubblo?'
        text='Pubblo is a deal engine where publishers, designers, and distributors connect to bring new board games to market. Whether you’re scouting fresh titles, evaluating pitches, or looking for distribution partners, Pubblo is for you.'
        underlinecolor={colors.contrast}
      />
      </Reveal>
      <SectionWrap>
        <Reveal data-reveal-id='marcus' className={visibleIds['marcus'] ? 'is-visible' : ''}>
          <h2 style={{ marginTop: 0 }}>Why we created Pubblo</h2>
          <MarcusCard>
            <MarcusAvatar src='/1706627130390.jfif' alt='Marcus Carleson' />
            <div>
              <p style={{ fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                Hi, I'm Marcus, the creator of HITSTER – Europe's best selling game 2024. I'm thrilled to introduce you to my new project: PUBBLO
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: spacing.medium }}>
                Pubblo is a digital platform designed to match and connect <strong>publishers, distributors, and creators</strong> for licensing and distribution opportunities in the board game industry
              </p>
              <div style={{ marginTop: spacing.medium, fontWeight: 600 }}>
                Marcus Carleson — Chairman and founder of Pubblo, creator of HITSTER
              </div>
            <div style={{ marginTop: spacing.medium }}>
              <Button text={showMarcus ? 'Hide full letter ▴' : 'Read the full letter ▾'} onClick={() => setShowMarcus(!showMarcus)} />
              </div>
              {showMarcus && (
                <Foldout>
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
                </Foldout>
              )}
            </div>
          </MarcusCard>
        </Reveal>
      </SectionWrap>

      <SectionWrap>
        <Reveal data-reveal-id='spiel' className={visibleIds['spiel'] ? 'is-visible' : ''}>
          <SpielTeaser>
            <h2 style={{ marginTop: 0 }}>Pitch Competition</h2>
            <p>
              Starting on the 23rd of October, the first day of SPIEL in Essen, we're running a pitch competition. The competition is open until the 30th of November but register already now - early birds will get an advantage.
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
      <Reveal data-reveal-id='usps' className={visibleIds['usps'] ? 'is-visible' : ''}>
      <USPComponent
        headline='Key benefits'
        usps={publisherUsps}
        backgroundcolor={colors.beige}
        textcolor={colors.text}
      />
      </Reveal>
      <Reveal data-reveal-id='beta' className={visibleIds['beta'] ? 'is-visible' : ''}>
      <TextImageComponent
        headline='Beta version is live'
        text='Platform design and development currently ongoing.'
        backgroundcolor={colors.beige}
      />
      </Reveal>
      <Reveal data-reveal-id='form' className={visibleIds['form'] ? 'is-visible' : ''}>
      <FormComponent
        headline='Get 6 months for free by joining our test group'
        text='State which modules you’re interested in and fill in your contact details below.'
        inputFields={inputFields}
        checkboxes={checkboxes}
        ref={formSectionRef}
      />
      </Reveal>
      </div>
    </>
  );
};

export default HomePage;
