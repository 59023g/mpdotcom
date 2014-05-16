'use strict';

angular.module('mpApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngAnimate'
])

.run(function($rootScope, $http, $state, $stateParams, $location, Projects) {
  $rootScope.$stateParams = $stateParams;
  $rootScope.$state = $state;

  $rootScope.projects = Projects.query({
    project: 'projects'
  }).$promise.then(
    function(data) {

      // Array is used for cycling between projects on rootscope methods
      var projectsArr = [];
      for (var i = 0; i < data.length; i++) {
        projectsArr.push(data[i].id);
      }
      $rootScope.projectsArr = projectsArr;
      $rootScope.projects = data;
    });

  $rootScope.next = function() {
    var projects = $rootScope.projectsArr;
    var index = projects.indexOf($stateParams.project);
    if ($state.current.url === '/') {
      index = 0;
      $state.go('project', {
        project: projects[0]
      });
    } else if (index < (projects.length - 1)) {
      $state.go('project', {
        project: projects[index + 1]
      });
    } else {
      $state.go('/');
    }
  };

  $rootScope.back = function() {
    var projects = $rootScope.projectsArr;
    var index = projects.indexOf($stateParams.project);
    if ($state.current.url === '/') {
      $state.go('project', {
        project: projects[projects.length - 1]
      });
      index = projects.length - 1;
      console.log(index);
    } else if ((index <= (projects.length) - 1) && index !== 0) {
      $state.go('project', {
        project: projects[index - 1]
      });
    } else {
      $state.go('/');
    }
  };

  $rootScope.detail = function() {
    $state.go('.detail');
  };

})


.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');

  $urlRouterProvider.rule(function($injector, $location) {
    var path = $location.path(),
      normalized = path.toLowerCase();

    if (path !== normalized) {
      return normalized
    }
  });

  // Now set up the states
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'partials/main',
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: '^/about',
      templateUrl: 'partials/about',
      controller: 'AboutCtrl'

    })
    .state('project', {
      url: '/:project',
      templateUrl: 'partials/project',
      controller: 'MainCtrl'
    })
    .state('project.detail', {
      url: '/detail',
      templateUrl: 'partials/detail',
    });


  $locationProvider.html5Mode(true);
});

//angular.module('mpApp.mp', []);
/*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    console.log(event);
    console.log(toState);
    console.log(toParams);
    console.log(fromState);
    console.log(toParams);
    //event.preventDefault();
  });

  $rootScope.$on('$viewContentLoading',
    function(event, viewConfig) {
      console.log(event);
      console.log(viewConfig);
    });
*/
