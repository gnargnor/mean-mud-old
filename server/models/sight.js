var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Location = require('./location.js');

console.log('sight model hit');
// Mongoose Schema
var SightSchema = new Schema({
    keyword : {type: String, required: true},
  	sightDesc : {type: String, required: true},
  	dateCreated : {type: Date, required: true, default: Date.now},
  	isImportant : {type: Boolean}
});

module.exports = mongoose.model('Sight', SightSchema);
