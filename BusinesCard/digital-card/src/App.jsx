import React from 'react';
import Card from './components/Card.jsx';

import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar />

      <main className="page">
        <section className="container hero">
          <h1 className="h1">Component Practice</h1>
          <p className="lead">
            Building a reusable UI library in React 19 with Vite - one clean
            component at a time.
          </p>
        </section>
        <section className="container content">
          {/* Drop components here as you build them */}
          {/* <Card ... /> */}
        </section>
      </main>

        <Footer />
    
    </>
  );
};

export default App;
