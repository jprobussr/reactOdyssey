import React from 'react';
import './App.css';
import { languages } from './languages.js';

const AssemblyEndgame = () => {
  const langEl = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    return (
      <span className='chips' style={styles} key={lang.name}>
        {lang.name}
      </span>
    )
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <section className="game-status">
        <h2>You Win!</h2>
        <p>Well Done! 🥳</p>
      </section>

      <section className='language-chips'>
        {langEl}
      </section>
    </main>
  );
};

export default AssemblyEndgame;
