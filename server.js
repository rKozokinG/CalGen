const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const exercises = require('./api/exercises');

const app = express();


//Body Parser middleware
app.use(bodyParser.json());

//connecting to db
db = require("./config/keys").MONGOOSE_URI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to database...'))
.catch(err => console.log(err));

//routes all /api/exercises requests
app.use('/api/exercises',exercises);

//Opening port
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server listenig on port ${port}...`))
