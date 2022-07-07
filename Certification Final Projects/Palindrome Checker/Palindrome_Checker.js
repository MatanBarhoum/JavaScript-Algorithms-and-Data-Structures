function palindrome(word) {
  var reg = /[^A-Za-z0–9]/g;
  word = word.toLowerCase().replace(reg, ''); // taking the word and with regex removing everything except A-Z (upper), a-z (lower) and numbers. /g for global search. then, replacing everything to make a concate string. race_ car = racecar.
  var len = word.length; // this - 1 will be the last index of the string.
    for(let i = 0; i < len/2; i++) { // we counting from the beginning of the index and from the last index at the same time. so for 30 characters, we only count 15.
    if(word[i] !== word[len - 1 - i]) { // if the word match, then the if statement isn't executing and the loop will keep looping. if a word doesn't match another word, the if loop will be executed and false will be returned.
      return false;
    } 
  }
  return true; // */ if after all this loops the if statement didn't received true and returned a false value, then this is a palindrome */
}