import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Tæller: {count}</p>
      <button onClick={increment}>Øg</button>
    </div>
  );
};

export default Counter;
