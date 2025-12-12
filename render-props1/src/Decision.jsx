import React, { useState } from 'react';

const Decision = ({ children }) => {
  const [goingOut, setGoingOut] = useState(true);

  const toggle = () => {
    setGoingOut(prev => !prev)
  };

  return (
    <div>
      {children(goingOut)}
      <button onClick={toggle}>Going Out</button>
    </div>
  );
};

export default Decision;
