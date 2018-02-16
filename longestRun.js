// Not fast, but it's the first time I've had an excuse to use regular
// expressions on a challenge problem.
const longestRun = string => {
  let re = /([a-zA-Z])\1+/g;
  let matches = string.match(re);
  if (matches) matches.sort((a, b) => b.length - a.length);
  else return [0, 0];
  let longest = matches[0];
  let start = string.indexOf(longest);
  let end = start + longest.length - 1;
  return [start, end];
};

tests = [
  ['abbbcc', [1, 3]],
  ['mississippi', [2, 3]],
  ['aaccccccc', [2, 8]],
  ['', [0, 0]],
  ['aaaaa', [0, 4]],
];

for (let [input, expected] of tests) {
  console.log(input, expected);
  let output = longestRun(input);
  console.log(output, output.toString() === expected.toString());
}
