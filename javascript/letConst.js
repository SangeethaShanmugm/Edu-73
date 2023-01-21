// var => we can redeclare and reassign ✅
// let => we cannot redeclare but can reassign ✅
// const => we cannot redeclare nor reassign

var a = 10;

var a; //declaration
a = 10; //assigment

//var
var a = 10;
a; // 10

//reassign
var a = 11;
a = 12;
console.log(a);

//redeclare
var a = 11;
var a = 12;
console.log(a);

//let

//reassign
let b = 11;
b = 12;
console.log(b);

//redeclare
let b = 11;
let b = 12;
console.log(b); //Uncaught SyntaxError: Identifier 'b' has already been declared

//const

//reassign
const c = 11;
c = 12;
console.log(c); // Uncaught TypeError: Assignment to constant variable.

//redeclare
const c = 11;
const c = 12;
console.log(c); //Uncaught SyntaxError: Identifier 'c' has already been declared
