var randomRating = Math.floor(Math.random() * 10 + 1);

// We'll be making use of our old friend function! Remember that we can reuse the blocks of code stored in a function by calling that function any time we want!
//
// To move on, define a function called twoRandomScores. In the function body, declare two variables score1 and score2. Each variable will be assigned a random number between 1 and 10. Then return the sum of score1 and score2.
//
// Call the function twoRandomScores. Run this a number of times to see the randomly generated sum of score1 and score2.
//
// Note, this function has no parameters.
var twoRandomScores = function() {
  var score1, score2;
  score1 = Math.floor(Math.random() * 10 + 1);
  score2 = Math.floor(Math.random() * 10 + 1);
  return (score1 + score2);
};
twoRandomScores();
twoRandomScores();
twoRandomScores();

var newArray = [];

// Here I filled the spots in the newArray with 0s so we can
// count their occurances in the loops below

for(i=2; i<=12;i++)
  newArray[i] = 0;


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


// Since we have a do-while loop setup now, we need to modify the block of code inside of our first if statement. After we set totalScore to 0, we now need to break, doing so will exit the do-while loop, which is what we want since rolling doubles ends the game.
//
// Now click run and enjoy! :)




// Note, we combine strings to form a sentence by using + between the strings.
//
// First, start by declaring a variable randomScore that is assigned a random number between 1 and 52. In the console, print out the message "I got the score", along with the random number assigned to the variable. So use console.log to print:
//
// "I got the score" + randomScore.
var i, randomScore, remainder, outcome, deal;

deal = Math.floor(Math.random() * 40 + 1);
if (deal % 2 === 0) {
  outcome = "even";
}
else {
  outcome = "odd";
}

for (i=0; i<2; i++) {
    randomScore = Math.floor(Math.random() * 52 + 1);
    final = randomScore % 13;
    console.log(final);
}








// We'll be making use of if else statements. And we'll also be wanting to make use of the logical "or" operator, ||.
//
// To practice, first declare an unassigned variable outcome.
//
// Second, declare a variable deal that is assigned a random value between 1 and 40.
//
// Next, create an if else statement such that if deal is an even number, assign "even" to the variable outcome. And if deal is odd, assign "odd" to the variable outcome.
//
// To see how to use the modulo to handle even and odd numbers, see this exercise, and for more information on if else statements, see the lesson on conditionals.
//
// Note, we will deal with the case of the Ace in a similar way!






var card = Math.floor(Math.random() * 52 + 1);

var deal = function() {
  var card = Math.floor(Math.random() * 52 + 1);
  return card;
};
var card1 = deal();
var card2 = deal();
var getValue = function(card) {
  var value = (card % 13);
  if (value === 0 || value === 11 || value === 12) {
    return 10;
  }
  else if (value === 1) {
    return 11;
  }
  else {
    return value;
  }
};
var score = function() {
  return (getValue(card1) + getValue(card2));
};









// Make your card constructor again here, but make sure to use private
// variables!
function Card(s, n) {
    var suit = s;
    var number = n;
}

Card.prototype.getSuit = function() {
    return this.suit;
};

Card.prototype.getNumber = function() {
    return this.number;
};

// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
Card.prototype.deal = function() {
    var suit = Math.floor(Math.random() * 4 + 1);
    var number = Math.floor(Math.random() * 13 + 1);
    return new Card(suit, number);
};

// examples of the deal function in action
var card1 = deal();
var card2 = deal();




















// Make your card constructor again here, but make sure to use private
// variables!
function Card(s, n) {
  var suit = s;
  var number = n;

  this.getSuit = function() {
    return suit;
  };

  this.getNumber = function() {
    return number;
  };

  this.getValue = function() {
    if (number === 11 || number === 12 || number === 13) {
      return 10;
    }
    else if (number === 1) {
      return 11;
    }
    else {
      return number;
    }
  };
}


// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function() {
  var suit = Math.floor(Math.random() * 4 + 1);
  var number = Math.floor(Math.random() * 13 + 1);
  return new Card(suit, number);
};

// examples of the deal function in action
var card1 = deal();
var card2 = deal();



function Hand() {
    this.card1 = deal();
    this.card2 = deal();

    this.score = function() {
        var score1 = this.card1.getValue();
        var score2 = this.card2.getValue();

        return score1 + score2;
    }
}



























// Make your card constructor again here, but make sure to use private
// variables!
function Card(s, n) {
  var suit = s;
  var number = n;

  this.getSuit = function() {
    return suit;
  };

  this.getNumber = function() {
    return number;
  };

  this.getValue = function() {
    if (number === 11 || number === 12 || number === 13) {
      return 10;
    }
    else if (number === 1) {
      return 11;
    }
    else {
      return number;
    }
  };

  this.getSuitName = function() {
    if (suit === 1) return "Clubs";
    if (suit === 2) return "Spades";
    if (suit === 3) return "Hearts";
    else return "Diamonds";
  };

  this.getCardName = function() {
    var title;
    switch (number) {
      case 1:
        title = "Ace";
        break;
      case 11:
        title = "Jack";
        break;
      case 11:
        title = "Queen";
        break;
      case 13:
        title = "King";
        break;
      default:
        title = number.toString();
    }

    return title + " of " + this.getSuitName();
  };
}


// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function() {
  var suit = Math.floor(Math.random() * 4 + 1);
  var number = Math.floor(Math.random() * 13 + 1);
  return new Card(suit, number);
};

// examples of the deal function in action
var card1 = deal();
var card2 = deal();

function Hand() {
  var cards = [];

  this.draw = function() {
    cards.push(deal());
  };

  this.score = function() {
    var i, sum = 0;
    for (i=0; i<cards.length; i++) {
      sum += cards[i].getValue();
    }

    return sum;
  };
}

var myHand = new Hand();
var yourHand = new Hand();

myHand.draw();
myHand.draw();
yourHand.draw();
yourHand.draw();

console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());

if(yourHand.score() > myHand.score()) console.log("you win!");
else if(yourHand.score() < myHand.score()) console.log("I win!");
else console.log("We tied!");









































//create the following functions:

// isFizzBuzzie
// return true if the provided value is
// a multiple of 3 or 5 but not both 3 and 5.
// otherwise it returns false
// arguments: number - integer
// returns: true or false - boolean

//getFizzBuzzSum
//returns the sum of all the numbers below the maximum provided
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - sum of the numbers below the maximum which are multiples of 3 or 5 but not both

//getFizzBuzzCount
//returns the count of all the numbers below the maximum provided
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - count of the numbers below the maximum whihch are multiples of 3 or 5 but not both

//getFizzBuzzAverage
//returns the average(sum/count) of all the numbers below the maximum provided
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - average(sum/count) of the numbers below the maximum whihch are multiples of 3 or 5 but not both


// Write the isFizzBuzzie function by creating this new function inside your object and passing in a value. Test if that value is a multiple of 3 or 5 but not both 3 and 5. If it is a multiple of 3 or 5 and not a multiple of both 3 and 5 then return true otherwise return false.
//
// Write isFizzBuzzie as a function within FizzBuzzPlus. It will return true or false and take in a number which will be tested to determine if it is a multiple of 3 or 5 but not both 3 and 5.
//

var FizzBuzzPlus = {
  isFizzBuzzie: function(number) {
    return ((number % 3 === 0 || number % 5 === 0) && number % 15 > 0);
  },

  getFizzBuzzSum: function(number) {
    var i, sum = 0;
    for (i=0; i<number; i++) {
      if (this.isFizzBuzzie(i)) {
        sum += i;
      }
    }
    return sum;
  },

  getFizzBuzzCount: function(number) {
    var i, count = 0;
    for (i=0; i<number; i++) {
      if (this.isFizzBuzzie(i)) {
        count += 1;
      }
    }
    return count;
  },

  getFizzBuzzAverage: function(number) {
    return this.getFizzBuzzSum(number) / this.getFizzBuzzCount(number);
  }
};

console.log(FizzBuzzPlus.getFizzBuzzAverage(100));













// Declare a variable "player" and ask the user to supply the string,
// "rock", "paper", or "scissors".
var player = prompt('Choose "rock", "paper", or "scissors".');


// Now print "player" to the console to test your code.
console.log("You picked " + player + ".");






//We don't need to prompt the human player right now.
/*
var player = prompt("Pick rock, paper, or scissors.");
*/

// Declare a variable "choices" that contains the three choices as
// separate strings.
var choices = ["rock", "paper", "scissors"];


// Declare a variable "computer" that selects one of the strings from
// "choices" at random. Use the random number generated by
// Math.floor(Math.random()*3)
var computer = choices[Math.floor(Math.random()*3)];

// We'll turn this one off for the moment.
/*
console.log("You picked "+player+".");
*/

// Print the computer's choice to the console.
console.log("The computer picked " + computer);



// Now we need to teach the script the rules of the game. There are nine possible outcomes to the game. We could represent them with nine if statements like if (player === "rock" && computer === "rock"). However, if we use nested conditionals, we can put the player input on the first level and the computer choice on the second level. This will be easier to read and save us some typing in the long run.
//
// Write the first level of if statements showing the three expected human player inputs.
// Use the variable whatThen to test your conditional. If the user chose "rock", "paper" or "scissors", set the value of whatThen to "rocked", "papered", or "scissored", respectively.
// This use of whatThen is what is sometimes called intermediate test code. It won't be part of the final code, but it helps the coder test his or her code before moving on. Click run and type "rock", "paper", or "scissors" at the prompt when you are finished.
if (player === "rock") {
  whatThen = "rocked";
}
else if (player === "paper") {
  whatThen = "papered";
}
else if (player === "scissors") {
  whatThen = "scissored";
}






var player = prompt("Pick rock, paper, or scissors.");

var choices = ["rock","paper","scissors"];
var computer = choices[Math.floor(Math.random()*3)];

if(player === "rock"){
  if (computer === "rock") {

  }
  else if (computer === "paper") {

  }
  else if (computer === "scissors") {

  }
    // Nest your if statements here:

}
else if(player === "paper"){
    // And here:
    if (computer === "rock") {

    }
    else if (computer === "paper") {

    }
    else if (computer === "scissors") {

    }

}
else if(player === "scissors"){
    // And three more:
    if (computer === "rock") {

    }
    else if (computer === "paper") {

    }
    else if (computer === "scissors") {

    }

}

console.log("You picked "+player+".");
console.log("The computer picked "+computer+".");






var player = prompt("Pick rock, paper, or scissors.");

var choices = ["rock","paper","scissors"];
var computer = choices[Math.floor(Math.random()*3)];

// Declare a variable 'result' with an empty string.
var result = "";

// Declare three variables: 'win', 'lose', and 'draw' with strings that
// say "You win.", "You lose." and "A draw."
var win  = "You win.";
var lose = "You lose.";
var draw = "A draw.";

if(player === "rock"){
    if(computer === "scissors"){
        // Give the results!
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

console.log("You picked "+player+".");
console.log("The computer picked "+computer+".");
// Print the result!
console.log(result);









var result = "";

var player = prompt("Pick rock, paper, or scissors.");

var choices = ["rock","paper","scissors"];
var computer = choices[Math.floor(Math.random()*3)];

// Rewrite the strings in win, lose, and draw so they contain
// complete sentences stating the result.

var win = "Your " + player + " beats " + computer + ". You win.";
var lose = "Your " + player + " loses to " + computer + ". You lose.";
var draw = "A draw: " + player + " on " + computer + ".";


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

// We won't need these anymore, so they've been removed for you.
/*
console.log(player);
console.log(computer);
*/

console.log(result);











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















function RedCar( price ) {
    this.price = price;
    this.color = "red";

    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

function BlueCar( price ) {
    this.price = price;
    this.color = "blue";

    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

//Create a Car object here
function Car(price, color) {
  this.price = price;
  this.color = color;

  this.honk = function() {
      console.log("BEEP BEEP!!");
  };

};








function Car( price, color ) {
    this.price = price;
    this.color = color;

    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

var blueCar = new Car( 1000, "blue");

// Make an object for the red car here.
var redCar = new Car( 1000, "red");

console.log("My redCar is " + redCar.color);












function Car( listedPrice, color ) {
    var price = listedPrice;
    this.color = color;

    this.honk = function() {
        console.log("BEEP BEEP!!");
    };

    this.getPrice = function() {
        return price;
    };
}

var blueCar = new Car( 1000, "blue");

console.log("The price of blueCar is " + blueCar.getPrice()); // finish me!









function BankAccount( lastname ) {
    this.lastname = lastname;
    this.balance = 1000000;
}

// write your function here
function attackBalance(account) {
    account.balance = 5;
}

var jonesBankAccount = new BankAccount ("Jones");

console.log("jonesBankAccount has " + jonesBankAccount.balance + " dollars!");
attackBalance(jonesBankAccount);
console.log("After attack, jonesBankAccount has " + jonesBankAccount.balance + " dollars!");







function BankAccount( lastname ) {
    this.lastname = lastname;
    var balance = 1000000;
}

function attackBalance(account) {
    if (account.balance === undefined) {
        console.log("Can't attack");
    }
    else {
        account.balance = 5;
    }
}

var safeAccount = new BankAccount(12345345345);
attackBalance(safeAccount);








function Car( listedPrice ) {
   var price = price;
   this.speed = 0;
   this.numWheels = 4;

   this.getPrice = function() {
       return price;
   };
}

Car.prototype.accelerate = function() {
   this.speed += 10;
};

// Write ElectricCar class here
function ElectricCar( listedPrice ) {
    var price = listedPrice;

    this.getPrice = function() {
       return price;
   };
}
ElectricCar.prototype = new Car(123);








function Car( listedPrice ) {
   var price = listedPrice;
   this.speed = 0;

   this.getPrice = function() {
       return price;
   };
}

Car.prototype.accelerate = function() {
   this.speed += 10;
};

function ElectricCar( listedPrice ) {
   var price = listedPrice;
   this.speed = 0;

   this.getPrice = function() {
       return price;
   };
}

ElectricCar.prototype = new Car();

myElectricCar = new ElectricCar(500);

console.log(myElectricCar instanceof Car);





function Car( listedPrice ) {
   var price = listedPrice;
   this.speed = 0;
   this.numWheels = 4;

   this.getPrice = function() {
       return price;
   };
}

Car.prototype.accelerate = function() {
   this.speed += 10;
};

function ElectricCar( listedPrice ) {
   var price = listedPrice;
}
ElectricCar.prototype = new Car();

myElectricCar = new ElectricCar(500);

console.log("myElectricCar has speed " + myElectricCar.speed);

// Print out myElectricCar's number of wheels
console.log("myElectricCar has numWheels " + myElectricCar.numWheels);






function Car( listedPrice ) {
   var price = listedPrice;
   this.speed = 0;
   this.numWheels = 4;

   this.getPrice = function() {
       return price;
   };
}

Car.prototype.accelerate = function() {
   this.speed += 10;
};

function ElectricCar( listedPrice ) {
    // add an 'electricity' property to this class
    this.electricity = 100;
    var price = listedPrice;
    this.refuel = function(numHours) {
        for (i=0; i<numHours; i++) {
            this.electricity += 5;
        }
    };
}

ElectricCar.prototype = new Car();

// Add refuel method here:
ElectricCar.prototype.refuel = function(    ) {

};

myElectricCar = new ElectricCar(500);






function Car( listedPrice ) {
   var price = listedPrice;
   this.speed = 0;
   this.numWheels = 4;

   this.getPrice = function() {
       return price;
   };
}

Car.prototype.accelerate = function() {
   this.speed += 10;
};

function ElectricCar( listedPrice ) {
   var price = listedPrice;
   this.electricity = 100;
}
ElectricCar.prototype = new Car();

// Write the accelerate method for ElectricCar here
ElectricCar.prototype.accelerate = function() {
   this.speed += 20;
};


// Write the decelerate method for ElectricCar here
ElectricCar.prototype.decelerate = function(secondsStepped) {
    for (i=0; i<secondsStepped; i++) {
        this.speed -= 5;
    }
};


myElectricCar = new ElectricCar(500);

myElectricCar.accelerate();
console.log("myElectricCar has speed " + myElectricCar.speed);
myElectricCar.decelerate(3);
console.log("myElectricCar has speed " + myElectricCar.speed);





















var cashRegisterWithChange = {
    total: 0,
    setTotal: function (amount) {
        this.total = amount;
    },
    getPaid: function (amountPaid) {
        //fill this in
        if (amountPaid < this.total) {
  console.log("Not enough!");
}
else {
  var change = (amountPaid - this.total);
  change = change.toFixed(2)  * 100;
  console.log(change + " pennies");
}

  }
};

//some tests - you should see the following output:
//  Not enough!
//  45 pennies
cashRegisterWithChange.setTotal(2.55);
cashRegisterWithChange.getPaid(2);
cashRegisterWithChange.getPaid(3);













var cashRegisterWithChange = {
  total: 0,
  change: 0,
  setTotal: function (amount) {
    this.total = amount;
  },
  getPaid: function (amountPaid) {
    if (this.total > amountPaid) {
      console.log ("Not enough!");
    } else {
      this.change = amountPaid - this.total;
      console.log ("Give them:");

      //this line will change the value of this.change
      var numDollars = this.howManyDollars(this.change);
      console.log (numDollars + " dollar bills");

      //update the change variable for outputting pennies
      this.change -= numDollars;
      this.change =  this.change.toFixed(2);

      //so that here change will tell us the number of pennies
      console.log ("and " + this.change * 100 + " pennies");
      this.change = 0;
    }
  },
  howManyDollars: function(amountOfMoney) {
    //fill this in
    if (amountOfMoney < 1) {
      return 0;
    }
    else {
      return 1 + this.howManyDollars(amountOfMoney - 1.00);
    }
  }
};

cashRegisterWithChange.setTotal(4.55);
cashRegisterWithChange.getPaid(2);
cashRegisterWithChange.getPaid(6);









var change = 0;
function howManyQuarters(howMuchMoney) {
  //fill this in
  change = howMuchMoney;
  //fill this in
  if (howMuchMoney < 0.25) {
    return 0;
  }
  else {
    return 1 + this.howManyQuarters(howMuchMoney - 0.25);
  }

}
change = 0.99;
console.log ("Pay out " + howManyQuarters(change) + " quarters");
console.log ("And you'll have " + change * 100 + " pennies left over");




















function howManyDollars(dollarsSoFar) {
  if (change < 1.00) {
    console.log (dollarsSoFar + " dollar bills");
  } else {
    change -= 1.00;
    return howManyDollars(dollarsSoFar + 1);
  }
}
function howManyQuarters(quartersSoFar) {
  if (change < 0.25) {
    console.log (quartersSoFar + " quarters");
  } else {
    change -= 0.25;
    return howManyQuarters(quartersSoFar + 1);
  }
}

function howManyDimes(dimesSoFar) {
  //fill this in using this log as the base case
  if (change < 0.1) {
    console.log(dimesSoFar + " dimes");
  } else {
    change -= 0.1;
    return howManyDimes(dimesSoFar + 1);
  }
}
function howManyNickels(nickelsSoFar) {
  //fill this in using this log as the base case
  if (change < 0.05) {
    console.log(nickelsSoFar + " nickels");
  } else {
    change -= 0.05;
    return howManyNickels(nickelsSoFar + 1);
  }
}
function howManyPennies(penniesSoFar) {
  //fill this in using this log as the base case
  if (change < 0.01) {
    console.log(penniesSoFar + " pennies");
  } else {
    change -= 0.01;
    return howManyPennies(penniesSoFar + 1);
  }
}

change = 4.94;
console.log("Give them:");
howManyDollars(0); //passing in "so far" parameters of 0
howManyQuarters(0);
howManyDimes(0);
howManyNickels(0);
howManyPennies(0);
console.log("And the amount of change left to give should be $0.00. It actually is $" + change.toFixed(2));






function howManyCoins (coinName, coinAmount, coinsSoFar) {
  //fill this in
  if (change < coinAmount) {
    console.log(coinsSoFar + " " + coinName);
  } else {
    change -= coinAmount;
    return howManyCoins(coinName, coinAmount, coinsSoFar + 1);
  }

}

change = 4.94;
console.log("Give them:");
howManyCoins("dollar bills", 1.00, 0);
howManyCoins("quarters", 0.25, 0);
howManyCoins("dimes", 0.10, 0);
howManyCoins("nickels", 0.05, 0);
howManyCoins("pennies", 0.01, 0);
console.log("And the amount of change left to give should be $0.00. It actually is $" + change.toFixed(2));















var cashRegisterWithChange = {
  total: 0,
  change: 0,
  setTotal: function (amount) {
    this.total = amount;
  },
  getPaid: function (amountPaid) {
    if (this.total > amountPaid) {
      console.log ("Not enough!");
    } else {
      this.change = amountPaid - this.total;
      console.log ("Give them:");
      this.howManyCoins("dollar bills", 1.00, 0);
      this.howManyCoins("quarters", 0.25, 0);
      this.howManyCoins("dimes", 0.10, 0);
      this.howManyCoins("nickels",0.05,0);
      this.howManyCoins("pennies",0.01,0);
    }
  },
  howManyCoins: function (coinName, coinAmount, coinsSoFar) {
    if (this.change < coinAmount) {
      console.log(coinsSoFar + " " + coinName);
    } else {
      this.change -= coinAmount;
      this.howManyCoins(coinName, coinAmount, coinsSoFar + 1);
    }
  }
};

//leave these two lines in!
cashRegisterWithChange.setTotal(5.06);
cashRegisterWithChange.getPaid(10.00); //to get our $4.94 of change!









function printListStartingAtIndex(list, index) {
  if (index >= list.length) {
    return;
  } else {
    //fill this in
    console.log(list[index]);
    printListStartingAtIndex(list, index+1);
  }
}

//don't change these lines
var list = [0, 2, 4, 5, 6, 7, 9, 100];
printListStartingAtIndex(list, 0);




// Finish the makeChange function. It should look a lot like the function from the previous exercise. The difference will be that instead of outputting the values, we'll call howManyCoins! I've put the list printing function in the hint so you can check it out if you like as a guide.
//
// Your output should be in the same format as in the previous section, e.g. "1 dimes" or "3 quarters".



//bad! This should be inside an object. We'll fix that a bit later
var change = 0;

function howManyCoins (coinName, coinAmount, coinsSoFar) {
  if (change < coinAmount) {
    console.log(coinsSoFar + " " + coinName);
  } else {
    change -= coinAmount;
    howManyCoins(coinName, coinAmount, coinsSoFar + 1);
  }
}

var currency = [5.00, 1.00, 0.25, 0.10, 0.01];
var coinNames = ["five dollar bills", "one dollar bills", "quarters", "dimes", "pennies"];
function makeChange (coinNames, currency, index) {
  if (index >= currency.length) {
    return;
  } else {
    //fill this in
    howManyCoins(coinNames[index], currency[index], 0);
    makeChange(coinNames, currency, index+1);
  }

}

change = 18.94;
makeChange(coinNames, currency, 0);














var cashRegisterWithChange = {
  total: 0,
  change: 0,
  coinNames: ["five dollar bills", "one dollar bills", "quarters", "dimes", "pennies"],
  currency: [5.00, 1.00, 0.25, 0.10, 0.01],
  setTotal: function (amount) {
    this.total = amount;
  },
  getPaid: function (amountPaid) {
    if (this.total > amountPaid) {
      console.log ("Not enough!");
    } else {
      this.change = amountPaid - this.total;
      console.log ("Give them:");
      this.makeChange(this.coinNames, this.currency, 0);
    }
  },
  howManyCoins: function (coinName, coinAmount, coinsSoFar) {
    if (this.change < coinAmount) {
      console.log(coinsSoFar + " " + coinName);
    } else {
      this.change -= coinAmount;
      this.change = this.change.toFixed(2);
      this.howManyCoins(coinName, coinAmount, coinsSoFar + 1);
    }
  },
  makeChange: function(coinNames, currency, index) {
    if (index >= currency.length) {
      return;
    } else {
      this.howManyCoins(coinNames[index], currency[index], 0);
      this.makeChange(coinNames, currency, index + 1);
    }
  }
};

//and leave these calls to check if you get the correct output
cashRegisterWithChange.setTotal(100);
cashRegisterWithChange.getPaid(50);
cashRegisterWithChange.getPaid(109.94);









//Your three dimensional array from the last exercise probably
//looked something like this:
var hands = [];
hands[0] = [ [3,"H"], ["A","S"], [1,"D"], ["J","H"], ["Q","D"] ];
hands[1] = [ [9,"C"], [6,"C"], ["K","H"], [3,"C"], ["K","H"] ];

//Loop over every dimension in the array, logging out the suit and rank
//of each card in both hands
//1. loop over each hand
for (var i=0; i<hands.length; i++) {
    //2. loop over each card array in each hand
    for (var j=0; j<hands[i].length; j++) {
        //3. loop over each rank/suit array for each card in each hand
        for (var k=0; k<hands[i][j].length; k++) {
            //4. log the value of the rank/suit array item
            console.log(hands[i][j][k]);
        }
    }
}





for (var i=0; i < students.length; i++) {
  for (var j=0; j < roll.length; j++) {
    if (students[i] === roll[j]) {
      numPresent += 1;
    }
  }
}


for (var j=0; j < roll.length; j++) {
  if (students[roll[j]]) {
    numPresent += 1;
  }
}



we can say:
var card = {"suit":"clubs", "rank":8}

This syntax gives us a way to describe what each piece of data means.

Create an indexed array named hand and set it equal to an array of objects that describes the following hand of cards:

hand =[
  { rank: 8, suit: "clubs"},
  { rank: "A", suit: "spades"},
  { rank: 2, suit: "hearts"},
  { rank: "K", suit: "hearts"},
  { rank: 9, suit: "clubs"}

]




var players = [];
players.push({name: "Robert", hand: []});
players.push({name: "Joe", hand: []});


var deck = [];
var suits = ["clubs", "diamonds", "hearts", "spades"];
var ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
for (var i=0; i < suits.length; i++) {
  for (var j=0; j < ranks.length; j++) {
    deck.push({rank: ranks[j], suit: suits[i]});
  };
};





//here's our players array from exercise 1
var players = [];
players[0] = {'name': 'Robert', hand: []};
players[1] = {'name': 'Joe', hand: []};

//here's our code to create the deck
var suits = ['clubs','diamonds','hearts','spades'];
var ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
var deck = [];
for (var i=0;i<suits.length;i++) {
  for (var j=0;j<ranks.length;j++) {
    var card = {'rank': ranks[j], 'suit':suits[i]};
    deck.push(card);
  }
}

//This will shuffle the deck. Nothing for you to do here. Just here to
//make the final output a little more realistic
deck.sort(function() {return 0.5 - Math.random()});

//Deal 5 cards to each player. Make sure you deal them out
//one player at a time, just like in a real poker game.
for (var i=0; i < 5; i++) {
  for (player in players) {
    players[player][hand].push(deck.splice(0, 1))
  }
}






function multiplyBy10(number) {
  console.log(number * 10);
}

function multiplesOf10(limit) {
  // Put your for loop here
  for (i=1; i<=limit; i++) {
      multiplyBy10(i);
  }

}

// Call the function multiplesOf10() on any integer
multiplesOf10(6);






// Here is the function using a for loop
function countSheepWithLoop(number) {
  for (i = 1; i <= number; i++) {
    if (i === number) {
      console.log("Zzzzzz");
    }
    console.log("Another sheep jumps over the fence.");
  }
}

// And here is the recursive function
function countSheep(number) {
  if (number === 0) {
    // Put your base case here
    console.log("Zzzzzz");
  } else {
  console.log("Another sheep jumps over the fence.");
  // Define the variable newNumber as
  // 1 less than the input variable number
  newNumber = number - 1;
  // Recursively call the function
  // with newNumber as the parameter
  countSheep(newNumber);
  }
}

// Call your new recursive function:
countSheep(6);








// Create an empty array called "stack"
var stack = [];

// Here is our recursive function
function power(base, exponent) {
  // Base case
  if ( exponent === 0 ) {
    return 1;
  }
  // Recursive case
  else {
  stack[exponent - 1] = base * power(base, exponent - 1);
    return stack[exponent - 1];
  }
}







function factorial(n) {
    if (n === 1) {
    return 1;
  } else {
    return n * factorial(n);
  }
}

// 1. Create an empty array called "stack"
var stack = [];

// 2. Define the function countDown(int)
function countDown(int) {
    stack.push(int);
    if (int === 1) {
        return 1;
    }
    else {
        return countDown(int - 1);
    }
}

// 3. Call countDown() on an integer
countDown(3);


// And now let's have a look at that stack:
console.log(stack);








var stack = [];

function countDown(int) {
  stack.push(int);
  if (int === 1) {
    return 1;
  }
    return countDown(int - 1);
}

function multiplyEach() {
  // Remove the last value of the stack
  // and assign it to the variable int
  int = stack.pop();
  x = stack.length;
  // Base case
  if (x === 0) {
    return int;
  }
  // Recursive case
  else {
  stack[x - 1] = int * stack[x - 1];
  return multiplyEach();
  }
}

// Call the function countDown(7)
countDown(7);
// And then print out the value returned by multiplyEach()
console.log(multiplyEach());









// Our array of messy words
var capitals = ["berlin", "parIs", "MaDRiD"];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, i) {
  // Base case
  if (i === array.length) {
    return;
  }
  // Action
  array[i] = capitalize(array[i]);
  // Recursive case
  return fixLetterCase(array, i + 1);
}

// Here is our function call
fixLetterCase(capitals, 0);

console.log(capitals);














function factorial(int) {
    if (int === 1) {
    return 1;
  } else {
    return int * factorial(int - 1);
  }
}



function factorial(int) {
    if (int < 1) {
        return;
    }
    else if (int === 1) {
    return 1;
  } else {
    return int * factorial(int - 1);
  }
}





function guessNumber(number, clue) {
  // Prompt the user for a number using the string value of clue
  guess = prompt(clue);
  // Convert their guess to a number using +
  guess = +guess;

  while (guess !== number) {
    if (guess < number) {
      guess = prompt("Too low. Guess again.");
    }
    else if (guess > number) {
      guess = prompt("Too high. Guess again.");
    }
    guess = +guess;
  }

  console.log("You got it! The number was " + number);
}

guessNumber(6, "Pick a number between 1 and 100");







function guessNumber(number, clue) {
  // Prompt the user for a number using the string value of clue
  var guess = prompt(clue);
  // Convert their guess to a number using +
  guess = +guess;

  // Define base case
  if (number === guess) {
    return console.log("You got it! The number was " + number);
  }
  // Define first recursive case (guess is too low)
  else if (guess < number) {
    return guessNumber(guess + 1, clue);
  }
  // Define second recursive case (guess is too high)
  else if (guess > number) {
    return guessNumber(guess - 1, clue);
  }
}

guessNumber(6, "Guess a number between 1 and 100.");






// Here is the array we will store results in
var multiples = [];

function multiplesOf(base, i) {
  // Base case
  if (i === 0) {
  // Write the array multiples to the console
    console.log(multiples);
  }
  // Recursive case
  else {
    multiples[i - 1] = base * i;
  // Add a recursive function call
    return multiplesOf(base, i - 1);
  }
}

multiplesOf(2, 2);





function makeAlbum(songNumber){

  if(songNumber > 0){
    // output Song Number
    console.log("Song number "+ songNumber +" Created");
    // remove from total
    songNumber--;

  // recursively call the function
  makeAlbum(songNumber);
  }else{
      console.log("We just made a hit record");
  }
}

// Call the function
makeAlbum(10);








function evenOrOdd(total){
  if(total >= 0){
    if(total % 2 === 0){
    console.log("The number " + total + " is even");
  }else{
      console.log("The number " + total + " is odd");
  }
  // remove from total
    total--;

  // recursively call the function
    evenOrOdd(total);

  }
}
evenOrOdd(6);





// DEALING CARDS
var miniDeck = new Array("ace","king","queen","jack",10,9,8,7,6,5,4,3,2);

function deal(numberOfCards){
  // If number of cards is greater than 0
  if(numberOfCards > 0){
    // store random number between 0
    // and the total number of cards in the miniDeck
    rand = Math.floor(Math.random()*miniDeck.length);
    card = miniDeck[rand];
    // output card selected
    console.log("Your card is " + card);
    // remove selected card from deck
    miniDeck.splice(rand, 1);

    // remove from numberOfCards
    numberOfCards--;

    // recursively call the function
    deal(numberOfCards);
  }
}
// Call the function and pass the number of cards you want to deal
deal(5);




var cards = new Array("ace","king","queen","jack",10,9,8,7,6,5,4,3,2);
var hand = [];

function dealHand(numberOfCards){
  //if numberOfCards is greater than zero
  if(numberOfCards > 0){
    // Store a random number
    rand = Math.floor(Math.random()*cards.length);
    card = cards[rand];

    // Add card to the hand array
    hand.push(card)

    // Output the card
    console.log("Your card is " + card);
    // remove card selected from cards array
    cards.splice(rand, 1);

    // remove from numberOfCards
    numberOfCards--;

    // recursive function call
    dealHand(numberOfCards)

  }
}

function goFish(num, guess){
  // if num is greater than zero
  if(num >= 0){
    if(hand[num]===guess){
      console.log("A Match for", hand[num]);
      return;
    }else if(num===0){
      console.log("Go Fish: No matches for " + guess);
    }
    // remove from num
    num--;

    // recursive function call... remember to use both arguments
    goFish(num, guess);
  }
}
// Call dealHand and goFish
dealHand(5);
goFish(hand.length,3);




var diceRoll = Math.floor(Math.random() * 6) + 1;

//Store a random number between 1 and 6 in the variable diceRoll
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}




function rollSingleDice() {
  return Math.floor(Math.random()*6+1);
}

//Make the rollDice function roll dice
//check for doubles (until there are no more)
//and return the total score.
function rollDice() {
  var dice1 = rollSingleDice();
  var dice2 = rollSingleDice();
  var score = dice1 + dice2;
  while (dice1===dice2) {
    dice1=rollSingleDice();
    dice2=rollSingleDice();
    score+=dice1+dice2;
  }
  return score;
}

rollDice();




function rollDice() {
  var dice1 = rollSingleDice();
  var dice2 = rollSingleDice();
  var score = dice1 + dice2;
  console.log("Dice 1: " + dice1 + " Dice 2: " + dice2 + " Score: " + score);
  while (dice1===dice2) {
    console.log("Congratulations Double Thrown!");
    dice1=rollSingleDice();
    dice2=rollSingleDice();
    score+=dice1+dice2;
  }
  return score;
}

rollDice();







// Now we have our rules engine almost finished we need to introduce some players.
// To create these we can use objects then each player can hold their own score information and the name of that player (so we can tell who won at the end).
// Let's start simple and create a constructor for a player object.
// The object will have a name property, and a score value that needs to be hidden. It will also need methods to add to the score and to get the value of the score.
// We can then use this object within our game to track how each player is doing.
//
// Don't delete the rest of your code!
//
// Create a constructor for an object called Player that takes a single argument of the player's name. Call the name property of the object name.
// Your object should also store a score for the player - keep this hidden but initialise it to 0.
// Your object should have a function that allows you to add to the players score (also called a setter method). Call this addToScore. It should have one parameter for the amount you want to add to the score.
// Your object also needs a function to retrieve the players score (also called a accessor or getter method). Call this getScore.
// Create a player called player1 based on your new object.
// Call player1.addToScore(5) to add 5 to your player's score.

function Player(name) {
  this.name = name;
  var score = 0;

  this.addToScore = function(amount) {
    return score += amount;
  };

  this.getScore = function() {
    return score;
  };
}

var player1 = new Player("Phil");
player1.addToScore(5);



// Now we have a player for our game we'd best make our rollDice function interact with the players to update their score as the dice have been rolled.
// To do this we will pass the player object to the rollDice function and make it update the player's score.
// Now the rollDice function doesn't need to return the score from that round of dice rolling - we're going to change what it returns a little bit later...
//
// You should keep most of your code from last time.
//
// Change your rollDice function so that it accepts a single parameter of a player object
// Inside your rollDice function you should call player.addToScore to add the current dice rolls to the player's score.
// You still need to create a Player object called player1 then call rollDice passing it your player1 object.
// Get rid of the code that added 5 to the player's score.
// Change the console.log commands in your rollDice function so they print out the player's current total score rather than the score from just that round of rolls.
// Remove the variable from the rollDice function that is tracking the total score for that round of dice rolls and make the rollDice function return false.




// Make your rollDice function test for when Snake Eyes (double 1) has been rolled (after adding the value to the score)
// Print out to the console Snake Eyes! rather than congratulating the player for rolling a double.
// Return true after printing out Snake Eyes!
// Create a variable called snakeEyes and initialise it to false.
// Rather than calling rollDice once put it inside a while loop which runs until snakeEyes becomes true (which rollDice should update).



// Modify your turns loop to print out each turn as they occur - a turn is a single throw of the dice. Each turn should start with Turn N printed to the console where N is the number of the turn (starting at 1).
// Turns should continue until Snake Eyes has been thrown and then print out the final score for the player. This should include the player's name. For example "player1 scored 32".


// Playing with just one player isn't fun!.
// Create an array of Player objects and loop through them during each turn. You will have to check for when snake eyes has been thrown and then print out the score each player has gained. We will work out which player has won in the next exercise.
//
// Create an array called players
// Add 4 players to the array you should prompt the user for the names of each of these players.
// Change your loop so that while it is checking for Snake Eyes it also loops through the array so each player gets a turn - probably using a for loop.
// You will need to double check that Snake Eyes! hasn't been thrown before each player has a throw.
// Print out the players name before they have a throw.
// After Snake Eyes has been thrown loop through all of the players and print out their score.


// Wow, we've finished the simple game and can tell everyone their scores. Now we have to work out which player has won and give congratulations to the winner.
// We also have to check to see if there was a draw and if there was congratulate all the players with the same score.
// We can do this by looping through our array of players and finding the highest score. We can then build an array of winners who share the highest score.
// This will then allow us to congratulate all of the winners.
//
// After the Snake Eyes has been rolled loop through all of the players and find the highest score. Store this in a variable called highScore.
// Find all of the players who scored the highScore and add them to an array called winners.
// Loop through the winners building up a single line that congratulates all winners. For two winners (called player2 and player3) it should look like:
// "Congatulations player2 and player3 you have won!"

var players = [];
for (i=0; i<4; i++) {
  name = prompt("What is your name?")
  players.push(new Player(name));
}

snakeEyes = false;
var numRolls = 0;
function rollDice(player) {
  var dice1 = rollSingleDice();
  var dice2 = rollSingleDice();
  player.addToScore(dice1 + dice2);
  // console.log("Dice 1: " + dice1 + " Dice 2: " + dice2 + " Score: " + score);
  console.log(player.getScore());
  while (dice1===dice2) {
    if (dice1 === 1 && dice2 === 1) {
      console.log("Snake Eyes!");
      snakeEyes = true;
      return snakeEyes;
    }
    else {
      console.log("Congratulations Double Thrown!");
    }
    dice1=rollSingleDice();
    dice2=rollSingleDice();
    player.addToScore(dice1 + dice2);
  }
  return false;
}

while (snakeEyes !== true) {
  numRolls++;
  console.log("Turn " + numRolls);
  for (i=0; i<players.length; i++) {
    if (snakeEyes !== true) {
      console.log(players[i].name);
      rollDice(players[i]);
    }
  }
}
for (i=0; i<players.length; i++) {
  console.log(players[i].name + " scored " + players[i].getScore());
}

var highScore = 0;
var winners   = [];
var congrats  = "";

for (i=0; i<players.length; i++) {
  score = players[i].getScore();
  if (score > highScore) {
    highScore = score;
  }
}
for (i=0; i<players.length; i++) {
  score = players[i].getScore();
  if (score === highScore) {
    winners.push(players[i].name)
  }
}
// console.log("Congatulations " + winners.join(" and ") + " you have won!");
var str = "Congratulations ";
for (var w in winners) {
  str += winners[w];
  if (w + 1 < winners.length) { str += " and "; }
}
str += " you have won!";
console.log(str);






















// Let's start at the usual place with our Card constructor. The Card class will represent a playing card for our game.
//
// The constructor should take two parameters: the first a number between 1 and 4 to represent the suit of the card (with 1 representing clubs, 2 diamonds, 3 hearts and 4 spades). The second a number will be between 1 and 13 to represent the number of the Card (where 1 represents ace, 2 represents two, 3 represents three, etc., up till 13 represents king). Remember when you save these parameters to use private variables and not properties for better security!
//
// Let's also add our two "getter" methods so we can "look" at a given Card and access it's suit and number.
//
// Make a Card constructor which should:
// 1) Take two parameters, the first representing the suit and the second representing the number, and save these parameters to private variables
// 2) A method getNumber which should return the number of the card
// 3) A method getSuit which should return the number that represents the suit of the card
//

// Add a getValue method to your Card constructor. It should return according to these rules:
// 1) Face Cards count for 10
// 2) Aces count for 11 (We will fix the 1 or 11 problem in a later exercise)
// 3) All other cards count as their number

// Next write a function, deal, which should:
// 1. Create a random number between 1 and 4 to represent our new card's suit.
// 2. Create a random number between 1 and 13 to represent the "number" on our new card (With Ace as 1, two as 2, ... , king as 13).
// 3. Make and return a new Card by passing in these random numbers as parameters.

var Card = function(suit, number) {
  var _suit = suit;
  var _number = number;

  this.getNumber = function() {
    return _number;
  };

  this.getSuit = function() {
    return _suit;
  };

  this.getCardName = function() {
    var suits = ["clubs", "diamonds", "hearts", "spades"];
    var ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
    return ranks[_number - 1] + " of suit " + suits[_suit - 1];
  };

  this.getValue = function() {
    if (_number === 1) {
      return 11;
    }
    else if (_number > 9) {
      return 10;
    }
    else {
      return _number;
    }
  };
};

var Deck = function() {
  var _suit, _rank;
  var _cards = [];

  for (_suit = 1; _suit <= 4; _suit++) {
    for (_rank = 1; _rank <= 13; _rank++) {  // ranks
      _cards.push(new Card(_suit, _rank));
    }
  }

  this.shuffle = function() {
    return _cards.sort(function() { return 0.5 - Math.random(); });
  };

  this.deal = function() {
    return _cards.pop();
  };
};

var deck = new Deck();
deck.shuffle();

// d = new Deck();
// console.log(d.shuffle()[0]);
// console.log(d.shuffle()[0]);
//

// var deal = function() {
//   var suit   = Math.floor(Math.random() * 4 + 1);
//   var number = Math.floor(Math.random() * 13 + 1);
//   return new Card(suit, number);
// };


// Now for the real part: add a Hand constructor, which should take no parameters and:
// 1) Declare a private array variable to hold our cards
// 2) Use the deal function to fill in the first two spots in the array with Card objects
// 3) Include a getHand method which returns the array of cards (this is another example of a getter that will be useful later, and is particularly important so that I can check your work)
//
// Write a score method in your Hand constructor. It should loop over all of the cards in the Hand, summing up the result of the getValue call to each and return that sum.
//

// Another quick useful method we will need in our Hand class is printHand. This is what we will call to "show" the user their hand, so they can decide whether to hit (take another card) or stand (stick with what they've got).
//
// It's up to you how nice you want to print out the hands. The simplest approach would be to loop through and print out "6 of suit 2, 11 of suit 3", which could be done through a simpler loop.
//
// If you want to go for an extra challenge though you could add in some if statements to print out a nicer form like "6 of diamonds, jack of hearts" instead.
//
// Write a method printHand which should:
// 1) Take no parameters
// 2) Return a string representing the Hand printed out, like shown in the examples above
//

// Write a new hitMe method in your Hand constructor. It should:
// 1) Create a new Card using the deal function
// 2) Append that card to the array of cards in the Hand
//

// Edit your "score" function to handle aces. It should return the optimal score for a hand (the highest score 21 or lower), counting the aces as either 11 or 1. Remember there could be multiple aces!
//
// This is an especially tough exercise and the instructions were intentionally left vague so you could think through the problem on your own and see if you can figure out how to code it up. If you get stuck though there are some more detailed instructions in the hint below.

var Hand = function() {
  var _cards = [deck.deal(), deck.deal()];
  var _sum;

  this.getHand = function() {
    return _cards;
  };

  this.score = function() {
    var i, val, aces;
    _sum = aces = 0;
    for (i = 0; i < _cards.length; i++) {
      val = _cards[i].getValue();
      if (val === 11) {
        aces += 1;
      }
      _sum += val;
    }

    while (_sum > 21 && aces > 0) {
      aces -= 1;
      _sum -= 10;
    }

    return _sum;
  };

  this.printHand = function() {
    var i;
    var output = [];

    for (i = 0; i < _cards.length; i++) {
      output.push(_cards[i].getCardName());
    }

    return output.join("\n");
  };

  this.hitMe = function() {
    _cards.push(deck.deal());
  };
};

// Write a new function, playAsDealer, which should:
// 1) Take no parameters
// 2) Create a new Hand
// 3) Check the score of the hand. While the score is less than 17, continue to call hitMe with the Hand to deal more cards.
// 4) return the Hand
var playAsDealer = function() {
  var _hand = new Hand();
  while (_hand.score() < 17) {
    _hand.hitMe();
  }
  return _hand;
};

// Create a function, playAsUser, which should:
// 1) Take no parameters
// 2) Create a new Hand
// 2) Repeatedly use printHand in a confirm box to ask if the user wants to hit. Remember that confirm returns true or false. While the user keeps answering "OK", use hitMe to deal them a new card.
// 4) Return the hand
//
// The submission test involves calling the function, so feel free to hit "cancel" when the confirm box comes up (or hit OK once or twice for fun). I can't test this function too well in the submission test because it depends on what the user does, so you should call it and test it yourself to see if its working!

var playAsUser = function() {
  var _hand  = new Hand();
  var _hitMe = true;
  while (_hitMe) {
    _hitMe = confirm(_hand.printHand() + "\n\nHit me?");
    if (_hitMe) _hand.hitMe();
  }
  return _hand;
};


// Write a new function, declareWinner, which should:
// 1) Take two parameters, userHand and dealerHand (in that order!!)
// 2) Compare the scores of the two hands in the right way to determine who wins.
// 3) If the user wins the game, the function should return "You win!", if the user loses, return "You lose!", and if there is a tie, return "You tied!". Please return exactly these strings because that's how the submission test will grade your function

var declareWinner = function(userHand, dealerHand) {
  var userScore   = userHand.score();
  var dealerScore = dealerHand.score();

  if (userScore > 21) {
    if (dealerScore > 21) {
      return "You tied!";
    }
    else {
      return "You lose!";
    }
  }

  if (dealerScore > 21) {
    return "You win!";
  }
  else {
    if (userScore > dealerScore) {
      return "You win!";
    }
    else if (userScore === dealerScore) {
      return "You tied!";
    }
    else {
      return "You lose!";
    }
  }
};


// Write one more function, playGame, which should:
// 1) Take no parameters
// 2) Call playAsUser to get the user's hand
// 3) Call playAsDealer to get the dealer's hand
// 4) Call declareWinner to get the winner
// 5) Use console.log to display the results. It's up to you how you want to display everything, but it might be good to print out the dealer's hand and user's hand along with the result of declareWinner.
//
// You can also use console.log("\n") which will create a little space between messages or between games.
//
// Then at the very bottom of your code add a call:
// playGame();
//
// That way when you hit run your game should launch, and you can test your blackjack skills! Then go show it off to your friends and family!
//
// This one's also hard for me to test with a submission test, but you should be able to see if it's working or not!
// Hit next exercise to see some ideas for further improvements.
var playGame = function() {
  var user = playAsUser();
  var dealer = playAsDealer();

  console.log("User hand: " + user.printHand() + "\n\n");
  console.log("Dealer hand: " + dealer.printHand() + "\n\n");

  console.log(declareWinner(user, dealer));
};

playGame();
