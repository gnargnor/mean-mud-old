app.controller('UniverseController', ['UniverseService', '$scope', '$http', '$location', 'AdminService', function(UniverseService, $scope, $http, $location, AdminService){
  console.log('UniverseController Hit');
  var unv = this;

  unv.messageObject = UniverseService.messageObject;
  unv.unvsObject = UniverseService.unvsObject;
  unv.universeCreator = UniverseService.universeCreator;
  unv.editUnv = UniverseService.editUnv;
}]);
