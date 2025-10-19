import React from 'react';

const Die = ({ value = 1, isHeld = false, onClick }) => {
  return (
    <button
      className="die"
      onClick={onClick}
      aria-pressed={isHeld}
      type="button"
    >
      {value}
    </button>
  );
};

export default Die;
