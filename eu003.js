var primesArray = [2, 3];
var i;
var x = 600851475143;

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

while (x !== 1) {
  if (x % primesArray.last() === 0) {
    x = x / primesArray.last();
  } else {
    primesArray.appendNextPrime();
  }
}

console.log(primesArray.last());