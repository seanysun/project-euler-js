// pythagorean triples are three integers a, b, and c where
// a^2 + b^2 = c^2.  the following formula generates pythagorean triples:
//
// when m & n are positive integers (m < n):
// 
// a = n^2 - m^2
// b = 2nm
// c = n^2 + m^2

var a;
var b;
var c;
var m;
var n;
var tripletSum;

for (n = 2; tripletSum !== 1000; n++) {
  for (m = 1; (tripletSum !== 1000) && (m < n); m++) {
    a = Math.pow(n, 2) - Math.pow(m, 2);
    b = 2 * n * m;
    c = Math.pow(n, 2) + Math.pow(m, 2);
    tripletSum = a + b + c;
  }
}

console.log(a * b * c);