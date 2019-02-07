import React from "react";

const Car = (props) => {
  return (
      
    <div style={{
      border: '1px solid silver',
      padding: '10px 0',
      width: '48%',
      marginBottom: '10px'
    }}>
      <h3> Car name {props.name}</h3>
      <input type="text" onChange={props.onChangeName} value={props.name}/>
      <p>Year {props.year}</p>
      <button onClick={props.onChangeTitle}>Click</button>
    </div>
  );
};

export default Car;
