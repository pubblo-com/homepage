import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, colors } from '../styles/tokens';
import SEOHead from '../components/SEOHead';

const Wrap = styled.main`
  padding: 120px ${spacing.xXLarge} 80px;
  max-width: 960px;
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
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
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
    transition: transform 160ms ease, border-color 160ms ease;
    margin-right: 4px;
  }
  &[open] summary::before {
    transform: rotate(225deg);
    border-color: ${colors.contrast};
  }
  &[open] {
    border: 1px solid rgba(249,81,96,0.15);
  }
  p { margin: ${spacing.small} 0 0; line-height: 1.7; }
`;

const FAQPage = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get my board game published?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are three common paths: self‑publishing, crowdfunding, or working with a publisher. Pubblo supports all three. If you self‑publish, we can help you reach new markets through our distributor network. If you choose Kickstarter/crowdfunding, we can surface potential licensing partners who want to publish your game in new territories. If you want to focus on design and let someone else handle sales and marketing, we connect you and your game with publishers of all sizes."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any commitment or lock‑in period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. There is no binding period. You can start, pause, or cancel at any time."
        }
      },
      {
        "@type": "Question",
        "name": "What should I prepare before pitching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Create a clear rules overview, player count/age/time, component list, target audience, and a short video or image set of the prototype. Pubblo provides pitch templates and tagging so your idea is easy to evaluate and match with the right partners."
        }
      },
      {
        "@type": "Question",
        "name": "Do I keep ownership of my idea?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You retain all rights to your game. Pubblo is a platform for presenting, evaluating, and matching – not a rights owner. Any licensing agreement you sign is directly between you and the publisher."
        }
      },
      {
        "@type": "Question",
        "name": "Will someone steal my idea?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is uncommon for ideas to be stolen in the board‑game industry, but it's fair to ask about risk. NDAs are rarely accepted at the scouting stage, and there is no way to guarantee that an idea can't be copied. What you can do is control access and create an audit trail. In Pubblo you choose the sharing level for every pitch: Private link (you share the pitch only with specific publishers), Open to verified publishers (discoverable by publisher accounts, not indexed on the public web), or Public (visible to anyone with the link when you want maximum reach). For private or publisher‑only links, Pubblo tracks who views your materials and when. That digital audit trail offers stronger evidence and control than handing out files at a trade fair."
        }
      },
      {
        "@type": "Question",
        "name": "How does Pubblo help us scout better games, faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You receive standardized pitches, can set preferences and tags to auto‑score incoming ideas, and keep feedback and communication in one place. This reduces evaluation time and makes prioritization easier."
        }
      },
      {
        "@type": "Question",
        "name": "Can we use our own submission form and import to Pubblo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can place a lightweight submission plugin on your website that captures incoming game pitches and sends them straight into Pubblo. From there, your team can work in one interface – tag, comment, contact, and collaborate – while seeing all pitches in a standardized, comparable format."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any commitment period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. There is no lock‑in. You can add users, change plan, or leave at any time."
        }
      },
      {
        "@type": "Question",
        "name": "Can we collaborate as a team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Invite teammates, assign reviews, track status, and share notes with product, sales, and marketing to make green‑lighting smoother."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions"
        description="Get answers to common questions about Pubblo's board game licensing platform. Learn about publishing, pitching, IP protection, and team collaboration for designers and publishers."
        keywords="board game FAQ, game publishing questions, licensing platform help, pitch protection, team collaboration"
        canonical="https://pubblo.com/faq"
        structuredData={faqStructuredData}
      />
      <Wrap>
        <Title>FAQ</Title>

      <SectionTitle>For creators</SectionTitle>
      <QA>
        <summary>How do I get my board game published?</summary>
        <p>
          There are three common paths: self‑publishing, crowdfunding, or working with a publisher.
          Pubblo supports all three. If you self‑publish, we can help you reach new markets through our
          distributor network. If you choose Kickstarter/crowdfunding, we can surface potential licensing
          partners who want to publish your game in new territories. If you want to focus on design and let
          someone else handle sales and marketing, we connect you and your game with publishers of all sizes.
        </p>
      </QA>
      <QA>
        <summary>Is there any commitment or lock‑in period?</summary>
        <p>No. There is no binding period. You can start, pause, or cancel at any time.</p>
      </QA>
      <QA>
        <summary>What should I prepare before pitching?</summary>
        <p>
          Create a clear rules overview, player count/age/time, component list, target audience, and a short
          video or image set of the prototype. Pubblo provides pitch templates and tagging so your idea is easy
          to evaluate and match with the right partners.
        </p>
      </QA>
      <QA>
        <summary>Do I keep ownership of my idea?</summary>
        <p>
          Yes. You retain all rights to your game. Pubblo is a platform for presenting, evaluating, and matching
          – not a rights owner. Any licensing agreement you sign is directly between you and the publisher.
        </p>
      </QA>

      <QA>
        <summary>Will someone steal my idea?</summary>
        <p>
          It is <strong>uncommon</strong> for ideas to be stolen in the board‑game industry, but it’s fair to
          ask about risk. NDAs are rarely accepted at the scouting stage, and there is no way to guarantee that an
          idea can’t be copied. What you can do is control access and create an audit trail.
        </p>
        <p>
          In Pubblo you choose the sharing level for every pitch:
        </p>
        <ul>
          <li><strong>Private link</strong>: you share the pitch only with the specific publishers you select.</li>
          <li><strong>Open to verified publishers</strong>: discoverable by publisher accounts, <em>not</em> indexed on the public web.</li>
          <li><strong>Public</strong>: visible to anyone with the link when you want maximum reach.</li>
        </ul>
        <p>
          For private or publisher‑only links, Pubblo <strong>tracks who views your materials</strong> (e.g. the
          rulebook) and when. That digital audit trail offers stronger evidence and control than handing out files
          at a trade fair, where follow‑up is difficult to verify. In short: you decide the exposure; Pubblo gives
          you the best available protection through controlled access and view tracking.
        </p>
      </QA>

      <SectionTitle>For publishers</SectionTitle>
      <QA>
        <summary>Isn’t this exactly like a pitch directory, matchmaking, or the CRM we already have?</summary>
        <p>
          Directories list pitches; matchmaking facilitates meetings; generic CRMs manage contacts. Pubblo is a
          <strong>deal engine</strong> that connects the dots: creators submit in a standardized format; publishers
          set preferences and <strong>auto‑score</strong> incoming ideas; teams review, comment and move items
          through a licensing pipeline. Read the full <a href='/compare'>comparison</a>.
        </p>
      </QA>

      <QA>
        <summary>How does Pubblo help us scout better games, faster?</summary>
        <p>
          You receive standardized pitches, can set preferences and tags to auto‑score incoming ideas, and keep
          feedback and communication in one place. This reduces evaluation time and makes prioritization easier.
        </p>
      </QA>
      <QA>
        <summary>Can we use our own submission form and import to Pubblo?</summary>
        <p>
          Yes. You can place a lightweight submission plugin on your website that captures incoming game pitches
          and sends them straight into Pubblo. From there, your team can work in one interface – tag, comment,
          contact, and collaborate – while seeing all pitches in a standardized, comparable format. Pubblo is
          designed with publishers in mind and supports the end‑to‑end evaluation workflow.
        </p>
      </QA>
      <QA>
        <summary>Is there any commitment period?</summary>
        <p>No. There is no lock‑in. You can add users, change plan, or leave at any time.</p>
      </QA>
      <QA>
        <summary>Can we collaborate as a team?</summary>
        <p>
          Yes. Invite teammates, assign reviews, track status, and share notes with product, sales, and marketing
          to make green‑lighting smoother.
        </p>
      </QA>
      </Wrap>
    </>
  );
};

export default FAQPage;


