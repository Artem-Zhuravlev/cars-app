import React from "react";

const Car = (props) => {
  return (
    <div>
      <h3> Car name {props.name}</h3>
      <p>Year {props.year}</p>
      <button onClick={props.onChangeTitle}>Click</button>
    </div>
  );
};

export default Car;
