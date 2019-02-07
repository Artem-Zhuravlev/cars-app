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

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (e) => {
    this.setState({
      pageTitle: e.target.value
    })

    if(e.target.value === "") {
      this.setState({
        pageTitle: 'React'
      })
    }
  }

  render() {
    const divStyle = {
      textAlign: "center",
      fontFamily: "sans-serif"
    };

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange = {this.handleInput}/>
        <button onClick = {this.changeTitleHandler.bind(this, 'Changed')}>Change title</button>
        
        {this.state.cars.map((car, i)=>{
          return (
            <Car 
            key = {i}
            name={car.name} 
            year={car.year} 
            onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
            />
          )})
        }
  
      </div>
    );
  }
}

export default App;
