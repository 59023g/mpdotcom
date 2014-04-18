'use strict';

angular.module('mpApp')
  .controller('MainCtrl', ['$scope', '$stateParams', '$state', 'Projects', '$rootScope',
    function($scope, $stateParams, $state, Projects, $rootScope) {
      /*$state.reload(function() {
      	console.log('reloaded');
      });*/
      console.log($rootScope);
      //$rootScope.next();

      console.log($stateParams.project);

      //GET specific project based on stateparams 
      Projects.get({
        project: $stateParams.project
      })
        .$promise.then(
          function(data) {
            console.log(data);
          }
      );

    }
  ]);
