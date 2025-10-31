import React, { useState } from 'react';
import './App.css';
import { languages } from './languages.js';

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState('typescript');
  const [guessedLetter, setGuessedLetter] = useState([]);
  console.log(guessedLetter);

  const addGuessedLetter = (letter) => {
    setGuessedLetter((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  };

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const langEl = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    return (
      <span className="chip" style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord
    .split('')
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  const keyboardElements = alphabet.split('').map((letter) => (
    <button key={letter} onClick={() => addGuessedLetter(letter)}>
      {letter.toUpperCase()}
    </button>
  ));

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

      <section className="language-chips">{langEl}</section>

      <section className="word">{letterElements}</section>

      <section className="keyboard">{keyboardElements}</section>
    </main>
  );
};

export default AssemblyEndgame;
