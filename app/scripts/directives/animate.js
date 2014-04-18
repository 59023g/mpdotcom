'use strict';

/*
angular.module('mpApp')
  .directive('animClass', function($route) {
    return {
      link: function(scope, elm, attrs) {
        var enterClass = $route.current.animate;
        elm.addClass(enterClass);
        scope.$on('$destroy', function() {
          elm.removeClass(enterClass);
          elm.addClass($route.current.animate);
        });
      }
    }
  });

angular.module('mpApp')
  .directive('head', ['$rootScope', '$compile',
    function($rootScope, $compile) {
      return {
        restrict: 'E',
        link: function(scope, elem) {
          var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
          elem.append($compile(html)(scope));
          scope.routeStyles = {};
          $rootScope.$on('$routeChangeStart', function(e, next, current) {
            if (current && current.$$route && current.$$route.css) {
              if (!Array.isArray(current.$$route.css)) {
                current.$$route.css = [current.$$route.css];
              }
              angular.forEach(current.$$route.css, function(sheet) {
                delete scope.routeStyles[sheet];
              });
            }
            if (next && next.$$route && next.$$route.css) {
              if (!Array.isArray(next.$$route.css)) {
                next.$$route.css = [next.$$route.css];
              }
              angular.forEach(next.$$route.css, function(sheet) {
                scope.routeStyles[sheet] = sheet;
              });
            }
          });
        }
      };
    }
  ]);
*/