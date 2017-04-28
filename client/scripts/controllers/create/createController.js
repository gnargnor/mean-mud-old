app.controller('CreateController', ['CreatorService', '$scope', '$http', '$location', 'UserService', function(CreatorService, $scope, $http, $location, UserService){
  console.log('CreateController Hit');

  var create = this;

  create.world = CreatorService.world;
  create.worldsObject = CreatorService.worldsObject;
  create.worldCreator = CreatorService.worldCreator;
  create.getWorlds = CreatorService.getWorlds;

  create.messageObject = CreatorService.messageObject;
  
  create.getWorlds();
  console.log('createController : ', create.worldsObject.curWorlds);

}]);
