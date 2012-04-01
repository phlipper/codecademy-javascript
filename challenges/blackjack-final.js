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
