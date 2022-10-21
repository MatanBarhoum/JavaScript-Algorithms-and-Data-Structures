function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    let newArray = [];
    for (let i = 0; i < n; i++) {
      if (i > 1) {
      newArray.push(newArray[i - 2] + newArray[i - 1]); }
      else {newArray.push(i)};
    }
    
    return newArray;
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(15))