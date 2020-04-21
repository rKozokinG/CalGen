import React from 'react';

import WorkoutType from "./displays/WorkoutType";
import BodyParts from "./displays/BodyParts";
import MovementPatterns from "./displays/MovementPatterns";
import WorkoutLevel from "./displays/WorkoutLevel";
import WorkoutEquipment from "./displays/WorkoutEquipment";
import SkillOrStrength from "./displays/SkillOrStrength";
import NumberOfExercises from "./displays/NumberOfExercises";
import Workout from "./displays/Workout";


import * as genretorRoutes from '../../constants/routes';
import { connect } from 'react-redux';


function WorkoutGenerator (props){
	let display;
	switch(props.generatorRoute){
		case genretorRoutes.WORKOUT_TYPE:
			display = <WorkoutType/>
			break;
		case genretorRoutes.BODY_PARTS:
			display = <BodyParts/>
			break;
		case genretorRoutes.MOVMENT_PATTERNS:
			display = <MovementPatterns/>
			break;
		case genretorRoutes.WORKOUT_LEVEL:
			display = <WorkoutLevel/>
			break;
		case genretorRoutes.WORKOUT_EQUIPMENT:
			display = <WorkoutEquipment/>
			break;
		case genretorRoutes.SKILL_OR_STRENGTH:
			display = <SkillOrStrength/>
			break;
		case genretorRoutes.NUMBER_OF_EXERCISES:
			display = <NumberOfExercises/>
			break;
		case genretorRoutes.WORKOUT:
			display = <Workout/>
			break;
		default:
			display = <h1> Penis</h1>
			break;
		}
	return(
		<div className = " container-fluid p-5 bg-home text-light">
			{display}
		</div>
	);	
}

const mapStateToProps = state => {
	return({
		generatorRoute: state.route.generatorRoute
	});
}
export default connect(mapStateToProps, null)(WorkoutGenerator);