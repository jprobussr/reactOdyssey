import React, { useState } from 'react';
import Die from './components/Die.jsx';
import './App.css';


const newDie = () => {
  return {
    id: crypto.randomUUID(),
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
  };
};

const allNewDice = () => {
  return Array.from({ length: 10 }, () => newDie());
};

const App = () => {
  const [dice, setDice] = useState(allNewDice());

  const toggleHold = (id) => {
    setDice((prev) =>
      prev.map((d) => (d.id === id ? { ...d, isHeld: !d.isHeld } : d))
    );
  };

  const rollDice = () => {
    setDice((prev) => prev.map((d) => (d.isHeld ? d : newDie())));
  };

  const allHeld = dice.every((d) => d.isHeld);
  const allSame = dice.every((d) => d.value === dice[0].value);
  const tenzies = allHeld && allSame;

  const newGame = () => setDice(allNewDice());

  return (
    <main className="app">
      <h1>Tenzies</h1>
      <p className="hint">
        Roll until all dice are the same. Click a die to hold it.
      </p>

      <div className="dice">
        {dice.map((d) => (
          <Die
            key={d.id}
            value={d.value}
            isHeld={d.isHeld}
            onClick={() => toggleHold(d.id)}
          />
        ))}
      </div>

      {tenzies && (
        <p role="status" className="win">
          🎉 You win! Press New Game.
        </p>
      )}

      <div className="controls">
        <button 
        className="button" 
        onClick={tenzies ? newGame : rollDice}
        aria-label={tenzies ? 'Start a new game' : 'Roll unheld dice'}
        >
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
};

export default App;
