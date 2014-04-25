'use strict';

angular.module('mpApp')
  .controller('MainCtrl', ['$scope', '$stateParams', '$state', 'Projects', 'preloader', '$timeout',
    function($scope, $stateParams, $state, Projects, preloader, $timeout) {

      console.log($stateParams.project);

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
              $scope.imageLocations = $scope.images;

              // Preload the images; then, update display when returned.
              preloader.preloadImages($scope.imageLocations).then(
                function handleResolve() {

                  //function imageLoad() {
                    $scope.isLoading = false;
                    $scope.isSuccessful = true;
                  //}

                  //$timeout(imageLoad, 500);
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
