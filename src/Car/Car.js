import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Car.css';
import widthClass from '../hoc/withClass';

class Car extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		if (this.props.index === 0) {
			this.inputRef.current.focus();
		}
	}

	render() {
		const inputClasses = ['input'];

		if (this.props.name !== '') {
			inputClasses.push('green');
		} else {
			inputClasses.push('red');
		}

		if (this.props.name.length > 4) {
			inputClasses.push('bold');
		}

		return (
			<React.Fragment>
				<h3> Car name {this.props.name}</h3>
				<input
					ref={this.inputRef}
					type="text"
					onChange={this.props.onChangeName}
					value={this.props.name}
					className={inputClasses.join(' ')}
				/>
				<p>Year {this.props.year}</p>
				<button onClick={this.props.onDelete}>Delete</button>
			</React.Fragment>
		);
	}
}

Car.propTypes = {
	name: propTypes.string,
	year: propTypes.number,
	onChangeName: propTypes.func,
	onDelete: propTypes.func,
};

export default widthClass(Car, 'Car');
