//const mongoose = require('mongoose'); //mongo db handler

//connecting to mongodb
/*db = require("./config/keys").MONGOOSE_URI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to database...'))
.catch(err => console.log(err));*/

//connecting to postgres
const knex = require('knex');
const dbConf = require("../config/keys").POSTGERS_CONF;
const connection = knex(dbConf);

 
module.exports = connection ;