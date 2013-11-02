var i;
var j;
var highPalindrome = 0;
var leftSide;
var product;
var rightSide;

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

function isPalindrome(x) {
  x = x.toString();
  leftSide  = x.substr(0, 3);
  rightSide = x.substr(3, 3);
  if (leftSide === rightSide.reverse()) {
    return true;
  } else {
    return false;
  }
}

for ( i = 900; i <= 999; i++ ) {
  for ( j = 900; j <= 999; j++ ) {
    product = i * j;
    if (isPalindrome(product) && (product > highPalindrome)) {
      highPalindrome = product;
    }
  }
}

console.log(highPalindrome);