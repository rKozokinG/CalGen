const express = require('express');
const router = express.Router()

const db = require('../../database');

//Move to different file (?)		
const upperBody = ["Chest", "Back", "Shoulder", "Abs", "Biceps", "Triceps"];
const lowerBody = ["Legs", "Lower Back"];

//http requests

//@route GET api/exercises/
//@desc gets all the exercises data
//@access public
router.get('/', (req,res) =>{
	db.select().table('exercises')
	.then(exercises => res.json(exercises))
	.catch(err => res.status(400).json({success:false}));
});

//@route POST api/exercises/
//@desc post an exercises to database
//@access public
router.post('/', (req,res) =>{
	const { 
		exerciseName, 
		exercisebodyPart, 
		exercisePicture, 
		exerciseLevel, 
		exerciseEquipment, 
		exerciseLink,
		exerciseDescription
	} = req.body;

	const newExercise = {
		exercise_name: exerciseName,
		exercise_body_part: exercisebodyPart,
		exercise_picture: exercisePicture,
		exercise_level: exerciseLevel,
		exercise_equipment: exerciseEquipment,
		exercise_link: exerciseLink,
		exercise_description: exerciseDescription

	};

	db('exercises')
	.returning('*')
	.insert(newExercise)
	.then(exercise => res.json(exercise))
	.catch(err => console.log(err));
});


//@route DELETE api/exercises/
//@desc deletes an exercises from database
//@access public
router.delete('/:id', (req,res) =>{
	const {id} = req.params

	db('exercises')
	.where('exercise_id',id)
	.del()
	.then(response => res.json({response:response, success:true}))
	.catch(err => res.status(404).json({success:false}))
});


//@route POST api/exercises/filtered/
//@desc gets filtered exercises from database
//@access public
router.post('/filtered', (req,res) =>{
	//filters = {
	//	bodyPart: {filter:true/false...}, 
	//	level: {filter:true/false...},
	//	equipment: {filter:true/false...}  
	//}
	const { 
		bodyPart,
		level,
		equipment
	} = req.body;
	//add validation of object that is recieved.

	const bodyPartfilters = filterFiltersObj(bodyPart);
	const levelfilters = filterFiltersObj(level);
	const equipmentfilters = filterFiltersObj(equipment);

	if(bodyPart["Upper Body"] === true){
		upperBody.forEach(function(item) {
			if (!bodyPartfilters.includes(item)) {
				bodyPartfilters.push(item)
			}
		}) 
	}
	if(bodyPart["Lower Body"] === true) {
		lowerBody.forEach(function(item) {
			if (!bodyPartfilters.includes(item)) {
				bodyPartfilters.push(item)
			}
		})
	}	

	db('exercises')
	.select('*')
	.whereIn('exercise_body_part',bodyPartfilters)
	.whereIn('exercise_level',levelfilters)
	.whereIn('exercise_equipment',equipmentfilters)
	.then(exercises => res.json(exercises))
	.catch(err => res.status(400).json({success:false}));
});

const filterFiltersObj = filtersObj => {
	if(!Object.values(filtersObj).some(filter => filter)){
		return Object.keys(filtersObj);
	}
	else{
		return Object.keys(filtersObj).filter(att => filtersObj[att]);
	}
};

module.exports = router;