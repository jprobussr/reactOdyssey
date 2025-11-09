import React, { useState } from 'react';
import './App.css';
import { languages } from './languages.js';
import clsx from 'clsx';

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState('python');
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split('')
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const addGuessedLetter = (letter) => {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  };

  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const className = clsx('chip', isLanguageLost && 'lost');

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span style={styles} className={className} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord.split('').map((letter, index) => {
    return (
      <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ''}
      </span>
    );
  });

  const keyboardElements = alphabet.split('').map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const classNames = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={classNames}
        onClick={() => addGuessedLetter(letter)}
        key={letter}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const gameStatusClass = clsx('game-status', {
    won: isGameWon,
    lost: isGameLost,
  });

  const renderGameStatus = () => {
    if (!isGameOver) {
      return null;
    }

    if (isGameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Well Done! 🥳</p>
        </>
      );
    } else {
      return (
        <>
          <h2>Game Over</h2>
          <p>Try Again!</p>
        </>
      );
    }
  };

  return (
    <main>
      <header>
        <h1>Hang The Loser Language!</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <section className={gameStatusClass}>
        {renderGameStatus()}
      </section>

      <section className="language-chips">{languageElements}</section>

      <section className="word">{letterElements}</section>

      <section className="keyboard">{keyboardElements}</section>

      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
};

export default AssemblyEndgame;
