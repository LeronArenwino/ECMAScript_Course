// Getters and setters
class user {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const junior = new user("David", 15);
console.log(junior.uAge);
console.log((junior.uAge = 20));
