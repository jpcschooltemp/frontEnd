'use strict'

angular.module('app').controller('loginCtrl', ['$scope', '$rootScope',
   '$location', '$http', function ($scope, $rootScope, $location, $http) {
   $scope.submit = function () {
      $rootScope.username = $scope.usernameInput;

      if ($scope.username == 'george') {
         $http.get('/mock/george_washington_user.json').success(function(data) {
            $rootScope.userData = data;
            resetInput();
            $location.path('/courses');
         });
      } else if ($scope.username == 'lincoln') {
         $http.get('/mock/honest_abe_user.json').success(function (data) {
            $rootScope.userData = data;
            resetInput();
            $location.path('/courses');
         });
      } else {
         resetInput();
         $rootScope.username = '';
         alert('Invalid username');
      }
   };

   function resetInput() {
      $scope.usernameInput = '';
      $scope.password = '';
   }
}]);
