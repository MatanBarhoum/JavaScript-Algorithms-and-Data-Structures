// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  let remainder = arr.length % size;
  let splitSize;
  if (remainder > 0) {splitSize = (arr.length - arr.length % size) / size}
  else {splitSize = arr.length / size};
  for (let i = 0; i < splitSize; i++) {
    newArray.push(arr.slice(0, size));
    arr.splice(0, size);
    console.log(arr);
  }
  if (remainder > 0) {
    newArray.push(arr);
  };
  return newArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
