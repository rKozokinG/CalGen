const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const api = require('./routes/api/');
const app = express();

//Middleware applyed on all requerts
app.use(bodyParser.json());
app.use(cors());

//routes all /api/ requests
app.use('/api',api);

//Opening port
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server listenig on port ${port}...`))
