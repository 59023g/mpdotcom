'use strict';

angular.module('mpApp.teams')
  .factory('Team', ['$resource',
    function($resource) {
      return $resource('/api/teams', {
        //id: '@id'
      }, {
        update: {
          method: 'PUT',
          params: {}
        },
        query: {
          method: 'GET',
          isArray: true

        }
      });
    }
  ]);
