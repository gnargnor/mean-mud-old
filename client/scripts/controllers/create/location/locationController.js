app.controller('LocationController', ['CreatorService', '$scope', '$http', '$location', 'UserService', function(CreatorService, $scope, $http, $location, UserService){
  console.log('LocationController Hit');

  var location = this;

  location.newLoc = CreatorService.newLoc;
  location.locationsObject = CreatorService.locationsObject;
  location.locationCreator = CreatorService.locationCreator;
  location.getLocations = CreatorService.getLocations;
  location.editLocation = CreatorService.editLocation;

  location.messageObject = CreatorService.messageObject;

  location.getLocations();

}]);
