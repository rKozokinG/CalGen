import {FETCH_EXERCISES, FETCH_EXERCISES_SELECTIVE} from '../actions/types';
import exercises from '../database';

export function fetchExercises() {
	return function(dispatch){
		//need to fetch from db
		dispatch({
			type: FETCH_EXERCISES,
			payload: exercises
		})
	}
}

export function fetchExercisesSelective(filters) {
	//filters is an object that looks like this :
	//filters = {
	//	bodyPart: {filter:true/false...}, 
	//	level: {filter:true/false...},
	//	equipment: {filter:true/false...}  
	//}
	return function(dispatch){
		//send fetch to db with filters to select with

		const newExercises = [...exercises];
		newExercises.pop();
		dispatch({
			type: FETCH_EXERCISES_SELECTIVE,
			payload: newExercises //need to fetch from db
		})
	}
}