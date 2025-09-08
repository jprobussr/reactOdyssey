import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  console.log(date);
  date.setDate(date.getDate() + count);

  const handleDecrement = () => {
    setCount((prev) => prev - step);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + step);
  };

  return (
    <>
      <div className="counter-controls">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="counter-controls">
        <button onClick={handleDecrement}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toString()}</span>
      </p>
    </>
  );
};

export default Counter;
