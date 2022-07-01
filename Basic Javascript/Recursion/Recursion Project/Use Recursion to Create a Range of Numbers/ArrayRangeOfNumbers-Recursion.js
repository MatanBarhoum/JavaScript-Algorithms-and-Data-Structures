function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const arrayRange = rangeOfNumbers(startNum, endNum - 1);
    arrayRange.push(endNum);
    return arrayRange;
  }
};

console.log(rangeOfNumbers(4, 4))