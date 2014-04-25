'use strict';

angular.module('mpApp')
  .directive(
    'load',
    function($window) {

      function link(scope, element) {
        function app() {
          console.log('app');
        }
        var win = angular.element($window);

        win.onload = function() {
        	console.log('message');
        }

        angular.element($window).on('load', function() {
        	console.log('loaddddd');
          scope.$apply(function() {
            app();
          });
        });

      }

      return ({
        link: link,
        restrict: 'AEC'
      });

    });

/*

      var load = function($document) {
        //var spinner = '<div id="spinnerWrap"><div id="spinner"></div></div>';
        var body = $document.getElementsByTagName('body');
        $document.body.innerHTML += spinner;
      }

      scope.load();

      $window.onload = function() {
        console.log('load');
        var spinner = $document.getElementById('spinnerWrap');
        var imagesLeft = $document.getElementById('left');
        var imagesTop = $document.getElementById('top');
        var intro = $document.getElementById('intro');

        function remove() {
          spinner.parentNode.removeChild(spinner);
        }

        function show() {
          intro.style.opacity = 1;
          imagesLeft.style.opacity = 1;
          //imagesTop.style.opacity = 1
          spinner.style.opacity = 0;
          setTimeout(remove, 1000);

        }
        setTimeout(show, 500);

      };



              element.on('load', function() {
          element.addClass('seen');
          console.log('h');
        }).on('error', function() {
          //console.log('h');
        });

        scope.$watch('ngSrc', function(newVal) {
          element.removeClass('seen');
        });
      



        //var win = $();
        //console.log(win);

        /*angular.element($window.document).$on('$viewContentLoaded', function() {
          console.log('load');
        })*/

