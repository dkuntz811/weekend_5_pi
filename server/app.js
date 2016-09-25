var express = require('express');
//path is a node module that is part of node core.
var path = require('path');
//express is a function the function is middleware
var app = express();
//app.set is a setter. It sets the port for the app
//set the port to process.env.port Heroku has a process.env.port
//this will allow us to send it to Heroku later. We use 5000 as a localhost as we build the app.
app.set('port', (process.env.PORT || 6060));
//This is a catch all route. Any request that come in it ends up in this function
//When the request comes in, it gets fed into
app.get('/*', function (req, res){
	console.log(req.params[0]);
	var file = req.params[0] || "/views/index.html";
	//var file = "/views/index.html"
	//path.join packages
	res.sendFile(path.join(__dirname, "/public", file));
});

app.listen(app.get('port'), function(){
	console.log('Turned on the thing!: ', app.get('port'));
});
