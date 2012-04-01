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
