'use strict';

angular.module('mpApp')
  .factory('Projects', ['$resource',
    function Projects($resource) {
      return $resource('projects/:project.json', {}, {
        query: {
          method: 'GET',
          params: {
            project: 'projects'
          },
          isArray: true
        }
      });
    }
  ]);
