const insertionSort = array => {
  let res = array.length ? [array[0]] : [];
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (array[i] < res[j]) {
        res = [...res.slice(0, j), array[i], ...res.slice(j)];
        break;
      }
    }
    if (array[i] > res[res.length - 1]) {
      res.push(array[i]);
    }
  }
  return res;
};

// Iterate through the array of elements
// For each element, iterate through the sorted array.
// Search until the current item is larger than the previous elt
// If larger than all items, add to the back.

tests = [[4, 6, 3, 1, 2]];

for (const t of tests) {
  const input = t.slice();
  const output = insertionSort(t);
  const expected = t.sort();
  const pass = output.toString() === expected.toString();
  if (!pass) {
    console.log(`
  FAIL -----------------
  input: ${input}
  output: ${output}
  expected: ${expected}
  `);
  }
}
