app.controller('CreateController', ['CreatorService', '$scope', '$http', '$location', 'UserService', function(CreatorService, $scope, $http, $location, AdminService){
  console.log('CreateController Hit');

  var create = this;

  create.world = CreatorService.world;
  create.curWorlds = CreatorService.curWorlds;
  create.worldCreator = CreatorService.worldCreator;
}]);
