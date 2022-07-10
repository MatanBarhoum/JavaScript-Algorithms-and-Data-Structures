const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < 4; i++ ) {
    if (contacts[i]["firstName"] == name && contacts[i][prop] != undefined) {
      return contacts[i][prop];
    }
    else if (contacts[i]["firstName"] == name && contacts[i][prop] == undefined) {
      return "No such property";
    }
    else if (contacts[i]["firstName"] != name && i === 3) {
      return "No such contact";
    }
  }
}

lookUpProfile("Akira", "likes");


Things I need to remember :
/*
1. Looking at objects (JSON) can be in two diffrent ways. one is object.prop or object[prop]. when the property is a string, a undefined will be shown as output. therefore if I work with string and JSON I should always preffer working with bracets []
*/
