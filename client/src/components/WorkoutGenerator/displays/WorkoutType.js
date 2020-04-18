import React from 'react';
import { 
	Button,
} from 'reactstrap';

import { BODY_PARTS, MOVMENT_PATTERNS } from '../../../constants/routes';
import { BODY_PART, MOVMENT_PATTERN } from '../../../constants/exercisesConsts';
import { connect } from 'react-redux';
import { changeGeneratorRoute } from '../../../actions/routeActions';
import { setWorkoutType } from '../../../actions/generatorActions';

function WorkoutType (props){
	return(
		<div>
			<h1 className = " text-center">Generate by Body Parts or Movement Patterns?</h1>
			<div className="d-flex m-3  justify-content-center">
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						props.setWorkoutType(BODY_PART)
						props.changeGeneratorRoute(BODY_PARTS)
					}} 
					color="primary"
					size="lg">
					Body Parts
				</Button>
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						props.setWorkoutType(MOVMENT_PATTERN)
						props.changeGeneratorRoute(MOVMENT_PATTERNS)
					}} 
					color="primary"
					size="lg">
					Movement Patterns
				</Button>
			</div>
		</div>
	);	
}

export default connect(null, { changeGeneratorRoute, setWorkoutType })(WorkoutType);