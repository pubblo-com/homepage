import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { spacing, breakpoints } from '../styles/tokens';

const Wrap = styled.main`
  padding: 120px ${spacing.xXLarge} 80px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Card = styled.section`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${spacing.xLarge};
  background: #ffe1e7;
  border-radius: 20px;
  padding: ${spacing.xLarge};
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #fff;
`;

const Quote = styled.blockquote`
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
`;

const Byline = styled.div`
  margin-top: ${spacing.medium};
  font-weight: 600;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  background: #fff;
  border-radius: 16px;
  max-width: 800px;
  width: 92vw;
  padding: ${spacing.xLarge};
  line-height: 1.8;
  max-height: 80vh;
  overflow: auto;
`;

const ModalTitle = styled.h2`
  margin-top: 0;
`;

const CompanyPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Wrap>
      <Card>
        <Avatar src='/1706627130390.jfif' alt='Marcus Carleson' />
        <div>
          <h2 style={{ marginTop: 0 }}>Why we created Pubblo</h2>
          <Quote>
            “For a long time, people came to me to get connected in the business… I thought about how I
            could help — and Pubblo was the answer.”
          </Quote>
          <Byline>Marcus Carleson — Chairman and founder of Pubblo, creator of HITSTER</Byline>
          <div style={{ marginTop: spacing.medium }}>
            <Button text='Letter from Marcus' onClick={() => setOpen(true)} />
          </div>
        </div>
      </Card>

      <div style={{ marginTop: spacing.xXLarge }}>
        <h2>About us</h2>
        <p>
          We're a dedicated team of game designers and IT developers. Our mission is to assist in bringing new
          board games to life and bringing existing board games to new markets, by connecting people in the
          board game industry. We know from our experience how hard this can be, for all parties involved. But we
          also know how successful a partnership can be. Our founder Marcus Carleson ran a modestly successful
          Kickstarter campaign for his game Hitster in 2019, raising approx. 10 000 USD, but partnering with
          Jumbo, Hitster was the most sold game in Europe 2024.
        </p>
      </div>

      <div style={{ marginTop: spacing.xLarge }}>
        <h3>Company information</h3>
        <p>
          <strong>Magnus Hölcke</strong> - CEO<br />
          <strong>Marcus Carleson</strong> - Founder<br />
          <br />
          <strong>Pubblo AB</strong><br />
          Registration number: 559735-9735<br />
          Address: Storgatan 44, 903 26 Umeå, Sweden
        </p>
      </div>

      {open && (
        <ModalBackdrop onClick={() => setOpen(false)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Letter from Marcus</ModalTitle>
            <blockquote>
              “For a long time, people came to me to get connected in the business… I thought about how I could
              help — and Pubblo was the answer.”
            </blockquote>

            <h3>The gap we saw</h3>
            <p>
              Every year, thousands of brilliant board games are imagined, prototyped, and play‑tested. Some find
              their audience quickly; many don’t. The line between a successful launch and a forgotten campaign is
              razor‑thin. A Kickstarter that barely funds – or even misses – can still hide a game with enormous
              potential.
            </p>
            <p>
              I’ve seen this up close. Take HITSTER. The original crowdfunding campaign was a close call; it almost
              didn’t make it. Today HITSTER is the best‑selling game in Europe. The difference wasn’t a sudden change
              in the game’s quality – it was access: getting the concept in front of the right people at the right
              time, with a pitch that made evaluation easy.
            </p>

            <h3>The problem</h3>
            <p>
              For designers, attention is scarce. Your idea competes with a thousand others for a handful of
              publisher eyeballs. You don’t just need a pretty page; you need a structured, comparable pitch that
              answers the questions a decision‑maker asks in the first thirty seconds. Who is it for? How does it
              play? What’s unique? How does it fit a catalogue?
            </p>
            <p>
              On the other side of the table, publishers are actively searching for exciting projects – but they are
              overwhelmed by noise. Submissions are often wonderful games that simply don’t match current portfolio
              strategy, audience or price point. The result is frustration on both sides: designers feel unseen;
              publishers spend time sifting instead of discovering.
            </p>

            <h3>Our approach</h3>
            <p>
              Pubblo creates a shared language for discovery. We standardize the pitch so ideas can be compared
              fairly. Creators tag and describe their games in the dimensions that matter – theme, mechanics,
              audience, complexity, component footprint – and publishers/distributors express what they actually
              need right now. Then we connect the dots with scoring and a lightweight licensing pipeline.
            </p>

            <h3>What we’re building</h3>
            <p>
              Whether you’re a first‑time designer or an industry veteran, we want to make it easier for you to be
              found. Whether you’re a boutique publisher or a global catalogue owner, we want you to see fewer “no’s”
              and more of the right “yes.” Games deserve better than to live or die by attention alone. Our mission is
              to bring more great games to life – and to new markets – by helping the right people find each other
              faster.
            </p>

            <p style={{ marginTop: spacing.medium }}>
              Thank you for being part of this journey.
              <br />
              <strong>Marcus Carleson</strong>
              <br />Chairman and founder, Pubblo
            </p>
            <div style={{ marginTop: spacing.medium }}>
              <Button text='Close' onClick={() => setOpen(false)} />
            </div>
          </ModalCard>
        </ModalBackdrop>
      )}
    </Wrap>
  );
};

export default CompanyPage;


