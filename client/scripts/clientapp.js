var app = angular.module('app', ['ngRoute', 'ng-terminal-example', 'vtortola.ng-terminal', 'ng-terminal-example.command.tools', 'ng-terminal-example.command.implementations', ]);


/// Routes ///
app.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/admin', {
      templateUrl: '/views/templates/admin.html',
      controller: 'AdminController',
      resolve: {
        getadmin : ['AdminService', function(AdminService){
          return AdminService.getadmin();
        }]
      }
    })
    .when('/terminal', {
      templateUrl: '/views/templates/terminal.html',
      controller: 'console',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
