var arrayPrimes = [];
var sumOfPrimes;

Array.prototype.appendPrimes = function(upto) {
  var a;
  var arraySieve = [];
  var i;
  var j;
  for (i = 2; i <= upto; i++) {
    arraySieve.push(true);
  }
  // the sieve algorithm calls for an array of booleans indexed starting from
  // 2 and going up to the max value.  since javascript arrays can only begin
  // from index 0, i had to add an offset of +2 to make this algorithm work.
  // the only other option i could think of was an associative array, and that
  // would have been a messier and slower solution.
  for (i = 0; i < arraySieve.length; i++) {
    if (arraySieve[i] === true) {
      // this is the +2 offset
      a = i + 2;
      for (j = (Math.pow(a, 2) - 2); j < arraySieve.length; j += a) {
        arraySieve[j] = false;
      }
    }
  }
  for (i = 0; i < arraySieve.length; i++) {
    if (arraySieve[i]) {
      this.push(i + 2);
    }
  }
};

arrayPrimes.appendPrimes(2000000);
sumOfPrimes = arrayPrimes.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
});

console.log(sumOfPrimes);