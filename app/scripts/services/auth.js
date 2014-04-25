'use strict';

angular.module('mpApp')
  .factory('Auth', function Auth($location, $rootScope, Team) {

    return {

      createTeam: function(team, callback) {
        var cb = callback || angular.noop;

        return Team.save(team,
          function(team) {
            //$rootScope.currentTeam.name = name;
            return cb(team);
          },
          function(err) {
            return cb(err);
          }).$promise;
      }

    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
