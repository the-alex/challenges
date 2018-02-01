// @format
function largestProductOfThree(array) {
  // Order the array by largest absolute values
  if (array.length < 3) {
    return undefined;
  }
  array.sort((a, b) => a - b);
  // Take the top three, or the bottom 2 + top 1
  var top = array.slice(array.length - 3, array.length);
  var prod = (acc, item) => acc * item;
  var topRes = top.reduce(prod, 1);
  var bottomAndTop = [...array.slice(0, 2), array[array.length - 1]];
  var bottomRes = bottomAndTop.reduce(prod, 1);
  var res = bottomRes > topRes ? bottomRes : topRes;
  return res;
}

tests = [
  [3, 3, 3],
  [2, 1, 5, 4],
  [5, 6, 4, 8, 9],
  [2, 13, 7, 3, 5, 11],
  [-31, 41, 34, -37, -17, 29],
];

for (var t of tests) {
  console.log(largestProductOfThree(t));
}
