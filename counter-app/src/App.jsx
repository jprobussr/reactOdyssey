import React from 'react';
import './App.css';
import Counter from './components/Counter.jsx'

const App = () => {
  return (
    <div className='app-container'>
      <h1>Date Counter</h1>
      <Counter />
    </div>
  );
};

export default App;
