import React from 'react';
import { 
	Button
} from 'reactstrap';

import { NUMBER_OF_EXERCISES } from '../../../constants/routes';
import { SKILL, STRENGTH } from '../../../constants/exercisesConsts';

import { connect } from 'react-redux';
import { changeGeneratorRoute } from '../../../actions/routeActions';
import { setWorkoutSkillOrStrength } from '../../../actions/generatorActions';

function SkillOrStrength (props){
	return(
		<div>
			<h1 className = " text-center">Skill workout or Strength workout?</h1>
			<div className="d-flex m-3  justify-content-center">
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						props.setWorkoutSkillOrStrength(SKILL)
						props.changeGeneratorRoute(NUMBER_OF_EXERCISES)
					}} 
					color="primary"
					size="lg">
					Skill
				</Button>
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						props.setWorkoutSkillOrStrength(STRENGTH)
						props.changeGeneratorRoute(NUMBER_OF_EXERCISES)
					}} 
					color="primary"
					size="lg">
					STRENGTH
				</Button>
			</div>
		</div>
	);	
}

export default connect(null, { changeGeneratorRoute, setWorkoutSkillOrStrength })(SkillOrStrength);