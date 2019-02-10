import React from 'react';

const withClass = (Component, classValue) => {
	return props => {
		return (
			<div className={classValue}>
				<Component {...props} />
			</div>
		);
	};
};

export default withClass;
