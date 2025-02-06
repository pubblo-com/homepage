import React from 'react';
import Button from '../components/Button';

const HomePage = () => {
  const handleClick = () => alert('Button clicked!');
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
};

export default HomePage;