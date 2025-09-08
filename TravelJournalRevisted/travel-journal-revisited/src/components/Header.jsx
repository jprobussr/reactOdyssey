import React from 'react';
import globe from '../globe.png';

const Header = () => {
  return (
    <header>
      <img src={globe} alt="Globe Icon" />
      <h1>my travel journal revisited.</h1>
    </header>
  );
};

export default Header;
