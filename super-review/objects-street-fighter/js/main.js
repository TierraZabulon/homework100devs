//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class StreetFighter {
  constructor(name, weapon, health, str) {
    this.name = name;
    this.weapon = weapon;
    this.health = health;
    this.str = str;
  }
  chooseViolence() {
    console.log("come here");
  }
  run() {
    console.log("enemy too strong");
  }
  health() {
    console.log("health getting low");
  }
}
