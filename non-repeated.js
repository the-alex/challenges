const firstNonRepeatedCharacter = (string) => {
  string = string.split('').reverse().join('')
  let res = 'sorry';
  let candidate = null;
  let counts = {};
  // Look at each character.
  for (const char of string) {
    console.log(char, ' ', candidate)
    counts[char] = counts[char] + 1 || 1;
    // If the character is seen the first time, mark as candidate.
    if (counts[char] === 1) {
      candidate = char;
    }
    // If the same character is seen again, demark as candidate.
    if (counts[char] > 1 && candidate === char) {
      candidate = null;
    }
  }
  // If there is a candidate by the end of the string, return it
  return candidate || res;
}

tests = [
  //'aaaaab', // b
  //'aaaaa', // sorry
  //'',
  //'ALAMABA',
  '?#$?&***^@@#($*^%)' // &
]
for (const test of tests) {
  console.log(firstNonRepeatedCharacter(test));
}
