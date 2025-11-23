import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import './App.css';

const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`container ${theme}-theme`}>
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };