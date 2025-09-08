import React, { useState } from 'react';
import './App.css';
import padsData from './pad.js';
import Pad from './Pad.jsx';

const App = () => {
  const [pads, setPads] = useState(padsData);

  const toggle = (id) => {
    setPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  };

  const buttonElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={toggle}
      id={pad.id}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
};

export default App;
