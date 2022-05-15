// *Variables*
// Create a variable and console log the value
let myVar = "Hello World";
console.log(myVar);
// Create a variable, add 10 to it, and alert the value
let newVar = 5;
newVar = newVar + 10;
console.log(newVar);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function diff(n1, n2, n3, n4) {
  return n1 - n2 - n3 - n4;
}
console.log(diff(100, 20, 5, 6));
// Create a function that divides one number by another and returns the remainder
function divide(n1, n2) {
  return n1 % n2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(n1, n2) {
  let num = n1 + n2;
  if (num > 50) {
    console.log("jumanji");
  } else {
    console.log("welp");
  }
}
console.log(addTwo(50, 5));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi(n1, n2, n3) {
  let product = n1 * n2 * n3;
  if (product % 3 === 0) {
    console.log("zebra");
  }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function word(w, x) {
  for (i = 1; i < x; i++) {
    console.log(w);
  }
}
console.log(word(x));
