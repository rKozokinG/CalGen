import {CHANGE_ROUTE, CHANGE_GENERATOR_ROUTE} from './types';
import { WORKOUT_TYPE, WORKOUT_GENERATOR } from '../constants/routes';

export function changeRoute(route){
	return function(dispatch){
		if(route === WORKOUT_GENERATOR){
			dispatch({
				type:CHANGE_GENERATOR_ROUTE,
				payload: WORKOUT_TYPE
			})
		}
		dispatch({
			type:CHANGE_ROUTE,
			payload:route
		})
	}
}
export function changeGeneratorRoute(route){
	return function(dispatch){
		dispatch({
			type:CHANGE_GENERATOR_ROUTE,
			payload:route
		})
	}
}