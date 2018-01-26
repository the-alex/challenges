// @format
function evenOccurrence(arr) {
  // Create object to pair value and incidence count
  var occs = {};
  // iterate through array
  for (var i = 0; i < arr.length; i++) {
    // count each occurance and store count in object
    occs[arr[i]] ? occs[arr[i]]++ : (occs[arr[i]] = 1);
  }
  // reiterate through array ...
  for (var i = 0; i < arr.length; i++) {
    // and return first even key / value
    if (occs[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
}

var t1 = [1, 3, 3, 3, 2, 4, 4, 2, 5];
var t2 = ['cat', 'dog', 'dig', 'cat'];
var t3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(evenOccurrence(t1) === 2);
console.log(evenOccurrence(t2) === 'cat');
console.log(evenOccurrence(t3) === null);
