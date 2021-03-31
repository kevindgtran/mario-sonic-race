// js check
// alert('test');
// jquery check
// $( document ).ready(function(){
//   $('h1').css('background-color', 'orange');
// });

$( document ).ready(function(){
//putting elements into variables
var player1 = '<div id="player1"><img src="images/marioCart.png" alt="Kevin" /></div>';
var player2 = '<div id="player2"><img src="images/sonicCar2.png" alt="sonic car" /></div>';
var background = '<div id="background"><img src="images/MarioBackGround.jpg" alt="MarioBackGround" /></div>'
var background2 = '<div id="background"><img src="images/SonicBackGround.png" alt="SonicBackGround" /></div>'
var player1Win = 0;
var player2Win = 0;

//appending player and background images
$('.gameBoxTop').append(player1);
$('.gameBoxTop').append(background);
$('.gameBoxBottom').append(player2);
$('.gameBoxBottom').append(background2);

//reset button to reload page
$('.reset').click(function(){
  location.reload();
});

//user keydown actions
$( document ).keydown(function(e) {
      if (e.keyCode === 81) {
        $('#player1 img').css('left', '+=10px');
        player1Win += 1;
        if (player1Win > 103) {
          alert('Player 1 Wins!')
        }
      }

      if (e.keyCode === 221) {
        $('#player2 img').css('left', '+=10px');
        player2Win += 1;
        if (player2Win > 103) {
          alert('Player 2 Wins!')
        }
      }

  });
});
