// Variables
//You are getting ready to face Brock for the Boulder Badge.
// You want three pokemon on your team that each have evolved at least once.
// You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at
// level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7.
// Create three variables to store the number of rare candies each of your pokemon
// would need to evolve (rare candies increase your level by one).
// Finally, create a fourth variable named totalCandies that sums
// all the rare candies you would need.
let bulba = 16 - 5;
let rareTwo = "";
let rareThree = "";
//Conditionals And Functions
//You have a charmander in your party. Charmander can
// only battle if the temperature is above 0 degrees celcius. Create one function
//  that converts a Fahrenheit value to Celcius and another fuction that tells you
//  wheither or not charmander can battle To convert temperatures in degrees Celsius to
// Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
// Fahrenheit to Celsius, subtract 32 and multiply by . 5556 (or 5/9).

function isCelcius() {
  let feh = Math.floor(Math.random() * 50);
  let cel = ((feh - 32) * 5) / 9;
  console.log(feh);
  return cel;
}
function canBattle() {
  if (isCelcius() > 0) {
    console.log("battle");
  } else {
    console.log("run");
  }
}
console.log(canBattle());

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use
// any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the
//  number of pokemon the trainer you are battling has in their party
for (let i = 0; i < 10; i++) {
  console.log([i], "pika");
}
