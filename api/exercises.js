const express = require('express');
var router = express.Router()

const Exercise = require('../models/exercise');

//http requests

//@route GET api/exercises/
//@desc gets all the exercises data
//@access public
router.get('/', (req,res) =>{
	Exercise.find()
	.then(data => res.json(data));
});

//@route POST api/exercises/
//@desc post an exercises to database
//@access public
router.post('/', (req,res) =>{
	const {name, bodyPart, level,picture, link} = req.body;
	const newExercise = new Exercise({
	  name: name,
	  bodyPart: bodyPart,
	  picture: picture,
	  level: level,
	  link: link
	});

	newExercise.save()
	.then(exercise => res.json(exercise));
});


//@route DELETE api/exercises/
//@desc deletes an exercises from database
//@access public
router.delete('/:id', (req,res) =>{
	const {id} = req.params
	Exercise.findById(id)
	.then(exercise => {
		exercise.remove()
		.then(response => res.json({success : true}))
	})
	.catch(err => res.status(404).json({success : false}));
});

module.exports = router;