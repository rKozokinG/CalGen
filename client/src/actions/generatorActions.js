import { 
	PICK_WORKOUT_TYPE,
	PICK_BODY_PARTS_MOVMENT_PATTERNS,
	PICK_WORKOUT_LEVEL, 
	PICK_WORKOUT_EQUIPMENT, 
	PICK_SKILL_STRENGTH, 
	PICK_EXERCISE_NUMBER  } from '../actions/types';


export function setWorkoutType(workoutType){
	return function(dispatch){
		dispatch({
			type:PICK_WORKOUT_TYPE ,
			payload: workoutType
		})
	}
}

export function setWorkoutBodyPartsMovementPatterns(bodyPartsMovementPatterns){
	return function(dispatch){
		dispatch({
			type:PICK_BODY_PARTS_MOVMENT_PATTERNS ,
			payload: bodyPartsMovementPatterns
		})
	}
}

export function setWorkoutLevel(workoutLevel){
	return function(dispatch){
		dispatch({
			type: PICK_WORKOUT_LEVEL,
			payload: workoutLevel
		})
	}
}

export function setWorkoutEquipment(workoutEquipment){
	return function(dispatch){
		dispatch({
			type: PICK_WORKOUT_EQUIPMENT,
			payload: workoutEquipment
		})
	}
}

export function setWorkoutSkillOrStrength(skill){
	return function(dispatch){
		dispatch({
			type: PICK_SKILL_STRENGTH,
			payload: skill
		})
	}
}

export function setNumberOfExercises(numberOfExercises){
	return function(dispatch){
		dispatch({
			type: PICK_EXERCISE_NUMBER,
			payload: numberOfExercises
		})
	}
}