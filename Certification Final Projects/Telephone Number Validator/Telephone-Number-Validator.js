function telephoneCheck(str) {
  var pattern = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g; // First this is looking or a group of 1 + \s(space) and then using ? the regex don't pay attention for what come after. Telephone!? will equal to Telephone or Telephone!. The next Group using the escape (\) to catch the () before the 555. 1 (555). as we don't want to take 1 555) as validate nubmer. we are using range of number from 0 to 9 and as long as 3 characters. 555 is good first 3 numbers, 4444 is not a match. then the OR boolen (|) come in place because the fact that "5555555555" is true and we need to consider it. then the regex take numbers between 0 to 9 [0-9] and 3 characters long. then escaping an space (\s) and (- special keyword). in the end, we using the same pattern only to match and look for 4 characters long.
  
  if(str.match(pattern)) {
    return true;
  } else {
    return false;
  }
}

console.log(telephoneCheck("555-5555"));