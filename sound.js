$(document).ready(function(){
  console.log ('get ready for some birthday fun!');

  var snd = new Audio("birthday_song.mp3");

  $('.button').click(function(){
    snd.play();
    snd.currentTime=0;
  });

});

