var primesArray = [2];
var i;
var x = 600851475143;

Array.prototype.last = function() {
  return this[this.length - 1];
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

primesArray.appendNextPrime = function() {
  var lastPrime = this.last();
  var i;
  for (i = lastPrime; !isPrime(i); i++);
  this.push(i);
};

while (x !== 1) {
  if (x % primesArray.last() === 0) {
    x = x / primesArray.last();
  } else {
    primesArray.appendNextPrime();
  }
}

console.log(primesArray.last());