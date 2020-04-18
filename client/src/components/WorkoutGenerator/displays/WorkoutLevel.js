import React, { useState } from 'react';
import {
	FormGroup,
	Button,
	CustomInput,
	Container
} from 'reactstrap';

import { LEVELS,LEVELS_LABEL } from '../../../constants/exercisesConsts';
import { WORKOUT_EQUIPMENT } from '../../../constants/routes';


import { connect } from 'react-redux';
import { changeGeneratorRoute } from '../../../actions/routeActions';
import { setWorkoutLevel } from '../../../actions/generatorActions';

const initialState = 0;

//end of initializing the sate of the component


function WorkoutLevel (props){
	const [level, setLevel] = useState(initialState);
	const checkBoxes = LEVELS.map(level => {
		return(
			<CustomInput 
			type="radio"
			onClick = {() => {
				console.log(level);
				setLevel(level)}} 
			name="LevelName"
			id={LEVELS_LABEL[level - 1]} 
			key={LEVELS_LABEL[level - 1]}
			label={LEVELS_LABEL[level - 1]} />
		)
	})

	return(
		<div>
			<h1 className = " text-center">Choose a level you would like to work on</h1>
			<Container className="py-2 d-flex justify-content-center">
					<FormGroup>
						{checkBoxes}
					</FormGroup>
			</Container>
			<div className="m-3 d-flex justify-content-center">
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						if (level === 0) {
							alert("Please select a level");
						}
						else{
							props.setWorkoutLevel(level);
							props.changeGeneratorRoute(WORKOUT_EQUIPMENT);
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
	setWorkoutLevel 
})(WorkoutLevel);