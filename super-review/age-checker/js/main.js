//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
// let age = 21;
if (age < 16) {
  console.log("cant drive");
} else if (age < 18) {
  console.log("cant hate from outside the club");
} else if (age < 21) {
  console.log("cant drink");
} else if (age < 25) {
  console.log("cant rent affordable car");
} else if (age < 30) {
  console.log("cant rent fancy affordable car");
} else if (age > 30) {
  console.log("nothing to look forward to");
} else {
  console.log("invalid");
}

//--- Harder
//On click of the h1
document.querySelector("h1").addEventListener("click", age);
const p = document.querySelector("p");
function age() {
  let age = document.querySelector("input").value;
  if (age < 16) {
    p.innerText = "cant drive";
  } else if (age < 18) {
    p.innerText = "cant hate from outside the club";
  } else if (age < 21) {
    p.innerText = "cant drink";
  } else if (age < 25) {
    p.innerText = "cant rent affordable car";
  } else if (age < 30) {
    p.innerText = "cant rent fancy affordable car";
  } else if (age > 30) {
    p.innerText = "nothing to look forward to";
  } else {
    p.innerText = "invalid";
  }
}
//Take the value from the input

//Place the result of the conditional in the paragraph
