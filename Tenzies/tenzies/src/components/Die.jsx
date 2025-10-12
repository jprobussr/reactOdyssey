import React from 'react';
import './Die.css';

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : '#FFF',
  };

  return (
    <button style={styles} onClick={props.hold}>
      {props.value}
    </button>
  );
};

export default Die;
