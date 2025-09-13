import React from 'react';
import './Jokes.css'


const Jokes = (props) => {
  return (
    <div className='joke'>

     {props.setup &&<p className="joke-setup">Setup: {props.setup}</p>}
     <p className="joke-punchline">Punchline: {props.punchline}</p>

    </div>
  );
};

export default Jokes;
