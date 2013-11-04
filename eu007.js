var primesArray = [2, 3];
var i;

Array.prototype.last = function() {
  return this[this.length - 1];
};

Array.prototype.appendNextPrime = function() {
  var lastPrime = this.last();
  var i;
  for (i = lastPrime; !isPrime(i); i += 2);
  this.push(i);
};

function isPrime(n) {
  var i;
  for (i = 0; i < primesArray.length; i++) {
    if (n % primesArray[i] === 0) {
      return false;
    }
  }
  return true;
}

while (primesArray.length < 10001) {
  primesArray.appendNextPrime();
}

console.log(primesArray.last());