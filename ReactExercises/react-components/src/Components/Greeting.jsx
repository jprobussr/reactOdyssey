import React, { useState } from 'react';
import './Greeting.css';

const Greeting = () => {
  const [name, setName] = useState('');

  const handleClear = () => setName('');

  return (
    <article className="card greeting">
      <h2>Greeting</h2>
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" value={name} />

      <button onClick={handleClear}>Clear</button>
      <p>{name ? `Hello, ${name}!` : 'Type your name above.'}</p>
    </article>
  );
};

export default Greeting;
