const characterFrequency = (string) => {
  let freqs = {};
  for (const c of string) {
    freqs[c] = freqs[c]? freqs[c] + 1 : 1;
  }
  let pairs = Object.entries(freqs);
  // Sort by ascending
  pairs.sort((a, b) => {
    let res = b[1] - a[1];
    if (res === 0) {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }
    return res;
  })
  return pairs
}

console.log(characterFrequency('rawrawr'));
