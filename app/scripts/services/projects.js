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


/* $rootScope.next = function() {
    console.log($stateParams.project);
    var projects = $rootScope.projects;
    console.log(projects);
    console.log(index);
    console.log($stateParams);
    if ($state.current.url === '/') {
      index = 0;
      $state.go('project', {
        project: projects[index].id
      });
    } else if (index < (projects.length - 1)) {
      console.log(projects.indexOf());
      index = projects.indexOf($stateParams.project);
      console.log(index);
      index++;
      $state.go('project', {
        project: projects[index].id
      });
    } else {
      $state.go('/');
      index = -1;
      console.log(index + ' home');
    }
  };

  $rootScope.back = function() {
    var projects = $rootScope.projects;
    console.log(projects);
    console.log(projects.length);

    if ($state.current.url === '/') {
      $state.go('project', {
        project: projects[projects.length - 1].id
      });
      index = projects.length - 1;
      console.log(index);
    } else if ((index <= (projects.length) - 1) && index !== 0) {
      console.log(index);
      index--;
      $state.go('project', {
        project: projects[index].id
      });
      console.log(index);
    } else {
      $state.go('/');
      index = -1;
      console.log(index + ' home');
    }
  };
  */
  