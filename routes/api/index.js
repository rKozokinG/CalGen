const express = require('express');
const router = express.Router()
const exercises = require('./exercises');


const db = require('../../database');
//routes all /api/exercises requests
router.use('/exercises',exercises);

module.exports = router;