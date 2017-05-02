var express = require('express');
var router = express.Router();
var Location = require('../models/location');
var path = require('path');


router.get('/', function(req, res){
  console.log('get route hit: ');
  Location.find({}, function(err, allLocations){
    if (err) {
      console.log('mongo error: ', err);
      res.sendStatus(500);
    }
    res.send(allLocations);
  });
});

router.post('/', function(req, res){

  console.log('create post route hit: ', req.body);
  var curLoc = req.body;
  var locServer = new Location({
    locName: curLoc.locName,
    locShortDesc: curLoc.locShortDesc,
    dateCreated: new Date(),
    locDesc: curLoc.locDesc,
  });
  console.log(locServer);
  locServer.save(function(err, newLoc){
    if (err) {
      console.log('save error: ', err);
    }
    console.log('saved: ', newLoc);
    res.sendStatus(200);
  });
});

// db.getCollection('worlds').find({"locations._id" : ObjectId("59079d97cc58952e9ed3ba84")})

router.put('/', function(req, res){
  console.log('location put route hit: ', req.body);
  Worlds.find(req.body._id, function(err, curLoc){
    if (err) {
      console.log('location put error: ', err);
      res.sendStatus(500);
    }
    console.log('location put found: ', curLoc);
    res.send(curLoc);
  });
});

module.exports = router;
