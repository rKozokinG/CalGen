import {FETCH_EXERCISES, FETCH_EXERCISES_SELECTIVE} from './types';
/*import exercises from '../database';*/

export function fetchExercises() {
	return function(dispatch){
		//need to fetch from db
		fetch('http://localhost:5000/api/exercises/')
		.then(response => response.json())
		.then( exercises =>{
			dispatch({
				type: FETCH_EXERCISES,
				payload: exercises
			})
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
		fetch('http://localhost:5000/api/exercises/filtered/' ,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(filters)
		})
		.then(response => response.json())
		.then(newExercises =>{
			dispatch({
				type: FETCH_EXERCISES_SELECTIVE,
				payload: newExercises 
			})
		})
		.catch(err => console.log(err))
		
	}
}