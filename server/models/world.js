var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Location = require('./location');

console.log('world model hit');
// Mongoose Schema
var WorldSchema = new Schema({
    worldName : {type: String, required: true, index: {unique:true}},
  	author : {type: String, required: true},
  	dateCreated : {type: Date, required: true, default: Date.now},
  	shortDesc : {type: String, required: true},
  	longDesc : {type: String},
  	active : {type: Boolean, default: false},
    //array of nested location objects
    locations : [Location.schema],
    //player object containing player stats, inventory, and other relative information defined in player schema, merged with global player schema
    player : {},
    //engine object containing logic and functions specific to the world, merged with global engine
    engine : {},
    // timestamps : true
});

module.exports = mongoose.model('World', WorldSchema);
