import React from 'react';
import './App.css';
import MenuButton from './menu/MenuButton.jsx';
import MenuDropdown from './menu/MenuDropdown.jsx';
import Menu from './menu/Menu.jsx';
import MenuItem from './menu/MenuItem.jsx';;

const App = () => {
  const sports = ['Karate', 'Boxing', 'Wrestling', 'Tennis', 'Running'];
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map((sport) => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
};

export default App;
