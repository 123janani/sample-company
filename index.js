const express = require('express');
const bodyParser = require('body-parser');
var app = express();

//Configuring express server
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//Establish the server connection
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Listening on port '+ port));

// define a root route
app.get('/', (req, res) => {
    res.send("Welcome to My Company!");
});

// Require  routes
const userRoute = require('./routes/user.route');
const departmentRoute = require('./routes/department.route');

// using as middleware
app.use('/api/v1/dep', departmentRoute);
app.use('/api/v1/user', userRoute);


