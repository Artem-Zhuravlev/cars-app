import React, { Component } from "react";

import Car from "./Car/Car";

class App extends Component {

  state = {
    cars: [
      {name: 'Ford',year: 2018},
      // {name: 'Porshe',year: 2015}
    ],
    pageTitle: 'React components',
    showCars: true
  }

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
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

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();

    cars.splice(index, 1);
    this.setState({cars})

  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', nextProps, prevState);

    return prevState;
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  getSnapshotBeforeUpdate() {
    console.log('App getSnapshotBeforeUpdate')
  }

  render() {
    console.log('App render');

    const divStyle = {
      textAlign: "center",
      fontFamily: "sans-serif"
    };

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        <input type="text" onChange = {this.handleInput}/>
        <button onClick = {this.changeTitleHandler.bind(this, 'Changed')}>Change title</button>
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0'}}>
        {
          this.state.showCars 
            ? this.state.cars.map((car, index)=>{
                return (
                  <Car 
                    key = {index}
                    name={car.name} 
                    year={car.year} 
                    onDelete = {this.deleteHandler.bind(this, index)}
                    onChangeName={event =>this.onChangeName(event.target.value, index)}
                  />
              )})

            :null
          }
          </div>

            
  
      </div>
    );
  }
}

export default App;
