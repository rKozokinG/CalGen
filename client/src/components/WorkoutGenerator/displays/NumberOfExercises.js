import React, { useState } from 'react';
import {
	FormGroup,
	Button,
	CustomInput,
	Container
} from 'reactstrap';

import { NUMBER_OF_EXERCISES,LEVELS_LABEL } from '../../../constants/exercisesConsts';
import { WORKOUT } from '../../../constants/routes';


import { connect } from 'react-redux';
import { changeGeneratorRoute } from '../../../actions/routeActions';
import { setNumberOfExercises } from '../../../actions/generatorActions';

const initialState = 0;

//end of initializing the sate of the component


function NumberOfExercises (props){
	const [numberOfExercises, setNumberOfExercises] = useState(initialState);
	const checkBoxes = NUMBER_OF_EXERCISES.map(numberOfExercises => {
		return(
			<CustomInput 
			type="radio"
			onClick = {() => {
				setNumberOfExercises(numberOfExercises)}} 
			name="NumberOfExercisesName"
			id={numberOfExercises} 
			key={numberOfExercises}
			label={numberOfExercises} />
		)
	})

	return(
		<div>
			<h1 className = " text-center">Choose Number Of Exercises</h1>
			<Container className="py-2 d-flex justify-content-center">
					<FormGroup>
						{checkBoxes}
					</FormGroup>
			</Container>
			<div className="m-3 d-flex justify-content-center">
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						if (numberOfExercises === 0) {
							alert("Please select a numberOfExercises");
						}
						else{
							props.setNumberOfExercises(numberOfExercises);
							props.changeGeneratorRoute(WORKOUT);
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
	setNumberOfExercises 
})(NumberOfExercises);