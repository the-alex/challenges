const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = (array) => array.reduce(reducer);

const sumArray = (array) => {
  // Start by summing the whole array.
  res = array;
  // Assume this is the largest, and prove yourself wrong.
  // Use a sliding window of size array.length and decrement
  for (let windowSize = array.length; windowSize > 0; windowSize--) {
    // Iterate over each subsection
    // Start at 0, go until j + windowSize
    for (let start = 0; start + windowSize <= array.length; start++) {
      const current = array.slice(start, start + windowSize)
      // Get the sum
      // If larger than runSum, save it.
      if (sum(current) > sum(res)) {
        res = current;
      }
    }
  }
  return sum(res);
}


tests = [
  //[[1, 2, 3], 6],
  //[[4, -1, 5], 8],
  [[-5, -5, -5, 2, 3], 5],
]

for (const [input, expected] of tests) {
  const output = sumArray(input);
  if (expected !== output) {
    console.log(`
    input:    ${input}
    expected: ${expected}
    output:   ${output}
    `)
  }
}
