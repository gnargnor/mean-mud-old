var express = require('express');
var router = express.Router();
var Sight = require('../models/sight');
var Location = require('../models/location');
var World = require('../models/world');
var path = require('path');


router.get('/', function(req, res){
  console.log('get route hit: ');
  // Sight.find({}, function(err, allSights){
  //   if (err) {
  //     console.log('mongo error: ', err);
  //     res.sendStatus(500);
  //   }
  //   res.send(allSights);
  // });
});

router.post('/', function(req, res){

  console.log('create post route hit: ', req.body);
  var curSight = req.body;
  var sightServer = new Sight({
    keyword: curSight.keyword,
    sightDesc: curSight.sightDesc,
    dateCreated: new Date(),
    isImportant: curSight.isImportant,
  });
  console.log('sightServer: ', sightServer);
  // console.log(locServer);
  // locServer.save(function(err, newLoc){
  //   if (err) {
  //     console.log('save error: ', err);
  //   }
  //   console.log('saved: ', newLoc);
  //   res.sendStatus(200);
  // });
});

router.put('/', function(req, res){
  console.log('sight put route hit', req.body);

  // World.findById(req.body._id, function(err, curSight){
  //   if (err) {
  //     console.log('Sight put error: ', err);
  //   }
  //   console.log(curSight);
  //   res.send(curSight);
  // });
});

module.exports = router;
