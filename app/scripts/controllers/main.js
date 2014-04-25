'use strict';

angular.module('mpApp')
  .controller('MainCtrl', ['$scope', '$stateParams', '$state', 'Projects', 'preloader',
    function($scope, $stateParams, $state, Projects, preloader) {
      //console.log($rootScope);

      //console.log($stateParams.project);

      //GET specific project based on stateparams 
      Projects.get({
        project: $stateParams.project
      })
        .$promise.then(
          function(data) {
            $scope.project = data;
            //console.log(data);
            if ($scope.project.images) {
              $scope.images = $scope.project.images;
              console.log($scope.images);

              // I keep track of the state of the loading images.
              $scope.isLoading = true;
              $scope.isSuccessful = false;
              $scope.percentLoaded = 0;

              // I am the image SRC values to preload and display./
              // --
              // NOTE: "cache" attribute is to prevent images from caching in the
              // browser (for the sake of the demo).
              $scope.imageLocations = $scope.images

              // Preload the images; then, update display when returned.
              preloader.preloadImages($scope.imageLocations).then(
                function handleResolve(imageLocations) {

                  // Loading was successful.
                  $scope.isLoading = false;
                  $scope.isSuccessful = true;

                  console.info("Preload Successful");

                },
                function handleReject(imageLocation) {

                  // Loading failed on at least one image.
                  $scope.isLoading = false;
                  $scope.isSuccessful = false;

                  console.error("Image Failed", imageLocation);
                  console.info("Preload Failure");

                },
                function handleNotify(event) {

                  $scope.percentLoaded = event.percent;

                  console.info("Percent loaded:", event.percent);

                }
              );



            }





          }
      );









      //inite();



    }
  ]);
