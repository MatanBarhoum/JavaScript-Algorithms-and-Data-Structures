/*
Use object property shorthand with object literals to create and return an object with name, age and gender properties.

createPerson("Zodiac Hasbro", 56, "male") should return {name: "Zodiac Hasbro", age: 56, gender: "male"}.
*/
const createPerson = (name, age, gender) => ({name, age,gender});

console.log(createPerson("Zodiac Hasbro", 56, "male"));