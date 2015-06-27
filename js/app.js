$(document).ready(function() {
    $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  
  .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })
  
  .mousedown(function() {
	playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '520px');
      }
    );
  })
  
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  
$(window).keydown(function(event){
    if (event.which == 88) {
    playCool();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  });
$(window).keyup(function(event){
    if (event.which == 88) {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-ready').show();
      $('.ryu-cool').hide();
    }
  });

});

var hadoukenSound = false;
function playHadouken () {
  hadoukenSound = !hadoukenSound;
  if (hadoukenSound) {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
}

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#theme-song')[0].pause();
    // $('#cool')[0].load()
    $('#cool')[0].play();
  }
}

