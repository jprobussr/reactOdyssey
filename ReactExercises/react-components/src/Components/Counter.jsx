import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((c) => c - 1)
  }

  const handleIncrement = () => {
    setCount((c) => c + 1);
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <article className="card counter" aria-labelledby="counter-title">
      <h2 id="counter-title">Counter</h2>

      <p className="counter value" aria-live="polite">
        Count: {count}
      </p>

      <div className="counter__buttons">
        <button onClick={handleDecrement} aria-label="Decrease Count">-1</button>
        <button onClick={handleIncrement} aria-label="Increase Count">+1</button>
        <button onClick={handleReset} aria-label="Reset Count">Reset</button>
      </div>
    </article>
  );
};

export default Counter;
