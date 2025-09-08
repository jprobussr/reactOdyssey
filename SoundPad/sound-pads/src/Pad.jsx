const Pad = (props) => {
  return (
    
      <button
        style={{ backgroundColor: props.color }}
        className={props.on ? 'on' : undefined}
        onClick={() => props.toggle(props.id)}
      ></button>
    
  );
};

export default Pad;
