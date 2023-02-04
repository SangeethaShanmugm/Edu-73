var mname = "Avengers";
var type = "Action";
var category = "Hollywood";
var rating = 4.5;

//"An Avengers is an Action movie with rating of 4.5 and from
//the category Hollywood"

//es5

var output =
  "An " +
  mname +
  " is an " +
  type +
  " movie with rating of " +
  rating +
  " and from the category " +
  category +
  ". ";
console.log(output);

//es6
// `` -> backtick
// ${} => interpolation
var output = `An ${mname} is an ${type} movie with rating of ${rating} and from the category ${category}`;
console.log(output);

alert(`No slots available ${mname}`);
