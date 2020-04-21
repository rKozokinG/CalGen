import React from 'react';
import { } from 'reactstrap';

import { connect } from 'react-redux';

function Workout (props){
	console.log(props.generator)
	return(
		<div>
			<h1 className = " text-center">Enjoy :)</h1>
		</div>
	);	
}
const mapStateToProps = state => {
	return({
		generator: state.generator
	});
}

export default connect(mapStateToProps, { })(Workout);