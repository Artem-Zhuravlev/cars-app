import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';

class Counter extends Component {
	state = {
		counter: 0,
	};

	addCounter = () => {
		this.setState(prevState => {
			return {
				counter: prevState.counter + 1,
			};
		});
	};

	minusCounter = () => {
		this.setState(prevState => {
			return {
				counter: prevState.counter - 1,
			};
		});
	};

	render() {
		return (
			<Auxiliary>
				<h2>Counter {this.state.counter}</h2>
				<button onClick={this.addCounter}>+</button>
				<button onClick={this.minusCounter}>-</button>
			</Auxiliary>
		);
	}
}

export default Counter;
