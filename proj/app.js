'use strict'

angular.module('app', ['ngRoute']);

angular.module('app').config(function ($routeProvider) {
   $routeProvider.when('/login', {
      controller: 'loginCtrl',
      templateUrl: '/components/login/login.html'
   });
   $routeProvider.when('/courses', {
      controller: 'coursesCtrl',
      templateUrl: '/components/courses/courses.html'
   });
   $routeProvider.when('/messages/:id', {
      controller: 'messagesCtrl',
      templateUrl: '/components/messages/messages.html'
   });
   $routeProvider.otherwise({
      redirectTo: '/login'
   });
});

angular.module('app').run(function ($rootScope, $http) {
   $http.get('/mock/messages.json').success(function(data) {
      $rootScope.persistentMessages = data;
   });

});
