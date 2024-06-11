import React from 'react';

// Barnekomponent
const Greeting = (props) => {
  return <h1>Hej, {props.name}!</h1>;
};

// Komponent med children
const Layout = (props) => {
  return (
    <div>
      <header>Mit Websted</header>
      <main>{props.children}</main>
      <footer>Kontakt os</footer>
    </div>
  );
};

// Forælderkomponent
const App = () => {
  return (
    <Layout>
      <Greeting name="Anders" />
      <p>Velkommen til vores websted.</p>
    </Layout>
  );
};

export default App;
