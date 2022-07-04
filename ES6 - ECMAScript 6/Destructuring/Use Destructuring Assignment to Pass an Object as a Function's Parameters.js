/*
Use destructuring assignment within the argument to the function half to send only max and min inside the function.

What code has been changed:
const half = (stats) => (stats.max + stats.min) / 2.0; 

//Understanding section 
const test1 = (number = 1) => number * 2;

console.log(test1(8))
//
Matan Barhoum
 */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 
