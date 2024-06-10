import React, { useState, useRef, useEffect } from 'react';

function CounterWithComparison() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  const renderCount = useRef(0);

  useEffect(() => {
    // Inkrementer renderCount ved hver render
    renderCount.current += 1;
    console.log(`Component rendered ${renderCount.current} times`);
  });

  const handleStateButtonClick = () => {
    // Opdaterer stateCount med useState
    setStateCount(prevStateCount => {
      const newStateCount = prevStateCount + 1;
      console.log(`State count updated: ${newStateCount}`);
      return newStateCount;
    });
  };

  const handleRefButtonClick = () => {
    // Opdaterer refCount med useRef
    refCount.current += 1;
    console.log(`Ref count updated: ${refCount.current}`);
  };

  return (
    <div>
      <h1>Counter with Comparison</h1>
      <p>Button has been clicked {stateCount} times (state).</p>
      <p>Button has been clicked {refCount.current} times (ref).</p>
      <button onClick={handleStateButtonClick}>Click Me (State)!</button>
      <button onClick={handleRefButtonClick}>Click Me (Ref)!</button>
    </div>
  );
}

export default CounterWithComparison;
