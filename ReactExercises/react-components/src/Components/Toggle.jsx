import React, { useState } from 'react';
import './Toggle.css'

const Toggle = () => {
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn(prev => !prev)
  };

  return (
    <article className="card toggle" aria-labelledby="toggle-title">
      <h2 id="toggle-title">Toggle</h2>

      <button
        className={`toggle__switch ${on ? 'is-on' : ''}`}
        role="switch"
        aria-checked={on}
        onClick={handleToggle}
      >
        <span className="toggle__thumb" />
      </button>

      <p className="toggle__status">Status: {on ? 'ON' : 'OFF'}</p>
    </article>
  );
};

export default Toggle;
