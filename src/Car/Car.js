import React from "react";
import Radium from 'radium';
import "./Car.css";

const Car = (props) => {

  const inputClasses = ['input'];

  if(props.name !== ""){
    inputClasses.push('green');
  } else {
    inputClasses.push('red');
  }

  if(props.name.length > 4) {
    inputClasses.push('bold');
  }

  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
    }
  }

  return (
    <div className="Car" style={style}>
      <h3> Car name {props.name}</h3>
      <input 
        type="text" 
        onChange={props.onChangeName} 
        value={props.name}
        className = {inputClasses.join(" ")}
      />
      <p>Year {props.year}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default Radium(Car);
