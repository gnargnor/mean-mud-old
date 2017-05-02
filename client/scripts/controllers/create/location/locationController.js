app.controller('LocationController', ['CreatorService', '$scope', '$http', '$location', 'UserService', function(CreatorService, $scope, $http, $location, UserService){
  console.log('LocationController Hit');

  var location = this;

  location.newLoc = CreatorService.newLoc;
  location.locationsObject = CreatorService.locationsObject;
  location.locationCreator = CreatorService.locationCreator;
  location.getLocations = CreatorService.getLocations;
  location.editLocation = CreatorService.editLocation;

  location.addSightView = false;
  location.editSightView = false;

  location.addSight = function(){
    console.log('add sight');
    if (location.editSightView) {
      location.editSightView = false;
    }
    location.addSightView = true;
  };

  location.addSightToLoc = CreatorService.addSightToLoc;
  location.displayDesc = CreatorService.displayDesc;



  location.editSight = function(sight){
    console.log('edit sight');
    if (location.addSightView) {
      location.addSightView = false;
    }
    location.editSightView = true;
  };

  location.updateSight = CreatorService.updateSight;




  location.messageObject = CreatorService.messageObject;

  location.getLocations();

}]);
