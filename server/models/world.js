var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('world model hit');
// Mongoose Schema
var WorldSchema = new Schema({
    worldName : {type: String, required: true, index: {unique:true}},
  	author : {type: String, required: true},
  	dateCreated : {type: Date, required: true},
  	shortDesc : {type: String, required: true},
  	longDesc : {type: String},
  	active : {type: Boolean}
});

module.exports = mongoose.model('World', WorldSchema);
