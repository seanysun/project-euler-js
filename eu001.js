var arr = [];
var i;
var j;

for (i = 3; i < 1000; i += 3) {
  arr.push(i);
}

for (j = 5; j < 1000; j += 5) {
  if ((j % 15) !== 0) {
    arr.push(j);
  }
}

var sum = arr.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
});

console.log(sum);