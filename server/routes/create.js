var express = require('express');
var router = express.Router();
var World = require('../models/world');
var path = require('path');


router.get('/', function(req, res){
  console.log('get route hit: ');
  World.find({}, function(err, allWorlds){
    if (err) {
      console.log('mongo error: ', err);
      res.sendStatus(500);
    }
    res.send(allWorlds);
  });
});

router.post('/', function(req, res){

  console.log('create post route hit: ', req.body);
  var curWorld = req.body;
  var worldServer = new World({
    worldName: curWorld.worldName,
    author: curWorld.author,
    dateCreated: new Date(),
    shortDesc: curWorld.shortDesc,
  });
  console.log(worldServer);
  worldServer.save(function(err, newWorld){
    if (err) {
      console.log('save error: ', err);
    }
    console.log('saved: ', newWorld);
    res.sendStatus(200);
  });
});

module.exports = router;
