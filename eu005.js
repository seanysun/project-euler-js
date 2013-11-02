var answer = null;
var divisors = [11, 12, 13, 14, 15, 16, 17, 18];
// only including the divisors that need to be checked.  for example, 8 doesn't
// need to be, since all numbers divisible by 16 are also divisible by 8.
// 19 & 20 aren't included b/c the script is incrementing by their product: 380.
var i;
var a = 380;  // product of 19 * 20

function checkDivisors(b) {
  for (i = 0; i < divisors.length; i++) {
    if (b % divisors[i] !== 0) {
      return;
    }
  }
  answer = b;
}

while (answer === null) {
  checkDivisors(a);
  a += 380; // incrementing by the product of 17 * 19
}

console.log(answer);