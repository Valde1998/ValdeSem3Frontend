import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    console.log('Component rendered or count changed');

   
    return () => {
      console.log('Cleanup: Component will unmount or count will change');
    };
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
