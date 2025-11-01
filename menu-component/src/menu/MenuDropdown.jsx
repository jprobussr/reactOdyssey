import React from 'react';
import { MenuContext } from './Menu.jsx';

const MenuDropdown = ({ children }) => {
  const { open } = React.useContext(MenuContext);
  return open ? (
    <div>
      <div className="menu-dropdown">{children}</div>
    </div>
  ) : null;
};

export default MenuDropdown;
