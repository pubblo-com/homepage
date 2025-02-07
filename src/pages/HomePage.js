import React from 'react';
import { spacing, typography, colors } from '../styles/tokens';
// import Button from '../components/Button';
import Hero from '../components/Hero';
import USPComponent from '../components/USPComponent.js';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import iconWhite1 from '../assets/icon-white1.svg';
import iconWhite2 from '../assets/icon-white2.svg';
import TextImageComponent from '../components/TextImageComponent.js';


const publisherUsps = [
  {
    icon: icon1,
    heading: 'Save time handling incoming pitches',
    description: 'Using the platform as your white label CRM tool for incoming pitches, with an easy-to-use interface and standardized pitch format.',
  },
  {
    icon: icon2,
    heading: 'Increase your funnel of new games',
    description: 'By scouting the platform for unpublished games and published games available for localization and distribution.',
  },
  {
    icon: icon3,
    heading: 'Connect with game designers',
    description: 'And make requests for new games',
  },
  {
    icon: icon1,
    heading: 'Scale your existing games to new markets',
    description: 'By finding partnerships in new geographies',
  },
];

const designerUsps = [
  {
    icon: iconWhite1,
    heading: 'Reach all publishers with one pitch',
    description: 'You might just have an idea for a game, or you might be launching a crowdfunding campaign. Wherever you are in the process, you can pitch your game to publishers and distributors to increase the reach and chances of success for your game.',
  },
  {
    icon: iconWhite2,
    heading: 'Another usp',
    description: 'By scouting the platform for unpublished games and published games available for localization and distribution.',
  },
];

const HomePage = () => {
  // const handleClick = () => alert('Button clicked!');
  return (
    <div>
      {/* <Button text="Click me" onClick={handleClick} /> */}
      <Hero />
      <USPComponent
        headline='Key benefits for publishers'
        usps={publisherUsps}
      />
      <USPComponent
        headline='Key benefits for game designers'
        usps={designerUsps}
        backgroundColor={colors.primary}
        textColor={colors.background}
      />
      <TextImageComponent
        headline='Beta version live Q2 2025'
        text='Platform design and development currently ongoing.'
      
      />
    </div>
  );
};

export default HomePage;