function rot13(str) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var newString = "";
  for (var i = 0; i < str.length; i++) {
    var pattern = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/g;
    var char = str[i];
    var indexofLetter = letters.indexOf(char);
    if (str[i].match(pattern)) {
      newString += str[i];
    } else if (str[i] === " ") {
      newString += " ";
    } else {
    newString += letters[indexofLetter + 13];
     }
  }
  return newString;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
