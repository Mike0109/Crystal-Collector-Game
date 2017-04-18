$( document ).ready(function(){
  var Random=Math.floor(Math.random()*25+5)
  
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber within HTML
  
  var num1= Math.floor(Math.random()*9+1)
  var num2= Math.floor(Math.random()*9+1)
  var num3= Math.floor(Math.random()*9+1)
  var num4= Math.floor(Math.random()*9+1)
 
  //  Variables for containing inputs
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  // Appending JS wins and losses variables to their HTML Id
$('#numberWins').text(wins);
$('#numberLosses').text(losses);


//resets the game


function reset(){
      Random=Math.floor(Math.random()*25+5);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*9+1);
      num2= Math.floor(Math.random()*9+1);
      num3= Math.floor(Math.random()*9+1);
      num4= Math.floor(Math.random()*9+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function Winrar(){
alert("You win!");
  wins++; 
  $('#numberWins').text(wins);
  // Calls on reset function to restart the game
  reset();
}

function loser(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  // Calls on reset function to restart the game
  reset()
}
// Each jewel button uses an "on click" function that takes the value of the randomly generated Num"x" variable and adds it to global variable UserTotal thus displaying user score
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 