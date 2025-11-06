import React, { useState } from 'react';
import './App.css';
import { languages } from './languages.js';
import clsx from 'clsx';

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState('python');
  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(guessedLetters);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const addGuessedLetter = (letter) => {
    setGuessedLetters((prevLetters) => {
      return prevLetters.includes(letter) ? prev : [...prevLetters, letter]
    })
  }

  const languageElements = languages.map((language) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };

    return (
      <span className="chip" style={styles} key={language.name}>
        {language.name}
      </span>
    );
  });

  const letterElements = currentWord.split('').map((letter, index) => {
    return <span key={index}>{letter.toUpperCase()}</span>;
  });

  const keyboardElements = alphabet.split('').map((letter) => {
    return (
      <button onClick={() => addGuessedLetter(letter)} key={letter}>
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <header>
        <h1>Hang The Loser Language!</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <section className="game-status">
        <h2>You Win!</h2>
        <p>Well Done! 🥳</p>
      </section>

      <section className="language-chips">{languageElements}</section>

      <section className="word">{letterElements}</section>

      <section className="keyboard">{keyboardElements}</section>

      <button className="new-game">New Game</button>
    </main>
  );
};

export default AssemblyEndgame;
