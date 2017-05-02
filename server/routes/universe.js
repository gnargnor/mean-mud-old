var express = require('express');
var router = express.Router();
var Universe = require('../models/universe');
var path = require('path');


router.get('/active', function(req, res){
  Universe.find({"active": "true"}, function(err, activeUnv){
    if (err) {
      console.log('mongo error: ', err);
      res.sendStatus(500);
    }
    console.log(activeUnv);
    res.send(activeUnv);
  });
});

router.get('/', function(req, res){
  console.log('universe get route hit: ');
  Universe.find({}, function(err, allUnvs){
    if (err) {
      console.log('mongo error: ', err);
      res.sendStatus(500);
    }
    res.send(allUnvs);
  });
});

router.post('/', function(req, res){

  console.log('universe post route hit: ', req.body);
  var newUniverse = req.body;
  var universeServer = new Universe({
    universeName: newUniverse.universeName,
    author: newUniverse.author,
    dateCreated: new Date(),
    version: newUniverse.version,
  });
  console.log(universeServer);
  universeServer.save(function(err, newUniverse){
    if (err) {
      console.log('save error: ', err);
    }
    console.log('saved: ', newUniverse);
    res.sendStatus(200);
  });
});

module.exports = router;
