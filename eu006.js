var i;
var sum = 0;           // sum of all numbers from 1 to 100, inclusive
var sumOfSquares = 0;  // sum of the squares of 1 to 100

for (i = 1; i <= 100; i++) {
    sum += i;
    sumOfSquares += Math.pow(i, 2);
}

console.log(Math.pow(sum, 2) - sumOfSquares);