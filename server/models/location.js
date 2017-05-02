var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var World = require('./world');
var Sight = require('./sight');

console.log('location model hit');
// Mongoose Schema
var LocationSchema = new Schema({
    locName : {type: String, required: true, index: {unique:true}},
  	locShortDesc : {type: String, required: true},
  	dateCreated : {type: Date, required: true, default: Date.now},
  	locDesc : {type: String, required: true},
  	locNotes : {type: String},
    //location coordinates
  	locCoXY : [{type: Number}, {type: Number}],
    locObjects : {},
    npChars : {},
    sights : [Sight.schema],
    eventLstnrs : {},
    exits : {
              north : {},
              east : {},
              south : {},
              west : {},
            },
    specExits : {},
});

module.exports = mongoose.model('Location', LocationSchema);
