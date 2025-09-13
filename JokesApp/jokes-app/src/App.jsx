import React from 'react';
import Jokes from './components/Jokes.jsx';
import JokesData from './JokesData.js';
import './App.css';

const App = () => {
  const jokeElements = JokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <main>
      {jokeElements}
   
    </main>
  );
};

export default App;
