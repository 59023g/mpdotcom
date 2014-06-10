'use strict';

angular.module('mpApp')
  .factory('pTwo', ['$http', '$q',
    function Projects($http, $q) {

      return {
        getScopeProject: function(url) {
          return $http.get('/projects/' + url + '.json', {
            config: {
              params: {
                project: ''
              }
            }
          })
            .then(function(response) {
              if (typeof response.data === 'object') {
                return response.data;
              } else {
                // invalid response
                return $q.reject(response.data);
              }

            }, function(response) {
              // something went wrong
              return $q.reject(response.data);
            });

        },
        getScopeImages: function(imgArray) {
          return imgArray
        }

      }


    }
  ]);









/*'use strict';

angular.module('doUiApp')
  .factory('pTwo', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
*/