var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log('in user model');

var petSchema = new Schema({
	name: String,
	animal: String,
	age: Number,
	imageurl: String

});

var Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
