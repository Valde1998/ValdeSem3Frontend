import React from 'react';

const EventHandlingExample = () => {
  const handleClick = (event) => {
    console.log('Button clicked!', event);
    console.log('Event type:', event.type); 
  };

  return (
    <button onClick={handleClick}>Klik mig!</button>
  );
};

export default EventHandlingExample;
