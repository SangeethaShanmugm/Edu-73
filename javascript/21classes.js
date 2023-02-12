// class - blueprint for the Object
//create an object

//constructor function
function Person5() {
  (this.name = "John"), (this.age = 20);
}
//creating an object

const person1 = new Person5();

// creating a class
class Person {
  constructor(name) {
    this.name = name;
    //  (this.age = age);
  }
  //   greet = () => {
  //     return `Say HI to ${name}`;
  //   };
  //getter
  //accessor property(getter)
  get PersonName() {
    return this.name;
  }
  //setter
    //accessor property(setter)
  set PersonName(n) {
    this.name = n;
  }
}

//create an object
const person2 = new Person("John");
// const person3 = new Person("Jack");
console.log("Person Name = ", person2.name); // John
//person2{name:"John", age: 20, greet: f }
// person2.greet(); //Say HI to John

//Setter  - set the value of an object
//getter - get the value if an object

//changing value of name property
person2.PersonName = "Jack";
console.log("Person Name = ", person2.name);
