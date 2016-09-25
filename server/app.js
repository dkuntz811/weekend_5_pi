var express = require('express');
//path is a node module that is part of node core.
var path = require('path');
//express is a function the function is middleware
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
//app.set is a setter. It sets the port for the app
//set the port to process.env.port Heroku has a process.env.port
//this will allow us to send it to Heroku later. We use 5000 as a localhost as we build the app.
app.set('port', (process.env.PORT || 5050));
//This is a catch all route. Any request that come in it ends up in this function
//When the request comes in, it gets fed into
var mongoURI = "mongodb://localhost:27017/assignments";//location of database like connectionString in postgress
var MongoDB = mongoose.connect(mongoURI).connection;//mongoose connection to mongo

//routers

var userRouter = require('../routes/userRouter');

// use routers
app.use('/user', userRouter);




MongoDB.on('error', function (err) {//if there is an error connecting to the database, let me know
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {//open connection to mongo
  console.log('mongodb connection open!');
});

app.get('/*', function (req, res){

	var file = req.params[0] || "/views/index.html";
	//var file = "/views/index.html"
	//path.join packages
	res.sendFile(path.join(__dirname, "/public", file));
});

app.listen(app.get('port'), function(){
	console.log('Turned on the thing!: ', app.get('port'));
});
