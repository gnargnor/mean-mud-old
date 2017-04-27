app.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  var regUser = this;

  regUser.userObject = UserService.userObject;
  regUser.logout = UserService.logout;
}]);
