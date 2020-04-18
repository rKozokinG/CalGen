import {combineReducers} from 'redux';
import exerciseReducer from './exerciseReducer'
import routeReducer from './routeReducer'
import generatorReducer from './generatorReducer'

export default combineReducers({
	 exercises: exerciseReducer,
	 route: routeReducer,
	 generator : generatorReducer
});

