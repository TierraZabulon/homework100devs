const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
let charName = characters.map((characters) => {
  return characters.name;
});

let charHeight = characters.map((characters) => {
  return characters.height;
});

// let usersNameHeight = characters.map((characters) => {
//   return `${characters.name} ${characters.height}`;
// });

let usersNameHeight = characters.map(function (characters) {
  return characters.name + characters.height;
});
let firstName = characters.map((characters) => {
  return characters.name;
});

// console.log(firstName);
// console.log(charHeight);
// console.log(usersNameHeight);

// function arr() {
//   let people = ["greg", "mary", "devon", "james"];
//   for (let i = 0; i < people.length; i++) {
//     return people;
//   }
// }

// console.log(arr());
let mass = characters.map((characters) => {
  return characters.mass;
});

// let totalMass = mass.reduce((a, b) => a + b);
// console.log(totalMass);
//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names
// let heightOfChar = characters.map((characters) => {
//   return characters.height;
// });
// let totalHeight = heightOfChar.reduce((a, b) => a + b);
// console.log(totalHeight);
//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
// let charEyeColor = characters.map((characters) => {
//   return characters;
// });
// let totalEyeColor = charEyeColor.reduce((a, b) => a + b);
// console.log(totalEyeColor);
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
// function excercise

//this function takes in two parameters and returns the difference

function difference(a, b) {
  return a - b;
}

console.log(difference(10, 5));

function product(a, b) {
  return a * b;
}
console.log(product(2, 2));

function daysOfWeek(num) {
  let day = Math.floor(Math.random() * 7);
  if (day === 1) {
    return "Sunday";
  } else if (day === 2) {
    return "Monday";
  } else if (day === 3) {
    return "Tuesday";
  } else if (day === 4) {
    return "Wednesday";
  } else if (day === 5) {
    return "Thursday";
  } else if (day === 6) {
    return "Friday";
  } else if (day === 7) {
    return "Saturday";
  } else {
    return "undefined";
  }
}

//forgot to use num
console.log(daysOfWeek());
//this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
function lastValue(arr) {
  arr = [1, 2, 3, 4];
  if (arr.length === 0) {
    return "undefined";
  } else {
    return arr[arr.length - 1];
  }
}
console.log(lastValue());
//this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

function numberCompare(num1, num2) {
  if (num1 > num2) {
    return "First is greater";
  } else if (num1 < num2) {
    return "second is greater";
  } else if (num1 === num2) {
    return "both are equal";
  }
}
console.log(numberCompare(74, 4));

//this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
