import React from 'react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <div>
      <p>Pubblo</p>
      <h1>A digital marketplace connecting the board game industry </h1>
      <p className="body-text-medium">Like visiting a fair, without the travel!</p>
      <Button text="Click me" />
      <h2>Example of h2</h2>
      <h3>Example of h3</h3>
      {/* Use p tag with class names for body text */}
      <p className="body-text">Example of body</p>
      <p className="body-text-large">Body text large</p>
      <p className="body-text-medium">Body text medium</p>
      <p className="body-text-small">Body text small</p>
      <a>länk</a>
    </div>
  );
};

export default Hero;
