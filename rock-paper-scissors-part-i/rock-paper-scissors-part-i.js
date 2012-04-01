var result = "";

var player = prompt("Pick rock, paper, or scissors.");
// If the player types "ROCK," the script needs to read that the same
// as "rock", but only if player !== null!
if (player !== null) {
  player = player.toLowerCase();
}

var choices = ["rock","paper","scissors"];
var computer = choices[Math.floor(Math.random()*3)];

var win = "Your "+player+" beats "+computer+". You win.";
var lose = "Your "+player+" loses to "+computer+". You lose.";
var draw = "A draw: "+player+" on "+computer+".";

if(player === "rock"){
  if(computer === "scissors"){
    result = win;
  }
  else if(computer === "paper"){
    result = lose;
  }
  else if(computer === "rock"){
    result = draw;
  }
}
else if(player === "paper"){
  if(computer === "rock"){
    result = win;
  }
  else if(computer === "scissors"){
    result = lose;
  }
  else if(computer === "paper"){
    result = draw;
  }
}
else if(player === "scissors"){
  if(computer === "paper"){
    result = win;
  }
  else if(computer === "rock"){
    result = lose;
  }
  else if(computer === "scissors"){
    result = draw;
  }
}
else if (player === null) {
  result = "Bye!";
}
else {
  result = "I said rock, paper, or scissors!";
}
// If the player clicks cancel, the 'result' should equal "Bye!"


// If the player enters any other string, 'result' should equal
// "I said rock, paper, or scissors!"



console.log(result);
