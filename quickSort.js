const quickSort = arr => {
  console.log(arr)
  if (arr.length < 2) {
    return arr;
  }
  let pivot = Math.floor(arr.length / 2);
  console.log(pivot)

  let a = [];
  let b = [];
  let pivs = [];
  //Divide all other elements (except the pivot) into two partitions.
  for (const elt of arr) {
    if (elt < arr[pivot]) {
      //All elements less than the pivot must be in the first partition.
      a.push(elt);
    } else if (elt > arr[pivot]){
      //All elements greater than the pivot must be in the second partition.
      b.push(elt);
    } else {
      pivs.push(elt);
    }
  }
  a = quickSort(a);
  b = quickSort(b);
  //Recursively apply the above process to the two partitions
  //Join the first sorted partition, the pivot, and the second sorted
  //partition.
  return [...a, ...pivs, ...b];
};

console.log(quickSort([5, 2, 2, 2, 1]));
