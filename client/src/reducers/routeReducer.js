import { CHANGE_ROUTE, CHANGE_GENERATOR_ROUTE } from '../actions/types';
import { HOME, WORKOUT_TYPE } from "../constants/routes";

const initialState = {
	route : HOME,
	generatorRoute : WORKOUT_TYPE
}

export default function(state = initialState, action){
	switch(action.type){
		case CHANGE_ROUTE:
			return {
				...state,
				route : action.payload
			}
		case CHANGE_GENERATOR_ROUTE:
			return {
				...state,
				generatorRoute : action.payload
			}
		default:
			return state;
	}
}