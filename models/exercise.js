const mongoose = require('mongoose');


//defining a model
const Schema = mongoose.Schema;
const exercise = new Schema({
  exerciseName: { 
  	type: String,
    //unique: true
  },
  bodyPart: { 
  	type: String, 
  	default: 'Full Body' 
  },
  exercisePicture: {
    type: String
  },
  level: { 
  	type: Number, 
  	default: 1 
  },
  equipment: {
    type: String, 
    default: 'No Equipment'
  },
  exerciseLink: { 
  	type: String
  },
  date: { 
  	type: Date, 
  	default: Date.now 
  }
});

//compiling a model and exporting
module.exports = Exercise = mongoose.model('exercise', exercise);
