import React from 'react';
// import Button from '../components/Button';
import Hero from '../components/Hero';

const HomePage = () => {
  const handleClick = () => alert('Button clicked!');
  return (
    <div>
      {/* <h1>Welcome to the Home Page</h1>
      <Button text="Click me" onClick={handleClick} /> */}
      <Hero />
    </div>
  );
};

export default HomePage;