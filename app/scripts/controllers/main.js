'use strict';

angular.module('mpApp')
  .controller('MainCtrl', ['$scope', '$stateParams', '$state', 'Projects', '$timeout',
    function($scope, $stateParams, $state, Projects, $timeout) {

      //GET specific project based on stateparams
      Projects.get({
        project: $stateParams.project
      })
        .$promise.then(
          function(data) {
            $scope.project = data;
            console.log($scope.project.images);
          });





      console.log($stateParams.project.layout)
    }
  ]);
