import React from 'react';
import { colors } from '../styles/tokens';
import Hero from '../components/Hero';
import USPComponent from '../components/USPComponent.js';
import iconRocket from '../assets/icon-rocket.svg';
import iconHappy from '../assets/icon-happy.svg';
import iconClock from '../assets/icon-clock.svg';
import iconStars from '../assets/icon-stars.svg';
import iconWhiteClock from '../assets/icon-white-clock.svg';
import iconWhiteRocket from '../assets/icon-white-rocket.svg';
import TextImageComponent from '../components/TextImageComponent.js';
import TextComponent from '../components/TextComponent.js';
import FormComponent from '../components/FormComponent.js';

const publisherUsps = [
  {
    icon: iconClock,
    heading: 'Save time handling incoming pitches',
    description:
      'Using the platform as your white label CRM tool for incoming pitches, with an easy-to-use interface and standardized pitch format.',
  },
  {
    icon: iconStars,
    heading: 'Increase your funnel of new games',
    description:
      'By scouting the platform for unpublished games and published games available for localization and distribution.',
  },
  {
    icon: iconHappy,
    heading: 'Connect with game designers',
    description: 'And make requests for new games',
  },
  {
    icon: iconRocket,
    heading: 'Scale your existing games to new markets',
    description: 'By finding partnerships in new geographies',
  },
];

const designerUsps = [
  {
    icon: iconWhiteClock,
    heading: 'Reach all publishers with one pitch',
    description:
      'You might just have an idea for a game, or you might be launching a crowdfunding campaign. Wherever you are in the process, you can pitch your game to publishers and distributors to increase the reach and chances of success for your game.',
  },
  {
    icon: iconWhiteRocket,
    heading: 'Another usp',
    description:
      'By scouting the platform for unpublished games and published games available for localization and distribution.',
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

const HomePage = () => {
  return (
    <div>
      <Hero />
      <USPComponent
        headline='Key benefits for publishers'
        usps={publisherUsps}
      />
      <USPComponent
        headline='Key benefits for game designers'
        usps={designerUsps}
        backgroundcolor={colors.primary}
        textcolor={colors.background}
      />
      <TextImageComponent
        headline='Beta version live Q2 2025'
        text='Platform design and development currently ongoing.'
      />
      <FormComponent
        headline='Get 3 months for free by joining our test group'
        text='State which modules you’re interested in and fill in your contact details below.'
        smallText='*No monthly charge, other charges may occur.'
        inputFields={inputFields}
        checkboxes={checkboxes}
      />
      <TextComponent
        headline='About us'
        text='We’re a dedicated team of game designers and IT developers. Our mission is to assist in bringing new board games to life and bringing existing board games to new markets, by connecting people in the board game industry. We know from our experience how hard this can be, for all parties involved. But we also know how successful a partnership can be. Our founder Marcus Carleson ran a modestly successful Kickstarter campaign for his game Hitster in 2019, raising approx. 10 000 USD, but partnering with Jumbo, Hitster was the most sold game in Europe 2024.'
        backgroundcolor={colors.secondary}
        textcolor={colors.background}
      />
    </div>
  );
};

export default HomePage;
