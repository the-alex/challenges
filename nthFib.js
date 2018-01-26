// @format
// Note: do not change the function signature to `function nthFibonacci(n) {}`
// It will cause the last test to fail!
/*
Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.

Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.

Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.

How many pairs of iguanas will there be after n months?
*/
// M0(m, f)
// Fn = \sum_{0}^{\frac{n-1}{2}}{\binom{n-k-1}{k}}

nthFibonacci = function(n) {
  if (n < 2) {
    return 0;
  }
  var a = 1;
  var b = 0;
  for (var i = 0; i < n; i++) {
    var temp = a;
    a = a + b;
    b = temp;
  }
  return b;
};

//nthFibonacci = function(n) {
//var fact = function(x) {
//if (x < 1) {
//return 1;
//}
//return x * fact(x - 1);
//};
//// From month 0 to month n
//var sums = [];
//for (var i = 0; i < (n - 1) / 2; i++) {
//sums.push(
//sums.reduce(function(a, b) {
//return a + b;
//}, 0) +
//fact(n - i - 1) / (fact(i) * fact(n - i - 1 - i)),
//);
//}
//return sums;
//};
