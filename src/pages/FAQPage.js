import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, colors } from '../styles/tokens';
import pabloFAQ from '../assets/pablo_FAQ.png';
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

const SectionTitle = styled.h2`
  margin: ${spacing.large} 0 ${spacing.medium};
`;

const QA = styled.details`
  background: #fff;
  border-radius: 12px;
  padding: ${spacing.medium} ${spacing.large};
  margin-bottom: ${spacing.medium};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  summary {
    cursor: pointer;
    font-weight: 700;
    outline: none;
    display: flex;
    align-items: center;
    gap: ${spacing.small};
  }
  summary::before {
    content: '';
    width: 14px;
    height: 14px;
    border: 2px solid ${colors.text};
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg);
    transition:
      transform 160ms ease,
      border-color 160ms ease;
    margin-right: 4px;
  }
  &[open] summary::before {
    transform: rotate(225deg);
    border-color: ${colors.contrast};
  }
  &[open] {
    border: 1px solid rgba(249, 81, 96, 0.15);
  }
  p {
    margin: ${spacing.small} 0 0;
    line-height: 1.7;
  }
`;

const FAQPage = () => {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I get my board game published?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There are three common paths: self‑publishing, crowdfunding, or working with a publisher. Pubblo supports all three. If you self‑publish, we can help you reach new markets through our distributor network. If you choose Kickstarter/crowdfunding, we can surface potential licensing partners who want to publish your game in new territories. If you want to focus on design and let someone else handle sales and marketing, we connect you and your game with publishers of all sizes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there any commitment or lock\u2011in period?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. There is no binding period. You can start, pause, or leave at any time. Marketplace listings are purchased in 6 or 12\u2011month periods. If you remove your game before the period ends, the remaining time is non\u2011refundable.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I prepare before pitching?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Create a clear rules overview, player count/age/time, component list, target audience, and a short video or image set of the prototype. Pubblo provides pitch templates and tagging so your idea is easy to evaluate and match with the right partners.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I keep ownership of my idea?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You retain all rights to your game. Pubblo is a platform for presenting, evaluating, and matching – not a rights owner. Any licensing agreement you sign is directly between you and the publisher.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will someone steal my idea?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It is uncommon for ideas to be stolen in the board-game industry, but it's fair to ask about risk. NDAs are rarely accepted at the scouting stage, and there is no way to guarantee that an idea can't be copied. What you can do is control access and create an audit trail. In Pubblo, every pitch has a private link that you share with whoever you choose: publishers, playtesters, or friends. If you ever feel the link has spread further than intended, you can reset it instantly. The old link stops working and a new one takes its place. Inside the platform, only verified publishers can browse and discover games. Other designers cannot see your pitches, so you are not exposed to competitors simply by being on Pubblo. We are also building view tracking, so you will be able to see who has opened your rulebook or other materials and when. That kind of digital audit trail offers stronger evidence and control than handing out files at a trade fair. In short: you decide the exposure, you control the link, and more visibility tools are on the way.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can publishers also list games on the Marketplace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. If you hold the rights to a game and are looking for a co-publisher, distribution partner, or licensing deal in another territory, you can list it on the Marketplace just like any designer would. This is particularly powerful if your game already has sales data behind it. All listings on the Marketplace are clearly labeled, so you can easily filter by whether a game comes from a publisher looking for a partner or from an independent designer pitching their original concept.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Pubblo help us scout better games, faster?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You receive standardized pitches, can set preferences and tags to auto‑score incoming ideas, and keep feedback and communication in one place. This reduces evaluation time and makes prioritization easier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we use Pubblo as our submission inbox?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Pubblo gives you a free, dedicated submission form that you can link to from your website or share directly with designers. Any pitch submitted through it lands straight in your private inbox inside Pubblo, ready to review. Instead of pitches arriving across different email addresses, Google Forms, or file sharing links, everything comes in through one channel in a consistent format. Your team can tag, comment, and collaborate on each submission without anything falling through the cracks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there any commitment period?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes and no, depending on your plan. The free plan has no commitment at all. You can join and leave whenever you want. The only condition is that you use Pubblo\'s submission form as your primary pitch intake on your website. For paid plans, we invoice 12 months upfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we collaborate as a team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Invite teammates, assign reviews, track status, and share notes with product, sales, and marketing to make green‑lighting smoother.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title='Frequently Asked Questions'
        description="Get answers to common questions about Pubblo's board game licensing platform. Learn about publishing, pitching, IP protection, and team collaboration for designers and publishers."
        keywords='board game FAQ, game publishing questions, licensing platform help, pitch protection, team collaboration'
        canonical='https://pubblo.com/faq'
        structuredData={faqStructuredData}
      />
      <Wrap>
        <Title>FAQ</Title>

        <SectionTitle>For creators</SectionTitle>
        <QA>
          <summary>How do I get my board game published?</summary>
          <p>
            There are three common paths: self‑publishing, crowdfunding, or
            working with a publisher. Pubblo supports all three. If you
            self‑publish, we can help you reach new markets through our
            distributor network. If you choose Kickstarter/crowdfunding, we can
            surface potential licensing partners who want to publish your game
            in new territories. If you want to focus on design and let someone
            else handle sales and marketing, we connect you and your game with
            publishers of all sizes.
          </p>
        </QA>
        <QA>
          <summary>Is there any commitment or lock‑in period?</summary>
          <p>
            No. There is no binding period. You can start, pause, or leave at
            any time. Marketplace listings are purchased in 6 or 12‑month
            periods. If you remove your game before the period ends, the
            remaining time is non‑refundable.
          </p>
        </QA>
        <QA>
          <summary>What should I prepare before pitching?</summary>
          <p>
            Create a clear rules overview, player count/age/time, component
            list, target audience, and a short video or image set of the
            prototype. Pubblo provides pitch templates and tagging so your idea
            is easy to evaluate and match with the right partners.
          </p>
        </QA>
        <QA>
          <summary>Do I keep ownership of my idea?</summary>
          <p>
            Yes. You retain all rights to your game. Pubblo is a platform for
            presenting, evaluating, and matching – not a rights owner. Any
            licensing agreement you sign is directly between you and the
            publisher.
          </p>
        </QA>

        <QA>
          <summary>Will someone steal my idea?</summary>
          <p>
            It is uncommon for ideas to be stolen in the board-game industry,
            but it's fair to ask about risk. NDAs are rarely accepted at the
            scouting stage, and there is no way to guarantee that an idea can't
            be copied. What you can do is control access and create an audit
            trail.
          </p>
          <p>
            In Pubblo, every pitch has a private link that you share with
            whoever you choose: publishers, playtesters, or friends. If you ever
            feel the link has spread further than intended, you can reset it
            instantly. The old link stops working and a new one takes its place.
          </p>
          <p>
            Inside the platform, only verified publishers can browse and
            discover games. Other designers cannot see your pitches, so you are
            not exposed to competitors simply by being on Pubblo.
          </p>
          <p>
            We are also building view tracking, so you will be able to see who
            has opened your rulebook or other materials and when. That kind of
            digital audit trail offers stronger evidence and control than handing
            out files at a trade fair.
          </p>
          <p>
            In short: you decide the exposure, you control the link, and more
            visibility tools are on the way.
          </p>
        </QA>

        <SectionTitle>For publishers</SectionTitle>
        <QA>
          <summary>Can publishers also list games on the Marketplace?</summary>
          <p>
            Yes. If you hold the rights to a game and are looking for a
            co-publisher, distribution partner, or licensing deal in another
            territory, you can list it on the Marketplace just like any designer
            would.
          </p>
          <p>
            This is particularly powerful if your game already has sales data
            behind it. Publishers browsing the Marketplace are looking for proven
            concepts, and a listing backed by real sales figures, retail
            presence, or crowdfunding results is a much stronger signal than an
            unproven pitch. It tells potential partners that the game works in at
            least one market, which significantly lowers their perceived risk.
          </p>
          <p>
            All listings on the Marketplace are clearly labeled, so you can
            easily filter by whether a game comes from a publisher looking for a
            partner or from an independent designer pitching their original
            concept.
          </p>
        </QA>
        <QA>          <summary>
            Isn’t this exactly like a pitch directory, matchmaking, or the CRM
            we already have?
          </summary>
          <p>
            Directories list pitches; matchmaking facilitates meetings; generic
            CRMs manage contacts. Pubblo is a<strong>deal engine</strong> that
            connects the dots: creators submit in a standardized format;
            publishers set preferences and <strong>auto‑score</strong> incoming
            ideas; teams review, comment and move items through a licensing
            pipeline. Read the full <a href='/compare'>comparison</a>.
          </p>
        </QA>

        <QA>
          <summary>How does Pubblo help us scout better games, faster?</summary>
          <p>
            You receive standardized pitches, can set preferences and tags to
            auto‑score incoming ideas, and keep feedback and communication in
            one place. This reduces evaluation time and makes prioritization
            easier.
          </p>
        </QA>
        <QA>
          <summary>Can we use Pubblo as our submission inbox?</summary>
          <p>
            Yes. Pubblo gives you a free, dedicated submission form that you can
            link to from your website or share directly with designers. Any pitch
            submitted through it lands straight in your private inbox inside
            Pubblo, ready to review.
          </p>
          <p>
            The benefit is consolidation. Instead of pitches arriving across
            different email addresses, Google Forms, or file sharing links,
            everything comes in through one channel in a consistent format. Your
            team can tag, comment, and collaborate on each submission without
            anything falling through the cracks.
          </p>
        </QA>
        <QA>
          <summary>Is there any commitment period?</summary>
          <p>
            Yes and no, depending on your plan.
          </p>
          <p>
            The free plan has no commitment at all. You can join and leave
            whenever you want. The only condition is that you use Pubblo's
            submission form as your primary pitch intake on your website.
          </p>
          <p>
            For paid plans, we invoice 12 months upfront.
          </p>
        </QA>
        <QA>
          <summary>Can we collaborate as a team?</summary>
          <p>
            Yes. Invite teammates, assign reviews, track status, and share notes
            with product, sales, and marketing to make green‑lighting smoother.
          </p>
        </QA>
        <SectionTitle>
          Didn't find the answer you were looking for?{' '}
          <a href='/contact'>Get in touch with us.</a>
        </SectionTitle>
      </Wrap>
      <img src={pabloFAQ} alt='' style={{ width: '100%', display: 'block' }} />
    </>
  );
};

export default FAQPage;
