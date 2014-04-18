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
