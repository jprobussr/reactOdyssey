import React, { useState } from 'react';
import './App.css';
const questions = [
  {
    id: 1,
    question: 'What is JSX in React?',
    answer: 'A syntax extension for JavaScript that looks like HTML',
  },
  {
    id: 2,
    question: 'Which hook is used for state in functional components?',
    answer: 'useState',
  },
  {
    id: 3,
    question: 'What is the default port for React development server?',
    answer: '3000',
  },
  {
    id: 4,
    question: 'Which command creates a new React app with Vite?',
    answer: 'npm create vite@latest',
  },
  {
    id: 5,
    question: 'What does the Virtual DOM help with?',
    answer: 'Improving performance by minimizing DOM updates',
  },
  {
    id: 6,
    question: 'How do you pass data from parent to child component?',
    answer: 'Using props',
  },
  {
    id: 7,
    question: 'What does useEffect mainly handle?',
    answer: 'Side effects like API calls or subscriptions',
  },
  {
    id: 8,
    question: 'Which company developed React?',
    answer: 'Facebook (now Meta)',
  },
  {
    id: 9,
    question: 'What is the purpose of keys in lists?',
    answer: 'To help React identify and manage list items efficiently',
  },
  {
    id: 10,
    question: 'How do you start the React development server?',
    answer: 'npm start',
  },
];

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);


  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null)
  }


  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={`flashcard ${
            selectedId === question.id ? 'selected' : ''
          }`}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
