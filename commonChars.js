// @format
commonCharactersNaive = function(string1, string2) {
  // Naive: n^2
  var common = {};
  for (var c1 of string1) {
    if (string2.includes(c1)) {
      common[c1] = common[c1] || 1;
    }
  }
  common = Object.keys(common)
    .join('')
    .replace(' ', '');
  return common;
};

var commonCharacters = (str1, str2) =>
  str1
    .split(' ')
    .join('')
    .split('')
    .reduce(
      (acc, lett) =>
        str2.includes(lett) && !acc.includes(lett) ? (acc += lett) : acc,
      '',
    );

console.log(commonCharacters('abc', 'abc') === 'abc');
console.log(
  commonCharacters('What is love?', "Baby don't hurt me") === 'hatoe',
);
console.log(
  commonCharacters(
    'Riding on a buffalo makes me more approachable',
    'so what',
  ) === 'oash',
);

var iterations = 1000000;
console.time('Function #1');
for (var i = 0; i < iterations; i++) {
  commonCharacters('What is love?', "Baby don't hurt me");
}
console.timeEnd('Function #1');

console.time('Function #2');
for (var i = 0; i < iterations; i++) {
  commonCharactersNaive('What is love?', "Baby don't hurt me");
}
console.timeEnd('Function #2');
