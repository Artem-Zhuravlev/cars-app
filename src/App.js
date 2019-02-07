import React, { Component } from "react";

import Car from "./Car/Car";

class App extends Component {
  render() {
    const divStyle = {
      textAlign: "center",
      fontFamily: "sans-serif"
    };

    return (
      <div style={divStyle}>
        <h1>Hello world</h1>
        <Car name={'Ford'} year={2018}>
          best car
        </Car>
        <Car name={'Porshe'} year={2015}/>
        
      </div>
    );
  }
}

export default App;
