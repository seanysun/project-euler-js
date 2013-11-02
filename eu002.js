var first     = 0;
var second    = 1;
var third     = null;
var evenArray = [];
var sum       = null;

while (third < 4000000) {
  third = first + second;
  if ((third % 2) === 0) {
    evenArray.push(third);
  }
  first = second;
  second = third;
}

var sum = evenArray.reduce(function (a, b) {
  return a + b;
});

console.log(sum);