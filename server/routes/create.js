var express = require('express');
var router = express.Router();
var World = require('../models/world');
var path = require('path');


router.get('/', function(req, res){
  console.log('create get route hit: ');
  World.find({}, function(err, allWorlds){
    if (err) {
      console.log('mongo error: ', err);
      res.sendStatus(500);
    }
    res.send(allWorlds);
  });
});

router.get('/locations/:word_id', function(req, res){
  // Find a sub collection
});

router.post('/', function(req, res){

  console.log('create post route hit: ', req.body);
  var newWorld = req.body;
  var worldServer = new World({
    worldName: newWorld.worldName,
    author: newWorld.author,
    dateCreated: new Date(),
    shortDesc: newWorld.shortDesc,
  });
  console.log(worldServer);
  // console.log(MongoDB.Universe.worlds);
  worldServer.save(function(err, newWorld){
    if (err) {
      console.log('save error: ', err);
    }
    console.log('saved: ', newWorld);
    res.send(newWorld);
  });
});

router.put('/', function(req, res){
  console.log('create put route hit: ', req.body);
  World.findById(req.body._id, function(err, curWorld){
    if(err){
      console.log('world find error: ', err);
    }
    console.log(curWorld);
    console.log(req.body);

    curWorld.worldName = req.body.worldName || curWorld.worldName;
    curWorld.author = req.body.author || curWorld.author;
    curWorld.shortDesc = req.body.shortDesc || curWorld.shortDesc;
    curWorld.active = req.body.active || curWorld.active;
    curWorld.locations = req.body.locations || curWorld.locations;
    curWorld.player = req.body.player || curWorld.player;
    curWorld.engine = req.body.engine || curWorld.engine;

    curWorld.save(function(err, curWorld){
      if (err) {
        console.log('create put save error', err);
      }
      console.log(curWorld);
      res.send(curWorld);
    });
  });

});

module.exports = router;
