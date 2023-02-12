//this -to access a property of an object from within a method of the same object

// let firstName = "Jainender";
// let lastName = "Baswal";

// let SayHi = {
//   firstName: "Aditya",
//   lastName: "Sachin",
//   greet: function () {
//     return `Say hi to ${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(SayHi.greet());

// let firstName = "Jainender";
// let lastName = "Baswal";

// let SayHi = {
//   firstName: "Soumya",
//   lastName: "Sachin",
//   greet: function () {
//     return `Say hi to ${firstName} ${lastName}`;
//   },
// };

// console.log(SayHi.greet());

const Person = {
  name: "John",
  age: 10,
  greet: function () {
    console.log(
      "The name of a person is" +
        "" +
        this.name +
        " " +
        "and his age is" +
        this.age
    );
  },
};

Person.greet();
