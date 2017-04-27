app.factory('CreatorService', ['$http', '$location', function($http, $location){
  var world = {
    title: '',
  	author: '',
  	dateCreated: undefined,
  	shortDesc: '',
  };

  var curWorlds = [];

  var worldCreator = function(world){
    var curWorld = {};
    curWorld.title = world.title;
    curWorld.shortDesc = world.shortDesc;
    curWorld.author = world.author;
    curWorld.dateCreated = new Date();
    console.log(curWorld);
    curWorlds.push(curWorld);
    curWorld = {};
  };




  return {
    world : world,
    worldCreator : worldCreator,
    curWorlds : curWorlds
  };
}]);
