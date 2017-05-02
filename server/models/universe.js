var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('universe model hit');
// Mongoose Schema
var UniverseSchema = new Schema({
    universeName : {type: String, required: true, index: {unique:true}},
  	author : {type: String, required: true, default: 'Logan Kelly'},
  	dateCreated : {type: Date, required: true, default: Date.now},
  	version : {type: String, required: true},
  	unvNotes : {type: String},
  	active : {type: Boolean, default: true},
    //array of nested active world objects
    worlds : Array,
    //player object containing player stats, inventory, and other relative information defined in player schema, merged with world player schema
    player : {},
    //engine object containing logic and functions specific to the world, merged with world engine
    engine : {},
    //object containing user information and inactive user worlds in development
    users : []
});

module.exports = mongoose.model('Universe', UniverseSchema);
