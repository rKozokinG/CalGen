import {CHANGE_ROUTE} from '../actions/types';

export function changeRoute(route){
	return function(dispatch){
		dispatch({
			type:CHANGE_ROUTE,
			payload:route
		})
	}
}