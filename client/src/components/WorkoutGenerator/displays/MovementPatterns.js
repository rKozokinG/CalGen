import React, { useState } from 'react';
import {
	Button,
	CustomInput,
	Container, 
	Row, 
	Col
} from 'reactstrap';

import { MOVMENT_PATTERNS } from '../../../constants/exercisesConsts';
import { WORKOUT_LEVEL } from '../../../constants/routes';


import { connect } from 'react-redux';
import { changeGeneratorRoute } from '../../../actions/routeActions';
import { setWorkoutBodyPartsMovementPatterns } from '../../../actions/generatorActions';

const initialState = {};

let i;

for (i = MOVMENT_PATTERNS.length - 1; i >= 0; i--) {
  initialState[MOVMENT_PATTERNS[i]] = false;
}
//end of initializing the sate of the component


function MovmentPatterns (props){
	const [movementPatterns, setMovementPatterns] = useState(initialState);
	const checkBoxes = MOVMENT_PATTERNS.map(movementPattern => {
		return(
			<Col key={movementPattern}>
				<CustomInput 
				type="switch"
				onClick = {() => changeMovementPatterns(movementPattern)} 
				id={movementPattern} 
				label={movementPattern} />
			</Col>
		)
	})
	const changeMovementPatterns = (movementPattern) => {
		setMovementPatterns(preState => {
			var newState = {...preState};
			newState[movementPattern] = !newState[movementPattern];
			return newState;
    	})
  	}

	return(
		<div>
			<h1 className = " text-center">Choose Movment Patterns you would like to work on</h1>
			<Container className="py-2 d-flex justify-content-center">
				<Row xs="1" sm="2" md="4">
					{checkBoxes}
				</Row>	
			</Container>
			<div className="m-3 d-flex justify-content-center">
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						if (Object.values(movementPatterns).some(filter => filter)) {
							props.setWorkoutBodyPartsMovementPatterns(movementPatterns);
							props.changeGeneratorRoute(WORKOUT_LEVEL);
						}
						else{
							alert("Please select movement patterns");
						}
					}} 
					color="primary"
					size="lg">
					Submit
				</Button>	
			</div>
		</div>
	);	
}

export default connect(null, { 
	changeGeneratorRoute,
	setWorkoutBodyPartsMovementPatterns 
})(MovmentPatterns);