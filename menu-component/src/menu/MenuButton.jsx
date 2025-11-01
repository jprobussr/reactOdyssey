import React from 'react';
import Button from './Button.jsx';
import { MenuContext } from "./Menu.jsx"

const MenuButton = ({ children }) => {
  const { toggle } = React.useContext(MenuContext);
  return <Button onclick={toggle}>{children}</Button>;
};

export default MenuButton;
