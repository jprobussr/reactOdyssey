import React from 'react';
import { MenuContext } from './Menu.jsx';

const MenuDropdown = ({ children }) => {
 const { open } = React.useContext(MenuContext);

 if (!open) return null;

 return <div className='menu-dropdown'>{children}</div>
};

export default MenuDropdown;
