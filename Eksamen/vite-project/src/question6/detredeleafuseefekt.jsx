import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Effect function: Kør denne kode, når komponenten rendres eller count ændres
    console.log('Component rendered or count changed');

    // Cleanup function: Kør denne kode, når komponenten unmountes eller før næste effect-funktion køres
    return () => {
      console.log('Cleanup: Component will unmount or count will change');
    };
  }, [count]); // Dependency array: Kør effect-funktionen, når count ændres

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
