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

