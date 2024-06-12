import React, { useState, useRef, useEffect } from 'react';

function CounterWithComparison() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  const renderCount = useRef(0);

  useEffect(() => {
    
    renderCount.current += 1;
    console.log(`Component rendered ${renderCount.current} times`);
  });

  const handleStateButtonClick = () => {
    
    setStateCount(prevStateCount => {
      const newStateCount = prevStateCount + 1;
      console.log(`State count updated: ${newStateCount}`);
      return newStateCount;
    });
  };

  const handleRefButtonClick = () => {
    
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
