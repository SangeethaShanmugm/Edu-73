// Array is a collection of homogenious as well as heterogenious data types

// homogenious - same data types
// ------------
// let a  = ["Hii", "Hello", "test", "copy", "code",`Hey`] => Array of Strings
// let b = [2,4,6,34,57,89,12,5,9,2] => Array of numbers
// let c = [true, false, false, true, false] => Array of Boolean

// heterogenious - diff data types
// --------------
// let d  = ["Hii", 59, true, 45, false, "Hey", "text"]

var a = [3, 5, 7, 8, 2];
console.log(typeof a);
//object

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
city[0];
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]
//    0        1        2            3          4
("Delhi");
city[1];
("Mumbai");

// push - add in the end of array
// pop -> remove last value in an array
// unshift -> add as first value in Array
// shift -> remove first value in Array

// city.push("Boston");

//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston"]
console.log(city.push("Boston")); //6
console.log(city);
(6)[("Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston")];

city.push("Venice")[ //7
  ("Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", "Venice")
];
console.log(city);

// pop -> remove last value in an array

var a = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];

console.log(a.pop()); //Venice
// ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston"]
console.log(a.pop()); //Boston
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]
console.log(a);

// unshift -> add as first value in Array

var a = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];

a.unshift("Dubai"); //8
// ["Dubai","Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", 'Venice']
//     0      1         2         3          4            5          6          7

//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", 'Venice']
a.shift(); //"Dubai"

// slice - 🍪 - 🍕
var a = [
  "Dubai",
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//          0      1         2         3          4            5          6          7
a.slice(1)[
  ("Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", "Venice")
];

a.slice(2)[("Mumbai", "Helsinki", "London", "Amsterdam", "Boston", "Venice")];

// slice(startIndex, endIndex);
a.slice(2, 5);
// ["Mumbai", "Helsinki", "London",](3)

console.log(a.slice(0, -2));
// (6) ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']

splice(startIndex, DeleteCount, values);

var a = [
  "Dubai",
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//          0      1         2         3          4            5          6          7

//remove 2 values from index 2
a.splice(2, 2);
//["Mumbai", "Helsinki"]
// ["Dubai","Delhi", "London", "Amsterdam", "Boston", "Venice"]

//remove 0 values but add 2 values on index 3
a.splice(3, 0, "Pune", "Paris");
//["Dubai","Delhi", "London", 'Pune', 'Paris',"Amsterdam", "Boston", "Venice"]

//remove 1 value on index 1 and add 2 values
a.splice(1, 1, "Innsburg", "France");
//["Dubai","Innsburg", 'France', "London", 'Pune', 'Paris',"Amsterdam", "Boston", "Venice"]

// indexOf

var a = [
  "Dubai",
  "Innsburg",
  "France",
  "London",
  "Pune",
  "Paris",
  "Amsterdam",
  "Boston",
  "Venice",
];
//          0        1           2          3        4        5       6          7            8
a.indexOf("London");
3;
a.indexOf("Dubai");
0;
a.indexOf("Amsterdam");
6;
a.indexOf("Venice");
8;

var c = ["a", "b", "c", 1];

var b = [2, "d", "e", "f"];

c + b;
// [("a", "b", "c", 1)] + [2, "d", "e", "f"]
//[("a", "b", "c", "12", "d", "e", "f")];
//a, b, c, 12, d, e, f;

c.concat(b)(8)[("a", "b", "c", "1", "2", "d", "e", "f")];

b.concat(c)(8)[(2, "d", "e", "f", "a", "b", "c", 1)];

var name = "Mickenzie";

var b = [1, 2, 3];

Array.isArray(name);
false;
Array.isArray(b);
true;

var city = ["Dubai","Innsburg", 'France', "London", 'Pune']
var city = ["Dubai","Innsburg", 'France', ['Red',[1,2,3],'Yellow', 'Orange'],"Amsterdam", "Boston"]
//            0        1            2                    3                        4            5         
city[0]
"Dubai"
city[2]
'France'
city[3]
(4)['Red',[1,2,3],'Yellow', 'Orange']
//   0        1       2          3
city[3][0]
//'Red'
city[3][2]
'Yellow'
city[3][1]
  [1,  2,   3]
// 0   1    2 
city[3][1][0]
1
city[3][1][1]
2
city[3][1][2]
3