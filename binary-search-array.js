function binarySearch(array, target) {
  let res = -1;
  const recurse = (lower, upper) => {
    // Pick pivot point in the middle of current range
    const pivot = Math.floor(lower + (upper - lower) / 2);
    // Get item at pivot.
    let val = array[pivot];
    if (lower === upper && val !== target) {
      res = -1;
      return;
    }
    // If item is target, return pivot (index) value
    if (val === target) {
      res = pivot;
      return;
    } else if (val > target) {
      // If target is less than val, recurse with new upper bound equal to pivot
      recurse(lower, pivot - 1);
    } else if (val < target) {
      // If target is greater than val, recurse with new lower bound equal to pivot
      recurse(pivot + 1, upper);
    }
    return;
  };
  // return res;
  recurse(0, array.length - 1);
  return res;
}

tests = [
  [[5], 4, -1],
  [[11, 12, 13, 14, 15], 11, 0],
  [[11, 12, 13, 14, 15], 15, 4],
];

for (const [array, target, solution] of tests) {
  console.log(solution);
  console.log(binarySearch(array, target) === solution);
}
