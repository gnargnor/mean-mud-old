var express = require('express');
var router = express.Router();
var Item = require('../models/item');
var path = require('path');


router.get('/', function(req, res){
  console.log('item get route hit: ');
  Item.find({}, function(err, allItems){
    if (err) {
      console.log('mongo error: ', err);
      res.sendStatus(500);
    }
    res.send(allItems);
  });
});

router.post('/', function(req, res){

  console.log('item post route hit: ', req.body);
  var curItem = req.body;
  var itemServer = new Item({
    itemName: curItem.itemName,
    itemDesc: curItem.itemDesc,
    itemNotes: curItem.itemNotes,
    dateCreated: new Date(),
  });
  console.log(itemServer);
  itemServer.save(function(err, newItem){
    if (err) {
      console.log('save error: ', err);
    }
    console.log('saved: ', newItem);
    res.sendStatus(200);
  });
});

module.exports = router;
