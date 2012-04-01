var newArray = [];

// Here I filled the spots in the newArray with 0s so we can
// count their occurances in the loops below

for(i=2; i<=12;i++) {
  newArray[i] = 0;
}


// Now increment the array to have the proper probabilities again
for(i = 1; i < 7; i++ ){
  for(y = 1; y < 7; y++ ){
    newArray[i + y] += 1;
  }
}


// Here I initialize the set of variables we will need for our game
// they are score, totalScore, answer, and the two die's die1 and die2
var score = 0;
var totalScore = 0;
var answer = "";
var die1;
var die2;

do {
  die1 = Math.floor(Math.random()*6 + 1);
  die2 = Math.floor(Math.random()*6 + 1);

  if( die1 === die2 ){
    totalScore = 0;
    break;
  }
  else if ((die1 + die2) === 4) {
    totalScore = -50;
  }
  else if ((die1 + die2) === 10) {
    totalScore = -100;
  }
  else {
    score = (10 - newArray[(die1 + die2)]) * 10
  }

  totalScore += score;

  console.log("You rolled a: "+die1+" and a: "+die2+" for a roll of: "+(die1+die2));
  console.log("You got a score of: "+score+" . Your total score is: "+totalScore);
  answer = prompt("Do you want to keep playing (y/n)");
} while (answer === "y");

