'use strict';

angular.module('mpApp')
  .controller('MainCtrl', ['$scope', '$stateParams', '$state', 'Projects', 'preloader', '$timeout',
    function($scope, $stateParams, $state, Projects, preloader, $timeout) {

      //GET specific project based on stateparams
      Projects.get({
        project: $stateParams.project
      })
        .$promise.then(
          function(data) {
            $scope.project = data;

            if ($scope.project.images) {
              
              $scope.isLoading = true;
              $scope.isSuccessful = false;
              $scope.percentLoaded = 0;

              $scope.imageLocations = $scope.project.images;

              // Preload the images; then, update display when returned.
              preloader.preloadImages($scope.imageLocations).then(
                function handleResolve() {
                  function imageLoad() {
                    $scope.isLoading = false;
                    $scope.isSuccessful = true;
                  }
                  $timeout(imageLoad, 250);
                  console.info('Preload Successful');

                },
                function handleReject() {
                  // Loading failed on at least one image.
                  $scope.isLoading = false;
                  $scope.isSuccessful = false;
                },
                function handleNotify(event) {
                  $scope.percentLoaded = event.percent;
                  console.info('Percent loaded:', event.percent);

                }
              );
            }

          }
      );

    }
  ]);
