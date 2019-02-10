import React from 'react';
//import Radium from 'radium';
import './Car.css';
import widthClass from '../hoc/withClass';

class Car extends React.Component {
	render() {
		const inputClasses = ['input'];

		if (this.props.name !== '') {
			inputClasses.push('green');
		} else {
			// inputClasses.push('red');
		}

		if (this.props.name.length > 4) {
			inputClasses.push('bold');
		}

		const style = {
			':hover': {},
		};

		return (
			<React.Fragment>
				<h3> Car name {this.props.name}</h3>
				<input
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

export default widthClass(Car, 'Car');
