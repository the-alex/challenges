// @format
var swap = function(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

var bubbleSort = function(array) {
  if (array.length <= 1) {
    return array;
  }
  var sorted = false;
  while (!sorted) {
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
    // Check if sorted
    var sorted = array.every((item, ind, arr) => {
      if (ind < arr.length - 1) {
        return arr[ind] <= arr[ind + 1];
      } else if (ind === arr.length - 1) {
        return arr[ind - 1] <= arr[ind];
      }
    });
  }
  return array;
};

var r1 = [5, 4, 3, 2, 1, 0];
bubbleSort(r1);
