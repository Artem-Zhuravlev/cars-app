import React, { Component } from "react";

import Car from "./Car/Car";

class App extends Component {

  state = {
    cars: [
      {name: 'Ford',year: 2018},
      {name: 'Porshe',year: 2015}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = () => {
    this.setState({
      pageTitle: 'Well done'
    })
  }

  render() {
    const divStyle = {
      textAlign: "center",
      fontFamily: "sans-serif"
    };

    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick ={this.changeTitleHandler}>Change title</button>
        <Car name={cars[0].name} year={cars[0].year}/>
        <Car name={cars[1].name} year={cars[1].year}/>
        
      </div>
    );
  }
}

export default App;
