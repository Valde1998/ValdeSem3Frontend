import React, { useState, useEffect } from 'react';
const ErrorBoundary = ({ children }) => {
const [hasError, setHasError] = useState(false);

useEffect(() => {
const handleError = (error, info) => {
console.error('Error caught by error boundary:', error, info);
setHasError(true);
};

window.addEventListener('error', handleError);
return () => {
window.removeEventListener('error', handleError);
};
}, []);

if (hasError) {
return <h1>Something went wrong.</h1>;
}
return children;
};

const MyComponent = () => {
return (
<ErrorBoundary>
{/* The rest of the component tree goes here */}
</ErrorBoundary>
);
};
