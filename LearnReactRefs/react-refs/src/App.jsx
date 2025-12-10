import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const inputRef = React.useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) return;

    setList((prevList) => [...prevList, text]);
    setText('');
    inputRef.current.focus();
  };

  return (
    <div className="app">
      <h2>React Project Ideas</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Enter your idea..."
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
