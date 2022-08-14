// To iterate an array there is a few ways such as forEach(), every(), map() but the simpliest and flexible one is a simple for loop.
// for example to find all tens within a array using a for loop: 
function findTen(arr)
{
    let tensArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 10) { newArray.push(arr[i]); }
    }
    return newArray;
}


// ## Test on Subject ## 

//Question : 

// Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

// 1. I will use for loop to iterate the arrays, then for every index I will use the indexOf function to look if the given
// array contain the element (elem parameter). if it will return -1, that means no such element and i can push that array to the new Array, else, nothing will happen.

// Code:

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// ## Test on Subject ##
