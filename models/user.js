var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log('in user model');

var userSchema = new Schema({
	name: String,
	animal: String,
	age: Number,
	imageurl: String

});

var User = mongoose.model('users', userSchema);

module.exports = User;
