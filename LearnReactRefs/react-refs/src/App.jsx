import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const inputRef = React.useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return;

    setList(prev => [...prev, text]);
    setText('');
    inputRef.current.focus();
  }

  return (
    <div className="app">
      <h2>React Project Ideas</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Project ideas"
          ref={inputRef}
        />

        <button>Add</button>
      </form>

      <ol className="list">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
