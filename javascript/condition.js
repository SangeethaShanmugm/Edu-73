// = // assigment
// == // compare the data
// === //compare data and datatype

var a = 10; // assignment
var b = "10";
var c = 20;

a == b; // 10 == "10"
true;
a === b; // 10 === "10"
false;

var a = "hii";
var b = "Hii";
console.log(a == b); //false

console.log(a === b); //false

a == c;
//10 == 20
// false

var a = true;
var b = 1;
// true - 1
// false - 0
a == b;
//1 == 1
// true
a === b;
// false

var a = 10;
var b = 20;

a > b;
//10 > 20
// false

b > a; // 20 > 10 => true
a >= b; // 10 >= 20 // false

// ! => negation
a != b;
// 10 != 20 // true

// true = true
// false = false
// !true = false
// !false = true

a !== b;
//true

var a = true;
!a;
false;

var b = false;
!b;
true;

var a = 1;
var b = 0;
!a // false
!b //true

var a = -1
!a //false


var a  = "Hii"
a // true
!a
false


// => truthy =>  Any Number except 0, +ve -ve, true, any String
// => falsy => 0, false, null, undefined 

//null - typeof - object
//undefined - typeof - undefined
null ==  undefined // true
null === undefined // false