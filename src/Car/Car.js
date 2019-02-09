import React from "react";
//import Radium from 'radium';
import "./Car.css";

class Car extends React.Component{

  componentWillReceiveProps(nextProps) {
    console.log('App componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate', nextProps, nextState);

    return nextProps.name.trim() !== this.props.name.trim();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount')
  }

  render() {

    console.log('Car render');

    const inputClasses = ['input'];

    if(this.props.name !== ""){
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if(this.props.name.length > 4) {
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
        <h3> Car name {this.props.name}</h3>
        <input 
          type="text" 
          onChange={this.props.onChangeName} 
          value={this.props.name}
          className = {inputClasses.join(" ")}
        />
        <p>Year {this.props.year}</p>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
};

export default Car;
