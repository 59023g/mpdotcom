/*(function load() {
  var spinner = '<div id="spinnerWrap"><div id="spinner"></div></div>'
  var body = document.getElementsByTagName('body');
  document.body.innerHTML += spinner;
})();

window.onload = function() {
  console.log('load')
  var spinner = document.getElementById('spinnerWrap')
  var imagesLeft = document.getElementById('left')
  var imagesTop = document.getElementById('top')
  var intro = document.getElementById('intro')

    function remove() {
      spinner.parentNode.removeChild(spinner)
    }

    function show() {
      intro.style.opacity = 1
      imagesLeft.style.opacity = 1
      //imagesTop.style.opacity = 1
      spinner.style.opacity = 0
      setTimeout(remove, 1000);

    }
  setTimeout(show, 500)

};

var load = function() {
  var spinner = '<div id="spinnerWrap"><div id="spinner"></div></div>'
  var body = document.getElementsByTagName('body');
  document.body.innerHTML += spinner;
}
var inite = function() {
  load();
};
*/
$('#navigate-back')
  .mouseenter(function() {
    $('path#back-bg').attr('class', 'hidden');
    $('polygon#back-tri').attr('class', 'seen');

    $('path#forward-bg').attr('class', 'seen');
    $('polygon#forward-tri').attr('class', 'hidden');

  })
  .mouseleave(function() {
    $('path#back-bg').attr('class', 'hidden');
    $('polygon#back-tri').attr('class', 'seen');

  })

$('#navigate-forward')
  .mouseenter(function() {
    $('path#forward-bg').attr('class', 'hidden');
    $('polygon#forward-tri').attr('class', 'seen');

    $('path#back-bg').attr('class', 'seen');
    $('polygon#back-tri').attr('class', 'hidden');

  })
  .mouseleave(function() {
    $('path#forward-bg').attr('class', 'hidden');
    $('polygon#forward-tri').attr('class', 'seen');

    $('path#back-bg').attr('class', 'hidden');
    $('polygon#back-tri').attr('class', 'seen');

  })

$('#controls')
  .mouseleave(function() {
    $('path#forward-bg').attr('class', 'seen');
    $('polygon#forward-tri').attr('class', 'hidden');

    $('path#back-bg').attr('class', 'hidden');
    $('polygon#back-tri').attr('class', 'seen');

  })

$(function() {
  $(window).bind('keydown', function(e) {
    console.log(e);
    if (e.keyCode == '39') {
      $scope.next();
    } else if (e.keyCode == '37') {
      $scope.back();
    }
  });
})
