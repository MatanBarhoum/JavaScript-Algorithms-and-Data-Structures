// Countdown
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(10))  // return [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// CountUp

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); //return [1, 2, 3, 4, 5]
