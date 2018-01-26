// @format
// Is the array being operated on a subset of the array passed as argument?
Array.prototype.isSubsetOf = function(arr) {
  // For each element in this ...
  for (var i = 0; i < this.length; i++) {
    var elt = this[i];
    var found = false;
    for (var j = 0; j < arr.length; j++) {
      found = found || arr[j] === elt;
    }
    if (!found) {
      return false;
    }
  }
  return true;
};

/*

// Quentin Vidal's Solution

Array.prototype.isSubsetOf = function(arr = []) {
  return this.every((thisElt) => arr.includes(thisElt));
};

*/

// Return something
console.log([].isSubsetOf([1, 2, 2]));
// true
console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']));
// false
console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']));
