const mongoose = require('mongoose');

//defining a model
const Schema = mongoose.Schema;
const exercise = new Schema({
  name: { 
  	type: String
  },
  bodyPart: { 
  	type: String, 
  	default: 'full body' 
  },
  picture: {
    type: String
  },
  level: { 
  	type: Number, 
  	default: 1 
  },
  link: { 
  	type: String
  },
  date: { 
  	type: Date, 
  	default: Date.now 
  }
});

//compiling a model and exporting
module.exports = Exercise = mongoose.model('exercise', exercise);
