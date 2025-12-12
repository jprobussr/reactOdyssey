import React from 'react';

import './App.css';
import Decision from './Decision.jsx';

const App = () => {
  return (
    <div>
      <Decision>
        {(goingOut) => (
          <h1>Am I going out tonight? {goingOut ? 'Yes' : 'Nope'}</h1>
        )}
      </Decision>
    </div>
  );
};

export default App;
