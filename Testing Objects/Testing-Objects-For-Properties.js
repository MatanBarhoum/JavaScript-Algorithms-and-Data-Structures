function checkObj(obj, checkProp) {
  const myObj = obj;

  if (myObj.hasOwnProperty(checkProp)) {
  return myObj[checkProp]; }
  else {
    return "Not Found";
  }
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "bed"))
