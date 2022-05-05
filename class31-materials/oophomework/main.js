// Complete the following program to add the definition of the Dog class.

// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here
// class Dog {
//   constructor(name, species, size) {
//     this.name = name;
//     this.species = species;
//     this.size = size;
//   }
//   bark() {
//     if (this.size > 60) {
//       return "Grrr!";
//     } else {
//       return "Woof!";
//     }
//   }
// }
// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

class Character {
  constructor(name, health, strength, inventory) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.inventory = inventory;
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${this.inventory}`
        );
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.inventory}`;
  }
}
const aurora = new Character("Aurora", 150, 25, "10 gold and 1 key");
const glacius = new Character("Glacius", 130, 30, "10 gold and 1 key");

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());
// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);
// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another
//  to Brad and the third one to Georges. These accounts are stored in an array. Next,
//  the program credits 1000 to each account and shows its description.

class Bank {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit() {
    return (this.balance = 1000);
  }
  describe() {
    return `${this.name} has a credit amount of `;
  }
}
const sean = new Bank("sean");
const brad = new Bank("brad");
const gorge = new Bank("gorge");
function members() {
  let account = ["sean", "brad", "gorge"];
  console.log(account);
  for (let i = 0; i < account.length; i++) {
    return `${account} has a credit of ${sean.credit()} `;
  }
}
console.log(members());
// console.log(`${sean.credit()}`);
// function accounts (){
//     let members = ["Sean", "Brad", "Georges"]
// }
