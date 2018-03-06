function mergeSort(arr) {
  console.log(arr);
  // If the array is 2 items large, sort them!
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      let temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
    return arr;
  } else if (arr.length <= 1) {
    // already sorted if 1 or emtpy
    return arr;
  }

  // Split the arr
  // To sort an array, sort each half and combine.
  let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  let secondHalf = arr.slice(Math.floor(arr.length / 2))
  return mergeSort(firstHalf).concat(mergeSort(secondHalf));
  return arr;
}

//tests = [[2, 1], [5, 4, 3, 2, 1], [1], [1, 2, 3], [1, 2, 3, 4]];
tests = [[5, 4, 3, 2, 1]];

tests = tests.map(arr => [arr, arr.slice().sort()]);
for (let [input, expected] of tests) {
  let output = mergeSort(input);
  if (output.toString() !== expected.toString()) {
    console.log(`
  Input:    ${input}
  Expected: ${expected}
  Output:   ${output}
  `);
  }
}
