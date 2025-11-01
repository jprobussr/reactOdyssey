import React from 'react'
import { MenuContext } from './Menu.jsx'

const Button = ({children}) => {
    const {toggle} = React.useContext(MenuContext);
  return (
    <button onClick={toggle}>{children}</button>
  )
}

export default Button