var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ng-terminal-example', 'vtortola.ng-terminal', 'ng-terminal-example.command.tools', 'ng-terminal-example.command.implementations', ]);



/// Routes ///
app.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    //home route - login or register
    .when('/home', {
      templateUrl: '/views/templates/login/home.html',
      controller: 'LoginController as login',
    })//home

    //register route
    .when('/register', {
      templateUrl: '/views/templates/login/register.html',
      controller: 'LoginController as login'
    })//register

    //user home route - logged in
    .when('/user', {
      templateUrl: '/views/templates/user/user.html',
      controller: 'UserController as regUser',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })//user

    //create route - available to logged in users
    .when('/create', {
      templateUrl: '/views/templates/user/create/create.html',
      controller: 'CreateController as create',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })//create

    //world view route - available to logged in users
    .when('/worldHome', {
      templateUrl: '/views/templates/user/create/worldHome.html',
      controller: 'CreateController as create',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })//world view

    //new location route - available to logged in users
    .when('/newLoc', {
      templateUrl: 'views/templates/user/create/location/newLoc.html',
      controller: 'LocationController as location',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })//new location

    .when('/existingLoc', {
      templateUrl: 'views/templates/user/create/location/existingLoc.html',
      controller: 'LocationController as location',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    //new location route - available to logged in users
    .when('/newItem', {
      templateUrl: 'views/templates/user/create/item/newItem.html',
      controller: 'ItemController as item',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })//new location

    .when('/existingItem', {
      templateUrl: 'views/templates/user/create/item/existingItem.html',
      controller: 'ItemController as item',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    //admin route - logged in
    .when('/admin', {
      templateUrl: '/views/templates/admin.html',
      controller: 'AdminController as admin',
      resolve: {
        getadmin : ['AdminService', function(AdminService){
          return AdminService.getadmin();
        }]
      }
    })//admin

    //terminal route - available to logged in users
    .when('/terminal', {
      templateUrl: '/views/templates/user/gameplay/terminal.html',
      controller: 'console',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })//terminal

    .otherwise({
      redirectTo: '/home'
    });
}]);
