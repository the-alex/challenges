deepEquals = function(a, b) {
  var areDifferent = false
  // If arrays, recursively check equality
  if (Array.isArray(a) && Array.isArray(b)) {
    for (var i = 0; i < a.length; i++) {
      areDifferent = areDifferent || deepEquals(a[i], b[i]);
    }
  }
  areDifferent = areDifferent || deepEquals(a, b)
  // if objects, recursively check equality
  // If elements, check equality
  // if all equal at this point, return true.
  return areDifferent
};

var a = {foo: 1, b: {c: 3}};
var b = {foo: 1, b: {c: 'potato'}};
console.log(deepEquals(a, b) === false);
a = {foo: 1, b: {c: 'potato'}};
b = {foo: 1, b: {c: 3}};
console.log(deepEquals(a, b) === false);
a = {foo: 1, b: {c: {d: {e: 'potato'}}}};
b = {foo: 1, b: {c: {d: {e: 'potato'}}}};
console.log(deepEquals(a, b) === true);
a = {b: {c: {d: {e: 'potato'}}}, foo: 1};
b = {foo: 1, b: {c: {d: {e: 'potato'}}}};
console.log(deepEquals(a, b) === true);
