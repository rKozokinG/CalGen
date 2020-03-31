import {combineReducers} from 'redux';
import exerciseReducer from './exerciseReducer'
import routeReducer from './routeReducer'

export default combineReducers({
	 exercises: exerciseReducer,
	 route: routeReducer
});

