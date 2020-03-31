import {FETCH_EXERCISES, FETCH_EXERCISES_SELECTIVE} from '../actions/types';


const initialState = {
	exercises:[]
}

export default function(state = initialState, action){
	switch(action.type){
		case FETCH_EXERCISES:
			return {
				...state,
				exercises: action.payload
			}
		case FETCH_EXERCISES_SELECTIVE:
			return {
				...state,
				exercises: action.payload
			}
		default:
			return state;
	}
}