function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy", 
    "foxtrot": "Frank",
    "": undefined
  };
  result = lookup[val];
  return result;
}

console.log(phoneticLookup(""));
