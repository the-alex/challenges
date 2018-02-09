#!/usr/local/bin/node
// @format
function powerSet(string) {
  // Sort
  chars = string.split('').sort();
  chars = removeDuplicates(chars);

  var res = [];
  const recurser = (chars, buffer) => {
    console.log(buffer.join(''));
    for (var i = 0; i < chars.length; i++) {
      buffer.push(chars.shift());
      recurser(chars, buffer);
      chars.reverse().unshift(buffer.pop());
    }
    return;
  };

  recurser(chars, []);
  return res;
}

const removeDuplicates = arr => {
  var lastElt = arr[0];
  var res = [lastElt];
  for (var i = 1; i < arr.length; i++) {
    if (lastElt !== arr[i]) {
      res.push(arr[i]);
    }
    lastElt = arr[i];
  }
  return res;
};

console.log(powerSet('ab'));
