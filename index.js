
// Your code here
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example usage
  const cat = new Cat("Whiskers", "female");
  console.log(cat.speak());
  
  const dog = new Dog("Rover", "male");
  console.log(dog.speak()); 
  
  const maleBird = new Bird("Polly", "male");
  console.log(maleBird.speak()); 
  
  const femaleBird = new Bird("Tweety", "female");
  console.log(femaleBird.speak()); 