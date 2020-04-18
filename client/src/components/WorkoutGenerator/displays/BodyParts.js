import React, { useState } from 'react';
import {
	Button,
	CustomInput,
	Container, 
	Row, 
	Col
} from 'reactstrap';

import { BODY_PARTS } from '../../../constants/exercisesConsts';
import { WORKOUT_LEVEL } from '../../../constants/routes';


import { connect } from 'react-redux';
import { changeGeneratorRoute } from '../../../actions/routeActions';
import { setWorkoutBodyPartsMovementPatterns } from '../../../actions/generatorActions';

const initialState = {};

let i;

for (i = BODY_PARTS.length - 1; i >= 0; i--) {
  initialState[BODY_PARTS[i]] = false;
}
//end of initializing the sate of the component


function BodyParts (props){
	const [bodyParts, setBodyParts] = useState(initialState);
	const checkBoxes = BODY_PARTS.map(bodyPart => {
		return(
			<Col key={bodyPart}>
				<CustomInput 
				type="switch"
				onClick = {() => changebodyPart(bodyPart)} 
				id={bodyPart} 
				label={bodyPart} />
			</Col>
		)
	})
	const changebodyPart = (bodyPart) => {
		setBodyParts(preState => {
			var newState = {...preState};
			newState[bodyPart] = !newState[bodyPart];
			return newState;
    	})
  	}

	return(
		<div>
			<h1 className = " text-center">Choose Body Parts you would like to work on</h1>
			<Container className="py-2 d-flex justify-content-center">
				<Row xs="1" sm="2" md="4">
					{checkBoxes}
				</Row>	
			</Container>
			<div className="m-3 d-flex justify-content-center">
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						if (Object.values(bodyParts).some(filter => filter)) {
							props.setWorkoutBodyPartsMovementPatterns(bodyParts);
							props.changeGeneratorRoute(WORKOUT_LEVEL);
						}
						else{
							alert("Please select body parts");
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
})(BodyParts);