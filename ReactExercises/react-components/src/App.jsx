import React from 'react'
import './App.css';
import Greeting from './Components/Greeting.jsx';
import Counter from './Components/Counter.jsx';
import Toggle from './Components/Toggle.jsx';
import LikeButton from './LikeButton.jsx';

const App = () => {
  return (
    <div className='app'>
      <header>
        <h1>React Practice Gallery</h1>
        <p>Dark Theme · Simple components</p>
      </header>

      <main className="grid">
        <Greeting />
        <Counter />
        <Toggle />
        <LikeButton />
      </main>
    </div>
  )
}

export default App