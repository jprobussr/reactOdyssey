import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <span className="dot" aria-hidden></span>
        <h1 className="brand">my project journal</h1>
      </div>
    </header>
  );
};

export default Header;
