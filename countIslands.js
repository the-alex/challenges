function make2dArray(str) {
  return str.split('\n').map(item => item.split(''));
}
// @format
function countIslands(mapStr) {
  // Transform mapStr into 2d array
  let map = make2dArray(mapStr);
  // Iterate by each row ...
  for (var row = 0; row < map.length; row++) {
    // Check for land in row
  }
}

// Iterate through each row
//  If there is a land, push to coordinate array.

tests = [
  //`..000.
  //..0...
  //..0.0.
  //..0...
  //..000.`,
  `.0...
.00..
....0`,
];

for (var t of tests) {
  console.log(countIslands(t));
}

console.log(make2dArray(t));
