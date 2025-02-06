import React from 'react';
// import Button from '../components/Button';
import Hero from '../components/Hero';
import USPComponent from '../components/USPComponent.js';

const publisherUsps = [
  {
    icon: 'icon1.svg',
    heading: 'Save time handling incoming pitches',
    description: 'Using the platform as your white label CRM tool for incoming pitches, with an easy-to-use interface and standardized pitch format.',
  },
  {
    icon: 'icon2.svg',
    heading: 'Increase your funnel of new games',
    description: 'By scouting the platform for unpublished games and published games available for localization and distribution.',
  },
  {
    icon: 'icon3.svg',
    heading: 'Connect with game designers',
    description: 'And make requests for new games',
  },
  {
    icon: 'icon4.svg',
    heading: 'Scale your existing games to new markets',
    description: 'By finding partnerships in new geographies',
  },
];

const HomePage = () => {
  // const handleClick = () => alert('Button clicked!');
  return (
    <div>
      {/* <h1>Welcome to the Home Page</h1>
      <Button text="Click me" onClick={handleClick} /> */}
      <Hero />
      <USPComponent
        headline='Key benefits for publishers'
        usps={publisherUsps}
      />
    </div>
  );
};

export default HomePage;