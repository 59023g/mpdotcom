'use strict';

angular.module('mpApp')
  .controller('controls', function($scope, $rootScope, $http) {
    $http.get('/projects/projects.json').success(function(data) {
      $scope.projects = data;
    });

    /*$scope.go = function(path, pageAnimationClass) {

      if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
        $scope.pageAnimationClass = 'crossFade';
      } else { // Use the specified animation
        $scope.pageAnimationClass = pageAnimationClass;
      }

      if (path === 'back') { // Allow a 'back' keyword to go to previous page
        $window.history.back();
      } else { // Go to the specified path
        $location.path(path);
      }
    };*/

    // transitionTo() promise will be rejected with
    // a 'transition prevented' error

  });
