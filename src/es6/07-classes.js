// Statement
class User {}

// Initialization
// const newUser = User();

class user {
  // Methods
  greeting() {
    return `Hello`;
  }
}

const leron = new user();
console.log(leron.greeting());
const developer = new user();
console.log(developer.greeting());

// Cons
class user {
  //Constructor
  constructor() {
    console.log("New user");
  }
  // Methods
  greeting() {
    return `Hello`;
  }
}

const francisco = new user();

// This
class user {
  constructor(name) {
    this.name = name;
  }

  // Methods
  speak() {
    return `Hello`;
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user("Ana");
console.log(ana.greeting());

// Getters and setters
class user {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const junior = new user('David', 15);
console.log(junior.uAge);
console.log(junior.uAge = 20);