var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('create hit');

// Mongoose Schema
var WorldSchema = new Schema({
    worldName : {type: String, required: true, index: {unique:true}},
  	author : {type: String, required: true},
  	dateCreated : {type: Date, required: true},
  	shortDesc : {type: String, required: true},
  	longDesc : {type: String, required: true},
  	active : {type: Boolean, }
});

module.exports = mongoose.model('World', WorldSchema, 'meanmud');
