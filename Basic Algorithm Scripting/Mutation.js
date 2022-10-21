function mutation(arr) {
  let checkArray = [];
  for (let i = 0; i < arr[1].length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        if (arr[1][i].toLowerCase() === arr[0][j].toLowerCase()) {
          checkArray.push(arr[1][i]);
          break;
        }
      }
    }
  return checkArray.length === arr[1].length;
}

console.log(mutation(["Mary", "Aarmy"]));

// "no".length = 2; because 'n' will not will be pushed, the length of the checkArray compared to the arr[1] will return false.

// qrstu.length = 5; because all characters inside of it is in the arr[0], the checkedArray length will be the same as arr[1];

// line.length = 4; because all characters of it is in the arr[0], the checkedArray length will be the same as arr[1];