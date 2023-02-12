//prototype  - to add new property to constructor

//Constructor function
function Person() {
  this.name = "John";
  this.age = 20;
}

//creating object
const person1 = new Person();
const person2 = new Person();

//adding property to constructor function

//syntax - constructorName.prototype.key = "value"

Person.prototype.gender = "Male";

console.log(person1.gender);
console.log(person2.gender);

//to get prototype value of a Person
console.log(Person.prototype);

//add methods to constructor function
Person.prototype.greet = function () {
  console.log("Hello my name is" + " " + this.name);
};

person1.greet();
person2.greet();

function human(name, city) {
  this.name = name;
  this.city = city;
}

function human1(name, city) {
  this.name = name;
  this.city = city;
}

function robot(name, country) {
  this.name = name;
  this.age = 10;
  this.country = country;
}

var Shiji = new human("Shiji", "Paris");
// shiji{name:"shiji", city:"Paris"}
// Shiji.city;
// ("Paris");
human.prototype = new robot("Jack", "France");
// robot{name: "Shiji", age:10,country:  'France' }
console.log(Shiji.name); //Shiji
console.log(Shiji.city); // Paris
// console.log(robot.country);
var jack = new human("Jack", "Paris");
console.log(jack); //human {name: 'Jack', city: 'Paris'}
console.log(jack.country); //France
console.log(jack.age); //10

var name1 = new human1("name1", "London");
console.log(name1);
console.log(name1.country);
