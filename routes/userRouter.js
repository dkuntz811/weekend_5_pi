var express = require('express');
var router = express.Router(); // instead of var app = express();

var mongoose = require('mongoose');



//model
var Pet = require('../models/user');
console.log('in userRouter');

router.get('/all', function (req, res){
	console.log(req.params);
	Pet.find({}, function (err, petResults){
		if(err){
			console.log(err);
			res.sendStatus(500);
		} else {
			res.send(petResults);
		}
	});//end user find
});//end router.get

router.post ('/addPet', function (req, res){
	console.log('req.body is ', req.body);
	console.log ('in addPet');
	var sendData = req.body;
	console.log(req.body);
	var newPet = new Pet({
		name: sendData.name,
		animal: sendData.animal,
		age: sendData.age,
		imageurl: sendData.imageurl
	});
	newPet.save(function(err){
		if (err){
			console.log('post error occurred:', err);
			res.sendStatus(500);
		} else {
			console.log('pet saved successfully!');
			res.sendStatus(201);
		}
	});//end save function
});//end router.post

router.delete('/delete/:id', function(req, res){
	var id = req.params_id;
	newPet.findByIdAndRemove(_id, function(err){
		if(err){
			res.sendStatus(500);
			return;
		}
		res.sendStatus(204);
	});//end findByIdAndRemove
}); //end router.delete








module.exports = router;
