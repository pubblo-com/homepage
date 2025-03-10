import React from 'react';
import { useRef } from 'react';
import { colors } from '../styles/tokens';
import Hero from '../components/Hero';
import USPComponent from '../components/USPComponent.js';
import iconRocket from '../assets/icon-white-rocket.svg';
import iconClock from '../assets/icon-white-clock.svg';
import iconStars from '../assets/icon-white-stars.svg';
import TextImageComponent from '../components/TextImageComponent.js';
import TextComponent from '../components/TextComponent.js';
import FormComponent from '../components/FormComponent.js';
import BigMessageComponent from '../components/BigMessageComponent.js';

const publisherUsps = [
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
  {
    icon: iconRocket,
    heading: 'Scale your existing games to new markets',
    description:
      'Expand globally by making your games available for localization and distribution  in new geographies.',
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
  const formSectionRef = useRef(null);
  const handleScroll = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero
        headline='Bringing games to life everywhere'
        tagline='Connecting board game designers, publishers and distributors'
        buttonText='Sign up for free trial'
        onScrollToSection={handleScroll}
      />
      <BigMessageComponent
        headline='What is Pubblo?'
        text='Pubblo is a platform where publishers, designers, and distributors connect to bring new board games to market. Whether you’re scouting fresh titles, evaluating pitches, or looking for distribution partners, Pubblo is for you.'
        underlinecolor={colors.contrast}
      />
      <USPComponent
        headline='Key benefits'
        usps={publisherUsps}
        backgroundcolor={colors.primary}
        textcolor={colors.background}
      />
      <TextImageComponent
        headline='Beta version live Q3 2025'
        text='Platform design and development currently ongoing.'
        backgroundcolor={colors.beige}
      />
      <FormComponent
        headline='Get 2 months for free by joining our test group'
        text='State which modules you’re interested in and fill in your contact details below.'
        smallText='*No monthly charge, other charges may occur.'
        inputFields={inputFields}
        checkboxes={checkboxes}
        ref={formSectionRef}
      />
      <TextComponent
        headline='About us'
        text='We’re a dedicated team of game designers and IT developers. Our mission is to assist in bringing new board games to life and bringing existing board games to new markets, by connecting people in the board game industry. We know from our experience how hard this can be, for all parties involved. But we also know how successful a partnership can be. Our founder Marcus Carleson ran a modestly successful Kickstarter campaign for his game Hitster in 2019, raising approx. 10 000 USD, but partnering with Jumbo, Hitster was the most sold game in Europe 2024.'
        backgroundcolor={colors.secondary}
        textcolor={colors.background}
        underlinecolor={colors.primary}
      />
    </div>
  );
};

export default HomePage;
