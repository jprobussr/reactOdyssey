import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    setList((prev) => [...prev, text]);
    setText('');
  };

  return (
    <div className="app">
      <h2>React Ideas App</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Enter Idea"
        />
        <button>Submit</button>
      </form>

      <ol className="list">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
