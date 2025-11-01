import React, { useState } from 'react';

const MenuContext = React.createContext();

const Menu = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
};

export default Menu;
export { MenuContext }
