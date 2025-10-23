import React from 'react';
import './Die.css';

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : '#FFF',
  };

  return (
    <button style={styles} onClick={props.hold} aria-label={`Die with a value ${props.value}, ${props.isHeld ? 'held' : 'not held'}`} aria-pressed={props.isHeld}>
      {props.value}
    </button>
  );
};

export default Die;
