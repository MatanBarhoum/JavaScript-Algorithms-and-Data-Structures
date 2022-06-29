function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) { // Looking for the Array index.
    for (let j=0; j < arr[i].length; j++) { //Looknig for the index inside the array. [i] is [1, 2] and [j] when 0 is 1 and when 1 is 2, and so on.
      product *= arr[i][j]
    }
  }
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
