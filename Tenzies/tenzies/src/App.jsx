import React, { useState } from 'react';
import './App.css';
import Die from './components/Die.jsx';

const App = () => {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map((num) => (
    <Die key={Math.random()} value={num} />
  ));

  const rollDice = () => {
    setDice(generateAllNewDice());
  };

  return (
    <main>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
};

export default App;
