'use strict'

angular.module('app').controller('messagesCtrl', ['$scope', '$rootScope',
   '$http', '$routeParams', function ($scope, $rootScope, $http, $routeParams) {
   
   $scope.messages = $scope.persistentMessages[$routeParams.id];
   $scope.newMessage = '';

   /*
   $http.get('/mock/' + $routeParams.id + '_course.json').success(
      function(data) {
      $scope.messages = data.Messages;
   });*/
 
   $scope.createMessage = function () {
      $scope.messages.push({
         "user": {
            "name": $scope.userData.user.name
          },
         "message": $scope.newMessage
      });
      $scope.newMessage = '';
   };
}]);
