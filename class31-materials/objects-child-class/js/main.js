//Create an a class and extend it - Can be anything you would like it to be!
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} can speak english`);
  }
}
class Bird extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}
let tweet = new Bird("Tweety", "Flying-Type");
