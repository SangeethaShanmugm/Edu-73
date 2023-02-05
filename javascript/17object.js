var a = {}; // object
var a = []; // array

var movieName = "The Avengers";
var movieRating = 5;
var movieType = "Action";

var movieName1 = "Harry Potter";
var movieRating1 = 4.5;
var movieType1 = "Action";

//object = key : value pair
var movie = {
  name: "The Avengers",
  rating: 5,
  type: "Action",
};

//Array of objects
var movieList = [
  {
    name: "The Avengers",
    rating: 5,
    type: "Action",
  },
  {
    name: "Harry Potter",
    rating: 4.5,
    type: "Action",
  },
];

var movie = {
  name: "The Avengers",
  rating: 5,
  type: "Action",
};

typeof movie;
//object
movie.name; // The Avengers
movie.rating; //5
movie.type; //Action

console.log(movie);
// {name: 'The Avengers', rating: 5, type: 'Action'}
console.log(movie["name"]); //The Avengers
console.log(movie["rating"]); //5

for (key in movie) {
  console.log(key);
}
// name;
// rating;
// type;

for (key in movie) {
  console.log(movie[key]);
}
// The Avengers
// 5
// Action

let person = {
  name: "John",
  age: 20,
};
//accessing the property
console.log(person.name); //John
console.log(person["name"]); //John
// => dot notation  = objectName.key
// => bracket notation = objectName["key"]

const student = {
  name: "John",
  age: 20,
  marks: {
    science: 50,
    math: 90,
  },
};
console.log(student.marks); // { science: 50,math: 90}
console.log(student.marks.science); // 50

// object contains function

const result = {
  name: "John",
  age: 20,
  //using function as a value
  greet: function () {
    console.log("hello");
  },
};

result.greet(); //hello
