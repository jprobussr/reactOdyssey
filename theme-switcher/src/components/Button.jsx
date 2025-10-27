import React from 'react';
import { ThemeContext } from '../App.jsx';

const Button = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={`${theme}-theme`}>
      Switch Theme
    </button>
  );
};

export default Button;
