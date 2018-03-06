function rotateMatrix(matrix) {
  const matrixCopy = matrix.slice();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length) {
      // If it is a corner piece ...
      // else ...
      //matrix[row][col] = matrixCopy[][]
    }
  }
  return matrix;
}


const tests = [[[[1, 2], [3, 4]], [[3, 1], [4, 2]]]];

for (let [input, expected] of tests) {
  let output = rotateMatrix(input);
  console.log(`
  Input: ${input.toString()}
  Expected ${expected.toString()}
  Output: ${output.toString()}
  `);
}
