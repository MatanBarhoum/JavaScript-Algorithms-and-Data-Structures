function convertToRoman(num) {
/* var signal = num % 10;
var tens = (num % 100) - signal;
var hundreds = (num % 1000) - tens - signal;
var thousand = num - hundreds - tens - signal; */
var roman = "";
var numerals = [
   [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100,'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
]

var istrue = true;
do{
for (var i = 0; i < numerals.length; i++) {
    if (num >= numerals[i][0]) {
      num -= numerals[i][0];
      roman += numerals[i][1];
      break;
    }
  }
}while(num != 0)
  return roman;
}

convertToRoman(36);
console.log(convertToRoman(3999))

