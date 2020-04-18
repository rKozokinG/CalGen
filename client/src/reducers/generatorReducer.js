import { 
	PICK_WORKOUT_TYPE,
	PICK_BODY_PARTS_MOVMENT_PATTERNS,
	PICK_WORKOUT_LEVEL, 
	PICK_WORKOUT_EQUIPMENT, 
	PICK_SKILL_STRENGTH, 
	PICK_EXERCISE_NUMBER  } from '../actions/types';



const initialState = {
	workoutType:"",
	bodyPartsMovmentPatterns: [],
	workoutLevel:"",
	workoutEquipment:[],
	skill:false,
	strength:true,
	numberOfExercises: 6
}

export default function(state = initialState, action){
	switch(action.type){
		case PICK_WORKOUT_TYPE:
			return {
				...state,
				workoutType: action.payload
			}
		case PICK_BODY_PARTS_MOVMENT_PATTERNS:
			return {
				...state,
				bodyPartsMovmentPatterns: action.payload
			}
		case PICK_WORKOUT_LEVEL:
			return {
				...state,
				workoutLevel: action.payload
			}
		case PICK_WORKOUT_EQUIPMENT:
			return {
				...state,
				workoutEquipment: action.payload
			}
		case PICK_SKILL_STRENGTH:
			return {
				...state,
				skill: action.payload,
				strength: !action.payload
			}
		case PICK_EXERCISE_NUMBER:
			return {
				...state,
				numberOfExercises: action.payload
			}
		default:
			return state;
	}
}