var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('location model hit');
// Mongoose Schema
var LocationSchema = new Schema({
    locName : {type: String, required: true, index: {unique:true}},
  	locShortDesc : {type: String, required: true},
  	dateCreated : {type: Date, required: true},
  	locDesc : {type: String, required: true},
  	locNotes : {type: String},
    //location coordinates
  	locCoXY : [{type: Number}, {type: Number}],
    locObjects : {},
    npChars : {},
    lookLstnrs : {},
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
