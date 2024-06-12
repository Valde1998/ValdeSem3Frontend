import React, { useState, useEffect } from 'react';

const WindowDimensions = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      console.log(`Window resized: ${window.innerWidth}x${window.innerHeight}`);
    };

    
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Window Dimensions</h1>
      <p>Width: {windowWidth}px</p>
      <p>Height: {windowHeight}px</p>
    </div>
  );
};

export default WindowDimensions;
