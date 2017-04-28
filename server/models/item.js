var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('item model hit');
// Mongoose Schema
var ItemSchema = new Schema({
    itemName : {type: String, required: true, index: {unique:true}},
  	itemType : {type: String},
  	dateCreated : {type: Date, required: true},
  	itemDesc : {type: String, required: true},
    itemNotes : {type: String},
    //Location will refer to the character inventory or location inventory
  	itemLoc : {},
    itemTargets : {},
    lookLstnrs : {},
    eventLstnrs : {},
});

module.exports = mongoose.model('Item', ItemSchema);
